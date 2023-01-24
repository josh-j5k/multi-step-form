<script setup>
const emits = defineEmits(["nextStep", "previousStep"]);
function nextStep(e) {
  emits("nextStep", e);
}
function previousStep(e) {
  emits("previousStep", e);
}
</script>

<template>
  <div class="flex justify-between">
    <button
      type="submit"
      @click.prevent="previousStep"
      class="capitalize cursor-pointer hover:text-marine text-[#a8a8a8]">
      go back
    </button>
    <button
      type="submit"
      @click.prevent="nextStep"
      class="bg-marine text-white rounded-md border-none py-2 px-4 capitalize cursor-pointer">
      next step
    </button>
  </div>
</template>
