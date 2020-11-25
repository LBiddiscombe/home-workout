<script>
  /* 
    clean up some bloody intervals! 
  */

  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { tweened } from 'svelte/motion'
  import { linear } from 'svelte/easing'

  export let duration = 10
  export let complete = false

  let progress
  let length
  let offset
  let timer
  let paused = false

  onMount(() => {
    length = progress.getTotalLength()
    timer = tweened(Math.floor(duration / 4), {
      duration: 1000,
      easing: linear,
    })
    offset = tweened(length, {
      duration: 1000,
      easing: linear,
    })
    countdown()
    return
  })

  function countdown() {
    const count = setInterval(function () {
      if ($timer < 1) {
        timer.set(0)
        clearTimeout(count)
        complete = true
      } else {
        if (!paused) {
          timer.update((t) => t - 1)
          offset.set((($timer - 1) / duration) * length)
        }
      }
    }, 1000)
  }
</script>

<style>
  svg {
    transform: rotateZ(-90deg);
  }
  svg circle.progress {
    stroke-dashoffset: var(--dashoffset);
    stroke-dasharray: var(--dasharray);
    stroke-width: 32;
    fill: transparent;
  }
  svg circle.face {
    stroke-width: 1;
    fill: transparent;
  }
</style>

<div class="grid grid-cols-1 grid-rows-1 text-green-700 place-items-center" on:click={() => (paused = !paused)}>
  <svg width="200" height="200" class="col-start-1 row-start-1 stroke-current">
    <circle class="face" cx="100" cy="100" r="95" />
    <circle
      class="progress"
      bind:this={progress}
      cx="100"
      cy="100"
      r="80"
      style="--dashoffset: {$offset}; --dasharray: {length}" />
  </svg>
  {#if paused}
    <span
      transition:fly={{ y: -30, duration: 300 }}
      class="z-10 col-start-1 row-start-1 text-3xl subpixel-antialiased font-bold text-gray-600">PAUSED</span>
  {:else}
    <span
      class="z-10 col-start-1 row-start-1 text-6xl subpixel-antialiased font-bold text-gray-900">{Math.ceil($timer)}</span>
  {/if}
</div>
