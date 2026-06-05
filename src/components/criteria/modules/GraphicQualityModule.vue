<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'
import { useCapturesStore } from '../../../stores/captures'
import { captureElement } from '../../../utils/capture'

const logo = useLogoStore()
const captures = useCapturesStore()
const { t } = useI18n()

const mouseX = ref(0)
const mouseY = ref(0)
const targetX = ref(0)
const targetY = ref(0)
const mouseInPanel = ref(false)
const magOffsetX = ref(0)
const magOffsetY = ref(0)
const bgSizeX = ref(800)
const bgSizeY = ref(800)
const magOffsetX200 = ref(0)
const magOffsetY200 = ref(0)
const bgSizeX200 = ref(200)
const bgSizeY200 = ref(200)

let rafId: number

const imgRef = ref<HTMLImageElement | null>(null)
const frameRef = ref<HTMLDivElement | null>(null)

async function onLogoClick() {
  if (!frameRef.value) return
  try {
    const dataUrl = await captureElement(frameRef.value)
    captures.add('graphic-quality', `Inspection #${captures.byModule('graphic-quality').length + 1} @ (${Math.round(targetX.value)}, ${Math.round(targetY.value)})`, dataUrl, `gq:${Date.now()}`)
  } catch { /* ignore */ }
}

function onMouseMove(e: MouseEvent) {
  targetX.value = e.clientX
  targetY.value = e.clientY
}

function onMouseEnter() {
  mouseInPanel.value = true
}

function onMouseLeave() {
  mouseInPanel.value = false
}

function computeRenderBounds(img: HTMLImageElement) {
  const r = img.getBoundingClientRect()
  const elemW = r.width
  const elemH = r.height
  const natW = img.naturalWidth || 1
  const natH = img.naturalHeight || 1
  const natRatio = natW / natH
  const elemRatio = elemW / elemH
  let renderW: number, renderH: number
  if (natRatio > elemRatio) {
    renderW = elemW
    renderH = elemW / natRatio
  } else {
    renderH = elemH
    renderW = elemH * natRatio
  }
  return {
    left: r.left + (elemW - renderW) / 2,
    top: r.top + (elemH - renderH) / 2,
    width: renderW,
    height: renderH,
    natW,
    natH
  }
}

function animateLoop() {
  mouseX.value = targetX.value
  mouseY.value = targetY.value

  if (mouseInPanel.value && imgRef.value) {
    const b = computeRenderBounds(imgRef.value)
    const dx = targetX.value - b.left
    const dy = targetY.value - b.top
    const natDx = dx * (b.natW / b.width)
    const natDy = dy * (b.natH / b.height)
    bgSizeX.value = b.natW * 8
    bgSizeY.value = b.natH * 8
    magOffsetX.value = 200 - natDx * 8
    magOffsetY.value = 140 - natDy * 8
    bgSizeX200.value = b.natW * 2
    bgSizeY200.value = b.natH * 2
    magOffsetX200.value = 60 - natDx * 2
    magOffsetY200.value = 60 - natDy * 2
  }

  rafId = requestAnimationFrame(animateLoop)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  rafId = requestAnimationFrame(animateLoop)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div
    class="graphic-quality-module"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.inspectionMode') }}</span>
      <span class="module-hint mono">Move cursor over the logo</span>
    </div>

    <div class="logo-area" :class="{ captured: captures.byModule('graphic-quality').length > 0 }" :style="{ background: logo.bgColor || undefined }" @click="onLogoClick">
      <img
        ref="imgRef"
        :src="logo.dataUrl!"
        alt="Inspect"
        class="inspect-logo"
      />
    </div>

   
    <div
      v-if="mouseInPanel"
      ref="frameRef"
      class="inspection-frame"
      :style="{
        left: mouseX - 60 + 'px',
        top: mouseY - 60 + 'px'
      }"
    >
      <div
        class="frame-magnified"
        :style="{
          backgroundImage: `url(${logo.dataUrl})`,
          backgroundSize: bgSizeX200 + 'px ' + bgSizeY200 + 'px',
          backgroundPosition: magOffsetX200 + 'px ' + magOffsetY200 + 'px',
          backgroundRepeat: 'no-repeat'
        }"
      ></div>
      <div class="frame-border"></div>
      <div class="crosshair-h"></div>
      <div class="crosshair-v"></div>
      <div class="frame-label mono">200%</div>
    </div>

    <div
      v-if="mouseInPanel"
      class="magnified-preview"
    >
      <div
        class="magnified-image"
        :style="{
          backgroundImage: `url(${logo.dataUrl})`,
          backgroundSize: bgSizeX + 'px ' + bgSizeY + 'px',
          backgroundPosition: magOffsetX + 'px ' + magOffsetY + 'px',
          backgroundRepeat: 'no-repeat'
        }"
      ></div>
      <div class="magnified-label mono">800% magnification</div>
    </div>
  </div>
</template>

<style scoped>
.graphic-quality-module {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.module-header {
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 16px;
}

.module-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.module-hint {
  font-size: 9px;
  color: var(--text-tertiary);
  letter-spacing: 0.5px;
}

.logo-area {
  cursor: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: relative;
  border: 1px solid var(--border-color);
}

.inspect-logo {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.module-footer {
  position: absolute;
  bottom: 0;
  font-size: 9px;
  color: var(--text-tertiary);
  letter-spacing: 1px;
}

.inspection-frame {
  position: fixed;
  width: 120px;
  height: 120px;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
}

.frame-magnified {
  position: absolute;
  inset: 0;
  image-rendering: pixelated;
}

.frame-border {
  position: absolute;
  inset: 0;
  border: 1px solid var(--text-primary);
  opacity: 0.5;
  z-index: 1;
}

.crosshair-h {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--text-primary);
  opacity: 0.3;
  z-index: 2;
}

.crosshair-v {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: var(--text-primary);
  opacity: 0.3;
  z-index: 2;
}

.frame-label {
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 9px;
  color: var(--text-tertiary);
  letter-spacing: 1px;
  z-index: 2;
}

.magnified-preview {
  position: fixed;
  right: 24px;
  bottom: 80px;
  width: 400px;
  height: 280px;
  z-index: 1000;
  border: 1px solid var(--border-color);
  background: var(--bg-primary);
  overflow: hidden;
}

.magnified-image {
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
}

.magnified-label {
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 9px;
  color: var(--text-tertiary);
  letter-spacing: 1px;
}
.captured { border: 2px solid var(--text-primary) !important; }
</style>
