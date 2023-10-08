<script lang="ts" setup>
const coba = ref<any>()
const elList = ref<any[]>([])
const id = ref(1)
</script>

<template>
  <n-h1>Hello world!</n-h1>

  <div class="flex gap-4">
    <router-link to="/nsfw">
      <n-button>🔞 NSFW</n-button>
    </router-link>
    <router-link to="/scraping">
      <n-button>🌐 SCRAPE</n-button>
    </router-link>
  </div>

  <p-test class="text-blue-500" />

  <n-h1>Ini H1</n-h1>
  <n-h2>Ini H2</n-h2>
  <n-h3>Ini H3</n-h3>
  <n-h4>Ini H4</n-h4>
  <n-h5>Ini H5</n-h5>
  <n-h6>Ini H6</n-h6>
  <n-p>Ini icon</n-p>
  <pre>ini kode</pre>

  <n-text code> Code Code Code Code Code </n-text>

  <n-h1>Ini icon</n-h1>

  <n-icon :size="123">
    <i-ri-user-line />
  </n-icon>

  <n-p>ini text biasa</n-p>
</template>
