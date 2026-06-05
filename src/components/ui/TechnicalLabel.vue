<script setup lang="ts">
defineProps<{
  label: string
  value?: string
}>()
</script>

<template>
  <div class="technical-label">
    <span class="label-text mono">{{ label }}</span>
    <span v-if="value" class="label-value mono">{{ value }}</span>
  </div>
</template>

<style scoped>
.technical-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.label-text {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.label-value {
  font-size: 11px;
  color: var(--text-secondary);
}
</style>
