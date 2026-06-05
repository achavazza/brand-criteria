<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'

const logo = useLogoStore()
const { t, tm } = useI18n()

const rawIndicators = computed(() => tm('longevity.indicators') as unknown as Array<{ title: string; question: string; left: string; right: string }>)
const indicators = computed(() => rawIndicators.value.map((item, i) => ({ id: i, ...item })))

const values = ref<Record<number, number>>({ 0: 3, 1: 3, 2: 3, 3: 3 })
</script>

<template>
  <div class="longevity-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.trendDependency') }}</span>
    </div>

    <div class="logo-area" :style="{ background: logo.bgColor || undefined }">
      <img :src="logo.dataUrl!" alt="" class="large-logo" />
    </div>

    <div class="stepper-grid">
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
.longevity-module {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; gap: 12px;
}
.module-header { flex-shrink: 0; }
.module-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); }

.logo-area {
  flex: 1;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border-color);
  padding: 20px;
  min-height: 0;
}
.large-logo { max-width: 90%; max-height: 90%; object-fit: contain; }

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
</style>
