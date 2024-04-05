<script>
    export default {
      name: 'AppModal',

    }
</script>

<template>
<div class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-gray-700 bg-opacity-40" aria-labelledby="modal-title">
  <div class="bg-white rounded-lg text-center py-4 px-6 w-full max-w-lg border border-gray-500 shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Hello</h2>
    <p class="text-gray-700">This is a custom modal.</p>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Close</button>
  </div>
</div>
</template>

<style scoped>

</style>