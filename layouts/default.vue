<template>
  <div class="dark:bg-black">
    <div class="overflow-x-hidden">
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <!-- Navbar -->
          <div
            class="
              w-full
              2xl:px-16
              xl:px-16
              lg:px-16
              md:px-10
              sm:px-10
              4xl:px-6
              5xl:px-6
              xs:px-6
            "
          >
            <div
              class="
                flex-none
                lg:mt-0
                md:mr-0
                sm:mr-0
                4xl:mr-0
                5xl:mr-0
                xs:ml-4
                lg:hidden
              "
            >
              <button
                class="mt-2"
                @click="
                  setColorTheme(
                    $colorMode.preference == 'dark' ? 'light' : 'dark'
                  )
                "
              >
                <svg
                  v-if="$colorMode.value == 'dark'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-black dark:text-white"
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
              <label
                for="my-drawer-3"
                class="
                  btn
                  text-black
                  hover:bg-blue-500 hover:text-white
                  btn-square btn-ghost
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current dark:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div
              class="
                2xl:flex
                xl:flex
                md:hidden
                sm:hidden
                4xl:hidden
                5xl:hidden
                xs:hidden
                items-center
                justify-between
              "
            >
              <div></div>
              <div>
                <ul class="menu menu-horizontal">
                  <li>
                    <nuxt-link
                      class="text-black dark:text-white"
                      to="/spinnerAbout"
                      >درباره ما</nuxt-link
                    >
                  </li>
                  <div class="border border-black dark:border-orange-400"></div>
                  <li>
                    <nuxt-link
                      class="text-black dark:text-white"
                      to="/spinnerContact"
                      >ارتباط با ما</nuxt-link
                    >
                  </li>
                  <div class="border border-black dark:border-orange-400"></div>
                  <li>
                    <nuxt-link
                      class="text-black dark:text-white"
                      to="/spinnerBlog"
                      >بلاگ</nuxt-link
                    >
                  </li>
                  <div class="border border-black dark:border-orange-400"></div>
                  <li>
                    <nuxt-link
                      class="text-black dark:text-white"
                      to="/spinnerDelivery"
                      >روش های تحویل</nuxt-link
                    >
                  </li>
                  <div class="border border-black dark:border-orange-400"></div>
                  <li>
                    <nuxt-link
                      class="text-black dark:text-white"
                      to="/spinnerFlowerHouses"
                      >گل خانه ها</nuxt-link
                    >
                  </li>
                  <div class="border border-black dark:border-orange-400"></div>
                  <li>
                    <nuxt-link
                      class="text-black dark:text-white"
                      to="/spinnerHome"
                      >خانه</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <div>
                <button
                  class="mt-2"
                  @click="
                    setColorTheme(
                      $colorMode.preference == 'dark' ? 'light' : 'dark'
                    )
                  "
                >
                  <svg
                    v-if="$colorMode.value == 'dark'"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-black dark:text-white"
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
            </div>
          </div>
          <div class="bg-blue-200 dark:bg-black mt-4 p-3">
            <div
              class="
                2xl:flex-row
                xl:flex-row
                lg:flex-row
                2xl:px-16
                xl:px-16
                2xl:ml-0
                xl:ml-0
                lg:ml-0
                md:ml-56
                sm:ml-40
                4xl:ml-32
                5xl:ml-32
                xs:ml-32
                lg:px-16
                md:flex-col
                sm:flex-col
                4xl:flex-col
                5xl:flex-col
                xs:flex-col
                2xl:flex 2xl:justify-between
                xl:flex xl:justify-between
                lg:flex lg:justify-between
              "
            >
              <div class="dark:text-white">تحویل رایگان</div>
              <div class="dark:text-white">یلدا 28 تا 30 آذر</div>
              <div class="dark:text-white">پشتیبانی آنلاین ۲۴/۷</div>
            </div>
          </div>
          <div
            class="
              2xl:flex-row 2xl:space-y-0
              xl:space-y-0
              lg:space-y-0
              sm:space-y-5
              md:space-y-5
              4xl:space-y-5
              5xl:space-y-5
              xs:space-y-5
              mt-5
              xl:flex-row
              lg:flex-row
              2xl:px-20
              xl:px-20
              2xl:ml-0
              xl:ml-0
              lg:ml-0
              md:ml-32
              sm:ml-32
              4xl:ml-16
              5xl:ml-16
              xs:ml-32
              lg:px-16
              md:flex-col
              sm:flex-col
              4xl:flex-col
              5xl:flex-col
              xs:flex-col
              2xl:flex 2xl:justify-between
              xl:flex xl:justify-between
              lg:flex lg:justify-between
            "
          >
            <div class="mt-4">
              <input
                style="direction: rtl"
                type="text"
                class="
                  2xl:w-72
                  xl:w-72
                  lg:w-72
                  md:w-72
                  sm:w-64
                  2xl:ml-0
                  xl:ml-0
                  lg:ml-0
                  md:ml-12
                  sm:ml-2
                  4xl:w-64
                  5xl:w-64
                  xs:w-64
                  input
                  py-6
                  border border-gray-300
                "
                placeholder="جستجو"
              />
            </div>
            <div
              class="
                dark:text-white
                2xl:mr-36
                xl:mr-36
                lg:mr-36
                2xl:ml-0
                xl:ml-0
                lg:ml-0
                md:ml-36
                sm:ml-24
                4xl:ml-24
                5xl:ml-20
              "
            >
              گل فیروزه
            </div>
            <div
              class="
                flex
                2xl:mr-0
                xr:ml-0
                lg:mr-0
                4xl:mr-24
                5xl:mr-24
                xs:mr-24
                md:mr-48
                sm:mr-36
                items-center
                justify-center
              "
            >
              <nuxt-link class="dark:text-white" to="/spinnerLogin"
                >ورود/ثبت نام</nuxt-link
              >
              <nuxt-link to="/spinnerCart">
                <div class="indicator">
                  <span
                    class="
                      indicator-item
                      badge badge-secondary
                      dark:badge-ghost
                      text-xl
                      dark:text-white
                    "
                    >{{ count }}</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-12 h-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </nuxt-link>
            </div>
          </div>
          <!-- Page content here -->
          <slot />
          <Footer />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul
            style="direction: rtl"
            class="menu p-4 w-80 bg-base-100 dark:bg-black"
          >
            <!-- Sidebar content here -->
            <label for="my-drawer-3" class="text-black">
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 hover:text-red-500 dark:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <button
                  @click="
                    setColorTheme(
                      $colorMode.preference == 'dark' ? 'light' : 'dark'
                    )
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
            </label>
            <li class="mt-5">
              <nuxt-link class="dark:text-white" to="/spinnerAbout"
                >درباره ما</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="dark:text-white" to="/spinnerContact"
                >ارتباط با ما</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="dark:text-white" to="/spinnerDelivery"
                >روش های تحویل</nuxt-link
              >
            </li>

            <li>
              <nuxt-link class="dark:text-white" to="/spinnerFlowerHouses"
                >گل خانه ها</nuxt-link
              >
            </li>

            <li>
              <nuxt-link class="dark:text-white" to="/spinnerBlog"
                >بلاگ</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="dark:text-white" to="/spinnerHome"
                >خانه</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script setup lang="ts">
import Footer from "./footer.vue";
import { useCart } from "../stores/cart";
const cartStore = useCart();
type Theme = "light" | "dark";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
const count = computed(() => cartStore.count);
</script>
    
    <style>
</style>