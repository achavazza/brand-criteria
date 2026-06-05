import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CriterionId } from '../types'
import { criteriaData } from '../data/criteria'

export const useUIStore = defineStore('ui', () => {
  const activeCriterion = ref<CriterionId>('graphic-quality')
  const isGridVisible = ref(true)
  const activeCriterionIndex = ref(0)

  const totalSteps = computed(() => criteriaData.length + 1)

  function setActiveCriterion(id: CriterionId) {
    activeCriterion.value = id
    activeCriterionIndex.value = id === 'report'
      ? criteriaData.length
      : criteriaData.findIndex(c => c.id === id)
  }

  function goToNextCriterion() {
    const next = activeCriterionIndex.value + 1
    if (next < totalSteps.value) {
      if (next === criteriaData.length) {
        activeCriterion.value = 'report' as CriterionId
        activeCriterionIndex.value = next
      } else {
        setActiveCriterion(criteriaData[next].id)
      }
    }
  }

  function goToPrevCriterion() {
    const prev = activeCriterionIndex.value - 1
    if (prev >= 0) {
      setActiveCriterion(criteriaData[prev].id)
    }
  }

  function toggleGrid() {
    isGridVisible.value = !isGridVisible.value
  }

  const isReport = computed(() => activeCriterion.value === 'report')

  return {
    activeCriterion,
    isGridVisible,
    activeCriterionIndex,
    totalSteps,
    isReport,
    setActiveCriterion,
    goToNextCriterion,
    goToPrevCriterion,
    toggleGrid
  }
})
