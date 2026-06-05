<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'

const logo = useLogoStore()
const { t } = useI18n()
</script>

<template>
  <div class="semantic-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.formMeaning') }}</span>
    </div>

    <div class="logo-area">
      <img :src="logo.dataUrl!" alt="" class="large-logo" />
    </div>


  </div>
</template>

<style scoped>
.semantic-module {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; gap: 12px;
}
.module-header { flex-shrink: 0; }
.module-label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); }

.logo-area {
  flex: 1;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border-color);
  padding: 20px;
  min-height: 0;
}
.large-logo { max-width: 75%; max-height: 85%; object-fit: contain; }


</style>
