<script setup>
import Sidebar from "./components/Sidebar.vue";
import Forms from "./components/Forms.vue";
import Buttons from "./components/Buttons.vue";
import { ref, computed, onUpdated } from "vue";

let valid = ref(false);

const grandchildComponentRef = ref();

onUpdated(() => {
  grandchildComponentRef.value.doSomething();
});

let buttonText = ref("next step");

const nextBtnText = computed(() => {
  if (currentComponent.value < multiSteps.length - 1) {
    buttonText.value = "next step";
  } else {
    buttonText.value = "confirm";
  }
  return buttonText.value;
});

let currentComponent = ref(0);
const multiSteps = ["PersonalInfo", "SelectPlan", "AddOns"];

function next() {
  currentComponent.value++;
  if (currentComponent.value > multiSteps.length - 1) {
    currentComponent.value = 0;
  }
}
function previous() {
  currentComponent.value--;
  if (currentComponent.value < 0) {
    return currentComponent.value;
  }
}

// const currComp = computed(() => currentComponent);
</script>

<template>
  <div>
    <div
      class="md:max-w-4xl mx-auto md:mt-5 md:grid grid-cols-[40%_60%] md:bg-white md:py-4 md:px-4 rounded-2xl h-[85vh] shadow-[0_7px_10px_hsla(243, 100%, 62%, 0.5)] md:relative">
      <Sidebar :Index="currentComponent" />
      <Forms
        :valid="valid"
        ref="grandchildComponentRef"
        :componentIndex="currentComponent" />
    </div>
  </div>

  <div
    class="bg-white py-4 px-4 md:absolute left-1/2 md:-translate-x-[20%] -md:translate-y-9 bottom-24 md:w-[450px]">
    <Buttons
      @nextStep="next"
      @previousStep="previous"
      :showBtn="currentComponent"
      :buttonText="nextBtnText" />
  </div>
</template>

<style>
body {
  background-color: hsl(204, 100%, 93%);
}
</style>
