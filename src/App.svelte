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
  <Router {routes} />
</main>
