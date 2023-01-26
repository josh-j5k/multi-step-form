<script setup>
const doSomething1 = () => {
  console.log("Im robin");
};
defineExpose({
  doSomething1,
});
</script>

<template>
  <div
    class="-md:relative top-[-2rem] -md:w-[90vw] bg-white py-5 px-5 rounded-xl -md:mx-auto z-50">
    <div class="">
      <h1 class="font-bold text-3xl text-marine pb-2">Personal Info</h1>
      <p class="text-coolg pb-5">
        Please provide your name, email address and phone number
      </p>
    </div>
    <div>
      <form class="font-Ubuntu">
        <div class="flex flex-col mb-5">
          <div class="pb-1">
            <label class="text-marine capitalize" for="name"> name</label>
          </div>

          <input
            class="outline-none border border-solid border-[#ccc] py-3 px-3 rounded-lg text-marine focus:border-purplish"
            type="text"
            name="Name"
            id="name"
            placeholder="e.g. Stephen King" />
        </div>
        <div class="flex flex-col mb-5">
          <div class="pb-1">
            <label class="text-marine capitalize" for="email">
              Email Address</label
            >
          </div>

          <input
            class="outline-none border border-solid border-[#ccc] py-3 px-3 rounded-lg text-marine focus:border-purplish"
            type="email"
            name="Email"
            id="email"
            placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div class="flex flex-col mb-5">
          <div class="pb-1">
            <label class="text-marine capitalize" for="phoneNumber">
              Phone Number</label
            >
          </div>

          <input
            class="outline-none border border-solid border-[#ccc] py-3 px-3 rounded-lg text-marine focus:border-purplish"
            type="tel"
            name="Phone Number"
            id="phoneNumber"
            placeholder="e.g. +1 234 456 7890" />
        </div>
      </form>
    </div>
  </div>
</template>
