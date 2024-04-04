<template>
    <div class="grid md:grid-cols-2">
        <div class="md:col-span-1">
            <div class="bg-gray-700 flex flex-col justify-center items-center h-[100vh]">
                <h1 class="text-[10rem] uppercase text-white">KAS</h1>
                <p class="text-lg md:text-xl uppercase text-white">end to end pos solution</p>
            </div>
        </div>
        <div class="md:col-span-1">
            <div class="flex flex-col justify-center items-center h-[100vh]">
                <h1 class="text-xl md:text-3xl uppercase font-bold">KAS POS</h1>
                <input type="password" name="" id="" v-model="passValue"
                    class="transition-all duration-150 p-5 w-full md:w-1/2 border border-gray-200 bg-gray-300 rounded-lg text-xl"
                    disabled />
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-5 text-xl">
                    <button
                        v-for="number in [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]"
                        :key="number"
                        class="px-6 md:px-12 py-4 md:py-8 rounded-lg bg-blue-500 hover:bg-indigo-500 transition-all duration-150 ease-linear text-white shadow-lg shadow-slate-400"
                        :class="{ 'animate-click': clickedButton === number }"
                        @click="getPassValue(number)"
                        @animationend="clickedButton = null"
                    >
                        {{ number }}
                    </button>
                    <button
                        class="px-6 md:px-12 py-4 md:py-8 rounded-lg bg-yellow-400 hover:bg-yellow-300 transition-all duration-150 ease-linear text-white"
                        @click="deleteValue()">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    <button
                        class="px-6 md:px-12 py-4 md:py-8 rounded-lg bg-red-500 hover:bg-red-400 transition-all duration-150 ease-linear text-white"
                        @click="deleteAllValue()">
                        X
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name: 'HelloWorld',
    data() {
        return {
            passValue: '',
            clickedButton: null,
        };
    },
    methods: {
        getPassValue(value) {
            this.passValue += value;
            this.clickedButton = value;
            const passWord = {
                '144001': 'Sale 1',
                '144002': 'Sale 2',
                '144003': 'Sale 3',
                '144004': 'Sale 4',
                '238676': 'Nguyễn Phước Hậu'
            };
            if(Object.keys(passWord).includes(this.passValue)) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: `Welcome ${passWord[this.passValue]}`
                });
                this.$router.push('/dashboard');
                localStorage.setItem('passValue', passWord[this.passValue]);
                const storage = localStorage.getItem('passValue');
                console.log(storage);
            }
        },
        deleteValue() {
            this.passValue = this.passValue.slice(0, -1);   
        },
        deleteAllValue() {
            this.passValue = ''
        },
    },
};
</script>

<style></style>