<template>
  <div class="grid md:grid-cols-2">
    <div class="md:col-span-1">
      <div
        class="bg-gray-700 flex flex-col justify-center items-center h-[100vh]"
      >
        <h1 class="text-[10rem] uppercase text-white">KAS</h1>
        <p class="text-lg md:text-xl uppercase text-white">
          end to end pos solution
        </p>
      </div>
    </div>
    <div class="md:col-span-1">
      <div class="flex flex-col justify-center items-center h-[100vh]">
        <h1 class="text-xl md:text-3xl uppercase font-bold">KAS POS</h1>
        <input
          type="password"
          name=""
          id=""
          v-model="passValue"
          class="transition-all duration-150 p-5 w-full md:w-1/2 border border-gray-200 bg-gray-300 rounded-lg text-xl"
          disabled
        />
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-5 text-xl">
          <button
            v-for="number in [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]"
            :key="number"
            class="px-6 md:px-12 py-4 md:py-8 rounded-lg bg-blue-500 hover:bg-indigo-500 transition-all duration-150 ease-linear text-white shadow-lg shadow-slate-400"
            :class="{ 'animate-click': clickedButton === number }"
            @click="appendDigitToPassword(number)"
            @animationend="clickedButton = null"
          >
            {{ number }}
          </button>
          <button
            class="px-6 md:px-12 py-4 md:py-8 rounded-lg bg-red-500 hover:bg-red-400 transition-all duration-150 ease-linear text-white"
            @click="deleteAllValue()"
          >
            X
          </button>
          <button
            class="px-6 md:px-12 py-4 md:py-8 rounded-lg bg-yellow-400 hover:bg-yellow-300 transition-all duration-150 ease-linear text-white"
            @click="submit()"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
    <div
      class="bg-gray-700 bg-opacity-40 fixed inset-0 flex items-center justify-center"
      v-if="showLoading"
    >
      <div id="loader"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "HelloWorld",
  data() {
    return {
      passValue: "",
      clickedButton: null,
      completedInput: false, // Track whether the user has completed entering 6 digits
      showLoading: false,
    };
  },
  methods: {
    appendDigitToPassword(value) {
      if (!this.completedInput) {
        this.passValue += value;
        this.clickedButton = value;

        // Check if the user has entered 6 digits
        if (this.passValue.length === 6) {
          this.completedInput = true;
        }
      }
    },
    deleteValue() {
      this.passValue = this.passValue.slice(0, -1);
      this.completedInput = false; // Reset completedInput when deleting digits
    },
    deleteAllValue() {
      this.passValue = "";
      this.completedInput = false; // Reset completedInput when clearing all digits
    },
    onKeyUp(event) {
      const key = event.key;
      if (!isNaN(key)) {
        this.appendDigitToPassword(Number(key));
      } else if (key === "Backspace") {
        this.deleteValue();
      } else if (key === "Delete") {
        this.deleteAllValue();
      } else if (key === "Enter") {
        this.submit();
      }
    },
    submit() {
      if (this.completedInput) {
        this.showLoading = true;
        axios
          .post("http://127.0.0.1:8000/api/login", { password: this.passValue })
          .then((response) => {
            console.log(response);
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: "success",
              title: `Welcome ${response.data["username"]}`,
            });
            this.$router.push("/dashboard");
            localStorage.setItem("StaffName", response.data["username"]);
          })
          .catch((error) => {
            this.showLoading = false;
            Swal.fire({
              icon: 'error',
              title: 'Failed'
            })
            console.log(error)
          });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Please enter 6 digits first",
          timer: 1500,
          showConfirmButton: false,
        });
      }
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

<style>
#loader {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  animation: l8-0 1.5s infinite linear;
}
#loader:before,
#loader:after {
  content: "";
  grid-area: 1/1;
  background: #25b09b;
  clip-path: polygon(0 0%, 100% 0, 100% 100%);
  animation: inherit;
  animation-name: l8-1;
}
#loader:after {
  --s: -1;
}
@keyframes l8-0 {
  66% {
    transform: skewX(0deg);
  }
  80%,
  100% {
    transform: skewX(-45deg);
  }
}
@keyframes l8-1 {
  0% {
    transform: scale(var(--s, 1)) translate(-0.5px, 0);
  }
  33% {
    transform: scale(var(--s, 1)) translate(calc(1px - 50%), calc(1px - 50%));
  }
  66% {
    transform: scale(var(--s, 1)) translate(calc(1px - 50%), 0%);
  }
  100% {
    transform: scale(var(--s, 1)) translate(calc(0.5px - 50%), 0%);
  }
}
</style>