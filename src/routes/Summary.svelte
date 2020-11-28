<script>
  import { onMount } from 'svelte'
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import { workout, noSleep } from '../stores/workout'

  onMount(async () => {
    workout.complete()
    if (noSleep._wakeLock || noSleep.noSleepVideo) noSleep.disable()
  })
</script>

<h1 class="mb-2 text-4xl">Home Workout</h1>

<div class="flex-grow">
  <p>Display a summary of the workout here</p>
</div>

<PrimaryLink href="#/">Finish Workout</PrimaryLink>
