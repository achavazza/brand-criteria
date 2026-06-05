import html2canvas from 'html2canvas'

export async function captureElement(el: HTMLElement): Promise<string> {
  const canvas = await html2canvas(el, {
    useCORS: true,
    backgroundColor: null,
    scale: 2,
    logging: false,
  })
  return canvas.toDataURL('image/png')
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export async function renderLogoAtSize(
  logoUrl: string,
  canvasWidth: number,
  canvasHeight: number,
  logoMaxWidthPct: number = 0.8,
  logoMaxHeightPct: number = 0.8,
): Promise<string> {
  const img = await loadImage(logoUrl)
  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  const ctx = canvas.getContext('2d')!
  const maxW = canvasWidth * logoMaxWidthPct
  const maxH = canvasHeight * logoMaxHeightPct
  const scale = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1)
  const w = img.naturalWidth * scale
  const h = img.naturalHeight * scale
  ctx.drawImage(img, (canvasWidth - w) / 2, (canvasHeight - h) / 2, w, h)
  return canvas.toDataURL('image/png')
}
