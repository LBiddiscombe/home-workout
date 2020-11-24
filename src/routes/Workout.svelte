<script>
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import Timer from '../components/Timer.svelte'
  import { workout } from '../stores/workout'

  function handleNext(e) {
    console.log('handleNext', e)
    workout.increment()
  }
</script>

{#each $workout.participants as participant}
  <div>{participant.name} {$workout.exercises[participant.station].name}</div>
{/each}

<Timer duration={$workout.duration} rest={$workout.rest} count={$workout.count} />

<button on:click={handleNext}>{$workout.iteration} Next</button>

<PrimaryLink href="#/summary">Done</PrimaryLink>
