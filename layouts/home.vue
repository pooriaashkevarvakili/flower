<template>
    <div class="drawer  drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full 2xl:px-16 xl:px-16 lg:px-16 md:px-10 sm:px-10 4xl:px-6 5xl:px-6 xs:px-6  ">
                <div class="flex-none lg:mt-0   lg:hidden">
                    <label for="my-drawer-3" class="btn hover:bg-blue-500 btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block   w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>

                <div
                    class="2xl:flex xl:flex md:hidden sm:hidden 4xl:hidden 5xl:hidden xs:hidden items-center justify-center">
                    <ul class="menu menu-horizontal">
                        <li><nuxt-link to="/spinnerAbout">درباره ما</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/spinnerContact">ارتباط با ما</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/spinnerBlog">بلاگ</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/spinnerDelivery">روش های تحویل</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/spinnerFlowerHouses">گل خانه ها</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/spinnerHome">خانه</nuxt-link></li>
                    </ul>
                </div>

            </div>
            <div class="bg-blue-200 mt-4 p-3">
                <div
                    class=" 2xl:flex-row xl:flex-row lg:flex-row 2xl:px-16 xl:px-16 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-40 sm:ml-32 4xl:ml-32 5xl:ml-32 xs:ml-32 lg:px-16    md:flex-col sm:flex-col 4xl:flex-col 5xl:flex-col xs:flex-col 2xl:flex 2xl:justify-between xl:flex xl:justify-between lg:flex lg:justify-between">
                    <div>تحویل رایگان سفارشات بالای 100 هزارتومان</div>
                    <div>یلدای شگفت انگیز 28 تا 30 آذر</div>
                    <div>پشتیبانی آنلاین ۲۴/۷
                    </div>
                </div>
            </div>
            <div
                class="2xl:flex-row 2xl:space-y-0 xl:space-y-0 lg:space-y-0 sm:space-y-5 md:space-y-5 4xl:space-y-5 5xl:space-y-5 xs:space-y-5 mt-5 xl:flex-row lg:flex-row 2xl:px-20 xl:px-20 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-32 sm:ml-32 4xl:ml-32 5xl:ml-32 xs:ml-32 lg:px-16    md:flex-col sm:flex-col 4xl:flex-col 5xl:flex-col xs:flex-col 2xl:flex 2xl:justify-between xl:flex xl:justify-between lg:flex lg:justify-between">

                <div class="mt-4">
                    <input style="direction:rtl" type="text"
                        class="2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-64 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-32 sm:ml-12  4xl:w-64 5xl:w-64 xs:w-64 input py-6 border border-gray-300"
                        placeholder="جستجو">
                </div>
                <div class="2xl:mr-10 xl:mr-10 lg:mr-10 md:ml-32 sm:ml-10">
                    <img src="@/assets/img/asset0.png" alt="">
                </div>
                <div
                    class="flex 2xl:mr-0 xr:ml-0 lg:mr-0 4xl:mr-24 5xl:mr-24 xs:mr-24 md:mr-24 sm:mr-36 items-center justify-center">
                    <nuxt-link to="/spinnerLogin">ورود/ثبت نام</nuxt-link>
                    <nuxt-link to="/spinnerCart">
                        <div class="indicator">
                            <span class="indicator-item badge badge-secondary">{{ count }}</span>
                            <img class="w-12 h-12" src="@/assets/img/asset 23.svg" alt="">
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
            <ul style="direction:rtl" class="menu p-4 w-80 bg-base-100">
                <!-- Sidebar content here -->
                <label for="my-drawer-3" class="hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6  h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </label>
                <li class="mt-5"><nuxt-link to="/spinnerAbout">درباره ما</nuxt-link></li>
                <li><nuxt-link to="/spinnerContact">ارتباط با ما</nuxt-link></li>
                <li><nuxt-link to="/spinnerDelivery">روش های تحویل</nuxt-link></li>

                <li><nuxt-link to="/spinnerFlowerHouses">گل خانه ها</nuxt-link></li>

                <li><nuxt-link to="/spinnerBlog">بلاگ</nuxt-link></li>
                <li><nuxt-link to="/spinnerHome">خانه</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import Footer from "./footer.vue"
import { useCart } from '../stores/cart'
const cartStore = useCart()
const count = computed(() => cartStore.count)
</script>

<style>

</style>