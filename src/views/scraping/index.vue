<script lang="ts" setup>
const url = ref('')
const contents = ref<any[]>([])
const id = ref(1)

const filterId = ref('')
const filterTag = ref('')

const filtered = computed(() => {
  return contents.value.filter((item) => {
    let result = true
    if (filterId.value) result &&= item._id.includes(filterId.value) != -1
    if (filterTag.value) result &&= item.tag == filterTag.value
    return result
  })
})

const tags = computed(() => {
  return contents.value.reduce((car, cur) => {
    if (!car.includes(cur.tag)) car.push(cur.tag)
    car.sort()
    return car
  }, [])
})

function resetFilter() {
  filterId.value = ''
  filterTag.value = ''
}

async function fetchUrl() {
  contents.value = []
  const res = await fetch(url.value)
  const text = await res.text()
  const start = text.indexOf('<body')
  const end = text.indexOf('</body>')
  const html = text
    .slice(start, end + 7)
    .split('body')
    .join('main')

  const section = document.createElement('section')
  section.innerHTML = html

  id.value = 1
  htmlToJSON(section)
}

function htmlToJSON(element: HTMLElement, parent_id?: string) {
  const _id = (id.value++).toString(36).padStart(4, '0')
  const result: any = {
    _id,
    parent_id: parent_id,
    tag: element.tagName.toLowerCase(),
    text: element.innerText
  }

  const attributes = element.attributes
  if (attributes.length > 0) {
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i]
      result[attr.name] = attr.value
    }
  }

  contents.value.push(JSON.parse(JSON.stringify(result)))
  const children: any[] = []

  element.childNodes.forEach((item) => {
    const child = item as HTMLElement
    if (child.nodeType === 1) {
      // Element Node
      children.push(htmlToJSON(child, result.id))
    } else if (child.nodeType === 3 && (child.textContent ?? '').trim() !== '') {
      // Text Node
      children.push({ tag: 'text', text: (child.textContent ?? '').trim() })
    }
  })
}

function setUrl(value: string) {
  console.log(value)
  url.value = value
  fetchUrl()
}
</script>

<template>
  <div class="mb-4 p-4 rounded border border-solid border-gray-400">
    <form @submit.prevent="fetchUrl" class="flex flex-wrap gap-4">
      <input type="text" v-model="url" placeholder="Input URL" />
      <n-button type="primary" attr-type="submit">Submit</n-button>
      <n-button type="error" @click="resetFilter">Reset</n-button>
    </form>
  </div>

  <div class="mb-4 p-4 rounded border border-solid border-gray-400 overflow-auto">
    <div class="mb-4 flex flex-wrap gap-4">
      <n-button type="info" v-for="item in tags" :key="item" @click="filterTag = item">{{
        item
      }}</n-button>
    </div>
    {{ url }}
    <n-table>
      <n-thead>
        <n-tr>
          <n-th>#</n-th>
          <n-th class="w-32">TAG</n-th>
          <n-th>ID</n-th>
          <n-th>CLASS</n-th>
          <n-th>SRC</n-th>
          <n-th>HREF</n-th>
          <!-- <n-th>CHILDREN</n-th> -->
        </n-tr>
      </n-thead>
      <n-tbody>
        <n-tr v-for="item in filtered" :key="item.id">
          <n-td>{{ item._id }}</n-td>
          <n-td>
            <div class="flex flex-col">
              <span>{{ item.tag }}</span>
              <n-button
                v-if="item.tag == 'a'"
                block
                @click="setUrl(item.href)"
                class="whitespace-pre-wrap"
                >{{ item.text }}</n-button
              >
              <img v-else-if="item.tag == 'img'" :src="item.src" />
            </div>
          </n-td>
          <n-td>{{ item.id }}</n-td>
          <n-td>{{ item.class }}</n-td>
          <n-td>
            <a :href="item.src" target="_blank">
              {{ item.src }}
            </a>
          </n-td>
          <n-td>{{ item.href }}</n-td>
        </n-tr>
      </n-tbody>
    </n-table>
  </div>
</template>
