<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'

const logo = useLogoStore()
const { t } = useI18n()

const scales = [300, 200, 100, 64, 48, 32, 24, 16]

const hoveredIndex = ref<number | null>(null)
const breakpointIndex = ref<number | null>(null)

function setBreakpoint(index: number) {
  breakpointIndex.value = breakpointIndex.value === index ? null : index
}
</script>

<template>
  <div class="scalability-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.scaleSpectrum') }}</span>
    </div>

    <div class="scale-list">
      <button
        v-for="(s, i) in scales"
        :key="s"
        class="scale-item"
        :class="{
          hovered: hoveredIndex === i,
          ok: breakpointIndex !== null && i <= breakpointIndex,
          fail: breakpointIndex !== null && i > breakpointIndex,
          active: breakpointIndex === i
        }"
        @mouseenter="hoveredIndex = i"
        @mouseleave="hoveredIndex = null"
        @click="setBreakpoint(i)"
      >
        <span class="indicator mono">
          <span v-if="breakpointIndex !== null && i <= breakpointIndex" class="check">✓</span>
          <span v-else-if="breakpointIndex !== null && i > breakpointIndex" class="cross">✗</span>
          <span v-else-if="hoveredIndex === i">▸</span>
        </span>
        <div class="scale-frame" :style="{ background: logo.bgColor || undefined }">
          <img :src="logo.dataUrl!" alt="" class="scale-image" :style="{ width: s + 'px' }" />
        </div>
        <span class="scale-value mono">{{ s }}px</span>
      </button>
    </div>

    <div class="module-footer mono">Click to mark where recognition begins to fail</div>
  </div>
</template>

<style scoped>
.scalability-module {
  width: 100%;
  display: flex; flex-direction: column; gap: 12px;
}
.module-header { flex-shrink: 0; }
.module-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); }

.scale-list {
  display: flex; flex-direction: column; gap: 6px;
}
.scale-item {
  display: flex; align-items: center; gap: 12px;
  padding: 6px 12px; border: 1px solid var(--border-color);
  background: none; color: inherit; width: 100%; cursor: pointer;
  text-align: left; font-family: inherit; position: relative;
  transition: border-color 0.15s, background 0.15s;
}
.scale-item.hovered { border-color: var(--text-tertiary); }
.scale-item.ok { border-color: #2ecc71; background: rgba(46, 204, 113, 0.05); }
.scale-item.fail { border-color: #e74c3c; background: rgba(231, 76, 60, 0.05); }
.scale-item.active { border-width: 2px; }

.indicator { position: absolute; left: -16px; top: 50%; transform: translateY(-50%); font-size: 16px; }
.check { color: #2ecc71; }
.cross { color: #e74c3c; }

.scale-frame { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 40px; }
.scale-image { object-fit: contain; height: auto; max-width: none; }
.scale-value { font-size: 11px; color: var(--text-tertiary); min-width: 36px; text-align: right; margin-left: auto; }
.module-footer { text-align: center; font-size: 10px; color: var(--text-tertiary); letter-spacing: 1px; flex-shrink: 0; }
</style>
