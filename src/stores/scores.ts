import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CriterionId, CriterionState } from '../types'
import { criteriaData } from '../data/criteria'

const CRITERION_IDS: CriterionId[] = criteriaData.map(c => c.id)

function initChecked(id: CriterionId): boolean[] {
  const c = criteriaData.find(c => c.id === id)
  return c ? c.evaluationNotes.map(() => false) : []
}

export const useScoresStore = defineStore('scores', () => {
  const criteria = ref<Record<CriterionId, CriterionState>>(
    Object.fromEntries(
      CRITERION_IDS.map(id => [id, { score: 0, notes: '', checkedNotes: initChecked(id) }])
    ) as Record<CriterionId, CriterionState>
  )

  const technicalScore = computed(() => {
    const techIds: CriterionId[] = ['graphic-quality', 'legibility', 'pregnance', 'versatility', 'reproducibility', 'scalability']
    const scores = techIds.map(id => criteria.value[id].score)
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length
    return Math.round(avg * 10) / 10
  })

  const identityScore = computed(() => {
    const identityIds: CriterionId[] = ['singularity', 'longevity', 'semantic-relevance', 'identity-strategy']
    const scores = identityIds.map(id => criteria.value[id].score)
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length
    return Math.round(avg * 10) / 10
  })

  const totalScore = computed(() => {
    const allIds = CRITERION_IDS
    const scores = allIds.map(id => criteria.value[id].score)
    const sum = scores.reduce((a, b) => a + b, 0)
    const max = allIds.length * 5
    const avg = (sum / max) * 10
    return Math.round(avg * 10) / 10
  })

  function setScore(id: CriterionId, score: number) {
    if (score >= 0 && score <= 5) {
      criteria.value[id].score = score
    }
  }

  function setNotes(id: CriterionId, notes: string) {
    criteria.value[id].notes = notes
  }

  function getScore(id: CriterionId): number {
    return criteria.value[id]?.score ?? 0
  }

  function toggleChecked(id: CriterionId, index: number) {
    const arr = criteria.value[id].checkedNotes
    if (arr && index >= 0 && index < arr.length) {
      arr[index] = !arr[index]
    }
  }

  function resetScores() {
    for (const id of CRITERION_IDS) {
      criteria.value[id] = { score: 0, notes: '', checkedNotes: initChecked(id) }
    }
  }

  return {
    criteria,
    technicalScore,
    identityScore,
    totalScore,
    setScore,
    setNotes,
    getScore,
    toggleChecked,
    resetScores
  }
})
