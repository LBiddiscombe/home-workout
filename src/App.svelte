<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import { location } from 'svelte-spa-router'
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<p>The current page is: {$location}</p>
<main>
  <Router {routes} />
</main>
