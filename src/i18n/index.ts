import { createI18n } from 'vue-i18n'
import { messages } from './messages'

function getCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'))
  return m ? decodeURIComponent(m[1]) : null
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`
}

function detectLocale(): string {
  const saved = getCookie('locale')
  if (saved && saved in messages) return saved
  try {
    const lang = navigator.language || (navigator as any).userLanguage || 'en'
    const code = lang.split('-')[0]
    if (code in messages) return code
  } catch {}
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: messages as any,
})

export function switchLocale(locale: string) {
  if (!(locale in messages)) return
  i18n.global.locale.value = locale
  setCookie('locale', locale)
}
