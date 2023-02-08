<script setup>
import { ref, onUpdated, computed, onMounted } from "vue";

const props = defineProps({
  yearly: Boolean,
  monthly: Boolean,
  plan: String,
  price: Number,
  addons: Object,
});

onUpdated(() => {});

const monthYearToggled = computed(() => {
  if (props.yearly) {
    return "year";
  }
  if (props.monthly) {
    return "month";
  }
});

const moYrToggled = computed(() => {
  if (props.yearly) {
    return "yr";
  }
  if (props.monthly) {
    return "mo";
  }
});
const MonthlyYearlyToggled = computed(() => {
  if (props.yearly) {
    return "Yearly";
  }
  if (props.monthly) {
    return "monthly";
  }
});
const total = computed(() => {
  let arr = [];
  for (const key in props.addons) {
    if (Object.hasOwnProperty.call(props.addons, key)) {
      const element = props.addons[key];
      arr.push(element.price);
    }
  }
  let result = 0;
  if (arr.length > 0) {
    result = arr.reduce((a, b) => a + b);
  }
  return result + props.price;
});
const emits = defineEmits(["changeBtn"]);
const changeBtn = () => {
  emits("changeBtn");
};
</script>

<template>
  <div
    class="-md:relative top-[-2rem] -md:w-[90vw] py-5 px-5 rounded-xl -md:mx-auto z-50 bg-white">
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
          <span class="font-bold -ml-1"> {{ moYrToggled }} </span>
        </div>
      </div>
      <hr class="my-5" />
      <div class="flex justify-between" v-for="title in props.addons">
        <div class="text-coolg">
          {{ title.title }}
          <!-- <span > Online service </span> -->
        </div>
        <div class="text-coolg">
          <span class=""> $ </span>
          <span class="-ml-1"> {{ title.price }} </span>
          <span class="-ml-1"> / </span>
          <span class="-ml-1"> {{ moYrToggled }} </span>
        </div>
      </div>
    </div>
    <div class="flex justify-between py-5 px-5">
      <div class="text-coolg">
        <span> Total </span>
        <span> (per {{ monthYearToggled }}) </span>
      </div>
      <div>
        <span class="font-bold text-lg text-purplish"> +$ </span>
        <!-- <span class="-ml-1 font-bold text-lg text-purplish"> {{ total }} </span> -->
        <span class="-ml-1 font-bold text-lg text-purplish"> {{ total }} </span>
        <span class="-ml-1 font-bold text-lg text-purplish"> / </span>
        <span class="-ml-1 font-bold text-lg text-purplish">
          {{ moYrToggled }}
        </span>
      </div>
    </div>
  </div>
</template>
