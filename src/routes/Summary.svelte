<script>
  import { onMount } from 'svelte'
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import { workout, noSleep } from '../stores/workout'

  onMount(async () => {
    workout.complete()
    if (noSleep._wakeLock) noSleep.disable()
  })
</script>

<PrimaryLink href="#/">Finish Workout</PrimaryLink>
