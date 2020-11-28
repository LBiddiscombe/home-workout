<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

  main {
    height: calc(100vh - 7rem);
  }
</style>

<main>
  <div class="container flex flex-col h-full max-w-xl px-4 mx-auto overflow-y-auto">
    <Router {routes} />
  </div>
</main>
