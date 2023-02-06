<script setup>
import { ref, onMounted, onUpdated, computed } from "vue";
defineProps({ yearly: Boolean, monthly: Boolean });

const emits = defineEmits(["onChangeObj"]);

let addOnObj = ref({});
let obj1 = {};
let obj2 = {};
let obj3 = {};

const onlineServicePrice = ref(0);
const LargeStoragePrice = ref(0);
const CustomizablePrice = ref(0);

// Refs for Element Id
const onlineServiceId = ref();
const largeStorageId = ref();
const customizableProfileId = ref();
//refs for Item Title and Price
const objOneTitle = ref();
const objOnePrice = ref();
const objTwoTitle = ref();
const objTwoPrice = ref();
const objThreeTitle = ref();
const objThreePrice = ref();

const onlineServiceBorderToggle = ref(false);
const localStorageBorderToggle = ref(false);
const customizableProfileBorderToggle = ref(false);
//
function SelectOnlineService() {
  onlineServiceId.value.checked = !onlineServiceId.value.checked;
  onlineServiceBorderToggle.value = !onlineServiceBorderToggle.value;

  if (!onlineServiceId.value.checked) {
    delete addOnObj.value.obj1;
  }
}
function SelectLargeStorage() {
  largeStorageId.value.checked = !largeStorageId.value.checked;
  localStorageBorderToggle.value = !localStorageBorderToggle.value;

  if (!largeStorageId.value.checked) {
    delete addOnObj.value.obj2;
  }
}
function SelectCustomizable() {
  customizableProfileId.value.checked = !customizableProfileId.value.checked;
  customizableProfileBorderToggle.value =
    !customizableProfileBorderToggle.value;

  if (!customizableProfileId.value.checked) {
    delete addOnObj.value.obj3;
  }
}

//
onMounted(() => {
  SelectOnlineService;
  SelectLargeStorage;
  SelectCustomizable;
});
onUpdated(() => {
  if (onlineServiceId.value.checked) {
    onlineServicePrice.value = parseInt(objOnePrice.value.innerHTML);
    obj1.title = objOneTitle.value.innerHTML;
    obj1.price = onlineServicePrice.value;
    addOnObj.value.obj1 = obj1;
  }
  if (largeStorageId.value.checked) {
    LargeStoragePrice.value = parseInt(objTwoPrice.value.innerHTML);
    obj2.title = objTwoTitle.value.innerHTML;
    obj2.price = LargeStoragePrice.value;

    addOnObj.value.obj2 = obj2;
  }

  if (customizableProfileId.value.checked) {
    CustomizablePrice.value = parseInt(objThreePrice.value.innerHTML);
    obj3.title = objThreeTitle.value.innerHTML;
    obj3.price = CustomizablePrice.value;

    addOnObj.value.obj3 = obj3;
  }
  AddOns.value;
});

const AddOns = computed(() => {
  let updatedObj = addOnObj.value;
  emits("onChangeObj", updatedObj);
  return updatedObj;
});
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
        @click="SelectOnlineService"
        :class="[onlineServiceBorderToggle ? 'active-card' : '']"
        class="flex gap-3 border border-solid rounded-lg flex-1 justify-between px-5 items-center py-5 h-fit cursor-pointer hover:border-purplish -md:py-2">
        <div class="flex gap-6">
          <!-- checkbox -->
          <input
            ref="onlineServiceId"
            id="onlineService"
            type="checkbox"
            class="w-5 h-5 self-center cursor-pointer rounded focus:text-purplish checked:text-purplish focus:ring-0" />
          <label for="onlineService " class="cursor-pointer flex flex-col">
            <span class="text-marine font-bold" ref="objOneTitle"
              >Online service</span
            >
            <span class="text-coolg">Access to multiplayer games</span>
          </label>
        </div>

        <div class="text-purplish">
          <div v-if="monthly">
            <span>+$</span><span ref="objOnePrice">1</span>
            <span>/mo</span>
          </div>
          <div v-if="yearly">
            <span>+$</span><span ref="objOnePrice">10</span><span>/yr</span>
          </div>
        </div>
      </div>
      <!-- add-ons item -->
      <div
        @click="SelectLargeStorage"
        :class="[localStorageBorderToggle ? 'active-card' : '']"
        class="flex gap-3 border border-solid rounded-lg flex-1 justify-between px-5 items-center py-5 h-fit cursor-pointer hover:border-purplish -md:py-2">
        <div class="flex gap-6">
          <!-- checkbox -->
          <input
            ref="largeStorageId"
            id="largeStorage"
            type="checkbox"
            class="w-5 h-5 cursor-pointer self-center rounded focus:text-purplish checked:text-purplish focus:ring-0" />
          <label for="largeStorage " class="cursor-pointer flex flex-col">
            <span class="text-marine font-bold" ref="objTwoTitle"
              >Larger storage</span
            >
            <span class="text-coolg">Extra 1TB of cloud save</span>
          </label>
        </div>

        <div class="text-purplish">
          <div v-if="monthly">
            <span>+$</span><span ref="objTwoPrice">2</span><span>/mo</span>
          </div>
          <div v-if="yearly">
            <span>+$</span><span ref="objTwoPrice">20</span><span>/yr</span>
          </div>
        </div>
      </div>
      <!-- add-ons item -->
      <div
        @click="SelectCustomizable"
        :class="[customizableProfileBorderToggle ? 'active-card' : '']"
        class="flex gap-3 border border-solid rounded-lg flex-1 justify-between px-5 items-center py-5 h-fit cursor-pointer hover:border-purplish -md:py-2">
        <div class="flex gap-6">
          <!-- checkbox -->
          <input
            ref="customizableProfileId"
            id="customizableProfile"
            type="checkbox"
            class="cursor-pointer w-5 h-5 self-center rounded focus:text-purplish checked:text-purplish focus:ring-0" />
          <label
            for="customizableProfile "
            class="cursor-pointer flex flex-col">
            <span class="text-marine font-bold" ref="objThreeTitle"
              >Customizable Profile
            </span>
            <span class="text-coolg">Custom theme on your profile</span>
          </label>
        </div>

        <div class="text-purplish">
          <div v-if="monthly">
            <span>+$</span><span ref="objThreePrice">2</span><span>/mo</span>
          </div>
          <div v-if="yearly">
            <span>+$</span><span ref="objThreePrice">20</span><span>/yr</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
