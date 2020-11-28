<script>
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import SecondaryLink from '../components/SecondaryLink.svelte'
</script>

<h1 class="mb-2 text-3xl font-bold text-center">Home Workout</h1>

<div class="flex-grow px-3">
  <SecondaryLink href="#/exercises">View Exercises</SecondaryLink>
  <SecondaryLink href="#/history">View History</SecondaryLink>
</div>

<div class="px-3">
  <PrimaryLink href="#/setup">Start Workout</PrimaryLink>
</div>
