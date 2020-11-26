import { writable } from 'svelte/store'

export const timerIndex = writable(0)

function createTimers() {
  const { subscribe, set } = writable([])

  return {
    subscribe,
    init: (duration, rest, count) => {
      const timers = []
      timers.push(10) // get ready
      for (let index = 0; index < count; index++) {
        timers.push(duration)
        timers.push(rest)
      }
      set(timers)
      timerIndex.set(0)
    },
  }
}

export const timers = createTimers()
