<script setup lang="ts">
import { ref } from 'vue'
import LeftPanel from './LeftPanel.vue'
import RightPanel from './RightPanel.vue'
import SplashView from './SplashView.vue'

const started = ref(false)
</script>

<template>
  <SplashView v-if="!started" @start="started = true" />
  <div v-show="started" class="app-layout">
    <LeftPanel @splash="started = false" />
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
