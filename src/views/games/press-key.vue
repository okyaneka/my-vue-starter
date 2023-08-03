<route lang="yaml">
meta:
  layout: webapp
</route>

<script lang="ts" setup>
const level = ref(0)
const isStart = ref(false)
const blocks = ref(9)

const isStop = computed(() => !isStart.value)
const cols = computed(() => Math.pow(blocks.value, 1 / 2))

function handleStart() {
  isStart.value = true
}
</script>

<template>
  <n-space class="min-h-screen" align="center" justify="center">
    <n-card v-if="isStop">
      <n-button type="primary" block @click="handleStart">Start</n-button>
    </n-card>

    <n-grid v-else :cols="cols" :x-gap="16" :y-gap="16">
      <n-gi v-for="item in blocks" :key="item">
        <n-card class="w-32 h-32 cursor-pointer"> </n-card>
      </n-gi>
    </n-grid>
  </n-space>
</template>
