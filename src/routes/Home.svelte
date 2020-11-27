<script>
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import SecondaryLink from '../components/SecondaryLink.svelte'
  import { workout } from '../stores/workout'

  let history

  onMount(() => {
    history = JSON.parse(localStorage.getItem('history'))
  })

  function loadLastWorkout() {
    const lastWorkout = history[history.length - 1]
    workout.set(lastWorkout)
    workout.save(lastWorkout)
    push('#/workout')
  }
</script>

<h1 class="mb-2 text-3xl font-bold text-center">Home Workout</h1>

<div class="flex-grow">
  <SecondaryLink href="#/exercises">View Exercises</SecondaryLink>
  <SecondaryLink href="#/history">View History</SecondaryLink>
</div>

<button
  on:click={loadLastWorkout}
  class="grid w-full h-16 mx-auto my-6 text-2xl font-bold bg-green-400 rounded-lg shadow hover:nounderl place-content-center hover:no-underline visited:text-whit">
  Repeat Last Workout
</button>

<PrimaryLink href="#/setup">Start Workout</PrimaryLink>
