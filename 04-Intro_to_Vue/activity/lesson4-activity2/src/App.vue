<script setup>
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };

import { ref, onMounted } from "vue";
import * as bootstrap from "bootstrap";
const text = ref("Vue Form");

// Disables Submit Button //
const isButtonDisabled = ref(true);
let tooltipInstance = null;

// Triggers Tooltip //
onMounted(() => {
  const tooltipTriggerEl = document.querySelector('[data-bs-toggle="tooltip"]');
  if (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  }
});

// To Enable the Submit Button //
function enableSubmit() {
  isButtonDisabled.value = false;

  // To Hide Toolip after Submit Enabled //
  if (tooltipInstance) {
    tooltipInstance.hide();
    tooltipInstance.dispose();
    tooltipInstance = null;
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Vue Form" /> -->
    <h1>{{ text }}</h1>
  </header>

  <main>
    <form @submit.prevent>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="enableSubmit"
      >
        Click me
      </button>

      <span
        class="d-inline-block"
        tabindex="0"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        data-bs-title="Click other button first"
      >
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="isButtonDisabled"
        >
          Submit
        </button>
      </span>
    </form>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
