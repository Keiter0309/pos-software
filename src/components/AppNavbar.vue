<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 md:-ms-[6.5rem] bg-blue-700 text-white">
    <button class="col-span-1 px-2 py-5 border-r-2 border-gray-200 transition-all duration-150 ease-linear text-center hover:cursor-pointer" v-for="value in ['Tại chỗ', 'Mang về', 'Grab', 'Shopee', 'Gojek', 'Befood']" :key="value" :class="{'bg-orange-500' : activeButton === value }" @click="activeButton = value">
      {{ value }}
    </button>
  </div>
  <div class="container mt-2 -ms-24 text-xl">
    <button class="px-28 py-12 border border-gray-200 bg-gray-100 transition-all duration-150 ease-linear text-center rounded-lg hover:bg-gray-200" 
    v-for="plus in ['+']" :key="plus"              
    :class="{'animate-click' : clickedButton === plus }" 
    @click="animateClick(plus)"
    @animationend="clickedButton === null">
      {{ plus }}
    </button>
    <div v-if="showModal">
      <app-modal/>
    </div>
  </div>
</template>


<script>
import AppModal from './modal.vue'
export default {
  name: 'AppNavbar',
  components: {
    AppModal
  },
  data() {
    return {
      activeButton: null,
      clickedButton: null,
      showModal: false,
    }
  },
  methods: {
    animateClick(plus) {
      this.clickedButton = null;
      this.$nextTick(()=>{
        this.clickedButton = plus;
      });
      this.showModal = true;
    }
  }
}
</script>

<style>
.animate-click {
  animation: click 0.3s;
}

@keyframes click {
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
}
</style>