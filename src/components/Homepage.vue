<template>
<div class="w-full border-r-2 border-gray-300">
        <div class="grid grid-cols-2 text-white bg-blue-800">
            <div class="col-span-1">
                <div class="grid grid-cols-9">
                    <div class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer">
                        Logo
                    </div>
                    <div class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer">
                        Home
                    </div>
                    <div class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer">
                        Hide
                    </div>
                    <div class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer">
                        Switch
                    </div>
                    <div class="col-span-1 border border-gray-200 p-5 text-center hover:bg-slate-500 transition-all duration-150 ease-linear hover:cursor-pointer">
                        Function
                    </div>
                    <button class="col-span-2 transition-all duration-150 ease-linear bg-orange-500 hover:bg-orange-600 rounded py-5 px-10 text-white border border-gray-200">All</button>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-3">
        <div class="col-span-1 border-r-2 border-gray-200 w-[29.5rem] h-[100vh]">
            <div class="h-32 w-full bg-blue-700">
                <p class="text-xl text-white font-bold">Time: </p>
                <p class="text-xl text-white font-bold">Name: {{ passValue }}</p>
                p
            </div>
        </div>
        <div class="col-span-2 ms-2">
            <AppNavbar/>
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
    computed: {
        passValue() {
            return localStorage.getItem('passValue');
        }
    },
    data() {
        return {

        }
    }

}
</script>

<style>

</style>