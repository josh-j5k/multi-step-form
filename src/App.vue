<script setup>
import Sidebar from "./components/Sidebar.vue";
import Forms from "./components/Forms.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import SelectPlan from "./components/SelectPlan.vue";
import Buttons from "./components/Buttons.vue";

let currentComponent = 0;
const multiSteps = ["PersonalInfo", "SelectPlan"];

function MultiStepForm(steps) {}
function nextStep() {
  currentItem++;
  if (currentComponent >= multiSteps.length - 1) {
    return currentComponent;
  }
  MultiStepForm(currentComponent);
}
function previousStep() {
  currentItem--;
  if (currentComponent < 0) {
    currentComponent = 0;
  }
  MultiStepForm(currentComponent);
}
</script>

<template>
  <div>
    <div
      class="md:max-w-4xl mx-auto md:mt-5 md:grid grid-cols-[40%_60%] md:bg-white md:py-4 md:px-4 rounded-2xl h-[85vh] shadow-[0_7px_10px_hsla(243, 100%, 62%, 0.5)] md:relative">
      <Sidebar />
      <Forms :Component="multiSteps" />
    </div>
  </div>

  <div
    class="bg-white py-4 px-4 md:absolute left-1/2 md:-translate-x-[20%] -md:translate-y-9 bottom-24 md:w-[450px]">
    <Buttons @nextStep="nextStep($event)" @previousStep="previousStep" />
  </div>
</template>

<style>
body {
  background-color: hsl(204, 100%, 93%);
}
</style>
