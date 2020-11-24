<script>
  import { onMount } from 'svelte'
  import { draw } from 'svelte/transition'
  import { linear } from 'svelte/easing'
  export let duration = 10
  let timer = duration

  onMount(() => {
    countdown()
  })

  function clearCountdown(interval) {
    clearTimeout(interval)
  }

  function countdown() {
    const count = setInterval(function () {
      if (timer <= 0) {
        clearCountdown(count)
      } else {
        --timer
      }
    }, 1000)
  }
</script>

<style>
  svg {
    position: relative;
    background-color: transparent;
    background-color: transparent;
    transform: rotateZ(-90deg);
  }
  svg circle {
    stroke-width: 16;
    fill: #eee;
  }
</style>

<div class="grid grid-cols-1 grid-rows-1 text-green-800 place-items-center">
  <svg width="200" height="200" class="col-start-1 row-start-1 stroke-current">
    <circle in:draw={{ duration: duration * 1000, easing: linear }} cx="100" cy="100" r="80" />
  </svg>
  <span class="z-10 col-start-1 row-start-1 text-6xl subpixel-antialiased font-bold">{timer}</span>
</div>
