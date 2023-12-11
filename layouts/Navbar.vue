<template>
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
                      class="
                        inline-block
                        w-6
                        h-6
                        stroke-current
                        dark:text-white
                      "
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
                          to="/about"
                          >درباره ما</nuxt-link
                        >
                      </li>
                      <div
                        class="border border-black dark:border-orange-400"
                      ></div>
                      <li>
                        <nuxt-link
                          class="text-black dark:text-white"
                          to="/contact"
                          >ارتباط با ما</nuxt-link
                        >
                      </li>
                      <div
                        class="border border-black dark:border-orange-400"
                      ></div>
                      <li>
                        <nuxt-link class="text-black dark:text-white" to="/blog"
                          >بلاگ</nuxt-link
                        >
                      </li>
                      <div
                        class="border border-black dark:border-orange-400"
                      ></div>
                      <li>
                        <nuxt-link
                          class="text-black dark:text-white"
                          to="/delivery"
                          >روش های تحویل</nuxt-link
                        >
                      </li>
                      <div
                        class="border border-black dark:border-orange-400"
                      ></div>
                      <li>
                        <nuxt-link
                          class="text-black dark:text-white"
                          to="/flowerHouses"
                          >گل خانه ها</nuxt-link
                        >
                      </li>
                      <div
                        class="border border-black dark:border-orange-400"
                      ></div>
                      <li>
                        <nuxt-link class="text-black dark:text-white" to="/"
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
</template>

<script setup lang="ts">
type Theme = "light" | "dark";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>

<style>

</style>