<script>
  import { onMount } from 'svelte'
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import Timer from '../components/Timer.svelte'
  import { workout, workoutIteration, noSleep } from '../stores/workout'
  import { timers, timerIndex } from '../stores/timers'

  let started = false
  let timerComplete = false

  $: if (timerComplete) {
    moveNext()
  }

  onMount(async () => {
    timers.init($workout.duration, $workout.rest, $workout.count)
  })

  function moveNext() {
    timerComplete = false
    timerIndex.update((t) => t + 1)
    workoutIteration.set(Math.floor($timerIndex / 2))
    workout.increment()
    if ($timerIndex >= $timers.length) started = false
  }

  function handleStart(e) {
    started = true
    noSleep.enable()
  }
</script>

{#each $workout.participants as participant}
  <div>{participant.name} {$workout.exercises[participant.station].name}</div>
{/each}

{#if started}
  {#key $timerIndex}
    <Timer duration={$timers[$timerIndex]} bind:complete={timerComplete} />
  {/key}
{/if}

<button on:click={handleStart}>Start</button>

{JSON.stringify($timerIndex, null, 2)}
{JSON.stringify($workoutIteration, null, 2)}

<PrimaryLink href="#/summary">Done</PrimaryLink>
