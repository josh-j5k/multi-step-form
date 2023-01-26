<script setup>
const emits = defineEmits(["nextStep", "previousStep"]);
function nextStep(e) {
  emits("nextStep", e);
}
function previousStep(e) {
  emits("previousStep", e);
}

defineProps({
  showBtn: {
    type: Number,
  },

  buttonText: {
    type: String,
  },
});
</script>

<template>
  <div class="flex justify-between">
    <button
      v-show="showBtn > 0"
      @click="previousStep"
      class="capitalize cursor-pointer hover:text-marine text-[#a8a8a8]">
      go back
    </button>
    <button
      type="submit"
      @click="nextStep"
      class="bg-marine text-white rounded-md border-none py-2 px-4 capitalize cursor-pointer md:absolute bottom-2 right-0">
      {{ buttonText }}
    </button>
  </div>
</template>
