<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUIStore } from '../../stores/ui'
import { useScoresStore } from '../../stores/scores'
import { criteriaData } from '../../data/criteria'
import type { CriterionId, Criterion } from '../../types'
import CriterionView from '../criteria/CriterionView.vue'
import ReportView from '../criteria/ReportView.vue'

const ui = useUIStore()
const scores = useScoresStore()
const { t } = useI18n()

function translateCriterion(c: Criterion): Criterion {
  const prefix = `criteria.${c.id}`
  return {
    ...c,
    title: t(`${prefix}.title`),
    definition: t(`${prefix}.definition`),
    explanation: t(`${prefix}.explanation`),
    evaluationNotes: c.evaluationNotes.map((_, i) => t(`${prefix}.notes.${i}`)),
    quote: c.quote ? {
      text: t(`${prefix}.quote`),
      source: c.quote.source,
    } : undefined,
  }
}

const currentCriterion = computed<Criterion | undefined>(() => {
  const c = criteriaData.find(c => c.id === ui.activeCriterion)
  return c ? translateCriterion(c) : undefined
})

const crit = computed(() => currentCriterion.value as Criterion)

const critOptions = computed(() => [
  ...criteriaData.map(c => ({ value: c.id, label: `${String(c.number).padStart(2, '0')} ${t(`criteria.${c.id}.title`)}` })),
  { value: 'report' as CriterionId, label: t('ui.reportOption') }
])

const hasPrev = computed(() => ui.activeCriterionIndex > 0)
const hasNext = computed(() => ui.activeCriterionIndex < ui.totalSteps - 1)
</script>

<template>
  <div class="right-panel">
    <div class="panel-header">
      <div class="select-wrapper">
        <select
          class="criteria-select mono"
          :value="ui.activeCriterion"
          @change="(e) => ui.setActiveCriterion((e.target as HTMLSelectElement).value as CriterionId)"
        >
          <option
            v-for="opt in critOptions"
            :key="opt.value"
            :value="opt.value"
          >{{ opt.label }}</option>
        </select>
      </div>
      <div class="nav-buttons">
        <button
          class="nav-btn mono"
          :disabled="!hasPrev"
          @click="ui.goToPrevCriterion()"
        >←</button>
        <button
          class="nav-btn mono"
          :disabled="!hasNext"
          @click="ui.goToNextCriterion()"
        >→</button>
      </div>
    </div>

    <div class="content-area" v-if="ui.isReport">
      <ReportView />
    </div>

    <div class="content-area" v-else-if="currentCriterion">
      <Transition name="criterion" mode="out-in">
        <CriterionView
          :key="crit.id"
          :criterion="crit"
          :score="scores.getScore(crit.id)"
          @update:score="(v: number) => scores.setScore(crit.id, v)"
          @update:notes="(v: string) => scores.setNotes(crit.id, v)"
        />
      </Transition>
    </div>

    <div class="content-area empty" v-else>
      <div class="empty-state">
        <span class="mono">{{ t('ui.selectCriterion') }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-panel {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 11px 24px;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-primary);
  flex-shrink: 0;
}

.select-wrapper {
  flex: 1;
  position: relative;
}

.criteria-select {
  width: 100%;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 8px 32px 8px 12px;
  font-size: 13px;
  appearance: none;
  cursor: pointer;
  border-radius: 0;
  font-family: var(--font-sans);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.criteria-select:focus {
  outline: none;
  border-color: var(--text-tertiary);
}

.select-wrapper::after {
  content: '▾';
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-tertiary);
  font-size: 10px;
  pointer-events: none;
}

.criteria-select option {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.nav-buttons {
  display: flex;
  gap: 2px;
  flex-shrink: 0;
}

.nav-btn {
  background: none;
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  padding: 6px 14px;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

.nav-btn:hover:not(:disabled) {
  color: var(--text-primary);
  border-color: var(--text-tertiary);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

.content-area.empty {
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-state .mono {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-tertiary);
  letter-spacing: 1px;
}

@media print {
  .panel-header {
    display: none !important;
  }
}
</style>

<style>
.criterion-enter-active,
.criterion-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.criterion-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.criterion-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>
