<script>
  export let title = 'Title'
  export let items = [1, 2, 3]
  export let selected = -1

  const selectedClasses = 'bg-teal-400 rounded shadow-md font-bold'
</script>

<h2 class="text-xl text-gray-600">{title}</h2>
<div class="w-full p-2 pb-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-md">
  <div class="grid h-12 grid-flow-col gap-2 mb-2 text-xl place-items-center auto-cols-fr">
    {#each items as item, index}
      <label class="grid w-full h-full bg-gray-200 place-items-center {item === selected ? selectedClasses : ''}">
        <input class="hidden" type="radio" bind:group={selected} value={item} />{item}
      </label>
    {/each}
  </div>
</div>
