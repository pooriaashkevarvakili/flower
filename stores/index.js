import {
    defineStore
} from "pinia"
export const useCounter = defineStore('counter', {
    state: () => {
        return {
            counter: 0
        }
    },
    getters: {},
    actions: {
        getCounter() {
            this.counter++
        }
    }
})