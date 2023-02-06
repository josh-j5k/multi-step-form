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
let plan = ref(null);
let year = ref(false);
let month = ref(true);
let Price = ref(0);
let addons = ref("");
// let currentComponent = ref(props.Index);
const childComponentRef = ref();

const MonthYearToggle = () => {
  year.value = !year.value;
  month.value = !month.value;
};

const SetSelectData = (e) => {
  attrVal = e.currentTarget.getAttribute("activeCard");
  plan = attrVal;
};

// onUpdated(() => {});
// onMounted(() => testme);

function testme(value) {
  Price.value = value;
}

function updatedObj(obj) {
  addons.value = obj;
}

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
      @setActiveCard="SetSelectData($event)"
      @onChangePrice="testme" />
    <AddOns
      :yearly="year"
      :monthly="month"
      v-show="props.Index == 2"
      @onChangeObj="updatedObj" />
    <Summary
      :plan="plan"
      :price="Price"
      :addons="addons"
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
