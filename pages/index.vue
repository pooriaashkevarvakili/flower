<template>
  <div>
    <Slider />
    <NewFlower />
    <div
      class="
        grid
        2xl:grid-cols-3
        xl:grid-cols-3
        md:grid-cols-1
        4xl:grid-cols-1
        lg:grid-cols-3
        5xl:grid-cols-1
        sm:grid-cols-1
        xs:grid-cols-1
      "
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="
          card
          mt-10
          2xl:w-72
          xl:w-72
          lg:w-72
          xs:w-72 xs:ml-8
          md:w-96
          sm:w-96
          5xl:ml-12 5xl:w-96
          4xl:ml-20
          2xl:ml-20
          xl:ml-20
          lg:ml-5
          md:ml-52
          sm:ml-32
          shadow-xl
          bg-base-100
          dark:bg-gray-400
        "
      >
        <figure>
          <img
            class="w-32 mt-3 rounded-xl"
            :src="product.img"
            :alt="product.name"
          />
        </figure>
        <div class="card-body">
          <h2
            class="card-title dark:text-white flex items-center justify-center"
          >
            {{ product.name }}
          </h2>
          <div class="flex dark:text-white items-center justify-center">
            {{ product.price }}
          </div>
          <div
            class="
              card-actions
              dark:text-white
              flex
              items-center
              justify-center
            "
          >
            <button
              @click="cartStore.addToCart(product)"
              class="btn w-52 btn-primary dark:glass"
            >
              افزودن به سبدخرید
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <Brand />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "../stores/product";
import { useCart } from "../stores/cart";

import Brand from "../components/brand.vue";
import NewFlower from "../components/NewFlower.vue";
import Slider from "../components/slider.vue";
import customerFlower from "../components/customerFlower.vue";

useHead({
  title: "home",
});
const flowerStore = useProductStore();
const cartStore = useCart();
const products = computed(() => flowerStore.allProducts);
</script>

<style>
</style>