<template>
  <div class="">
    <div
      v-if="loading === false"
      class="loader-wrapper flex flex-col items-center justify-center"
    >
      <div class="loader mt-10">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text-xl mt-3">به سایت گل خوش اومدید</div>
    </div>
    <div
      v-else
      class="
        grid
        2xl:ml-0
        xl:ml-0
        lg:ml-0
        md:ml-20
        sm:ml-20
        2xl:grid-cols-2
        xl:grid-cols-2
        lg:grid-cols-2
        sm:grid-cols-1
        md:grid-cols-1
        4xl:grid-cols-1
        5xl:grid-cols-1
        xs:grid-cols-1
      "
    >
      <div class="flex ml-52 flex-col">
        <div class="dark:text-white">نوشته های اخیر</div>
        <div class="mt-3" style="border: 1px solid #000; width: 110px"></div>
        <div class="-ml-16 mt-4 dark:text-white">نگهداری از گل های حساس</div>
        <div class="mt-4 ml-8 dark:text-white">دوازده آذر97</div>
        <div class="-ml-10 mt-4 dark:text-white">طراحی های ویژه ولنتاین</div>
        <div class="mt-4 ml-8 dark:text-white">دوازده آذر97</div>
        <div class="ml-4 dark:text-white">دسته بندی ها​​​​​​​</div>
        <div class="mt-3" style="border: 1px solid #000; width: 110px"></div>
        <div class="mt-4 ml-12 dark:text-white">مقالات(۲)</div>
      </div>
      <div style="direction: rtl">
        <div
          class="
            2xl:mr-16
            5xl:mr-44 5xl:mt-4
            4xl:mr-48
            xl:mr-16
            sm:mr-72
            lg:mr-16
            md:mr-80
            sm:mr-60
            2xl:mt-0
            xl:mt-0
            lg:mt-0
            md:mt-4
          "
        >
          <div class="dark:text-white">نگهداری از گلهای حساس</div>
        </div>
        <div
          class="
            flex
            mt-4
            4xl:mr-48
            5xl:mr-36
            2xl:mr-16
            xl:mr-16
            lg:mr-16
            md:mr-64
            sm:mr-60
          "
        >
          <svg
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <div class="dark:text-white">۱۲ آذر ۹۷</div>
          <div class="mr-3 flex">
            <svg
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
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>

            <div class="dark:text-white">مقالات</div>
          </div>
        </div>
        <div
          class="
            2xl:mr-16
            5xl:mr-36
            sm:w-7/12
            4xl:w-7/12
            5xl:w-7/12
            4xl:mr-48
            sm:mr-60
            xl:mr-16
            lg:mr-16
            md:mr-64
            2xl:w-full
            xl:w-full
            lg:w-full
            md:w-7/12
            m
            text-sm
            mt-2
            dark:text-white
          "
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را طی می کند .
        </div>
        <button
          class="
            btn
            5xl:mr-36
            mt-4
            btn-primary
            2xl:mr-16
            xl:mr-16
            lg:mr-16
            sm:mr-56
            4xl:mr-48
            md:mr-64
          "
        >
          ادامه مطالب
        </button>
        <div
          class="
            2xl:mr-16
            5xl:mr-36
            sm:mr-56
            4xl:mr-48
            xl:mr-16
            lg:mr-16
            md:mr-72
            mt-4
          "
        >
          <div class="dark:text-white">طراحی های ویژه ولن تاین</div>
        </div>
        <div
          class="
            flex
            5xl:mr-36
            mt-4
            2xl:mr-16
            4xl:mr-48
            xl:mr-16
            sm:mr-56
            lg:mr-16
            md:mr-56
          "
        >
          <svg
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <div class="dark:text-white">۱۲ آذر ۹۷</div>
          <div class="mr-3 flex">
            <svg
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
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>

            <div class="dark:text-white">مقالات</div>
          </div>
        </div>
        <div
          class="
            2xl:mr-16
            4xl:w-7/12
            5xl:mr-36
            4xl:mr-48
            5xl:w-7/12
            sm:w-7/12 sm:mr-56
            xl:mr-16
            lg:mr-16
            md:mr-64
            2xl:w-full
            xl:w-full
            lg:w-full
            md:w-7/12
            text-sm
            mt-2
            dark:text-white
          "
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را طی می کند .
        </div>
        <button
          class="
            btn
            5xl:mr-36
            mt-4
            btn-primary
            4xl:mr-48
            2xl:mr-16
            xl:mr-16
            lg:mr-16
            sm:mr-56
            md:mr-64
          "
        >
          ادامه مطالب
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "blog",
});
const loading = ref(false);
onMounted(() => {
  setTimeout(() => {
    loading.value = true;
  }, 3000);
});
</script>

<style scoped>
.loader-wrapper {
  text-align: center;
}

.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #6916a0;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #7c7272 transparent transparent transparent;
}

.loader div:nth-child(1) {
  animation-delay: -0.45s;
}

.loader div:nth-child(2) {
  animation-delay: -0.3s;
}

.loader div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>