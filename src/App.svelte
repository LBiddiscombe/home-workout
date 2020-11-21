<script>
  import { state } from './stores/state'
  import Preview from './pages/Preview.svelte'
  import Setup from './pages/Setup.svelte'
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<main>
  {#if $state === 'setup'}
    <Setup />
  {/if}
  {#if $state === 'preview'}
    <Preview />
  {/if}
</main>
