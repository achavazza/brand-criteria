<script setup lang="ts">
import { computed } from 'vue'
import { useUIStore } from '../../stores/ui'
import { useScoresStore } from '../../stores/scores'
import { criteriaData } from '../../data/criteria'

const ui = useUIStore()
const scores = useScoresStore()

const categories = computed(() => {
  const tech = criteriaData.filter(c => c.category === 'technical')
  const identity = criteriaData.filter(c => c.category === 'identity')
  return { technical: tech, identity }
})
</script>

<template>
  <div class="criterion-nav">
    <div class="nav-header">
      <span class="nav-title mono">Index</span>
    </div>

    <div class="nav-section">
      <div class="nav-section-label mono">Technical</div>
      <button
        v-for="c in categories.technical"
        :key="c.id"
        class="nav-item"
        :class="{ active: ui.activeCriterion === c.id }"
        @click="ui.setActiveCriterion(c.id)"
      >
        <span class="nav-number mono">{{ String(c.number).padStart(2, '0') }}</span>
        <span class="nav-name">{{ c.title }}</span>
        <span class="nav-score mono">{{ scores.getScore(c.id) || '–' }}</span>
      </button>
    </div>

    <div class="nav-section">
      <div class="nav-section-label mono">Identity</div>
      <button
        v-for="c in categories.identity"
        :key="c.id"
        class="nav-item"
        :class="{ active: ui.activeCriterion === c.id }"
        @click="ui.setActiveCriterion(c.id)"
      >
        <span class="nav-number mono">{{ String(c.number).padStart(2, '0') }}</span>
        <span class="nav-name">{{ c.title }}</span>
        <span class="nav-score mono">{{ scores.getScore(c.id) || '–' }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.criterion-nav {
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-secondary);
}

.nav-header {
  padding: 12px 24px;
  border-bottom: 1px solid var(--border-color);
}

.nav-title {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.nav-section {
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.nav-section:last-child {
  border-bottom: none;
}

.nav-section-label {
  padding: 4px 24px;
  font-size: 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  opacity: 0.5;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 6px 24px;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  text-align: left;
  font-family: var(--font-sans);
  font-size: 13px;
}

.nav-item:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--bg-elevated);
  color: var(--text-primary);
}

.nav-number {
  font-size: 10px;
  color: var(--text-tertiary);
  min-width: 20px;
}

.nav-name {
  flex: 1;
}

.nav-score {
  font-size: 11px;
  color: var(--text-tertiary);
  min-width: 16px;
  text-align: right;
}
</style>
