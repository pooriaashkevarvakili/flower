<template>
    <div>
        <div class="flex items-center justify-center flex-col mt-24" v-if="allProducts.length == 0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <span class="text-2xl"> cart Empty </span>
            <nuxt-link class="bg-black px-10 py-3 rounded-xl mt-5 text-white" to="/">خانه</nuxt-link>
        </div>
        <div v-else
            class="grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-1 4xl:grid-cols-1 lg:grid-cols-2 5xl:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
            <div v-for="item in allProducts" :key="item.id" class="   card
          mt-10
        
          2xl:w-96
          xl:w-96
          lg:w-96
          xs:w-72 xs:ml-8
          md:w-96
          sm:w-96
          5xl:ml-12 5xl:w-96
          4xl:ml-20
          2xl:ml-5xl:ml-5
          lg:ml-5
          md:ml-52
          sm:ml-32
          shadow-xl">
                <figure><img :src="item.img" :alt="item.name" /></figure>
                <div class="card-body">
                    <div class="flex justify-between">
                        <div>
                            <h2 class="card-title">{{ item.name }}</h2>

                        </div>
                        <div>
                            <h2 class="text-base">{{ item.price }}</h2>
                        </div>
                    </div>



                    <div class="flex space-x-2">
                        <button @click="cartStore.increment(item.id)" class="btn btn-primary">+</button>
                        <span class=" mt-4">{{ item.quantity }}</span>
                        <button @click="cartStore.decrement(item.id)" class="btn btn-primary ">-</button>
                        <div class="mt-3">{{ totalAmount }}</div>
                    </div>

                    <div class="card-actions flex justify-between">
                        <button @click="cartStore.clear" class="btn btn-primary">clear</button>
                        <button @click="cartStore.remove(item.id)" class="btn btn-primary">remove</button>
                        <button @click="checkout" class="btn btn-primary">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swall from "sweetalert2"
import { useCart } from "../stores/cart"
definePageMeta({
    layout: 'home'
})
useHead({
    title: "cart",
});
const cartStore = useCart()
const allProducts = computed(() => cartStore.allProducts)
const totalAmount = computed(() => cartStore.totalAmount)
console.log(totalAmount);
function checkout() {
    Swall.fire({
        title: 'خرید شما با موفقیت انجام شد',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `exit`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        }
    })
}
</script>

<style>

</style>