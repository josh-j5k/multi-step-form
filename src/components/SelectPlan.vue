<template>
  <div
    class="-md:relative top-[-2rem] -md:w-[90vw] bg-white py-5 px-5 rounded-xl -md:mx-auto z-50">
    <div class="">
      <h1 class="font-bold text-3xl text-marine pb-2">Select your plan</h1>
      <p class="text-coolg pb-5">
        You have the option of monthly or yearly billing
      </p>
    </div>

    <div class="flex justify-evenly -md:flex-col gap-4 mb-7">
      <!-- cards -->
      <div
        activeCard="arcade"
        @click="SetActiveCard"
        class="-md:flex gap-3 border border-solid rounded-lg flex-1 md:py-10 md:pl-4 py-3 px-3 items-center h-fit cursor-pointer hover:border-purplish"
        :class="[activeCard === 'arcade' ? 'active-card' : '']">
        <img
          class="md:relative top-[-1.5rem]"
          src="../assets/images/icon-arcade.svg" />
        <!-- info -->
        <div class="md:relative top-5">
          <p class="text-marine capitalize font-bold">arcade</p>
          <div>
            <!-- monthly price -->
            <div v-if="monthly" class="text-sm">
              <span class="text-[#a3a3a3]"> $9/mo </span>
            </div>
            <!-- yearly price -->
            <div v-if="yearly" class="text-[#a3a3a3] text-sm flex flex-col">
              <span> $90/yr </span>
              <span class="text-marine font-bold"> 2 months free </span>
            </div>
          </div>
        </div>
      </div>
      <!-- cards -->
      <div
        activeCard="advanced"
        @click="SetActiveCard"
        class="-md:flex gap-3 border border-solid rounded-lg flex-1 md:py-10 md:pl-4 py-3 px-3 items-center h-fit cursor-pointer hover:border-purplish"
        :class="[activeCard === 'advanced' ? 'active-card' : '']">
        <img
          class="md:relative md:top-[-1.5rem]"
          src="../assets/images/icon-advanced.svg" />
        <div class="md:relative top-5">
          <p class="text-marine capitalize font-bold">advanced</p>
          <div>
            <!-- monthly price -->
            <div v-if="monthly" class="text-sm">
              <span class="text-[#a3a3a3]"> $12/mo </span>
            </div>
            <!-- yearly price -->
            <div v-if="yearly" class="text-sm flex flex-col">
              <span class="text-[#a3a3a3]"> $120/yr </span>
              <span class="text-marine font-bold"> 2 months free </span>
            </div>
          </div>
        </div>
      </div>
      <!-- cards -->
      <div
        activCard="pro"
        @click="SetActiveCard"
        class="-md:flex gap-3 border border-solid rounded-lg flex-1 md:py-10 md:pl-4 py-3 px-3 items-center h-fit cursor-pointer hover:border-purplish"
        :class="[activeCard === 'pro' ? 'active-card' : '']">
        <img
          class="md:relative md:top-[-1.5rem]"
          src="../assets/images/icon-pro.svg" />
        <div class="md:relative top-5">
          <p class="text-marine capitalize font-bold">pro</p>
          <div>
            <!-- monthly price -->
            <div v-if="monthly" class="text-sm">
              <span class="text-[#a3a3a3]"> $15/mo </span>
            </div>
            <!-- yearly price -->
            <div v-if="yearly" class="text-sm flex flex-col">
              <span class="text-[#a3a3a3]"> $150/yr </span>
              <span class="text-marine font-bold"> 2 months free </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex py-3 rounded-lg justify-center bg-gray-100">
      <div
        class="capitalize mr-5"
        :class="[monthly ? 'text-marine' : 'text-[#818181]']">
        monthly
      </div>
      <div class="self-center">
        <div
          @click="monthYearToggle"
          class="bg-marine px-3 rounded-xl py-[4px] cursor-pointer">
          <div
            class="bg-white w-3 h-3 rounded-rounded-all border-solid border-marine shadow-lg -translate-x-[8px]"
            :class="[
              yearly
                ? 'translate-x-2 transition-transform'
                : '-translate-x-2 transition-transform',
            ]"></div>
        </div>
      </div>

      <div
        class="capitalize ml-5"
        :class="[yearly ? 'text-marine' : 'text-[#818181]']">
        yearly
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectPlan",

  data() {
    return {
      yearly: false,
      monthly: true,
      activeCard: "",
    };
  },
  methods: {
    monthYearToggle() {
      this.yearly = !this.yearly;
      this.monthly = !this.monthly;
    },

    SetActiveCard(e) {
      const attrVal = e.currentTarget.attributes[0].value;

      this.activeCard = attrVal;
    },
  },
};
</script>

<style>
.active-card {
  border-color: var(--Purplish-blue);
}
</style>
