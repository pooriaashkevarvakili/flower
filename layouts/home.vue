<template>
    <div class="drawer  drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full 2xl:px-16 xl:px-16 lg:px-16 md:px-10 sm:px-10 4xl:px-6 5xl:px-6 xs:px-6  bg-base-300">
                <div class="flex-none lg:mt-0   lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
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
                        <li><nuxt-link to="/about">درباره ما</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/contact">ارتباط با ما</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/flower">گل خانه ها</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/shop">فروشگاه</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/blog">بلاگ</nuxt-link></li>
                        <div class="border border-black"></div>
                        <li><nuxt-link to="/home">خانه</nuxt-link></li>

                    </ul>
                </div>

            </div>
            <div class="bg-blue-200 mt-4 p-3">
                <div
                    class=" 2xl:flex-row xl:flex-row lg:flex-row 2xl:px-16 xl:px-16 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-32 sm:ml-32 4xl:ml-32 5xl:ml-32 xs:ml-32 lg:px-16    md:flex-col sm:flex-col 4xl:flex-col 5xl:flex-col xs:flex-col 2xl:flex 2xl:justify-between xl:flex xl:justify-between lg:flex lg:justify-between">
                    <div>تحویل رایگان سفارشات بالای 100 هزارتومان</div>
                    <div>یلدای شگفت انگیز 28 تا 30 آذر</div>
                    <div>پشتیبانی آنلاین ۲۴/۷
                    </div>
                </div>
            </div>
            <div
                class="2xl:flex-row 2xl:space-y-0 xl:space-y-0 lg:space-y-0 sm:space-y-5 md:space-y-5 4xl:space-y-5 5xl:space-y-5 xs:space-y-5 mt-5 xl:flex-row lg:flex-row 2xl:px-16 xl:px-16 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-32 sm:ml-32 4xl:ml-32 5xl:ml-32 xs:ml-32 lg:px-16    md:flex-col sm:flex-col 4xl:flex-col 5xl:flex-col xs:flex-col 2xl:flex 2xl:justify-between xl:flex xl:justify-between lg:flex lg:justify-between">

                <div class="mt-4">
                    <input style="direction:rtl" type="text"
                        class="2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-80 4xl:w-64 5xl:w-64 xs:w-64 input py-6 border border-gray-300"
                        placeholder="جستجو">
                </div>
                <div>
                    <img src="@/assets/img/asset0.png" alt="">
                </div>
                <div class="flex items-center justify-center">

                    <nuxt-link to="/login">ورود/ثبت نام</nuxt-link>
                    <img class="w-12 h-12" src="@/assets/img/asset 23.svg" alt="">
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
                <li><nuxt-link to="/about">درباره ما</nuxt-link></li>
                <li><nuxt-link to="/contact">ارتباط با ما</nuxt-link></li>
                <li><nuxt-link to="/flower">گل خانه ها</nuxt-link></li>
                <li><nuxt-link to="/shop">فروشگاه</nuxt-link></li>
                <li><nuxt-link to="/blog">بلاگ</nuxt-link></li>
                <li><nuxt-link to="/home">خانه</nuxt-link></li>

            </ul>

        </div>
    </div>
</template>

<script setup>
import Footer from "./footer.vue"

</script>

<style>

</style>