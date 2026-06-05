<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'
import { useCapturesStore } from '../../../stores/captures'
import { captureElement } from '../../../utils/capture'

const logo = useLogoStore()
const captures = useCapturesStore()
const { t, tm } = useI18n()

const rawIndicators = computed(() => tm('pregnance.indicators') as unknown as Array<{ title: string; question: string; left: string; right: string }>)
const indicators = computed(() => rawIndicators.value.map((item, i) => ({ id: i, ...item })))
const values = ref<Record<number, number>>({ 0: 3, 1: 3, 2: 3, 3: 3 })
const stepperRef = ref<HTMLDivElement | null>(null)

async function captureStepper() {
  if (!stepperRef.value) return
  const key = 'pr:capture'
  if (captures.isCaptured(key)) { captures.remove(key); return }
  try {
    const vals = Object.values(values.value).join('-')
    captures.add('pregnance', `Sliders [${vals}]`, await captureElement(stepperRef.value), key)
  } catch { /* ignore */ }
}
</script>

<template>
  <div class="pregnance-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.memoryRetention') }}</span>
      <button class="capture-btn mono" :class="{ captured: captures.isCaptured('pr:capture') }" @click="captureStepper">Capture</button>
    </div>

    <div class="prompt mono">{{ t('pregnance.prompt') }}</div>

    <div class="logo-area" :style="{ background: logo.bgColor || undefined }">
      <img :src="logo.dataUrl!" alt="Logo" class="pregnance-logo" />
    </div>

    <div ref="stepperRef" class="stepper-grid" :class="{ captured: captures.isCaptured('pr:capture') }">
      <div v-for="item in indicators" :key="item.id" class="stepper-card">
        <div class="step-title">{{ item.title }}</div>
        <div class="step-question mono">{{ item.question }}</div>
        <div class="slider-row">
          <span class="slider-label mono">{{ item.left }}</span>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            :value="values[item.id]"
            @input="values[item.id] = parseInt(($event.target as HTMLInputElement).value)"
            class="step-slider"
          />
          <span class="slider-label mono right">{{ item.right }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pregnance-module {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.module-header {
  display: flex; justify-content: space-between; align-items: center; flex-shrink: 0;
}
.module-label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); }
.capture-btn { background: none; border: 1px solid var(--border-light); color: var(--text-tertiary); padding: 4px 10px; font-size: 9px; letter-spacing: 1px; cursor: pointer; }
.capture-btn:hover { border-color: var(--text-tertiary); color: var(--text-secondary); }
.capture-btn.captured { border: 2px solid var(--text-primary) !important; color: var(--text-primary); }

.prompt {
  font-size: 11px;
  color: var(--text-secondary);
  letter-spacing: 0.5px;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  flex-shrink: 0;
}

.logo-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  min-height: 0;
}

.pregnance-logo {
  max-width: 60%;
  max-height: 70%;
  object-fit: contain;
}

.stepper-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.stepper-card {
  padding: 8px;
  display: flex; flex-direction: column; gap: 4px;
}
.step-title { font-size: 12px;text-transform:uppercase;letter-spacing: 0.05em; color: var(--text-tertiary);}
.step-question { font-size: 10px; color: var(--text-tertiary); line-height: 1.4; }
.slider-row { display: flex; align-items: center; gap: 6px; margin-top: 4px; }
.slider-label { font-size: 9px; color: var(--text-tertiary); min-width: 36px; }
.slider-label.right { text-align: right; }
.step-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  background: var(--border-light);
  border-radius: 1px;
  outline: none;
  cursor: pointer;
  margin: 0;
}
.step-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--text-primary);
  border: none;
  cursor: pointer;
}
.step-slider::-moz-range-thumb {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--text-primary);
  border: none;
  cursor: pointer;
}
.captured { border: 2px solid var(--text-primary) !important; }
</style>