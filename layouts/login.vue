<template>
  <div class="bg-pink-300 dark:bg-black">
    <div class="flex items-center justify-center">
      <button
        @click="
          setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
        "
      >
        <svg
          v-if="$colorMode.value == 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 dark:text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </button>
    </div>
    <div class="flex items-center justify-center w-full h-screen">
      <div
        class="
          card
          2xl:w-96
          xl:w-96
          lg:w-96
          md:w-96
          2xl:mr-0
          xl:mr-0
          lg:mr-0
          bg-base-100
          dark:bg-gray-400
          shadow-xl
        "
      >
        <figure>
          <img
            src="@/assets/img/bg.jpg.webp"
            class="w-32 h-32 rounded-full mt-5"
          />
        </figure>
        <div class="card-body">
          <div
            class="card-title dark:text-white flex items-center justify-center"
          >
            خوش اومدید
          </div>
          <div
            class="card-title flex items-center dark:text-white justify-center"
          >
            ثبت نام
          </div>
          <div class="card-title">
            <input
              v-model="username"
              style="direction: rtl"
              class="input border mt-3 w-full border-gray-300"
              placeholder="ایمیل"
            />
          </div>
          <div class="card-title">
            <input
              v-model="password"
              style="direction: rtl"
              class="input w-full border border-gray-300 mt-3"
              placeholder="پسورد"
              type="password"
            />
          </div>
          <div class="card-actions">
            <button @click="login" class="btn mt-5 w-full btn-primary">
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
useHead({
  title: "login",
});
type Theme = "light" | "dark";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};

const router = useRouter();
const username = ref("");
const password = ref("");
function login() {
  if (
    username.value == "pooriavakili09@gmail.com" &&
    password.value == "13711373n"
  )
    router.push("/");
}
</script>

<style>
</style>