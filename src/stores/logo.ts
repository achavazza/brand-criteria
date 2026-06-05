import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLogoStore = defineStore('logo', () => {
  const dataUrl = ref<string | null>(null)
  const fileName = ref<string | null>(null)

  function setLogo(file: File) {
    const reader = new FileReader()
    reader.onload = (e) => {
      dataUrl.value = e.target?.result as string
      fileName.value = file.name
    }
    reader.readAsDataURL(file)
  }

  function clearLogo() {
    dataUrl.value = null
    fileName.value = null
  }

  return { dataUrl, fileName, setLogo, clearLogo }
})
