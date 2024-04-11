<template>
<div class="container mx-auto rounded shadow-lg h-[50vh] flex flex-col justify-center items-center p-5">
    <p class="text-center text-2xl uppercase font-bold mb-5">
        Ask a yes/no question
    </p>
    <input type="text" name="" id="" class="w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 py-2 px-3 transition-all duration-150 rounded" v-model="question" :disabled="loading" placeholder="Enter your question here...">
    <p>
        {{ answer }}
    </p>
</div>
</template>

<script setup>
import {ref, watch} from 'vue';

const question = ref('');
const answer = ref('Question include a question mark');
const loading = ref(false);

watch(question, async(newQuestion) => {
    if(newQuestion.includes('?')) {
        loading.value = true;
        answer.value = 'Thinking...';
        try {
            const res = await fetch('https://yesno.wtf/api');
            answer.value = (await res.json()).answer;
        }
        catch (error) {
            console.log(error)
        } 
        finally {
            loading.value = false;
        }
    }
})
</script>

<style>

</style>