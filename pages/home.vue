<template>
    <div>
        <Slider />
        <customerFlower />
        <NewFlower />
        <Brand />
    </div>
</template>

<script setup>
import Brand from "../components/brand.vue"
import NewFlower from "../components/NewFlower.vue"
import Slider from "../components/slider.vue"
import customerFlower from "../components/customerFlower.vue"
definePageMeta({
    layout: 'home'
})
</script>

<style>

</style>