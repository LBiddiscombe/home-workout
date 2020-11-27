<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'

  let audiosWeWantToUnlock = document.getElementsByTagName('audio')
  document.body.addEventListener(
    'touchstart',
    function () {
      if (audiosWeWantToUnlock) {
        for (let audio of audiosWeWantToUnlock) {
          audio.play()
          audio.pause()
          audio.currentTime = 0
        }
        audiosWeWantToUnlock = null
      }
    },
    false
  )
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
