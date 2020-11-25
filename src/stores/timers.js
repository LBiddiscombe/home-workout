import { writable } from 'svelte/store'

export const timerIndex = writable(0)

let currentTimer = writable(0, () => {
  let interval = setInterval(() => {
    tick.update((value) => value + 1)
  }, 1000)

  return () => {
    clearInterval(interval)
  }
})

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
    },
  }
}

export const timers = createTimers()
