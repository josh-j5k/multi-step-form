<script setup>
import PersonalInfo from "./PersonalInfo.vue";
import SelectPlan from "./SelectPlan.vue";
import AddOns from "./AddOns.vue";

defineProps({ componentIndex: Number });
</script>

<template>
  <div class="md:w-[450px] pt-10">
    <PersonalInfo v-show="componentIndex == 0" />

    <Transition name="slide-fade">
      <SelectPlan v-show="componentIndex == 1" />
    </Transition>
    <Transition name="slide-fade">
      <AddOns v-show="componentIndex == 2" />
    </Transition>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.3s ease-out;
} */

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

/* .slide-fade-leave-to {
  transform: translateX(20px); 
  opacity: 0;
} */
</style>
