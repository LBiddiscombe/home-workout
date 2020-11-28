<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { countdown, paused } from '../stores/countdown'

  export let duration = 10
  export let first = true
  export let complete = false
  export let resting = false

  let startWhistle, stopBuzzer

  onMount(() => {
    countdown.set(duration)
    startWhistle = document.getElementById('startwhistle')
    stopBuzzer = document.getElementById('stopbuzzer')
    if (resting && !first) {
      stopBuzzer.muted = false
      stopBuzzer.play()
    }
    if (!resting && !complete) {
      startWhistle.muted = false
      startWhistle.play()
    }
  })

  $: if ($countdown === 0) {
    countdown.set(null)
    complete = true
  }
</script>

<style>
  .timer {
    font-size: 10rem;
  }
</style>

<div
  class="grid h-64 grid-cols-1 grid-rows-1 text-green-700 place-items-center"
  on:click={() => paused.update((p) => !p)}>
  {#if $paused}
    <span
      transition:fly={{ y: -30, duration: 300 }}
      class="z-10 col-start-1 row-start-1 text-6xl font-bold text-gray-700">PAUSED</span>
  {:else if resting}
    <span class="z-10 col-start-1 row-start-1 font-bold text-green-700 timer">{$countdown}</span>
  {:else}<span class="z-10 col-start-1 row-start-1 font-bold text-red-700 timer">{$countdown}</span>{/if}
  {#if !$paused}
    <div class="flex justify-center w-full my-4">
      <span in:fly={{ y: 30, duration: 300 }} class="text-4xl text-gray-900"><slot /></span>
    </div>
  {/if}
</div>
