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
        //console.log('init start', current)
        const exercises = pickExercises(current.focus, current.count)
        const newWorkout = { ...current, exercises, startDate: new Date() }
        workout.save(newWorkout)
        //console.log('init end', newWorkout)
        return newWorkout
      }),
    placeParticipants: (totalStations, iteration) =>
      update((current) => {
        //console.log('placeParticipants start', current)
        const participants = current.participants.map((participant, index) => {
          const station = (iteration + index) % totalStations
          return { ...participant, station }
        })
        const newWorkout = { ...current, participants }
        workout.save(newWorkout)
        //console.log('placeParticipants end', newWorkout)
        return newWorkout
      }),
    complete: () =>
      update((current) => {
        //console.log('completeStart', current)
        let history = []
        if (localStorage.getItem('history')) {
          history = JSON.parse(localStorage.getItem('history'))
        }
        history.push({ ...current, endDate: new Date() })
        localStorage.setItem('history', JSON.stringify(history))
        localStorage.removeItem('workout')
        //console.log('complete end', { ...initialValue })
        return { ...initialValue }
      }),
    repeatLast: () => {
      const history = JSON.parse(localStorage.getItem('history'))
      const lastWorkout = history[history.length - 1]
      lastWorkout.startDate = new Date()
      lastWorkout.endDate = null
      workout.set(lastWorkout)
      workout.save(lastWorkout)
      //console.log('repeatLast end', lastWorkout)
    },
    save: (newWorkout) => {
      //console.log('save', newWorkout)
      localStorage.setItem('workout', JSON.stringify(newWorkout))
    },
  }
}

export const workout = createWorkout()
