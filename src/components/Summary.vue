<script setup>
import { ref, onUpdated, computed } from "vue";

const props = defineProps({
  yearly: Boolean,
  monthly: Boolean,
  plan: String,
  price: Number,
});

const MonthlyYearlyToggled = computed(() => {
  if (props.yearly) {
    return "Yearly";
  }
  if (props.monthly) {
    return "monthly";
  }
});

onUpdated(() => {});
const emits = defineEmits(["changeBtn"]);
const changeBtn = () => {
  emits("changeBtn");
};
</script>

<template>
  <div
    class="-md:relative top-[-2rem] -md:w-[90vw] py-5 px-5 rounded-xl -md:mx-auto z-50">
    <div class="">
      <h1 class="font-bold text-3xl text-marine pb-2">Finishing up</h1>
      <p class="text-coolg pb-5">
        Double-check everything looks OK before confirming.
      </p>
    </div>
    <div class="flex justify-evenly flex-col py-5 px-5 rounded-lg bg-gray-100">
      <div class="flex justify-between">
        <div>
          <span class="font-bold text-marine capitalize">
            {{ props.plan }}</span
          >
          <span class="font-bold text-marine capitalize">
            ({{ MonthlyYearlyToggled }})
          </span>
          <div
            @click="changeBtn"
            class="capitalize underline text-purplish cursor-pointer">
            change
          </div>
        </div>
        <div class="text-marine">
          <span class="font-bold"> $ </span>
          <span class="font-bold -ml-1"> {{ props.price }} </span>
          <span class="font-bold -ml-1"> / </span>
          <span class="font-bold -ml-1"> mo </span>
        </div>
      </div>
      <hr class="my-5" />
      <div class="flex justify-between">
        <div>
          <span class="text-coolg"> Online service </span>
        </div>
        <div class="text-coolg">
          <span class=""> $ </span>
          <span class="-ml-1"> 1 </span>
          <span class="-ml-1"> / </span>
          <span class="-ml-1"> mo </span>
        </div>
      </div>
    </div>
    <div class="flex justify-between py-5 px-5">
      <div class="text-coolg">
        <span> Total </span>
        <span> (per month) </span>
      </div>
      <div>
        <span class="font-bold text-lg text-purplish"> +$ </span>
        <span class="-ml-1 font-bold text-lg text-purplish"> 10 </span>
        <span class="-ml-1 font-bold text-lg text-purplish"> / </span>
        <span class="-ml-1 font-bold text-lg text-purplish"> mo </span>
      </div>
    </div>
  </div>
</template>
