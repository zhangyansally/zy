<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  uni.redirectTo({
    url: '/pages/login/index',
  })
})
</script>

<template>
  <view class="index-page">
    <text class="loading-text">正在进入登录页...</text>
  </view>
</template>

<style scoped>
.index-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
}

.loading-text {
  color: #8a94a6;
  font-size: 28rpx;
}
</style>
