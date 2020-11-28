<script>
  import { onMount } from 'svelte'
  import { push } from 'svelte-spa-router'
  import Tag from '../components/Tag.svelte'
  import { workout, noSleep } from '../stores/workout'

  let { participants, duration, rest, count, focus } = $workout

  onMount(async () => {
    workout.complete()
    if (noSleep._wakeLock || noSleep.noSleepVideo) noSleep.disable()
  })

  function loadLastWorkout() {
    workout.repeatLast()
    push('#/workout')
  }
</script>

<h1 class="mb-2 text-4xl">Home Workout</h1>

<div class="flex-grow">
  <div class="flex flex-wrap justify-center gap-2 mx-auto my-4 text-xl">
    {#each participants as tag}
      <Tag classes={tag.classes}>{tag.name}</Tag>
    {/each}
  </div>
  <h2 class="mb-2 text-2xl">Look at what you've done!...</h2>

  <div class="w-full pb-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-md">
    <div class="grid grid-flow-col gap-2 my-2 text-xl auto-cols-fr place-items-center">
      <div>
        <p class="text-sm text-center text-gray-500">Exercise</p>
        <p class="text-3xl font-semibold text-center text-gray-800">{duration}s</p>
      </div>
      <div>
        <p class="text-sm text-center text-gray-500">Rest</p>
        <p class="text-3xl font-semibold text-center text-gray-800">{rest}s</p>
      </div>
      <div>
        <p class="text-sm text-center text-gray-500">Count</p>
        <p class="text-3xl font-semibold text-center text-gray-800">x{count}</p>
      </div>
      <div>
        <p class="text-sm text-center text-gray-500">Focus</p>
        <p class="text-3xl font-semibold text-center text-gray-800">{focus}</p>
      </div>
    </div>
  </div>

  <button
    on:click={loadLastWorkout}
    class="grid w-full h-16 mx-auto my-6 text-2xl font-bold text-white bg-green-800 rounded-lg shadow hover:nounderl place-content-center hover:no-underline visited:text-whit">
    Repeat Last Workout
  </button>
</div>

<a
  href="#/"
  class="grid w-full h-16 mx-auto my-6 text-2xl font-bold text-white bg-red-800 border-0 rounded-lg shadow place-content-center hover:no-underline visited:text-whit">
  Finish Workout
</a>
