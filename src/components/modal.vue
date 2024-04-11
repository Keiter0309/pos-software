<script>
export default {
  name: "AppModal",
  data() {
    return {
      words: [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
      ],
      clickedButton: null,
      orderNumber: "",
    };
  },
  methods: {
    appendDigitToNumber(value) {
      this.orderNumber += value;
      this.clickedButton = value;
    },
    deleteAllValue() {
      this.orderNumber = "";
    },
    onKeyUp(event) {
      const keys = event.key;
      const key = event.key.toLowerCase();
      if (this.words.includes(key)) {
        this.appendDigitToNumber(key);
      } else if (!isNaN(keys)) {
        this.appendDigitToNumber(Number(key));
      } else if (keys === "Backspace") {
        this.orderNumber = this.orderNumber.slice(0, -1);
      }
    },
    submit() {
      this.$emit('close');
    },
    
  },
  mounted() {
    window.addEventListener("keyup", this.onKeyUp);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.onKeyUp);
  },
};
</script>

<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-gray-700 bg-opacity-40"
    aria-labelledby="modal-title"
  >
    <div
      class="bg-white rounded-lg text-center py-4 px-6 w-[100rem] h-[35rem] border border-gray-500 shadow-lg"
    >
      <div class="mt-10">
        <input
          type="text"
          v-model="orderNumber"
          class="py-2 px-3 border-2 border-gray-700 shadow-lg rounded w-1/2"
        />
        <div class="grid grid-cols-3 mt-12">
          <div class="col-span-2 h-full mr-5">
            <div class="grid grid-cols-10 gap-2 mb-2">
              <button
                v-for="word in [
                  'q',
                  'w',
                  'e',
                  'r',
                  't',
                  'y',
                  'u',
                  'i',
                  'o',
                  'p',
                ]"
                :key="word"
                class="text-xl transition-all duration-150 py-8 px-4 text-center border border-gray-400 bg-gray-100 rounded shadow-lg hover:bg-gray-200 hover:cursor-pointer"
                :class="{ 'animate-click': clickedButton === word }"
                @click="appendDigitToNumber(word)"
                @animationend="clickedButton = null"
                @keyup="onKeyUp(word, $event)"
              >
                {{ word }}
              </button>
            </div>
            <div class="grid grid-cols-9 gap-2 mb-2 ml-5">
              <button
                v-for="word in ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']"
                :key="word"
                class="text-xl transition-all duration-150 py-8 px-4 text-center border border-gray-400 bg-gray-100 rounded shadow-lg hover:bg-gray-200 hover:cursor-pointer"
                :class="{ 'animate-click': clickedButton === word }"
                @click="appendDigitToNumber(word)"
                @animationend="clickedButton = null"
                @keyup="onKeyUp(word, $event)"
              >
                {{ word }}
              </button>
            </div>
            <div class="grid grid-cols-7 gap-2 ml-10">
              <button
                v-for="word in ['z', 'x', 'c', 'v', 'b', 'n', 'm']"
                :key="word"
                class="text-xl transition-all duration-150 py-8 px-4 text-center border border-gray-400 bg-gray-100 rounded shadow-lg hover:bg-gray-200 hover:cursor-pointer"
                :class="{ 'animate-click': clickedButton === word }"
                @click="appendDigitToNumber(word)"
                @animationend="clickedButton = null"
                @keyup="onKeyUp(word, $event)"
              >
                {{ word }}
              </button>
            </div>
          </div>
          <div class="col-span-1 h-full">
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="number in [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]"
                :key="number"
                class="text-xl transition-all duration-150 py-5 text-center border border-gray-400 bg-gray-100 rounded shadow-lg hover:bg-gray-200 hover:cursor-pointer"
                :class="{ 'animate-click': clickedButton === number }"
                @click="appendDigitToNumber(number)"
                @animationend="clickedButton = null"
              >
                {{ number }}
              </button>
              <button
                class="transition-all duration-150 py-5 text-center border border-gray-400 bg-red-500 rounded shadow-lg hover:bg-red-600 text-white hover:cursor-pointer"
                @click="deleteAllValue"
              >
                Clear
              </button>
              <button
                class="transition-all duration-150 py-5 text-center border border-gray-400 bg-yellow-400 rounded shadow-lg hover:bg-yellow-500 text-white hover:cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="flex justify-end mt-10">
        <button
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
