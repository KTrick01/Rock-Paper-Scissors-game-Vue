import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore("counter", () => {
  const score = ref(0)
 
  return {
    score
  }
})
