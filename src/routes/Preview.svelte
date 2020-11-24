<script>
  import { onMount } from 'svelte'

  import PrimaryLink from '../components/PrimaryLink.svelte'
  import SecondaryLink from '../components/SecondaryLink.svelte'
  import Tag from '../components/Tag.svelte'
  import { workout } from '../stores/workout'

  let { participants, duration, rest, count, focus } = $workout
  let tags = participants.map((p) => p.name)

  onMount(async () => {
    workout.init()
  })
</script>

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

<div class="flex justify-center gap-2 mx-auto my-4 text-xl">
  {#each tags as tag}
    <Tag>{tag}</Tag>
  {/each}
</div>

<ul class="grid grid-cols-2 gap-4 px-0 place-content-center">
  {#each $workout.exercises as exercise, index}
    <li class="w-full p-3 text-center list-none" style="border-bottom-width:0">{index + 1}. {exercise.name}</li>
  {/each}
</ul>

<div class="grid grid-flow-col gap-2 mb-2 text-xl place-items-center auto-cols-fr">
  <SecondaryLink href="#/setup">Back</SecondaryLink>
  <PrimaryLink href="#/workout">Let's Go</PrimaryLink>
</div>
