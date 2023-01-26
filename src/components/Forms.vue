<script setup>
import PersonalInfo from "./PersonalInfo.vue";
import SelectPlan from "./SelectPlan.vue";
import AddOns from "./AddOns.vue";
import { ref, computed, onMounted } from "vue";

defineProps({ componentIndex: Number });
let year = ref(false);
let month = ref(true);
const MonthYearToggle = () => {
  year.value = !year.value;
  month.value = !month.value;
};

const childComponentRef = ref();

onMounted(() => {
  console.log(childComponentRef.value);
});

const doSomething = () => {
  console.log("Im batman");
};

defineExpose({
  doSomething,
});
</script>

<template>
  <div class="md:w-[450px] pt-10">
    <PersonalInfo ref="childComponentRef" v-show="componentIndex == 0" />
    <SelectPlan
      :yearly="year"
      :monthly="month"
      @monthYearToggle="MonthYearToggle"
      v-show="componentIndex == 1" />
    <AddOns :yearly="year" :monthly="month" v-show="componentIndex == 2" />
  </div>
</template>

<style></style>
