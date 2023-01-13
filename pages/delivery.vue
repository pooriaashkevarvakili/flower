<template>
  <div>
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
    <div v-else>
      <div class="border border-gray-900 mt-4 mx-52" />
      <div class="text-center">
        <div class="mt-4 dark:text-white">روش های تحویل</div>
        <div class="dark:text-white">حمل و نقل و تحویل</div>
        <div
          class="
            mt-3
            4xl:w-8/12
            5xl:ml-16
            4xl:ml-7
            5xl:w-8/12
            2xl:w-11/12
            sm:w-8/12 sm:ml-10
            md:w-8/12 md:ml-12
            2xl:mr-0
            xl:mr-0
            lg:mr-0
            xl:w-11/12
            lg:w-11/12
            text-gray-400 text-sm
            dark:text-white
          "
          style="direction: rtl"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و<br />
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و
          سه<br />
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان<br />
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </div>
      </div>
      <div class="border border-gray-900 mt-4 mx-52" />
      <div style="direction: rtl">
        <div
          class="
            2xl:flex
            xl:flex
            lg:flex
            md:block
            sm:block
            4xl:block
            5xl:block
            xs:block
          "
        >
          <div
            class="
              bg-gray-200
              flex
              items-center
              justify-center
              mt-4
              rounded-full
              w-44
              h-44
              2xl:mr-16
              xl:mr-16
              lg:mr-16
              sm:mr-72
              md:mr-80
              4xl:mr-56
              5xl:mr-40
              xs:mr-52
            "
          >
            <img class="w-32 h-32" src="@/assets/img/motor.svg" alt="" />
          </div>
          <div>
            <div
              class="
                mt-10
                2xl:mr-4
                xl:mr-4
                lg:mr-4
                2xl:text-2xl
                xl:text-2xl
                lg:text-2xl
                sm:text-xl
                md:text-xl
                4xl:text-xl
                5xl:text-xl
                xs:text-xl
                sm:mr-80
                md:mr-80
                4xl:mr-64
                5xl:mr-48
                xs:mr-40
                dark:text-white
              "
            >
              پیک در تهران
            </div>
            <div
              style="direction: rtl"
              class="
                mt-3
                sm:w-8/12 sm:mr-44
                5xl:mr-24 5xl:w-8/12
                4xl:w-8/12 4xl:mr-36
                md:w-8/12
                2xl:mr-4
                xl:mr-4
                lg:mr-4
                md:mr-52
                2xl:w-11/12
                xl:w-full
                lg:w-11/12
                text-gray-400 text-sm
                mr-2
                dark:text-white
              "
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در<br />
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای<br />
              زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان<br />
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد.
            </div>
          </div>
        </div>
        <div
          class="
            2xl:flex
            xl:flex
            lg:flex
            md:block
            sm:block
            4xl:block
            5xl:block
            xs:block
          "
        >
          <div
            class="
              bg-gray-200
              flex
              items-center
              justify-center
              mt-4
              rounded-full
              w-44
              h-44
              2xl:mr-16
              xl:mr-16
              lg:mr-16
              sm:mr-72
              md:mr-72
              4xl:mr-52
              5xl:mr-36
              xs:mr-32
            "
          >
            <img class="w-32 h-32" src="@/assets/img/Kamayun.svg" alt="" />
          </div>
          <div>
            <div
              class="
                mt-10
                2xl:text-2xl
                xl:text-2xl
                lg:text-2xl
                sm:text-xl
                md:text-xl
                4xl:text-xl
                5xl:text-xl
                xs:text-xl
                2xl:mr-2
                xl:mr-2
                lg:mr-2
                sm:mr-72
                md:mr-72
                4xl:mr-52
                5xl:mr-36
                xs:mr-36
                dark:text-white
              "
            >
              پست به شهرستان ها
            </div>
            <div
              style="direction: rtl"
              class="
                mt-3
                5xl:mr-24
                2xl:mr-4
                xl:mr-4
                lg:mr-4
                4xl:w-8/12
                5xl:w-8/12
                4xl:mr-40
                sm:w-8/12 sm:mr-44
                md:w-8/12 md:mr-52
                2xl:w-full
                xl:w-full
                lg:w-full
                text-gray-400 text-sm
                mr-2
                dark:text-white
              "
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در<br />
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای<br />
              زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان<br />
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد.
            </div>
          </div>
        </div>
        <div
          class="
            2xl:flex
            xl:flex
            lg:flex
            md:block
            sm:block
            4xl:block
            5xl:block
            xs:block
          "
        >
          <div
            class="
              bg-gray-200
              flex
              items-center
              justify-center
              mt-4
              rounded-full
              w-44
              h-44
              2xl:mr-16
              xl:mr-16
              lg:mr-16
              sm:mr-72
              md:mr-72
              4xl:mr-44
              5xl:mr-36
              xs:mr-32
            "
          >
            <img class="w-32 h-32" src="@/assets/img/home.svg" alt="" />
          </div>
          <div>
            <div
              class="
                mt-10
                2xl:text-2xl
                xl:text-2xl
                lg:text-2xl
                sm:text-xl
                md:text-xl
                4xl:text-xl
                5xl:text-xl
                xs:text-xl
                2xl:mr-2
                xl:mr-2
                lg:mr-2
                sm:mr-64
                md:mr-64
                4xl:mr-44
                5xl:mr-36
                xs:mr-32
                dark:text-white
              "
            >
              تحویل و پرداخت درب منزل
            </div>
            <div
              style="direction: rtl"
              class="
                mt-3
                4xl:w-8/12
                5xl:mr-24
                2xl:mr-4
                xl:mr-4
                lg:mr-4
                5xl:w-8/12
                4xl:mr-40
                sm:w-8/12 sm:mr-44
                md:w-8/12 md:mr-52
                2xl:w-full
                xl:w-full
                lg:w-full
                text-gray-400 text-sm
                mr-2
                dark:text-white
              "
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در<br />
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای<br />
              زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان<br />
              رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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