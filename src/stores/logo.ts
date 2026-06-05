import { defineStore } from 'pinia'
import { ref } from 'vue'

function rgbaDist(a: Uint8ClampedArray, b: Uint8ClampedArray): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]) + Math.abs(a[3] - b[3])
}

function sampleBgColor(url: string): Promise<string | null> {
  return new Promise((resolve) => {
    try {
      const img = new Image()
      img.onload = () => {
        try {
          const cw = Math.min(img.naturalWidth, 100)
          const ch = Math.min(img.naturalHeight, 100)
          const canvas = document.createElement('canvas')
          canvas.width = cw
          canvas.height = ch
          const ctx = canvas.getContext('2d')
          if (!ctx) return resolve(null)
          ctx.drawImage(img, 0, 0, cw, ch)
          const corners = [
            [0, 0], [cw - 1, 0], [0, ch - 1], [cw - 1, ch - 1],
            [Math.floor(cw / 2), 0],
            [Math.floor(cw / 2), ch - 1],
            [0, Math.floor(ch / 2)],
            [cw - 1, Math.floor(ch / 2)],
          ]
          const swatches = corners.map(([x, y]) => ctx!.getImageData(x, y, 1, 1).data)
          const opaque = swatches.filter(s => s[3] >= 128)
          if (opaque.length < 3) return resolve(null)
          // group similar colors (tolerance=30 per channel)
          const groups: { color: string; members: number }[] = []
          for (const s of opaque) {
            const key = `rgb(${s[0]},${s[1]},${s[2]})`
            let found = groups.find(g => {
              const m = g.color.match(/rgb\((\d+),(\d+),(\d+)\)/)
              if (!m) return false
              const ref = new Uint8ClampedArray([+m[1], +m[2], +m[3], 255])
              return rgbaDist(s, ref) < 30 * 3
            })
            if (found) {
              found.members++
            } else {
              groups.push({ color: key, members: 1 })
            }
          }
          // pick the group with the most members
          groups.sort((a, b) => b.members - a.members)
          if (groups.length > 0 && groups[0].members >= 2) {
            resolve(groups[0].color)
          } else {
            resolve(null)
          }
        } catch {
          resolve(null)
        }
      }
      img.onerror = () => resolve(null)
      img.src = url
    } catch {
      resolve(null)
    }
  })
}

export const useLogoStore = defineStore('logo', () => {
  const dataUrl = ref<string | null>(null)
  const fileName = ref<string | null>(null)
  const bgColor = ref<string | null>(null)

  function setLogo(file: File) {
    const reader = new FileReader()
    reader.onload = async (e) => {
      const url = e.target?.result as string
      dataUrl.value = url
      fileName.value = file.name
      bgColor.value = await sampleBgColor(url)
    }
    reader.readAsDataURL(file)
  }

  function clearLogo() {
    dataUrl.value = null
    fileName.value = null
    bgColor.value = null
  }

  return { dataUrl, fileName, bgColor, setLogo, clearLogo }
})
