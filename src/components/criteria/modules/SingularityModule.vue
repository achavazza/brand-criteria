<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../../stores/logo'
import { useCapturesStore } from '../../../stores/captures'
import { captureElement } from '../../../utils/capture'

const logo = useLogoStore()
const captures = useCapturesStore()
const { t } = useI18n()

import logo01 from '../../../assets/logos/logos_01.png'
import logo02 from '../../../assets/logos/logos_02.png'
import logo03 from '../../../assets/logos/logos_03.png'
import logo04 from '../../../assets/logos/logos_04.png'
import logo05 from '../../../assets/logos/logos_05.png'
import logo06 from '../../../assets/logos/logos_06.png'
import logo07 from '../../../assets/logos/logos_07.png'
import logo08 from '../../../assets/logos/logos_08.png'
import logo09 from '../../../assets/logos/logos_09.png'
import logo10 from '../../../assets/logos/logos_10.png'
import logo11 from '../../../assets/logos/logos_11.png'
import logo12 from '../../../assets/logos/logos_12.png'
import logo13 from '../../../assets/logos/logos_13.png'
import logo14 from '../../../assets/logos/logos_14.png'
import logo15 from '../../../assets/logos/logos_15.png'
import logo16 from '../../../assets/logos/logos_16.png'

const competitorLogos = [
  logo01, logo02, logo03, logo04,
  logo05, logo06, logo07, logo08,
  logo09, logo10, logo11, logo12,
  logo13, logo14, logo15, logo16,
]

const totalCells = 16
const logoIndex = ref(6)

const midCells = [4, 5, 6, 7, 8, 9, 10, 11]
const gridRef = ref<HTMLDivElement | null>(null)

async function onGridClick() {
  if (!gridRef.value) return
  const key = 'sg:grid'
  if (captures.isCaptured(key)) { captures.remove(key); return }
  try {
    captures.add('singularity', t('modules.differentiation'), await captureElement(gridRef.value), key)
  } catch { /* ignore */ }
}

onMounted(() => {
  logoIndex.value = midCells[Math.floor(Math.random() * midCells.length)]
})
</script>

<template>
  <div class="singularity-module">
    <div class="module-header">
      <span class="module-label mono">{{ t('modules.differentiation') }}</span>
    </div>

    <div ref="gridRef" class="grid" :class="{ captured: captures.isCaptured('sg:grid') }" @click="onGridClick">
      <div v-for="i in totalCells" :key="i" class="cell">
        <div v-if="i - 1 === logoIndex && logo.dataUrl" class="cell-content">
          <img :src="logo.dataUrl!" alt="" class="cell-img" />
        </div>
        <div v-else-if="competitorLogos[i - 1]" class="cell-content">
          <img :src="competitorLogos[i - 1]" alt="" class="cell-img" />
        </div>
        <!-- 
        <div v-else class="cell-content empty"></div>
        -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.singularity-module {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  justify-items: center;
  justify-content: center;
}
.module-header { flex-shrink: 0; padding-bottom: 8px; }
.module-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); }

.grid {
  flex: 0 1 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /*gap: 6px;*/
  align-content: center;
  border: 1px solid var(--border-color);
}

.cell {
  aspect-ratio: 1;
  display: flex; align-items: center; justify-content: center;
  min-height: 0;
}

.cell-content {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
}

.cell-img {
  max-width: 80%; max-height: 80%;
  object-fit: contain;
}

.empty {
  border-radius: 50%;
  background: var(--bg-tertiary);
  opacity: 0.3;
}
.captured { border: 2px solid var(--text-primary) !important; }
</style>
