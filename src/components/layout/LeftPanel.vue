<script setup lang="ts">
import LogoUploader from '../logo/LogoUploader.vue'
import { useLogoStore } from '../../stores/logo'
import { useScoresStore } from '../../stores/scores'
import { useUIStore } from '../../stores/ui'
import ScoreBadge from '../ui/ScoreBadge.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'


import GraphicQualityModule from '../criteria/modules/GraphicQualityModule.vue'
import LegibilityModule from '../criteria/modules/LegibilityModule.vue'
import PregnanceModule from '../criteria/modules/PregnanceModule.vue'
import SingularityModule from '../criteria/modules/SingularityModule.vue'
import VersatilityModule from '../criteria/modules/VersatilityModule.vue'
import ReproducibilityModule from '../criteria/modules/ReproducibilityModule.vue'
import ScalabilityModule from '../criteria/modules/ScalabilityModule.vue'
import LongevityModule from '../criteria/modules/LongevityModule.vue'
import SemanticRelevanceModule from '../criteria/modules/SemanticRelevanceModule.vue'
import IdentityStrategyModule from '../criteria/modules/IdentityStrategyModule.vue'
import ReportModule from '../criteria/modules/ReportModule.vue'

const logo = useLogoStore()
const scores = useScoresStore()
const ui = useUIStore()
const { t } = useI18n()

const emit = defineEmits<{ splash: [] }>()

const moduleMap: Record<string, any> = {
  'graphic-quality': GraphicQualityModule,
  'legibility': LegibilityModule,
  'pregnance': PregnanceModule,
  'singularity': SingularityModule,
  'versatility': VersatilityModule,
  'reproducibility': ReproducibilityModule,
  'scalability': ScalabilityModule,
  'longevity': LongevityModule,
  'semantic-relevance': SemanticRelevanceModule,
  'identity-strategy': IdentityStrategyModule,
  'report': ReportModule,
}

const currentModule = computed(() => {
  if (!logo.dataUrl) return null
  return moduleMap[ui.activeCriterion] || null
})
</script>

<template>
  <div class="left-panel">
    <div class="panel-header">
      <div class="panel-label mono" @click="emit('splash')">{{ t('ui.brandCriteria') }}</div>
      <div class="panel-header-right">
      </div>
    </div>

    <div
      class="logo-section"
      :class="{
        'upload-section': !logo.dataUrl && !currentModule,
        'empty-section': logo.dataUrl && !currentModule
      }"
    >
      <Transition name="panel" mode="out-in">
        <component v-if="currentModule" :key="ui.activeCriterion" :is="currentModule" />
        <LogoUploader v-else-if="!logo.dataUrl" key="upload" />
        <div v-else key="empty" class="centered">
          <span class="mono">{{ t('ui.selectCriterionBegin') }}</span>
        </div>
      </Transition>
    </div>

    <div class="panel-footer">
      <div class="score-summary">
        <div class="score-item">
          <span class="score-label mono">{{ t('ui.technical') }}</span>
          <ScoreBadge :score="scores.technicalScore" :max="10" />
        </div>
        <div class="score-item">
          <span class="score-label mono">{{ t('ui.identity') }}</span>
          <ScoreBadge :score="scores.identityScore" :max="10" />
        </div>
        <div class="score-item total">
          <span class="score-label mono">{{ t('ui.total') }}</span>
          <ScoreBadge :score="scores.totalScore" :max="10" variant="accent" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-panel {
  width: 50%;
  height: 100vh;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  position: relative;
}

.left-panel.inspecting {
  cursor: none;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.panel-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  cursor: pointer;
  user-select: none;
}
.panel-label:hover { color: var(--text-secondary); }

.panel-id {
  font-size: 11px;
  color: var(--text-secondary);
}
.panel-header-right { display: flex; align-items: center; gap: 12px; }

.logo-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: relative;
  min-height: 0;
  overflow-y: auto;
}

.logo-section.upload-section,
.logo-section.empty-section {
  overflow: visible;
  justify-content: center;
}

.empty-section .mono {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 1px;
}

.panel-footer {
  border-top: 1px solid var(--border-color);
  padding: 16px 24px;
  flex-shrink: 0;
}

.score-summary {
  display: flex;
  gap: 24px;
  justify-content: flex-end;
}

.score-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.score-item.total {
  padding-left: 24px;
  border-left: 1px solid var(--border-color);
}

.score-label {
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-tertiary);
}
</style>

<style>
.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.panel-enter-from {
  opacity: 0;
  transform: translateX(-12px);
}
.panel-leave-to {
  opacity: 0;
  transform: translateX(12px);
}
</style>
