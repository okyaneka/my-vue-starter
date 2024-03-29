<script lang="ts" setup>
// const images = computed(() => {
//   const images = []
//   for (let index = 0; index < 100; index++) {
//     images.push(
//       `http://static4.hentai-cosplays.com/upload/20210411/220/225260/p=700/${index + 1}.jpg`
//     )
//   }
//   return images
// })
const urls = ref<{ base: string; type: string }[]>([
  // 'http://static12.hentai-cosplays.com/upload/20230706/336/343464'
  // 'http://static12.hentai-cosplays.com/upload/20230712/337/344134',
  // 'http://static12.hentai-cosplays.com/upload/20230714/337/344232',
  // 'http://static12.hentai-cosplays.com/upload/20230714/337/344233',
  // 'http://static12.hentai-cosplays.com/upload/20230714/337/344234',
  // 'http://static12.hentai-cosplays.com/upload/20230714/337/344235',
  // 'http://static12.hentai-cosplays.com/upload/20230714/337/344239',
  // 'http://static12.hentai-cosplays.com/upload/20230714/337/344240',
  // 'http://static12.hentai-cosplays.com/upload/20230718/338/345531',
  // 'http://static12.hentai-cosplays.com/upload/20230809/342/349769',
  // 'http://static12.hentai-cosplays.com/upload/20230809/342/349770',
  // 'http://static12.hentai-cosplays.com/upload/20230818/344/351728',
  // 'http://static12.hentai-cosplays.com/upload/20230911/350/357781',
  // 'http://static12.hentai-cosplays.com/upload/20230911/350/357782',
  // 'http://static12.hentai-cosplays.com/upload/20230911/350/357783',
  // 'http://static12.hentai-cosplays.com/upload/20230911/350/357784',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/357957',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/357958',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/357959',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/357995',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/357997',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/357998',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/357999',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/358000',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/358011',
  // 'http://static12.hentai-cosplays.com/upload/20230912/350/358012',
  // 'http://static13.hentai-cosplays.com/upload/20231002/354/361504',
  // 'http://static13.hentai-cosplays.com/upload/20231005/354/361774',
  // 'http://static13.hentai-cosplays.com/upload/20231006/354/361917',
  // 'http://static13.hentai-cosplays.com/upload/20231006/354/361922',
  // 'http://static4.hentai-cosplays.com/upload/20210411/220/225260',
  // 'http://static5.hentai-cosplays.com/upload/20211209/252/257175',
  // 'https://static12.hentai-cosplays.com/upload/20230912/350/357997',
  // 'https://static13.hentai-cosplays.com/upload/20231003/354/361588',
])
const images = ref<{ thumbnail: string; hd: string }[]>([])
const baseUrl = ref<string>()
const amount = ref<number>()
const file_type = ref<string>()

const parsed = computed(() => {
  if (!baseUrl.value) return
  const split = new URL(baseUrl.value)
  return
})

function generateImage() {
  if (!baseUrl.value) return
  images.value = []
  const base = baseUrl.value.split('/').slice(0, 7).join('/')
  const url = urls.value.find((v) => v.base.includes(base))
  if (!url) {
    urls.value.push({ base, type: baseUrl.value.split('.').pop() || 'jpg' })
    localStorage.setItem('url', JSON.stringify(urls.value))
  }
  if (!file_type.value) file_type.value = url?.type || baseUrl.value.split('.').pop() || 'jpg'
  for (let index = 0; index < (amount.value ?? 100); index++) {
    images.value.push({
      hd: `${base}/${index + 1}.${file_type.value}`,
      thumbnail: `${base}/p=160x200/${index + 1}.${file_type.value}`
    })
  }
}

function salin(text: string) {
  // var dummy = document.createElement('textarea')
  // document.body.appendChild(dummy)
  // dummy.value = text
  // dummy.select()
  // document.execCommand('copy')
  // document.body.removeChild(dummy)
  // alert('Teks telah disalin ke clipboard: ' + text)
  baseUrl.value = text
  amount.value = 100
  generateImage()
}
function download(link: string) {
  const a = document.createElement('a')
  a.href = link
  a.download = `image.${file_type.value}`
  a.click()
}
function clearUrls() {
  urls.value = []
  localStorage.removeItem('url')
}
function deleteUrl(index: number) {
  // const p = urls.value.splice(index, 1)
  // alert(p)
  urls.value.splice(index, 1)
  localStorage.setItem('url', JSON.stringify(urls.value))
}
function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function goToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
function clearField() {
  baseUrl.value = ''
  amount.value = undefined
}
onMounted(() => {
  const url = localStorage.getItem('url')
  if (url) {
    const p = JSON.parse(url)
    if (typeof p[0] == 'string') urls.value = p.map((v: any) => ({ base: v, type: 'jpg' }))
    else urls.value = p
  }
})
</script>

<template>
  <div class="fixed right-8 bottom-8 z-10">
    <div class="flex flex-col gap-2">
      <n-button circle type="primary" class="" @click="backToTop">
        <template #icon>
          <n-icon><i-ri-arrow-up-line /></n-icon>
        </template>
      </n-button>
      <n-button circle type="primary" class="" @click="goToBottom">
        <template #icon>
          <n-icon><i-ri-arrow-down-line /></n-icon>
        </template>
      </n-button>
    </div>
  </div>

  <div v-if="urls.length" class="p-4 border rounded border-solid border-gray-400 mb-4">
    <div class="mb-4">
      <n-button size="small" type="error" @click="clearUrls">CLEAR</n-button>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div
        class="p-2 h-56 border rounded border-solid border-gray-400 relative"
        :class="{ 'bg-blue-200': url.base == baseUrl }"
        v-for="(url, index) in urls"
      >
        <n-button
          class="absolute top-2 right-2"
          size="small"
          circle
          type="error"
          @click="deleteUrl(index)"
        >
          <template #icon>
            <i-ri-close-line />
          </template>
        </n-button>
        <img
          class="w-full h-full object-cover object-top"
          :src="`${url.base}/p=160x200/1.${url.type}`"
          @click="salin(url.base)"
        />
      </div>
    </div>
  </div>
  <div class="p-4 border rounded mb-4 border-solid border-gray-400">
    <form @submit.prevent="generateImage">
      <div class="flex flex-wrap gap-4">
        <input type="text" v-model="baseUrl" placeholder="url" />
        <input type="number" v-model="amount" placeholder="jumlah" />
        <n-radio-group v-model:value="file_type" name="radiogroup">
          <n-space>
            <n-radio value="jpg" label="jpg" />
            <n-radio value="jpeg" label="jpeg" />
            <n-radio value="png" label="png" />
          </n-space>
        </n-radio-group>
        <n-button round attr-type="submit" type="primary">Generate</n-button>
        <n-button round type="error" @click="clearField">Clear</n-button>
      </div>
    </form>
    <div>{{ parsed }}</div>
  </div>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="(item, key) in images"
      :key="item.hd"
      class="h-64 p-2 border rounded border-solid border-gray-400 relative"
    >
      <div class="absolute">{{ key + 1 }}</div>
      <!-- <div
        class="absolute left-0 top-0 flex justify-center items-center h-5 w-5 rounded-full text-xs"
      >
        {{ key + 1 }}
      </div> -->
      <a :href="item.hd" target="_blank">
        <img class="m-0 w-full h-full object-contain" :src="item.thumbnail" />
      </a>
      <!-- <div @click="download(src)">download</div> -->
    </div>
  </div>
</template>
