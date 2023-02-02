<script setup>
import { ref, onUpdated, onMounted } from "vue";

let invalidEmail = ref(false);
let invalidEmailError = "Please enter a valid email";
let emptyFieldError = "This field is required";

let Name = null;
let Email = null;

let PhoneNumber = null;

let isEmailValid = (email) => {
  const EmailPattern = RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  );
  return EmailPattern.test(email);
};

const validation = (valid) => {
  if (Name == null) {
    Name = "";
  }
  if (Email == null) {
    Email = "";
  } else if (!isEmailValid(Email) && Email !== "") {
    invalidEmail.value = true;
  } else {
    invalidEmail.value = false;
  }

  if (PhoneNumber == null) {
    PhoneNumber = "";
  }
};

defineExpose({
  validation,
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
          <div class="pb-1 flex justify-between">
            <label class="text-marine capitalize" for="name"> name</label>
            <div v-show="Name == ''" class="text-sberry">
              {{ emptyFieldError }}
            </div>
          </div>

          <input
            v-model="Name"
            class="outline-none border border-solid border-[#ccc] py-3 px-3 rounded-lg text-marine focus:border-purplish"
            :class="[Name == '' ? 'error' : '']"
            type="text"
            name="Name"
            id="name"
            placeholder="e.g. Stephen King" />
        </div>
        <div class="flex flex-col mb-5">
          <div class="pb-1 flex justify-between">
            <label class="text-marine capitalize" for="Email">
              Email Address</label
            >
            <div v-show="Email === ''" class="text-sberry">
              {{ emptyFieldError }}
            </div>
            <div v-show="invalidEmail" class="text-sberry">
              {{ invalidEmailError }}
            </div>
          </div>

          <input
            v-model="Email"
            class="outline-none border border-solid border-[#ccc] py-3 px-3 rounded-lg text-marine focus:border-purplish"
            :class="[Email == '' ? 'error' : invalidEmail ? 'error' : '']"
            type="email"
            name="Email"
            id="Email"
            placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div class="flex flex-col mb-5">
          <div class="pb-1 flex justify-between">
            <label class="text-marine capitalize" for="phoneNumber">
              Phone Number</label
            >
            <div v-show="PhoneNumber == ''" class="text-sberry">
              {{ emptyFieldError }}
            </div>
          </div>

          <input
            v-model="PhoneNumber"
            class="outline-none border border-solid border-[#ccc] py-3 px-3 rounded-lg text-marine focus:border-purplish"
            :class="[PhoneNumber == '' ? 'error' : '']"
            type="tel"
            name="PhoneNumber"
            id="phoneNumber"
            placeholder="e.g. +1 234 456 7890" />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.error {
  border-color: var(--Strawberry-red);
}
</style>
