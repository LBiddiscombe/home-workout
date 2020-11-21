<script>
  import ButtonGroup from '../components/ButtonGroup.svelte'
  import ButtonGroupMulti from '../components/ButtonGroupMulti.svelte'
  import { durations, rests, counts, focuses, people } from '../data/options'

  let participants = [],
    duration = 40,
    rest = 20,
    count = 10,
    focus = focuses[0]

  let initials = people.map((p) => p.initials)

  const handleClick = () => {
    //console.log(people, duration, rest, count, focus)
    //alert(`${people} hitting ${count} stations for ${duration} seconds with ${rest} seconds rest.`)
  }
</script>

<div class="container h-full max-w-xl px-4 mx-auto overflow-y-auto">
  <h1 class="mb-2 text-4xl">Home Workout</h1>
  <ButtonGroupMulti title="Who's ready to feel the burn!" items={initials} bind:selected={participants} />
  <ButtonGroup title="Duration" items={durations} bind:selected={duration} />
  <ButtonGroup title="Rest" items={rests} bind:selected={rest} />
  <ButtonGroup title="Exercises" items={counts} bind:selected={count} />
  <ButtonGroup title="Activity Focus" items={focuses} bind:selected={focus} />

  <button
    on:click={handleClick}
    class="grid w-full h-16 mx-auto my-6 text-2xl font-bold text-white bg-gray-800 rounded-lg shadow-lg place-content-center">Get
    the Exercise Plan</button>
</div>
