<script>
  import HorizontalGroup from '../components/HorizontalGroup.svelte'
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import SecondaryLink from '../components/SecondaryLink.svelte'
  import { durations, rests, counts, focuses, people } from '../data/options'
  import { workout } from '../stores/workout'

  const selectedClasses = 'border-green-500 bg-gray-400 border-2 rounded shadow-lg font-bold'

  $: workout.save($workout)
</script>

<h1 class="mb-2 text-4xl">Home Workout</h1>
<div class="flex-grow">
  <HorizontalGroup title="Who's ready to feel the burn!">
    {#each people as item}
      <label
        class="grid w-full h-full bg-gray-200  place-items-center {$workout.participants.findIndex((p) => p.name === item.name) !== -1 ? selectedClasses : ''}">
        <input class="hidden" type="checkbox" bind:group={$workout.participants} value={item} />{item.initials}
      </label>
    {/each}
  </HorizontalGroup>

  <HorizontalGroup title="Duration">
    {#each durations as item}
      <label
        class="grid w-full h-full bg-gray-200 place-items-center {item === $workout.duration ? selectedClasses : ''}">
        <input class="hidden" type="radio" bind:group={$workout.duration} value={item} />{item}
      </label>
    {/each}
  </HorizontalGroup>

  <HorizontalGroup title="Rest">
    {#each rests as item}
      <label class="grid w-full h-full bg-gray-200 place-items-center {item === $workout.rest ? selectedClasses : ''}">
        <input class="hidden" type="radio" bind:group={$workout.rest} value={item} />{item}
      </label>
    {/each}
  </HorizontalGroup>

  <HorizontalGroup title="Exercises">
    {#each counts as item}
      <label class="grid w-full h-full bg-gray-200 place-items-center {item === $workout.count ? selectedClasses : ''}">
        <input class="hidden" type="radio" bind:group={$workout.count} value={item} />{item}
      </label>
    {/each}
  </HorizontalGroup>

  <HorizontalGroup title="Focus">
    {#each focuses as item}
      <label class="grid w-full h-full bg-gray-200 place-items-center {item === $workout.focus ? selectedClasses : ''}">
        <input class="hidden" type="radio" bind:group={$workout.focus} value={item} />{item}
      </label>
    {/each}
  </HorizontalGroup>
</div>

<div class="grid grid-flow-col gap-2 mb-2 text-xl place-items-center auto-cols-fr">
  <SecondaryLink href="#/">Back</SecondaryLink>
  <PrimaryLink href="#/preview">Get My Plan</PrimaryLink>
</div>
