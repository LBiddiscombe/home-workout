<script>
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import SecondaryLink from '../components/SecondaryLink.svelte'
</script>

<h1 class="mb-2 text-3xl font-bold text-center">Home Workout</h1>

<div class="flex-grow">
  <SecondaryLink href="#/exercises">View Exercises</SecondaryLink>
  <SecondaryLink href="#/history">View History</SecondaryLink>
</div>

<PrimaryLink href="#/setup">Start Workout</PrimaryLink>
