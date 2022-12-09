<template>
    <div>
        <div class="text-center mt-4">
            <div>گل خانه ها</div>
            <div style="direction:rtl" class="mt-4 text-sm text-gray-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه و مجله در ستون و<br />
                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                کاربردی می باشد. کتابهای زیادی در شصت و سه<br />
                درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان<br />
                خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </div>
        </div>
        <productFlowerOne />
        <productFlowerTwo />
        <productFlowerThree />
        <productFlowerFour />
    </div>
</template>

<script setup>
import productFlowerOne from "../components/flowerHouses/productFlowerOne.vue"
import ProductFlowerTwo from "../components/flowerHouses/productFlowerTwo.vue"
import productFlowerThree from "../components/flowerHouses/productFlowerThree.vue"
import productFlowerFour from "../components/flowerHouses/productFlowerFour.vue"
definePageMeta({
    layout: 'home'
})
</script>

<style>

</style>