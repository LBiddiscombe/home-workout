<script>
  import { onMount } from 'svelte'
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import Tag from '../components/Tag.svelte'
  import Timer from '../components/Timer.svelte'
  import { workout, noSleep } from '../stores/workout'
  import { timers, timerIndex } from '../stores/timers'

  const restMessages = ['Rest', 'Take a break', 'And breathe', 'Have a rest', 'Cool off a second']
  const workMessages = ['Go for it!', 'Move it!', 'Lets Go!', 'Push through!', 'You got this!']

  let started = false
  let timerComplete = false
  let resting = true
  let message = 'Get Ready...'

  onMount(() => {
    timers.init($workout.duration, $workout.rest, $workout.count)
  })

  function rand(max) {
    return Math.floor(Math.random() * max)
  }

  function moveNext() {
    timerIndex.update((t) => t + 1)
    if ($timerIndex >= $timers.length) started = false
    resting = $timerIndex % 2 === 0
    if (resting) {
      message = restMessages[rand(restMessages.length)]
      workout.placeParticipants($workout.count, $timerIndex / 2)
    } else message = workMessages[rand(workMessages.length)]
  }

  function handleStart(e) {
    started = true
    noSleep.enable()
  }

  $: if (timerComplete) {
    timerComplete = false
    moveNext()
  }
</script>

{#each $workout.participants as participant}
  <div class="flex justify-center w-full my-4">
    <Tag>{participant.name}</Tag>
    {#if resting}<span class="ml-2 text-xl text-gray-900">next up </span>{/if}
    <span class="ml-2 text-xl font-bold text-gray-900 uppercase">{$workout.exercises[participant.station].name}</span>
  </div>
{/each}

{#if started}
  {#key $timerIndex}
    <Timer duration={$timers[$timerIndex]} bind:complete={timerComplete} {resting}>{message}</Timer>
  {/key}
{:else}
  <div class="flex justify-center w-full">
    <button class="h-32 mx-auto text-5xl border-0" on:click={handleStart}>TAP TO START</button>
  </div>
{/if}

<PrimaryLink href="#/summary">Done</PrimaryLink>
