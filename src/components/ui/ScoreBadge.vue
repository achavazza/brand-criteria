<script setup lang="ts">
defineProps<{
  score: number
  max?: number
  variant?: 'default' | 'accent'
}>()
</script>

<template>
  <div class="score-badge" :class="[variant || 'default']">
    <span class="score-value mono">{{ score.toFixed(1) }}</span>
    <span class="score-divider mono">/</span>
    <span class="score-max mono">{{ max ?? 10 }}</span>
  </div>
</template>

<style scoped>
.score-badge {
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
}

.mono {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.5px;
}

.score-value {
  color: var(--text-primary);
  font-weight: 500;
}

.score-divider {
  color: var(--text-tertiary);
  font-size: 11px;
}

.score-max {
  color: var(--text-tertiary);
  font-size: 11px;
}

.score-badge.accent .score-value {
  color: var(--accent);
}
</style>
