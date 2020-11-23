<script>
  export let href
</script>

<a
  {href}
  class="grid w-full h-16 mx-auto my-6 text-2xl font-bold text-white bg-gray-800 rounded-lg shadow-lg hover:nounderl place-content-center hover:no-underline visited:text-whit">
  <slot><em>Link</em></slot>
</a>
