<script>
  import { onMount } from 'svelte'
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import { workout } from '../stores/workout'

  onMount(async () => {
    workout.complete()
  })
</script>

<PrimaryLink href="#/">Finish Workout</PrimaryLink>
