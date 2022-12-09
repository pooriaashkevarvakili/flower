<template>
    <div>
        <footer
            class="2xl:flex-row  xl:flex-row lg:flex-row 2xl:px-16 xl:px-16 lg:px-16 md:justify-center sm:justify-center 4xl:justify-center md:items-center sm:items-center 5xl:items-center 4xl:items-center xs:items-center 5xl:justify-center  xs:justify-center  md:flex-col sm:flex-col 4xl:flex-col 5xl:flex-col xs:flex-col 2xl:flex 2xl:justify-between xl:flex xl:justify-between lg:flex lg:justify-between mt-5 p-10 bg-base-200 text-base-content">
            <div class="flex flex-col 2xl:ml-0 xl:ml-0 lg:ml-0 sm:ml-48 md:ml-64 4xl:ml-48 5xl:ml-32 xs:ml-32">
                <div>ما رادنبال کنید</div>
                <div>شبکه های اجتماعی</div>
                <div class="flex space-x-2 mt-2">
                    <nuxt-link to="https://www.instagram.com/pooriaashkevarvakili">
                        <img src="@/assets/img/instagram.svg" class="w-6 h-6" alt="">

                    </nuxt-link>
                    <nuxt-link to="https://web.telegram.org/@pooriaashkevarvakili/">
                        <img src="@/assets/img/telegram.svg" class="w-6 h-6" alt="">

                    </nuxt-link>
                    <nuxt-link to="https://twitter.com/pooriavakili09">
                        <img src="@/assets/img/twitter.svg" class="w-6 h-6" />
                    </nuxt-link>
                    <nuxt-link to="https://www.facebook.com/pooria.vakily.3">
                        <img src="@/assets/img/facebook.svg" class="w-6 h-6" alt="">

                    </nuxt-link>
                </div>
            </div>

            <div class="flex flex-col 2xl:ml-0 xl:ml-0 lg:ml-0 sm:ml-56 md:ml-64 4xl:ml-56 5xl:ml-40 xs:ml-32">
                <span class="footer-title">دسترسی</span>
                <nuxt-link to="/spinnerHome" class="link link-hover">خانه</nuxt-link>
                <nuxt-link to="/spinnerBlog" class="link link-hover">بلاک</nuxt-link>
                <nuxt-link to="/spinnerFlowerHouses" class="link link-hover">گل خانه ها</nuxt-link>
                <nuxt-link to="/spinnerContact" class="link link-hover"> ارتباط باما</nuxt-link>
                <nuxt-link to="/spinnerDelivery" class="link link-hover"> روش های تحویل</nuxt-link>
            </div>
            <div class="flex flex-col 2xl:ml-0 xl:ml-0 lg:ml-0 sm:ml-56 md:ml-64 4xl:ml-56 5xl:ml-40 xs:ml-32">
                <span class="footer-title">دسترسی</span>
                <nuxt-link to="/spinnerHome" class="link link-hover">خانه</nuxt-link>
                <nuxt-link to="/spinnerBlog" class="link link-hover">بلاک</nuxt-link>
                <nuxt-link to="/spinnerFlowerHouses" class="link link-hover">گل خانه ها</nuxt-link>
                <nuxt-link to="/spinnerContact" class="link link-hover"> ارتباط باما</nuxt-link>
                <nuxt-link to="/spinnerDelivery" class="link link-hover"> روش های تحویل</nuxt-link>
            </div>
        </footer>
        <div style="direction:rtl" class="text-center">
            تمامی حقوق این سایت متعلق به گلفروشی فیروزه میباشد.

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>