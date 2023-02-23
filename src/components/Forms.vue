<script setup>
import PersonalInfo from "./PersonalInfo.vue";
import SelectPlan from "./SelectPlan.vue";
import AddOns from "./AddOns.vue";
import Summary from "./Summary.vue";
import Buttons from "./Buttons.vue";
import { ref, computed, onMounted, onUpdated } from "vue";

const props = defineProps({
  Index: Number,
  buttonText: String,
  shake: Boolean,
  selectPlanValidate: String,
});
const emits = defineEmits(["next", "previous", "isValid", "activeCard"]);
let attrVal = null;
let plan = ref();
let year = ref(false);
let month = ref(true);
let Price = ref(0);
let addons = ref();
let valida = ref();

const childComponentRef = ref();

const MonthYearToggle = () => {
  year.value = !year.value;
  month.value = !month.value;
};

const SetSelectData = (e) => {
  emits("activeCard", e);
  attrVal = e.currentTarget.getAttribute("activeCard");
  plan = attrVal;
};

onMounted(() => {
  Valid.value;
});
onUpdated(() => {
  Valid.value;
});
const Valid = computed(() => {
  let eValidate = valida.value;
  emits("isValid", eValidate);
  return eValidate;
});
const validate = () => {
  childComponentRef.value.validation();
};
function SelectPlanValue(value) {
  Price.value = value;
}

function updatedObj(obj) {
  addons.value = obj;
}
const isValid = (value) => {
  valida.value = value;
};
function next() {
  emits("next");
}
function previous() {
  emits("previous");
}
defineExpose({ validate });
</script>

<template>
  <div class="md:w-[450px] md:pt-10 -md:mt-8">
    <PersonalInfo
      :shake="shake"
      @new-val="isValid"
      ref="childComponentRef"
      v-show="props.Index === 0" />
    <SelectPlan
      :selectPlanValidate="selectPlanValidate"
      :yearly="year"
      :monthly="month"
      @monthYearToggle="MonthYearToggle"
      v-show="props.Index === 1"
      @setActiveCard="SetSelectData($event)"
      @onChangePrice="SelectPlanValue" />
    <AddOns
      :yearly="year"
      :monthly="month"
      v-show="props.Index === 2"
      @onChangeObj="updatedObj" />
    <Summary
      :plan="plan"
      :price="Price"
      :addons="addons"
      @changeBtn="MonthYearToggle"
      :yearly="year"
      :monthly="month"
      v-show="props.Index === 3" />
  </div>
  <div
    class="bg-white py-4 px-4 md:absolute left-1/2 md:-translate-x-[20%] -md:fixed -md:bottom-0 -md:left-0 -md:right-0 md:bottom-3 md:w-[450px]">
    <Buttons
      :class="[Index === 0 ? 'py-5' : '']"
      @nextStep="next"
      @previousStep="previous"
      :showBtn="props.Index"
      :buttonText="buttonText" />
  </div>
</template>

<style></style>
