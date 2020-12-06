<script>
  export let title = 'Title'
</script>

<h2 class="text-xl text-gray-600">{title}</h2>
<div class="w-full mb-2">
  <div class="grid h-12 grid-flow-col gap-2 mb-2 text-xl place-items-center auto-cols-fr">
    <slot />
  </div>
</div>
