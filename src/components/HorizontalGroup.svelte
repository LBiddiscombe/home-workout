<script>
  export let title = 'Title'
</script>

<h2 class="text-xl text-gray-600">{title}</h2>
<div class="w-full p-2 pb-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-md">
  <div class="grid h-12 grid-flow-col gap-2 mb-2 text-xl place-items-center auto-cols-fr">
    <slot />
  </div>
</div>
