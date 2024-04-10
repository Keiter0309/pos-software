<template>
  <div class="w-full border-r-2 border-gray-300">
    <div class="grid grid-cols-2 text-white bg-blue-800">
      <div class="col-span-1">
        <div class="grid grid-cols-9">
          <div
            class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer"
          >
            Logo
          </div>
          <div
            class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer"
          >
            Home
          </div>
          <div
            class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer"
          >
            Hide
          </div>
          <button
            @click="switchView()"
            class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer"
          >
            Switch
          </button>
          <div
            class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer"
          >
            Function
          </div>
          <button
            class="col-span-2 transition-all duration-150 ease-linear bg-orange-500 hover:bg-orange-600 rounded py-5 px-10 text-white border border-gray-200"
          >
            All
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <div class="col-span-1 border-r-2 border-gray-200 w-[29.5rem] h-[92vh]">
        <div class="h-32 w-full bg-blue-700">
          <p class="text-md text-white">Date: {{ getDate }}</p>
          <p class="text-md text-white">{{ `${getDate}-PLT${getDay}-${getCurrentTime}-${getCurrentDate}` }}</p>
          <p class="text-md text-white">LTK-NV-{{ passValue }}</p>
        </div>
      </div>
      <div class="col-span-2 ms-2">
        <AppNavbar />
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
export default {
    name: 'AppHomepage',
    components: {
        AppNavbar
    },
    data() {
        return {
            now: new Date(),
        }
    },
    computed: {
        passValue() {
            return localStorage.getItem('StaffName');
        },
        getCurrentDate() {
            let today = new Date();
            let dd = today.getDate();  
            let mm = today.getMonth()+1
            let yyyy = today.getFullYear();

            today = `${dd}/${mm}/${yyyy}`;
            return today;
        },
        getDate() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
            let yy = String(today.getFullYear()).slice(-2);

            today = `${dd}${mm}${yy}`;
            return today;
        },
        getCurrentTime() {
            const hours = this.now.getHours().toString().padStart(2, '0');
            const minutes = this.now.getMinutes().toString().padStart(2, '0');
            const seconds = this.now.getSeconds().toString().padStart(2, '0');

            return `${hours}:${minutes}:${seconds}`;
        },
        getDay(){
            let now = new Date();
            let dd = String(now.getDate()).padStart(2, '0');
            
            now = dd;
            return now;
        }
    },
    methods: {
        updateTime() {
          this.now = new Date();
        },
        switchView() {
          this.$router.push('/');
        }
    },
    mounted() {
        setInterval(this.updateTime, 1000);
    },
}
</script>

<style>

</style>