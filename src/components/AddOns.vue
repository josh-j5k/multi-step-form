<script setup>
defineProps({ yearly: Boolean, monthly: Boolean });
</script>

<template lang="">
  <div
    class="-md:relative top-[-2rem] -md:w-[90vw] bg-white py-5 px-5 rounded-xl -md:mx-auto z-50">
    <div class="">
      <h1 class="font-bold text-3xl text-marine pb-2">Pick add-ons</h1>
      <p class="text-coolg pb-5">
        Add-ons helps enhanced your gaming experience.
      </p>
    </div>
    <!-- Add-ons container -->
    <div class="flex justify-evenly -md:text-sm flex-col gap-4 mb-7">
      <!-- add-ons item -->
      <div
        @click="testing"
        class="flex gap-3 border border-solid rounded-lg flex-1 justify-between px-5 items-center py-5 h-fit cursor-pointer hover:border-purplish -md:py-2">
        <div class="flex gap-6">
          <!-- checkbox -->
          <input
            id="onlineService"
            type="checkbox"
            class="w-5 h-5 self-center cursor-pointer rounded focus:text-purplish checked:text-purplish focus:ring-0" />
          <label for="onlineService " class="cursor-pointer flex flex-col">
            <span class="text-marine font-bold">Online service</span>
            <span class="text-coolg">Access to multiplayer games</span>
          </label>
        </div>

        <div>
          <span v-if="monthly" class="text-purplish"> +$1/mo </span>
          <span v-if="yearly" class="text-purplish"> +$10/yr </span>
        </div>
      </div>
      <!-- add-ons item -->
      <div
        class="flex gap-3 border border-solid rounded-lg flex-1 justify-between px-5 items-center py-5 h-fit cursor-pointer hover:border-purplish -md:py-2">
        <div class="flex gap-6">
          <!-- checkbox -->
          <input
            id="onlineService"
            type="checkbox"
            class="w-5 h-5 cursor-pointer self-center rounded focus:text-purplish checked:text-purplish focus:ring-0" />
          <label for="onlineService " class="cursor-pointer flex flex-col">
            <span class="text-marine font-bold">Larger storage</span>
            <span class="text-coolg">Extra 1TB of cloud save</span>
          </label>
        </div>

        <div>
          <span v-if="monthly" class="text-purplish"> +$2/mo </span>
          <span v-if="yearly" class="text-purplish"> +$20/yr </span>
        </div>
      </div>
      <!-- add-ons item -->
      <div
        class="flex gap-3 border border-solid rounded-lg flex-1 justify-between px-5 items-center py-5 h-fit cursor-pointer hover:border-purplish -md:py-2">
        <div class="flex gap-6">
          <!-- checkbox -->
          <input
            id="onlineService"
            type="checkbox"
            class="cursor-pointer w-5 h-5 self-center rounded focus:text-purplish checked:text-purplish focus:ring-0" />
          <label for="onlineService " class="cursor-pointer flex flex-col">
            <span class="text-marine font-bold">Customizable Profile </span>
            <span class="text-coolg">Custom theme on your profile</span>
          </label>
        </div>

        <div>
          <span v-if="monthly" class="text-purplish"> +$2/mo </span>
          <span v-if="yearly" class="text-purplish"> +$20/yr </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
