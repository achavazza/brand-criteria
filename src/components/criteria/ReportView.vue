<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScoresStore } from '../../stores/scores'
import { useLogoStore } from '../../stores/logo'
import { criteriaData } from '../../data/criteria'
import type { CriterionId } from '../../types'

const scores = useScoresStore()
const logo = useLogoStore()
const { t } = useI18n()

const techIds: CriterionId[] = ['graphic-quality', 'legibility', 'pregnance', 'versatility', 'reproducibility', 'scalability']
const identityIds: CriterionId[] = ['singularity', 'longevity', 'semantic-relevance', 'identity-strategy']

function printReport() { window.print() }
function c(id: CriterionId) {
  const base = criteriaData.find(c => c.id === id)!
  return {
    ...base,
    title: t(`criteria.${id}.title`),
  }
}
</script>

<template>
  <div class="report-view">
    <div class="report-header">
      <h1 class="report-title">{{ t('ui.finalReport') }}</h1>
      <p class="report-subtitle mono">{{ t('ui.performanceIndex') }}</p>
      <img v-if="logo.dataUrl" :src="logo.dataUrl" class="report-logo" />
    </div>

    <div class="summary-cards">
      <div class="summary-card">
        <span class="sum-label mono">{{ t('ui.technical') }}</span>
        <span class="sum-value">{{ scores.technicalScore.toFixed(1) }}<span class="sum-max">/10</span></span>
      </div>
      <div class="summary-card">
        <span class="sum-label mono">{{ t('ui.identity') }}</span>
        <span class="sum-value">{{ scores.identityScore.toFixed(1) }}<span class="sum-max">/10</span></span>
      </div>
      <div class="summary-card accent">
        <span class="sum-label mono">{{ t('ui.total') }}</span>
        <span class="sum-value">{{ scores.totalScore.toFixed(1) }}<span class="sum-max">/10</span></span>
      </div>
    </div>

    <div class="detail-section">
      <h3 class="section-title mono">{{ t('ui.technicalCriteria') }}</h3>
      <div v-for="id in techIds" :key="id" class="crit-row">
        <div class="crit-info">
          <span class="crit-num mono">{{ String(c(id).number).padStart(2, '0') }}</span>
          <span class="crit-title">{{ c(id).title }}</span>
        </div>
        <div class="crit-score">
          <span class="crit-val mono">{{ scores.getScore(id) }}</span>
          <span class="crit-max mono">/5</span>
        </div>
        <div v-if="scores.criteria[id]?.notes" class="crit-notes mono">{{ scores.criteria[id].notes }}</div>
      </div>
    </div>

    <div class="detail-section">
      <h3 class="section-title mono">{{ t('ui.identityCriteria') }}</h3>
      <div v-for="id in identityIds" :key="id" class="crit-row">
        <div class="crit-info">
          <span class="crit-num mono">{{ String(c(id).number).padStart(2, '0') }}</span>
          <span class="crit-title">{{ c(id).title }}</span>
        </div>
        <div class="crit-score">
          <span class="crit-val mono">{{ scores.getScore(id) }}</span>
          <span class="crit-max mono">/5</span>
        </div>
        <div v-if="scores.criteria[id]?.notes" class="crit-notes mono">{{ scores.criteria[id].notes }}</div>
      </div>
    </div>

    <div class="print-section">
      <button class="print-btn mono" @click="printReport">{{ t('ui.printPdf') }}</button>
    </div>
  </div>
</template>

<style scoped>
.report-view {
  padding: 32px 24px;
}

.report-header {
  text-align: center;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 24px;
}

.report-title {
  font-size: 32px;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.5px;
  margin-bottom: 4px;
}

.report-subtitle {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.report-logo {
  width: 100%;
  max-width: 240px;
  max-height: 120px;
  object-fit: contain;
  margin-top: 16px;
}

.summary-cards {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
}

.summary-card {
  flex: 1;
  border: 1px solid var(--border-color);
  padding: 16px;
  text-align: center;
}

.summary-card.accent {
  border-color: var(--text-tertiary);
}

.sum-label {
  display: block;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 8px;
}

.sum-value {
  font-size: 36px;
  font-weight: 300;
  color: var(--text-primary);
  letter-spacing: -1px;
}

.sum-max {
  font-size: 14px;
  color: var(--text-tertiary);
  margin-left: 2px;
}

.detail-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 12px;
}

.crit-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.crit-info { flex: 1; display: flex; gap: 8px; align-items: baseline; }
.crit-num { font-size: 9px; color: var(--text-tertiary); min-width: 18px; }
.crit-title { font-size: 13px; color: var(--text-primary); }
.crit-score { flex-shrink: 0; }
.crit-val { font-size: 16px; color: var(--text-primary); }
.crit-max { font-size: 10px; color: var(--text-tertiary); }
.crit-notes { width: 100%; font-size: 10px; color: var(--text-tertiary); padding-left: 26px; }

.print-section {
  text-align: center;
  padding: 24px 0;
}

.print-btn {
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 10px 32px;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

.print-btn:hover {
  color: var(--text-primary);
  border-color: var(--text-tertiary);
}
</style>
