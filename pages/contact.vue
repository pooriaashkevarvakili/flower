<template>
    <div>
        <div
            class="grid 2xl:grid-cols-2 2xl:mr-0 5xl:mr-48 xl:mr-0 lg:mr-0 sm:mr-56 4xl:mr-52 md:mr-72 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 4xl:grid-cols-1 5xl:grid-cols-1 xs:grid-cols-1">
            <div>
                <form style="direction:rtl" class="flex flex-col" action="">

                    <label for="">نام</label>
                    <input
                        class="border border-gray-300 py-4 input mt-4 5xl:w-9/12 2xl:w-10/12 xl:w-10/12 4xl:w-9/12 lg:w-10/12 sm:w-9/12 md:w-9/12"
                        type="text">
                    <label class="mt-4" for="">پست الکترونیکی</label>
                    <input
                        class="border 5xl:w-9/12 border-gray-300 py-4 input mt-4 2xl:w-10/12 xl:w-10/12 4xl:w-9/12 lg:w-10/12 sm:w-9/12 md:w-9/12"
                        type="text">
                    <label class="mt-4" for="">موضوع</label>
                    <input
                        class="border 5xl:w-9/12 border-gray-300 py-4 input mt-4 2xl:w-10/12 xl:w-10/12 4xl:w-9/12 lg:w-10/12 sm:w-9/12 md:w-9/12"
                        type="text">
                    <label for="">پیغام</label>
                    <textarea type="text"
                        class="border 5xl:w-9/12 border-gray-300 py-4 input mt-4 h-20 2xl:w-10/12 4xl:w-9/12 xl:w-10/12 lg:w-10/12 sm:w-9/12 md:w-9/12" />
                    <button class="btn btn-success text-white mt-4 w-52">ارسال</button>
                </form>
            </div>
            <div class="2xl:mr-0 xl:mr-0 5xl:ml-20 lg:mr-0 md:ml-52 sm:ml-10 4xl:ml-28" style="direction:rtl">
                <div class="mt-24">
                    <div class="flex flex-col items-center justify-center">
                        <div>راه های تماس</div>


                    </div>
                    <div class="flex flex-row items-center justify-center mt-4">
                        <img class="w-10 h-10" src="@/assets/img/location.svg" alt="">

                        <div>
                            <div class="mr-2">آدرس گلخانه</div>
                            <div class="mr-2">تهران شهرک غرب ...</div>
                        </div>

                    </div>
                    <hr class="border border-black 2xl:mx-20 sm:mx-5 xl:mx-20 md:mx-5 lg:mx-20 mt-4" />
                    <div class="flex flex-row items-center justify-center mt-4">
                        <img class="w-10 h-10" src="@/assets/img/tel.svg" alt="">

                        <div>
                            <div class="mr-2">شماره های تماس</div>
                            <div class="mr-2">021-12345678</div>
                        </div>

                    </div>
                    <hr class="border border-black 2xl:mx-20 sm:mx-5 xl:mx-20 md:mx-5 lg:mx-20 mt-4" />
                    <div class="flex flex-row items-center justify-center mt-4">
                        <img class="w-10 h-10" src="@/assets/img/post.svg" alt="">

                        <div>
                            <div class="mr-2">ایمیل</div>
                            <div class="mr-2">pooriavakili09@gmail.com</div>
                        </div>

                    </div>
                    <hr class="border border-black 2xl:mx-20 sm:mx-5 xl:mx-20 md:mx-5 lg:mx-20 mt-4" />

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'home'
})
useHead({
    title: "contact",
});
</script>

<style>

</style>