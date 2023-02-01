<script setup>
import PersonalInfo from "./PersonalInfo.vue";
import SelectPlan from "./SelectPlan.vue";
import AddOns from "./AddOns.vue";
import Summary from "./Summary.vue";
import Buttons from "./Buttons.vue";
import { ref, computed, onMounted, onUpdated } from "vue";

const props = defineProps({ Index: Number, buttonText: String });
const emits = defineEmits(["next", "previous"]);
let year = ref(false);
let month = ref(true);
let currentComponent = ref(0);
const childComponentRef = ref();

const MonthYearToggle = () => {
  year.value = !year.value;
  month.value = !month.value;
};
const changeBtn = () => {
  year.value = !year.value;
  month.value = !month.value;
};

let valid = ref(false);
onUpdated(() => {
  currentComponent.value = props.Index;
});

// let currentIndex = ref(0);

// function next() {
//   year.value = !year.value;

//   // currentIndex.value++;

//   // if (currentIndex.value > multiSteps.length - 1) {
//   //   currentIndex.value = 0;
//   // }
// }

// // onUpdated(() => {
// //   childComponentRef.value.validation();
// //   console.log(valid);
// // });

function next() {
  emits("next");
}
function previous() {
  emits("previous");
}

// onUpdated(() => {
//   currentComponent.value = props.Index;
//   childComponentRef.value.validation();
// });

// const doSomething = () => {
//   childComponentRef.value.validation();
// };
</script>

<template>
  <div class="md:w-[450px] pt-10">
    <PersonalInfo
      :valid="valid"
      ref="childComponentRef"
      v-show="currentComponent == 0" />
    <SelectPlan
      :yearly="year"
      :monthly="month"
      @monthYearToggle="MonthYearToggle"
      v-show="currentComponent == 1" />
    <AddOns :yearly="year" :monthly="month" v-show="currentComponent == 2" />
    <Summary
      @changeBtn="changeBtn"
      :yearly="year"
      :monthly="month"
      v-show="currentComponent == 3" />
  </div>
  <div
    class="bg-white py-4 px-4 md:absolute left-1/2 md:-translate-x-[20%] -md:translate-y-9 bottom-2 md:w-[450px]">
    <Buttons
      @nextStep="next"
      @previousStep="previous"
      :showBtn="currentComponent"
      :buttonText="buttonText" />
  </div>
</template>

<style></style>
