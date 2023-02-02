<script setup>
import PersonalInfo from "./PersonalInfo.vue";
import SelectPlan from "./SelectPlan.vue";
import AddOns from "./AddOns.vue";
import Summary from "./Summary.vue";
import Buttons from "./Buttons.vue";
import { ref, computed, onMounted, onUpdated } from "vue";

const props = defineProps({ Index: Number, buttonText: String });
const emits = defineEmits(["next", "previous"]);
let attrVal = null;
let SelectData = {
  plan: "",
  price: 0,
};
let year = ref(false);
let month = ref(true);

// let currentComponent = ref(props.Index);
const childComponentRef = ref();

const MonthYearToggle = () => {
  year.value = !year.value;
  month.value = !month.value;

  console.log(SelectData);
};

const SetSelectData = (e) => {
  attrVal = e.currentTarget.getAttribute("activeCard");
  SelectData.plan = attrVal;
  if (attrVal === "arcade") {
    SelectData.price = 9;
  }

  if (attrVal === "advanced") {
    SelectData.price = 12;
  }
  if (attrVal === "pro") {
    SelectData.price = 15;
  }

  console.log(SelectData);
};

onMounted(() => {});

// const comSelectData = computed(() => {
//   year.value
//     ? (SelectData.price *= 10)
//     : month.value
//     ? (SelectData.price /= 10)
//     : "";
// });
function next() {
  emits("next");
}
function previous() {
  emits("previous");
}
</script>

<template>
  <div class="md:w-[450px] pt-10">
    <PersonalInfo ref="childComponentRef" v-show="props.Index == 0" />
    <SelectPlan
      :yearly="year"
      :monthly="month"
      @monthYearToggle="MonthYearToggle"
      v-show="props.Index == 1"
      :SelectData="SelectData"
      @setActiveCard="SetSelectData($event)" />
    <AddOns :yearly="year" :monthly="month" v-show="props.Index == 2" />
    <Summary
      :elementData="SelectData"
      @changeBtn="MonthYearToggle"
      :yearly="year"
      :monthly="month"
      v-show="props.Index == 3" />
  </div>
  <div
    class="bg-white py-4 px-4 md:absolute left-1/2 md:-translate-x-[20%] -md:translate-y-9 bottom-2 md:w-[450px]">
    <Buttons
      @nextStep="next"
      @previousStep="previous"
      :showBtn="props.Index"
      :buttonText="buttonText" />
  </div>
</template>

<style></style>
