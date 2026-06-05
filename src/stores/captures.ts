import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Capture {
  id: string
  moduleId: string
  label: string
  dataUrl: string
  key: string
}

let nextId = 1

export const useCapturesStore = defineStore('captures', () => {
  const items = ref<Capture[]>([])
  const capturedFlags = ref<Record<string, boolean>>({})

  function add(moduleId: string, label: string, dataUrl: string, key: string) {
    if (capturedFlags.value[key]) return
    items.value.push({ id: `cap_${nextId++}`, moduleId, label, dataUrl, key })
    capturedFlags.value[key] = true
  }

  function remove(key: string) {
    items.value = items.value.filter(c => c.key !== key)
    delete capturedFlags.value[key]
  }

  function isCaptured(key: string): boolean {
    return !!capturedFlags.value[key]
  }

  function clear() {
    items.value = []
    nextId = 1
    capturedFlags.value = {}
  }

  function byModule(moduleId: string) {
    return items.value.filter(c => c.moduleId === moduleId)
  }

  return { items, add, remove, isCaptured, clear, byModule }
})
