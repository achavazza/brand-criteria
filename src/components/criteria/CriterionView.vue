<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Criterion } from '../../types'
import PullQuote from '../ui/PullQuote.vue'
import ScoreControl from './ScoreControl.vue'
import { useUIStore } from '../../stores/ui'
import { useScoresStore } from '../../stores/scores'

const props = defineProps<{
  criterion: Criterion
  score: number
}>()

const emit = defineEmits<{
  'update:score': [value: number]
  'update:notes': [value: string]
}>()

const ui = useUIStore()
const scoresStore = useScoresStore()
const { t } = useI18n()
const notes = ref('')

watch(() => props.criterion.id, () => {
  notes.value = ''
})

watch(notes, (val) => {
  emit('update:notes', val)
})
</script>

<template>
  <div class="criterion-view">
    <div class="criterion-title-section">
      <h2 class="criterion-title">{{ criterion.title }}</h2>
      <p class="criterion-definition">{{ criterion.definition }}</p>
    </div>

    <ScoreControl
      :score="score"
      :criterion-id="criterion.id"
      @update:score="(v: number) => emit('update:score', v)"
    />

    <div class="criterion-body">
      <p class="criterion-explanation">{{ criterion.explanation }}</p>

      <PullQuote
        v-if="criterion.quote"
        :text="criterion.quote.text"
        :source="criterion.quote.source"
      />

      <div class="evaluation-notes">
        <div class="notes-label mono">{{ t('ui.evaluationNotes') }}</div>
        <ul class="notes-list">
          <li
            v-for="(note, i) in criterion.evaluationNotes"
            :key="i"
            class="note-item"
            :class="{ checked: scoresStore.criteria[criterion.id]?.checkedNotes[i] }"
            @click="scoresStore.toggleChecked(criterion.id, i)"
          >
            <span class="note-check" :class="{ checked: scoresStore.criteria[criterion.id]?.checkedNotes[i] }"><span v-if="scoresStore.criteria[criterion.id]?.checkedNotes[i]" class="check-inner">✓</span></span>
            <span class="note-text">{{ note }}</span>
          </li>
        </ul>
      </div>

      <div class="observations-section">
        <label class="observations-label mono">{{ t('ui.observations') }}</label>
        <textarea
          v-model="notes"
          class="observations-input mono"
          :placeholder="t('ui.observationsPlaceholder')"
          rows="4"
        ></textarea>
      </div>
    </div>

    <div class="criterion-footer">
      <button
        class="nav-btn mono"
        :disabled="ui.activeCriterionIndex <= 0"
        @click="ui.goToPrevCriterion()"
      >
        {{ t('ui.previous') }}
      </button>
      <button
        class="nav-btn mono"
        :disabled="ui.activeCriterionIndex >= 9"
        @click="ui.goToNextCriterion()"
      >
        {{ t('ui.next') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.criterion-view {
  padding: 0;
}

.criterion-title-section {
  padding: 32px 24px 24px;
  border-bottom: 1px solid var(--border-color);
}

.criterion-title {
  font-size: 28px;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 16px;
}

.criterion-definition {
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-secondary);
}

.criterion-body {
  padding: 24px;
}

.criterion-explanation {
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.evaluation-notes {
  margin: 32px 0;
}

.notes-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 16px;
}

.notes-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.note-item {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  cursor: pointer;
  padding: 4px 0;
  transition: opacity 0.15s;
}

.note-item.checked {
  opacity: 0.4;
}

.note-item.checked .note-text {
  text-decoration: line-through;
}

.note-check {
  width: 22px; height: 22px;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  flex-shrink: 0;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s, border-color 0.15s;
}

.note-check.checked {
  background: var(--text-primary);
  border-color: var(--text-primary);
}

.check-inner {
  font-size: 13px;
  color: var(--bg-primary);
  line-height: 1;
}

.note-text {
  font-size: 15px;
  line-height: 1.5;
  color: var(--text-secondary);
}

.observations-section {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.observations-label {
  display: block;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 12px;
}

.observations-input {
  width: 100%;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 0.2s;
}

.observations-input:focus {
  outline: none;
  border-color: var(--text-tertiary);
}

.observations-input::placeholder {
  color: var(--text-tertiary);
}

.criterion-footer {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-top: 1px solid var(--border-color);
}

.nav-btn {
  background: none;
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  padding: 8px 20px;
  font-size: 11px;
  letter-spacing: 1px;
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
</style>
