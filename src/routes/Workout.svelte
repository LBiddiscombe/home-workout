<script>
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import SecondaryLink from '../components/SecondaryLink.svelte'
  import Tag from '../components/Tag.svelte'
  import Timer from '../components/Timer.svelte'
  import { workout, noSleep } from '../stores/workout'
  import { timers, timerIndex } from '../stores/timers'

  const restMessages = ['Rest', 'Take a break', 'And breathe', 'Have a rest', 'Cool off a sec', 'Take a breather']
  const workMessages = ['Go for it!', 'Move it!', 'Lets Go!', 'Push through!', 'You got this!', 'Lets do this!']

  let started = false
  let timerComplete = false
  let resting = true
  let lastRest = false
  let message = 'Get Ready...'
  let isScreenLocked = false

  onMount(() => {
    timers.init($workout.duration, $workout.rest, $workout.count)
  })

  function rand(max) {
    return Math.floor(Math.random() * max)
  }

  function moveNext() {
    timerIndex.update((t) => t + 1)
    if ($timerIndex >= $timers.length) {
      // workout complete
      push('#/summary')
    }
    resting = $timerIndex % 2 === 0
    lastRest = $timerIndex === $timers.length - 1
    if (resting) {
      message = restMessages[rand(restMessages.length)]
      workout.placeParticipants($workout.count, $timerIndex / 2)
    } else message = workMessages[rand(workMessages.length)]
  }

  function handleStart(e) {
    started = true
    noSleep.enable()
    isScreenLocked = true
  }

  $: {
    isScreenLocked = Boolean(noSleep._wakeLock)
    if (timerComplete) {
      timerComplete = false
      moveNext()
    }
  }
</script>

{#if isScreenLocked}
  <div class="absolute top-0 right-0 mx-4 my-2 ">💡</div>
{/if}

<div class="w-full mt-2">
  {#if resting}
    <h2 class="py-2 text-2xl font-bold text-center text-white bg-green-700">
      {`Next up ${Math.min(Math.ceil(($timerIndex + 1) / 2), $workout.count)} of ${$workout.count}`}
    </h2>
  {:else}
    <h2 class="py-2 text-2xl font-bold text-center text-white bg-red-700">
      {`Now doing ${Math.min(Math.ceil(($timerIndex + 1) / 2), $workout.count)} of ${$workout.count}`}
    </h2>
  {/if}
  {#each $workout.participants as participant}
    <div class="flex w-full pl-2 mt-2 align-middle">
      <Tag classes={participant.classes}>{participant.name}</Tag>
      <span>
        {#if lastRest}
          <span class="flex-grow ml-2 text-xl font-bold text-gray-900">Good job, you made it!</span>
        {:else}
          <span
            class="flex-grow ml-2 text-xl font-bold text-gray-900">{$workout.exercises[participant.station].name}</span>
        {/if}
      </span>
    </div>
  {/each}
</div>

<div class="flex flex-col justify-center flex-grow">
  {#if started}
    {#key $timerIndex}
      <Timer duration={$timers[$timerIndex]} bind:complete={timerComplete} {resting} first={$timerIndex === 0}>
        {message}
      </Timer>
    {/key}
  {:else}
    <div class="grid w-full place-items-center">
      <button class="w-full h-64 mx-auto text-5xl border-0" on:click={handleStart}>TAP TO START</button>
    </div>
  {/if}
</div>

<SecondaryLink href="#/summary">Chicken out early!</SecondaryLink>
