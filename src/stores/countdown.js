import { get, writable } from 'svelte/store'

export const paused = writable(false)

export const countdown = writable(null, () => {
  let interval = setInterval(() => {
    const isPaused = get(paused)
    if (!isPaused) {
      countdown.update((value) => {
        if (value <= 1) clearInterval(interval)
        return value - 1
      })
    }
  }, 1000)

  return () => {
    clearInterval(interval)
  }
})
