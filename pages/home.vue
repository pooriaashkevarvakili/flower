<template>
    <div>
        <Slider />
        <NewFlower />
        <div
            class="grid 2xl:ml-20 4xl:mr-32 5xl:mr-10 sm:mr-36 xl:ml-20 lg:mr-0 md:mr-36 mt-5 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-3 4xl:grid-cols-1 5xl:grid-cols-1 xs:grid-cols-1">
            <div v-for="product in products" :key="product.id"
                class="card 2xl:w-72 xl:w-72 lg:w-72 md:w-full sm:w-full 4xl=w-full 5xl:w-full xs:w-full  bg-base-100 shadow-xl">
                <figure><img class="w-32 mt-3 rounded-xl" :src="product.img" :alt="product.name" /></figure>
                <div class="card-body">
                    <h2 class="card-title flex items-center justify-center">{{ product.name }}</h2>
                    <div class="flex items-center justify-center">{{ product.price }}</div>
                    <div class="card-actions ">
                        <button @click="cartStore.addToCart(product)" class="btn w-full btn-primary">افزودن به
                            سبدخرید</button>
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
import { computed } from "vue"
import { useProductStore } from "../stores/product"
import { useCart } from "../stores/cart"

import Brand from "../components/brand.vue"
import NewFlower from "../components/NewFlower.vue"
import Slider from "../components/slider.vue"
import customerFlower from "../components/customerFlower.vue"
definePageMeta({
    layout: 'home'
})
useHead({
    title: "home",
});
const flowerStore = useProductStore()
const cartStore = useCart()
const products = computed(() => flowerStore.allProducts)

</script>

<style>

</style>