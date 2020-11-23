<script>
  import HorizontalGroup from '../components/HorizontalGroup.svelte'
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import SecondaryLink from '../components/SecondaryLink.svelte'
  import { durations, rests, counts, focuses, people } from '../data/options'
  import { participants, duration, rest, count, focus } from '../stores/workout'

  const selectedClasses = 'bg-teal-400 rounded shadow-md font-bold'
</script>

<HorizontalGroup title="Who's ready to feel the burn!">
  {#each people as item}
    <label
      class="grid w-full h-full bg-gray-200  place-items-center {$participants.includes(item) ? selectedClasses : ''}">
      <input class="hidden" type="checkbox" bind:group={$participants} value={item} />{item.initials}
    </label>
  {/each}
</HorizontalGroup>

<HorizontalGroup title="Duration">
  {#each durations as item}
    <label class="grid w-full h-full bg-gray-200 place-items-center {item === $duration ? selectedClasses : ''}">
      <input class="hidden" type="radio" bind:group={$duration} value={item} />{item}
    </label>
  {/each}
</HorizontalGroup>

<HorizontalGroup title="Rest">
  {#each rests as item}
    <label class="grid w-full h-full bg-gray-200 place-items-center {item === $rest ? selectedClasses : ''}">
      <input class="hidden" type="radio" bind:group={$rest} value={item} />{item}
    </label>
  {/each}
</HorizontalGroup>

<HorizontalGroup title="Exercises">
  {#each counts as item}
    <label class="grid w-full h-full bg-gray-200 place-items-center {item === $count ? selectedClasses : ''}">
      <input class="hidden" type="radio" bind:group={$count} value={item} />{item}
    </label>
  {/each}
</HorizontalGroup>

<HorizontalGroup title="Focus">
  {#each focuses as item}
    <label class="grid w-full h-full bg-gray-200 place-items-center {item === $focus ? selectedClasses : ''}">
      <input class="hidden" type="radio" bind:group={$focus} value={item} />{item}
    </label>
  {/each}
</HorizontalGroup>

<div class="grid grid-flow-col gap-2 mb-2 text-xl place-items-center auto-cols-fr">
  <SecondaryLink href="#/">Back</SecondaryLink>
  <PrimaryLink href="#/preview">Get My Plan</PrimaryLink>
</div>
