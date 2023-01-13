<template>
  <div>
    <div
      v-if="loading === false"
      class="loader-wrapper flex flex-col items-center justify-center"
    >
      <div class="loader mt-60">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text-xl mt-3">به سایت گل خوش اومدید</div>
    </div>
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
  
<style scoped>
.loader-wrapper {
  text-align: center;
}

.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #6916a0;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #7c7272 transparent transparent transparent;
}

.loader div:nth-child(1) {
  animation-delay: -0.45s;
}

.loader div:nth-child(2) {
  animation-delay: -0.3s;
}

.loader div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const loading = ref(false);
onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    router.push("/");
  }, 2000);
});
</script>