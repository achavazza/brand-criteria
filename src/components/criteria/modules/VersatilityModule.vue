<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'
import { useCapturesStore } from '../../../stores/captures'
import { captureElement } from '../../../utils/capture'
import cup from '../../../assets/cup.png'
import can from '../../../assets/can.png'
import tote from '../../../assets/tote.png'
import phone from '../../../assets/phone.png'

const logo = useLogoStore()
const captures = useCapturesStore()
const { t } = useI18n()

async function captureMockup(e: MouseEvent, label: string, key: string) {
  if (captures.isCaptured(key)) { captures.remove(key); return }
  const el = (e.currentTarget as HTMLElement)?.querySelector('.mockup') as HTMLElement | null
  if (!el) return
  try {
    captures.add('versatility', label, await captureElement(el), key)
  } catch { /* ignore */ }
}
</script>

<template>
  <div class="versatility-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.contextualPreviews') }}</span>
    </div>

    <div class="previews-grid">
      <div class="preview-item" @click="captureMockup($event, 'Phone', 'ver:phone')">
        <span class="pv-label mono">Phone</span>
        <div class="mockup product-box phone-box" :class="{ captured: captures.isCaptured('ver:phone') }" :style="{ backgroundImage: `url(${phone})` }">
          <div class="product-overlay phone-overlay">
            <img :src="logo.dataUrl!" class="product-logo" />
          </div>
        </div>
      </div>
      <div class="preview-item" @click="captureMockup($event, 'Cup', 'ver:cup')">
        <span class="pv-label mono">Cup</span>
        <div class="mockup product-box" :class="{ captured: captures.isCaptured('ver:cup') }" :style="{ backgroundImage: `url(${cup})` }">
          <div class="product-overlay cup-overlay">
            <img :src="logo.dataUrl!" class="product-logo" />
          </div>
        </div>
      </div>
      <div class="preview-item" @click="captureMockup($event, 'Can', 'ver:can')">
        <span class="pv-label mono">Can</span>
        <div class="mockup product-box" :class="{ captured: captures.isCaptured('ver:can') }" :style="{ backgroundImage: `url(${can})` }">
          <div class="product-overlay can-overlay">
            <img :src="logo.dataUrl!" class="product-logo" />
          </div>
        </div>
      </div>
      <div class="preview-item" @click="captureMockup($event, 'Tote', 'ver:tote')">
        <span class="pv-label mono">Tote</span>
        <div class="mockup product-box" :class="{ captured: captures.isCaptured('ver:tote') }" :style="{ backgroundImage: `url(${tote})` }">
          <div class="product-overlay tote-overlay">
            <img :src="logo.dataUrl!" class="product-logo" />
          </div>
        </div>
      </div>
    </div>

    <div class="module-footer mono">Evaluate adaptability across formats</div>
  </div>
</template>

<style scoped>
.versatility-module {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; gap: 12px;
}
.module-header { flex-shrink: 0; }
.module-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); }

.previews-grid {
  flex: 1; display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-content: start;
}
.preview-item { display: flex; flex-direction: column; gap: 4px; }
.pv-label { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-tertiary); }

.mockup { border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; padding: 10px; }

.product-box {
  background-size: cover; background-position: center;
  padding: 0; aspect-ratio: 1;
  position: relative; overflow: hidden;
}

.product-overlay {
  position: absolute;
  inset: 25%;
  display: flex; align-items: center; justify-content: center;
}

.product-logo {
  max-width: 100%; max-height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
}

.phone-box { background-size: contain; background-repeat: no-repeat; background-position: center; }
.phone-overlay { inset: 20% 30% 20% 30%; }
.cup-overlay { inset: 20% 30% 20% 30%; }
.can-overlay { inset: 20% 28% 20% 28%; }
.tote-overlay { inset: 20% 30% 20% 30%; }
.module-footer { text-align: center; font-size: 10px; color: var(--text-tertiary); letter-spacing: 1px; flex-shrink: 0; }
.captured { border: 2px solid var(--text-primary) !important; }
</style>
