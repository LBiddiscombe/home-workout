<script>
  import PrimaryLink from '../components/PrimaryLink.svelte'
  import SecondaryLink from '../components/SecondaryLink.svelte'
  import { participants, duration, rest, count, focus } from '../stores/workout'
</script>

<div class="w-full pb-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-md">
  <h2 class="text-center">{$participants}</h2>
  <div class="grid grid-flow-col gap-2 my-2 text-xl auto-cols-fr place-items-center">
    <div>
      <p class="text-sm text-center text-gray-500">Exercise</p>
      <p class="text-3xl font-semibold text-center text-gray-800">{$duration}s</p>
    </div>
    <div>
      <p class="text-sm text-center text-gray-500">Rest</p>
      <p class="text-3xl font-semibold text-center text-gray-800">{$rest}s</p>
    </div>
    <div>
      <p class="text-sm text-center text-gray-500">Count</p>
      <p class="text-3xl font-semibold text-center text-gray-800">x{$count}</p>
    </div>
    <div>
      <p class="text-sm text-center text-gray-500">Focus</p>
      <p class="text-3xl font-semibold text-center text-gray-800">{$focus}</p>
    </div>
  </div>
</div>

<ul class="grid grid-cols-2 gap-4 px-0 mt-8 place-content-center">
  <li class="w-full p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 1
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 2
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 3
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 4
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 5
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 6
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 7
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 8
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md" style="border-bottom-width:0">
    Exercise 9
  </li>
  <li class="p-3 text-center list-none bg-white border rounded-sm shadow-md">Exercise 10</li>
</ul>

<div class="grid grid-flow-col gap-2 mb-2 text-xl place-items-center auto-cols-fr">
  <SecondaryLink href="#/setup">Back</SecondaryLink>
  <PrimaryLink href="#/workout">Let's Go</PrimaryLink>
</div>
