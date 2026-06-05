<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'

const logo = useLogoStore()
const { t } = useI18n()
const activeView = ref<'sizes' | 'variants'>('sizes')
</script>

<template>
  <div class="legibility-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.sizeContrast') }}</span>
      <div class="view-tabs">
        <button class="tab-btn mono" :class="{ active: activeView === 'sizes' }" @click="activeView = 'sizes'">{{ t('modules.sizes') }}</button>
        <button class="tab-btn mono" :class="{ active: activeView === 'variants' }" @click="activeView = 'variants'">{{ t('modules.variants') }}</button>
      </div>
    </div>

    <div v-if="activeView === 'sizes'" class="size-grid">
      <div class="size-item">
        <span class="size-label mono">{{ t('modules.sizeLarge') }}</span>
        <div class="size-frame" :style="{ background: logo.bgColor || undefined }">
          <img :src="logo.dataUrl!" class="size-image" style="width:100%" />
        </div>
      </div>
      <div class="size-row">
        <div class="size-item">
          <span class="size-label mono">{{ t('modules.sizeMedium') }}</span>
          <div class="size-frame" :style="{ background: logo.bgColor || undefined }">
            <img :src="logo.dataUrl!" class="size-image" style="width:50%" />
          </div>
        </div>
        <div class="size-item">
          <span class="size-label mono">{{ t('modules.sizeSmall') }}</span>
          <div class="size-frame" :style="{ background: logo.bgColor || undefined }">
            <img :src="logo.dataUrl!" class="size-image" style="width:25%" />
          </div>
        </div>
      </div>
      <div class="size-item">
        <span class="size-label mono">{{ t('modules.sizeFavicon') }}</span>
        <div class="size-frame" style="padding:12px 16px;min-height:auto" :style="{ background: logo.bgColor || undefined }"><img :src="logo.dataUrl!" class="size-image" style="width:16px;height:16px" /></div>
      </div>
    </div>

    <div v-if="activeView === 'variants'" class="variants-list">
      <div class="variant-item full">
        <span class="variant-label mono">{{ t('modules.variantPositive') }}</span>
        <div class="variant-frame wide" :style="{ background: logo.bgColor || undefined }"><img :src="logo.dataUrl!" class="variant-image" /></div>
      </div>
      <div class="variant-item full">
        <span class="variant-label mono">{{ t('modules.variantNegative') }}</span>
        <div class="variant-frame wide" :style="{ background: logo.bgColor || undefined }"><img :src="logo.dataUrl!" class="variant-image" style="filter:invert(1)" /></div>
      </div>
      <div class="variant-item full">
        <span class="variant-label mono">{{ t('modules.variantMonochrome') }}</span>
        <div class="variant-frame wide" :style="{ background: logo.bgColor || undefined }"><img :src="logo.dataUrl!" class="variant-image" style="filter:grayscale(1)" /></div>
      </div>
    </div>

    <div class="module-footer mono">{{ t('modules.legibilityFooter') }}</div>
  </div>
</template>

<style scoped>
.legibility-module {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; gap: 16px;
}
.module-header {
  display: flex; justify-content: space-between; align-items: center; flex-shrink: 0;
}
.module-label {
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary);
}
.view-tabs { display: flex; gap: 2px; }
.tab-btn {
  background: none; border: 1px solid var(--border-light); color: var(--text-tertiary);
  padding: 5px 14px; font-size: 11px; letter-spacing: 1px; cursor: pointer;
}
.tab-btn.active { background: var(--bg-tertiary); color: var(--text-primary); border-color: var(--text-tertiary); }

.size-grid { display: flex; flex-direction: column; gap: 12px; width: 100%; }
.size-row { display: flex; gap: 12px; }
.size-row .size-item { flex: 1; }
.size-item { display: flex; flex-direction: column; gap: 6px; }
.size-label { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-tertiary); }
.size-frame { border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; padding: 16px; min-height: 50px; }
.size-image { object-fit: contain; display: block; }

.variants-list { flex: 1; display: flex; flex-direction: column; gap: 8px; width: 100%; }
.variant-item { display: flex; flex-direction: column; gap: 3px; }
.variant-item.full { flex: 1; min-height: 0; }
.variant-item.full .variant-frame { flex: 1; min-height: 0; }
.variant-label { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-tertiary); flex-shrink: 0; }
.variant-frame { border: 1px solid var(--border-color); padding: 16px; display: flex; align-items: center; justify-content: center; min-height: 70px; }
.variant-frame.wide { flex: 1; min-height: 0; }
.variant-image { max-width: 90%; max-height: 100%; object-fit: contain; display: block; }
.module-footer { text-align: center; font-size: 10px; color: var(--text-tertiary); letter-spacing: 1px; flex-shrink: 0; }
</style>
