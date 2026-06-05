<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { switchLocale } from '../../i18n'

const { t, locale } = useI18n()

const emit = defineEmits<{ start: [] }>()
</script>

<template>
  <div class="splash">
    <div class="lang-row">
      <button
        class="lang-btn mono"
        :class="{ active: locale === 'en' }"
        @click="switchLocale('en')"
      >EN</button>
      <span class="lang-divider">/</span>
      <button
        class="lang-btn mono"
        :class="{ active: locale === 'es' }"
        @click="switchLocale('es')"
      >ES</button>
    </div>
    <div class="splash-body">
      <p class="splash-line">{{ t('splash.line1') }}</p>
      <p class="splash-line2">{{ t('splash.line2') }}</p>
      <div class="splash-divider"></div>
      <p class="splash-line3a">{{ t('splash.line3a') }}</p>
      <p class="splash-line3b">{{ t('splash.line3b') }}</p>
      <button class="start-btn mono" @click="emit('start')">{{ t('splash.start') }}</button>
    </div>
  </div>
</template>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
}
.lang-row {
  position: absolute;
  top: 32px;
  right: 48px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.lang-btn {
  background: none;
  border: none;
  color: var(--text-tertiary);
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 4px 8px;
  transition: color 0.15s;
}
.lang-btn.active { color: var(--text-primary); }
.lang-btn:hover { color: var(--text-secondary); }
.lang-divider { color: var(--border-light); font-size: 13px; }

.splash-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.splash-line {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-primary);
  text-align: center;
  max-width: 540px;
  white-space: pre-line;
  margin: 0 0 16px;
}
.splash-line2 {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
  text-align: center;
  max-width: 460px;
  margin: 0 0 32px;
}
.splash-divider {
  width: 40px;
  height: 1px;
  background: var(--border-light);
  margin-bottom: 24px;
}
.splash-line3a, .splash-line3b {
  font-size: 14px;
  color: var(--text-primary);
  text-align: center;
  margin: 0;
  line-height: 1.5;
}
.splash-line3b {
  margin-bottom: 40px;
}
.start-btn {
  background: none;
  border: 1px solid var(--text-primary);
  color: var(--text-primary);
  padding: 12px 32px;
  font-size: 13px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.start-btn:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
}
</style>