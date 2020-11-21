import { writable } from 'svelte/store'

const people = writable([])
const duration = writable(40)
const rest = writable(20)
const count = writable(10)
const focus = writable('Full')

export { people, duration, rest, count, focus }
