import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export default defineStore('rootStore', () => {
  const count = ref(0)
  const original_heigth = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment(offset: number) {
    count.value = offset * 5
  }

  return { count, doubleCount, increment, original_heigth }
})
