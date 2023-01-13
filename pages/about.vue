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
      <div class="flex flex-col items-center justify-center text-xl mt-5">
        <div
          class="
            text-xl
            dark:text-white
            2xl:mr-0
            5xl:mr-8
            lg:mr-0
            xl:mr-0
            4xl:mr-24
            sm:mr-32
            md:mr-32
          "
        >
          درباره ما
        </div>
        <div
          class="
            text-xl
            mt-4
            2xl:mr-0
            5xl:mr-20
            lg:mr-0
            sm:mr-32
            4xl:mr-32
            xl:mr-0
            dark:text-white
            md:mr-32
          "
        >
          با توجه به نیازهای شما ، ما انجام میدهم
        </div>
        <div
          style="direction: rtl"
          class="
            text-sm
            2xl:w-8/12
            xl:w-8/12
            lg:w-8/12
            5xl:w-7/12 5xl:mr-20
            md:w-7/12
            4xl:w-7/12
            sm:w-7/12
            2xl:mr-20
            xl:mr-20
            lg:mr-20
            sm:mr-48
            4xl:mr-36
            md:mr-48
            mt-4
            text-gray-400
            dark:text-white
          "
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
      <div
        class="
          grid
          mt-5
          5xl:mr-10
          sm:mr-36
          2xl:mr-0
          xl:mr-0
          lg:mr-0
          4xl:mr-32
          md:mr-36
          2xl:grid-cols-3
          xl:grid-cols-3
          lg:grid-cols-3
          md:grid-cols-1
          sm:grid-cols-1
          4xl:grid-cols-1
          5xl:grid-cols-1
          xs:grid-cols-1
        "
      >
        <div class="flex flex-col items-center justify-center">
          <div class="text-2xl dark:text-white">120</div>
          <div class="text-2xl dark:text-white">محصولات جدید</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-2xl dark:text-white">98%</div>
          <div class="text-2xl dark:text-white">رضایت مشتری</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-2xl dark:text-white">15</div>
          <div class="text-2xl dark:text-white">مختصص</div>
        </div>
      </div>
      <hr
        class="
          border
          5xl:mx-12 5xl:mr-36
          md:mx-36
          4xl:mx-20 4xl:mr-56
          sm:mx-28 sm:mr-72
          2xl:mr-0
          xl:mr-0
          lg:mr-0
          md:mr-80
          2xl:mx-24
          xl:mx-24
          lg:mx-24
          mt-6
          border-r-0 border-b-0 border-l-0 border-black
        "
      />
      <div
        class="
          flex
          2xl:mr-0
          5xl:mr-10
          xl:mr-0
          lg:mr-0
          4xl:mr-32
          sm:mr-36
          md:mr-36
          items-center
          justify-center
        "
      >
        <div class="mt-4 text-2xl dark:text-white">درباره فروشگاه</div>
      </div>
      <div
        class="
          grid
          sm:mr-36
          mt-5
          5xl:mr-10
          4xl:mr-32
          2xl:mr-0
          xl:mr-0
          lg:mr-0
          md:mr-36
          2xl:grid-cols-3
          xl:grid-cols-3
          lg:grid-cols-3
          md:grid-cols-1
          sm:grid-cols-1
          4xl:grid-cols-1
          5xl:grid-cols-1
          xs:grid-cols-1
        "
      >
        <div class="flex flex-col items-center justify-center">
          <img class="w-16 h-16" src="@/assets/img/pc.svg" />
          <div class="mt-3 dark:text-white">برای انتخابی راحت</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img class="w-16 h-16" src="@/assets/img/car.svg" />
          <div class="mt-3 dark:text-white">تحویل به تمام نقاط کشور</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img class="w-16 h-16" src="@/assets/img/star.svg" />
          <div class="mt-3 dark:text-white">بالاترین کیفیت محصولات</div>
        </div>
      </div>
      <hr
        class="
          border
          4xl:mx-20
          5xl:mx-12 5xl:mr-36
          4xl:mr-56
          md:mx-36
          sm:mx-28 sm:mr-64
          2xl:mr-0
          xl:mr-0
          lg:mr-0
          md:mr-80
          2xl:mx-24
          xl:mx-24
          lg:mx-24
          mt-6
          border-r-0 border-b-0 border-l-0 border-black
        "
      />
      <div
        class="
          flex
          2xl:mr-0
          xl:mr-0
          lg:mr-0
          5xl:mr-10
          4xl:mr-32
          sm:mr-36
          md:mr-36
          items-center
          justify-center
          mt-4
        "
      >
        <div class="text-2xl dark:text-white">تیم ما</div>
      </div>
      <div
        class="
          grid
          2xl:mr-0
          4xl:mr-32
          5xl:mr-10
          sm:mr-36
          xl:mr-0
          lg:mr-0
          md:mr-36
          mt-5
          2xl:grid-cols-4
          xl:grid-cols-4
          lg:grid-cols-4
          md:grid-cols-1
          sm:grid-cols-1
          4xl:grid-cols-1
          5xl:grid-cols-1
          xs:grid-cols-1
        "
      >
        <div>
          <div class="flex items-center justify-center dark:text-white">
            رضادانایی
          </div>
        </div>
        <div>
          <div class="flex items-center justify-center dark:text-white">
            زهرا رستگار
          </div>
        </div>
        <div>
          <div class="flex items-center justify-center dark:text-white">
            حسین ارجمند
          </div>
        </div>
        <div>
          <div class="flex items-center justify-center dark:text-white">
            فرشید یاوری
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "about",
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