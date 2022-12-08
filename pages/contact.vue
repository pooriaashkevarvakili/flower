<template>
    <div>
        <div
            class="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 4xl:grid-cols-1 5xl:grid-cols-1 xs:grid-cols-1">
            <div>
                <form style="direction:rtl" class="flex flex-col" action="">

                    <label for="">نام</label>
                    <input class="border border-gray-300 py-4 input mt-4 w-10/12" type="text">
                    <label class="mt-4" for="">پست الکترونیکی</label>
                    <input class="border border-gray-300 py-4 input mt-4 w-10/12" type="text">
                    <label class="mt-4" for="">موضوع</label>
                    <input class="border border-gray-300 py-4 input mt-4 w-10/12" type="text">
                    <label for="">پیغام</label>
                    <textarea type="text" class="border border-gray-300 py-4 input mt-4 h-20 w-10/12" />
                    <button class="btn btn-success text-white mt-4 w-52">ارسال</button>
                </form>
            </div>
            <div style="direction:rtl">
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
                    <hr class="border border-black mx-20 mt-4" />
                    <div class="flex flex-row items-center justify-center mt-4">
                        <img class="w-10 h-10" src="@/assets/img/tel.svg" alt="">

                        <div>
                            <div class="mr-2">شماره های تماس</div>
                            <div class="mr-2">021-12345678</div>
                        </div>

                    </div>
                    <hr class="border border-black mx-20 mt-4" />
                    <div class="flex flex-row items-center justify-center mt-4">
                        <img class="w-10 h-10" src="@/assets/img/post.svg" alt="">

                        <div>
                            <div class="mr-2">ایمیل</div>
                            <div class="mr-2">pooriavakili09@gmail.com</div>
                        </div>

                    </div>
                    <hr class="border border-black mx-20 mt-4" />

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