import { writable } from 'svelte/store'

export const participants = writable([])

export function placeParticipants(totalStations, iteration) {
  participants.update((current) => {
    current.map((participant, index) => {
      const station = (iteration + index) % totalStations
      return { ...participant, station }
    })
  })
}
