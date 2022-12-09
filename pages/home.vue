<template>
    <div>
        <Slider />
        <customerFlower />
        <NewFlower />
        <div
            class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 5xl:grid-cols-1 4xl:grid-cols-1 xs:grid-cols-1 mt-4 gap-6 ml-20">
            <div v-for="product in products" :key="product.id" class="card w-72 bg-base-100 shadow-xl">
                <figure><img :src="product.img" :alt="product.title" /></figure>
                <div class="card-body">
                    <h2 class="card-title flex items-center justify-center">{{ product.title }}</h2>
                    <div class="flex items-center justify-center">{{ product.price }}</div>
                    <div class="card-actions ">
                        <button @click="cartStore.addToCart(product)" class="btn w-full btn-primary">افزودن به
                            سبدخرید</button>
                    </div>
                </div>
            </div>
        </div>
        <Brand />
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