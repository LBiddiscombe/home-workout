import { get, writable } from 'svelte/store'
import { activities } from '../data/activities'
import shuffle from '../utils/shuffle'
import NoSleep from '../utils/nosleep.js'

export const noSleep = new NoSleep()

export const iteration = writable(0)

const initialValue = {
  participants: [],
  duration: 40,
  rest: 20,
  count: 10,
  focus: 'Full',
  exercises: [],
}

function pickExercises(focus, count) {
  const filtered = focus === 'Full' ? activities : activities.filter((a) => a.groups.includes(focus.toLowerCase()))
  const shuffled = shuffle(filtered)
  return shuffled.slice(0, count)
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
        const exercises = pickExercises(current.focus, current.count)
        const newWorkout = { ...current, exercises }
        workout.save(newWorkout)
        return newWorkout
      }),
    placeParticipants: (totalStations, iteration) =>
      update((current) => {
        const participants = current.participants.map((participant, index) => {
          const station = (iteration + index) % totalStations
          return { ...participant, station }
        })
        const newWorkout = { ...current, participants }
        workout.save(newWorkout)
        return newWorkout
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
    save: (newWorkout) => {
      localStorage.setItem('workout', JSON.stringify(newWorkout))
    },
  }
}

export const workout = createWorkout()
