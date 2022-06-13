import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    count: (state) => state.counter,
    unusedGetter: () => console.log('this should show up as not being covered in test coverage')
  },
  actions: {
    increment(payload) {
      if (payload) {
        this.counter = this.counter + payload;
      } else {
        this.counter++
      }
    }
  }
})
