import { createI18n } from 'vue-i18n'
import { messages } from './messages'

function detectBrowserLocale(): string {
  try {
    const lang = navigator.language || (navigator as any).userLanguage || 'en'
    const code = lang.split('-')[0]
    if (code in messages) return code
  } catch {}
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectBrowserLocale(),
  fallbackLocale: 'en',
  messages: messages as any,
})
