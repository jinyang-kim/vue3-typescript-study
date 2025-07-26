import {defineStore} from 'pinia';

interface State {
  counter: number;
}

export const useCounterStore = defineStore('counter', {
  state: (): State => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state): number => state.counter * 2
  },
  actions: {
    incrementCount(): void {
      this.counter++;
    }
  }
});