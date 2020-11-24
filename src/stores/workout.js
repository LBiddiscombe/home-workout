import { writable } from 'svelte/store'
import { activities } from '../data/activities'

const initialValue = {
  participants: [],
  duration: 40,
  rest: 20,
  count: 10,
  focus: 'Full',
  exercises: [],
  iteration: 0,
}

function pickExercises(focus, count) {
  const filtered = focus === 'Full' ? activities : activities.filter((a) => a.groups.includes(focus.toLowerCase()))
  const shuffled = shuffle(filtered)
  return shuffled.slice(0, count)
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

function createWorkout() {
  const { subscribe, set, update } = writable({ ...initialValue })

  if (localStorage.getItem('workout')) {
    set(JSON.parse(localStorage.getItem('workout')))
  }

  return {
    set,
    subscribe,
    init: () =>
      update((current) => {
        if (localStorage.getItem('workout')) {
          return JSON.parse(localStorage.getItem('workout'))
        }
        const exercises = pickExercises(current.focus, current.count)
        // assign stations
        const participants = current.participants.map((participant, index) => {
          const station = (current.iteration + index) % current.count
          return { ...participant, station }
        })
        const newWorkout = { ...current, exercises, participants }
        localStorage.setItem('workout', JSON.stringify(newWorkout))
        return newWorkout
      }),
    increment: () =>
      update((current) => {
        current.iteration += 1
        const participants = current.participants.map((participant, index) => {
          const station = (current.iteration + index) % current.count
          return { ...participant, station }
        })
        return { ...current, participants }
      }),
    complete: () =>
      update((current) => {
        let history = []
        if (localStorage.getItem('history')) {
          history = JSON.parse(localStorage.getItem('history'))
        }
        history.push({ date: new Date(), ...current })
        localStorage.setItem('history', JSON.stringify(history))
        localStorage.removeItem('workout')
        return { ...initialValue }
      }),
  }
}

export const workout = createWorkout()
