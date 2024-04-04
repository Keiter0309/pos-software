<template>
    <div class="grid grid-cols-12 -ms-[9.5rem] bg-blue-700 text-white">
      <button class="col-span-1 px-2 py-5 border-r-2 border-gray-200 transition-all duration-150 ease-linear text-center hover:cursor-pointer" v-for="value in ['Tại chỗ', 'Mang về', 'Grab', 'Shopee', 'Gojek', 'Befood']" :key="value" :class="{'bg-orange-500' : activeButton === value }" @click="activeButton = value">
            {{ value }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
  name: 'AppNavbar',
    data() {
        return {
            activeButton: null,
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  