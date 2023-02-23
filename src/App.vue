<script setup>
import Sidebar from "./components/Sidebar.vue";
import Forms from "./components/Forms.vue";
import ThankYouComponent from "./components/ThankYou.vue";

import { ref, computed, onUpdated, onMounted, onBeforeUpdate } from "vue";

const multiSteps = ["PersonalInfo", "SelectPlan", "AddOns", "Summary"];
let formValid = ref(false);
let shake = ref(false);
let buttonText = ref("next step");
let ThankYou = ref(false);
let ActiveCard = ref(false);
let selectPlanValidate = "";
let currentIndex = ref(0);
const grandchildRef = ref();
let clearIntervalId;
let clearSetTimeoutId;
function next() {
  grandchildRef.value.validate();
  if (!formValid.value) {
    shake.value = !shake.value;
  }
  clearIntervalId = setTimeout(() => {
    if (formValid.value) {
      currentIndex.value += 1;
      shake.value = false;
    }
  }, 0.0000001);

  if (currentIndex.value > 0) {
    clearTimeout(clearIntervalId);
  }
  if (formValid.value && !ActiveCard.value) {
    selectPlanValidate = "invalid";
    shake.value = !shake.value;
  }
  clearSetTimeoutId = setTimeout(() => {
    if (formValid.value && ActiveCard.value) {
      currentIndex.value += 1;
      shake.value = false;
      selectPlanValidate = "";
    }
  }, 0.0000001);
  if (currentIndex.value > 1) {
    clearTimeout(clearSetTimeoutId);
  }
  if (currentIndex.value >= 2) {
    currentIndex.value += 1;
  }

  if (currentIndex.value > multiSteps.length - 1) {
    ThankYou.value = true;
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
  formValid.value;
});

const SelectActivePlan = (e) => {
  ActiveCard.value = true;
};
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

      <div>
        <Forms
          v-if="!ThankYou"
          :selectPlanValidate="selectPlanValidate"
          :shake="shake"
          @isValid="newValidValue"
          ref="grandchildRef"
          @next="next"
          @previous="previous"
          @activeCard="SelectActivePlan($event)"
          :Index="currentIndex"
          :buttonText="nextBtnText" />
        <ThankYouComponent class="-md:mt-8" v-if="ThankYou" />
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: hsl(204, 100%, 93%);
}
</style>
