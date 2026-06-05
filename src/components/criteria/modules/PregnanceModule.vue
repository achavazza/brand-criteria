<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'

const logo = useLogoStore()
const { t } = useI18n()
</script>

<template>
  <div class="pregnance-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.memoryRetention') }}</span>
    </div>

    <div class="prompt mono">{{ t('pregnance.prompt') }}</div>

    <div class="logo-area" :style="{ background: logo.bgColor || undefined }">
      <img :src="logo.dataUrl!" alt="Logo" class="pregnance-logo" />
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

.module-header { flex-shrink: 0; }
.module-label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); }

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


</style>
