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
</style>

<main>
  <div class="container h-full max-w-xl px-4 mx-auto overflow-y-auto">
    <h1 class="mb-2 text-4xl">Home Workout</h1>
    <Router {routes} />
  </div>
</main>
