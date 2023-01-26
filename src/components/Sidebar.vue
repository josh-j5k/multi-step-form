<script setup>
defineProps({
  Index: {
    type: Number,
  },
});
</script>

<template>
  <div
    class="flex -md:justify-center md:flex-col px-4 py-4 relative text-white">
    <div class="flex gap-x-2 items-center py-2 z-20">
      <span
        class="border border-white border-solid py-1 w-9 h-9 ml-4 mt-5 text-center rounded-rounded-all aspect-square"
        :class="[Index == 0 ? 'sideBgColor' : '']">
        1
      </span>
      <div class="flex flex-col -md:hidden">
        <p class="uppercase opacity-60 text-[14px]">step 1</p>
        <p class="uppercase font-bold tracking-widest">your info</p>
      </div>
    </div>
    <div class="flex gap-2 items-center py-2 z-20">
      <span
        class="border border-white border-solid py-1 w-9 h-9 ml-4 mt-5 text-center rounded-rounded-all aspect-square"
        :class="[Index == 1 ? 'sideBgColor' : '']"
        >2</span
      >
      <div class="flex flex-col -md:hidden">
        <p class="uppercase opacity-60 text-[14px]">step 2</p>
        <p class="uppercase font-bold tracking-widest">select plan</p>
      </div>
    </div>
    <div class="flex gap-2 items-center py-2 z-20">
      <span
        class="border border-white border-solid py-1 w-9 h-9 ml-4 mt-5 text-center rounded-rounded-all aspect-square"
        :class="[Index == 2 ? 'sideBgColor' : '']"
        >3</span
      >
      <div class="flex flex-col -md:hidden">
        <p class="uppercase opacity-60 text-[14px]">step 3</p>
        <p class="uppercase font-bold tracking-widest">add-ons</p>
      </div>
    </div>
    <div class="flex gap-2 items-center py-2 z-20">
      <span
        class="border border-white border-solid py-1 w-9 h-9 ml-4 mt-5 text-center rounded-rounded-all aspect-square"
        :class="[Index == 3 ? 'sideBgColor' : '']"
        >4</span
      >
      <div class="flex flex-col -md:hidden">
        <p class="uppercase opacity-60 text-[14px]">step 4</p>
        <p class="uppercase font-bold tracking-widest">summary</p>
      </div>
    </div>
    <img
      src="../assets/images/bg-sidebar-desktop.svg"
      alt=""
      class="absolute -md:hidden top-0 left-0 z-10 max-w-[265px]" />
    <img
      src="../assets/images/bg-sidebar-mobile.svg"
      alt=""
      class="md:hidden absolute top-0 left-0 w-full z-[-1]" />
  </div>
</template>

<style>
.sideBgColor {
  padding-top: 5.5px;
  background-color: var(--Pastel-blue);
  color: var(--Marin-blue);
  border: none;
}
</style>
