<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'
import { useCapturesStore } from '../../../stores/captures'
import { captureElement } from '../../../utils/capture'
import wood from '../../../assets/wood.jpg'
import paper from '../../../assets/paper.jpg'
import cloth from '../../../assets/cloth.jpg'

const logo = useLogoStore()
const captures = useCapturesStore()
const { t, tm } = useI18n()

type SimId = '1color' | 'photocopy' | 'newsprint' | 'embroidery' | 'engraving'

const activeSim = ref<SimId>('1color')

const simLabels = computed(() => tm('reproducibility.simLabels') as unknown as string[])
const simIds: SimId[] = ['1color', 'photocopy', 'newsprint', 'embroidery', 'engraving']
const sims = computed(() => simIds.map((id, i) => ({ id, label: simLabels.value[i] })))
const simDescs = computed(() => tm('reproducibility.simDescriptions') as unknown as string[])

const simConfig = computed(() => {
  const idx = simIds.indexOf(activeSim.value)
  const map: Record<SimId, { bg: string | null; filterClass: string }> = {
    '1color': { bg: logo.bgColor, filterClass: '' },
    'photocopy': { bg: paper, filterClass: 'filter-photocopy' },
    'newsprint': { bg: paper, filterClass: 'filter-newsprint' },
    'embroidery': { bg: cloth, filterClass: '' },
    'engraving': { bg: wood, filterClass: 'filter-photocopy' },
  }
  return { ...map[activeSim.value], desc: simDescs.value[idx] }
})

const simDisplayRef = ref<HTMLDivElement | null>(null)

async function captureSim(id: SimId) {
  if (!simDisplayRef.value) return
  const key = `rp:${id}`
  if (captures.isCaptured(key)) { captures.remove(key); return }
  try {
    const label = simLabels.value[simIds.indexOf(id)]
    captures.add('reproducibility', label, await captureElement(simDisplayRef.value), key)
  } catch { /* ignore */ }
}
</script>

<template>
  <div class="reproducibility-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.productionSimulation') }}</span>
    </div>

    <div class="sim-tabs">
      <button v-for="s in sims" :key="s.id" class="sim-btn mono"
        :class="{ active: activeSim === s.id, captured: captures.isCaptured('rp:' + s.id) }"
        @click="activeSim = s.id; captureSim(s.id)"
      >{{ s.label }}</button>
    </div>

    <div
      ref="simDisplayRef"
      class="sim-display"
      :class="{ captured: captures.isCaptured('rp:' + activeSim) }"
      :style="activeSim === '1color' && simConfig.bg ? { background: simConfig.bg } : simConfig.bg ? { backgroundImage: `url(${simConfig.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}"
    >
      <img
        v-if="simConfig.bg"
        :src="logo.dataUrl!"
        class="sim-image"
        :class="[simConfig.filterClass, { blended: activeSim !== '1color' }]"
      />
      <img
        v-else
        :src="logo.dataUrl!"
        class="sim-image"
      />
    </div>

    <div class="sim-desc mono">{{ simConfig.desc }}</div>
  </div>
</template>

<style scoped>
.reproducibility-module {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; gap: 12px;
}
.module-header { flex-shrink: 0; }
.module-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); }
.sim-tabs { display: flex; gap: 2px; flex-wrap: wrap; flex-shrink: 0; }
.sim-btn {
  background: none; border: 1px solid var(--border-light); color: var(--text-tertiary);
  padding: 4px 10px; font-size: 10px; text-transform: uppercase; cursor: pointer; letter-spacing: 0.05em;
  font-family: var(--font-sans);
}
.sim-btn.active { background: var(--bg-elevated); color: var(--text-primary); border-color: var(--text-tertiary); }
.sim-btn.captured { border: 2px solid var(--text-primary); }
.sim-display {
  flex: 1; display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border-color); min-height: 0;
  position: relative;
  overflow: hidden;
}
.sim-image { max-width: 60%; max-height: 60%; object-fit: contain; }
.sim-image.blended {
  mix-blend-mode: multiply;
  max-width: 70%; max-height: 70%;
}
.filter-photocopy { filter: contrast(200%) brightness(150%) grayscale(100%); }
.filter-newsprint { filter: contrast(150%) saturate(20%) blur(0.5px); }
.filter-engraving { filter: invert(1) contrast(300%) brightness(80%) grayscale(100%); }
.sim-desc { text-align: center; font-size: 10px; color: var(--text-tertiary); letter-spacing: 1px; flex-shrink: 0; }
.captured { border: 2px solid var(--text-primary) !important; }
</style>
