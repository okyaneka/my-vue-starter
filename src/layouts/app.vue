<script setup lang="ts">
const screen = ref({
  width: window.innerWidth,
  height: window.innerHeight
})

const screen169 = computed(() => {
  if (screen.value.width < screen.value.height) return screen.value
  const height = screen.value.height
  const width = (height * 9) / 16
  return {
    width,
    height
  }
})

function setScreen() {
  screen.value.width = window.innerWidth
  screen.value.height = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', setScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', setScreen)
})
</script>

<template>
  <n-layout class="bg-gray-100 flex justify-center">
    <n-layout-content
      class="bg-white p-4 mb-16"
      :style="{ width: screen169.width + 'px', minHeight: screen169.height + 'px' }"
    >
      <router-view />

      <n-card
        class="fixed bottom-0 bg-green-50 h-16"
        content-style="padding: 0"
        :style="{
          width: screen169.width + 'px',
          left: (screen.width - screen169.width) / 2 + 'px'
        }"
      >
        <n-space class="h-full px-4" align="center">
          <router-link to="/">
            <n-button circle :bordered="false">
              <template #icon>
                <n-icon size="24"><i-ri-arrow-left-line /></n-icon>
              </template>
            </n-button>
          </router-link>
        </n-space>
      </n-card>
    </n-layout-content>
  </n-layout>
</template>
