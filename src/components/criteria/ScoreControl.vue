<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { CriterionId } from '../../types'

const props = defineProps<{
  score: number
  criterionId: CriterionId
}>()

const emit = defineEmits<{
  'update:score': [value: number]
}>()
const { t } = useI18n()

function setScore(val: number) {
  emit('update:score', val === props.score ? 0 : val)
}
</script>

<template>
  <div class="score-control">
    <div class="score-label mono">{{ t('scoreControl.label') }}</div>
    <div class="score-buttons">
      <button
        v-for="n in 5"
        :key="n"
        class="score-btn"
        :class="{ active: score === n }"
        @click="setScore(n)"
      >
        {{ n }}
      </button>
    </div>
    <div class="score-indicator mono">
      <template v-if="score === 0">{{ t('scoreControl.notEvaluated') }}</template>
      <template v-else-if="score <= 2">{{ t('scoreControl.belowExpectation') }}</template>
      <template v-else-if="score <= 3">{{ t('scoreControl.acceptable') }}</template>
      <template v-else-if="score <= 4">{{ t('scoreControl.good') }}</template>
      <template v-else>{{ t('scoreControl.excellent') }}</template>
    </div>
  </div>
</template>

<style scoped>
.score-control {
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 16px;
}

.score-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  min-width: 40px;
}

.score-buttons {
  display: flex;
  gap: 4px;
}

.score-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border-light);
  background: transparent;
  color: var(--text-tertiary);
  font-family: var(--font-mono);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.score-btn:hover {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
}

.score-btn.active {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}

.score-indicator {
  font-size: 10px;
  color: var(--text-tertiary);
  letter-spacing: 0.5px;
  margin-left: auto;
}
</style>
