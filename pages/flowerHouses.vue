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
      <div class="text-center mt-4">
        <div class="2xl:mr-0 dark:text-white xl:mr-0 lg:mr-0">گل خانه ها</div>
        <div
          style="direction: rtl"
          class="
            mt-4
            2xl:w-10/12
            xl:w-10/12
            sm:w-8/12 sm:ml-12
            4xl:ml-10
            5xl:ml-10
            4xl:w-8/12
            5xl:w-8/12
            lg:w-10/12
            md:w-8/12
            2xl:mr-0
            xl:mr-0
            lg:mr-0
            md:ml-12
            text-sm text-gray-400
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
      <productFlowerOne />
      <productFlowerTwo />
      <productFlowerThree />
      <productFlowerFour />
    </div>
  </div>
</template>

<script setup>
import productFlowerOne from "../components/flowerHouses/productFlowerOne.vue";
import ProductFlowerTwo from "../components/flowerHouses/productFlowerTwo.vue";
import productFlowerThree from "../components/flowerHouses/productFlowerThree.vue";
import productFlowerFour from "../components/flowerHouses/productFlowerFour.vue";
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