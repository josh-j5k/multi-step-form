<script setup>
import Sidebar from "./components/Sidebar.vue";
import Forms from "./components/Forms.vue";

import { ref, computed, onUpdated, onMounted } from "vue";

const multiSteps = ["PersonalInfo", "SelectPlan", "AddOns", "Summary"];
let formValid = ref(false);
let shake = ref(false);
let buttonText = ref("next step");

let currentIndex = ref(0);
const grandchildRef = ref();

function next() {
  if (formValid.value) {
    currentIndex.value += 1;
  }
  if (formValid.value === false) {
    grandchildRef.value.validate();
    shake.value = !shake.value;
  }

  if (currentIndex.value > multiSteps.length - 1) {
    currentIndex.value = 0;
  }
}
function previous() {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    return currentIndex.value;
  }
}
const newValidValue = (value) => {
  formValid.value = value;
};
onUpdated(() => {
  // grandchildRef.value.validate();
});
onMounted(() => {
  // grandchildRef.value.validate();
  formValid.value;
  // console.log(grandchildRef.value);
});

// Computed properties
const nextBtnText = computed(() => {
  if (currentIndex.value < multiSteps.length - 1) {
    buttonText.value = "next step";
  } else {
    buttonText.value = "confirm";
  }
  return buttonText.value;
});
</script>

<template>
  <div>
    <div
      class="md:max-w-4xl mx-auto md:mt-5 md:grid grid-cols-[40%_60%] md:bg-white md:py-4 md:px-4 rounded-2xl h-[85vh] shadow-[0_7px_10px_hsla(243, 100%, 62%, 0.5)] md:relative">
      <Sidebar :Index="currentIndex" />
      <Forms
        :shake="shake"
        @isValid="newValidValue"
        ref="grandchildRef"
        @next="next"
        @previous="previous"
        :Index="currentIndex"
        :buttonText="nextBtnText" />
    </div>
  </div>
</template>

<style>
body {
  background-color: hsl(204, 100%, 93%);
}
</style>
