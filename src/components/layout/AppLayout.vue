<script setup lang="ts">
import LeftPanel from './LeftPanel.vue'
import RightPanel from './RightPanel.vue'

</script>

<template>
  <div class="app-layout">
    <LeftPanel />
    <RightPanel />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>
