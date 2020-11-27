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
  }

  $: {
    if (timerComplete) {
      timerComplete = false
      moveNext()
    }
  }
</script>

<div class="w-full mt-2">
  {#if resting}
    <h2 class="py-2 text-2xl font-bold text-center text-white bg-green-700">
      {`Next up ${Math.ceil(($timerIndex + 1) / 2)} of ${$workout.count}`}
    </h2>
  {:else}
    <h2 class="py-2 text-2xl font-bold text-center text-white bg-red-700">
      {`Now doing ${Math.ceil(($timerIndex + 1) / 2)} of ${$workout.count}`}
    </h2>
  {/if}
  {#each $workout.participants as participant}
    <div class="flex justify-center w-full mt-2">
      <Tag>
        {participant.name}
        {#if lastRest}
          <span class="ml-2 text-xl font-bold text-gray-900">Good job, you made it!</span>
        {:else}
          <span class="ml-2 text-xl font-bold text-gray-900">{$workout.exercises[participant.station].name}</span>
        {/if}
      </Tag>
    </div>
  {/each}
</div>

<div class="flex flex-col justify-center flex-grow">
  {#if started}
    {#key $timerIndex}
      <Timer duration={$timers[$timerIndex]} bind:complete={timerComplete} {resting}>{message}</Timer>
    {/key}
  {:else}
    <div class="grid w-full place-items-center">
      <button class="w-full h-64 mx-auto text-5xl border-0" on:click={handleStart}>TAP TO START</button>
    </div>
  {/if}
</div>

<SecondaryLink href="#/summary">Chicken out early!</SecondaryLink>
