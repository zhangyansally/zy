<script setup>
defineProps({
  image: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <view class="home-banner">
    <image
      v-if="image"
      class="home-banner-img"
      :src="image"
      mode="aspectFill"
    />
    <template v-else>
      <text class="home-banner-title">天马集团 载誉前行</text>
      <view class="home-banner-dots">
        <view class="banner-dot banner-dot-active" />
        <view class="banner-dot" />
        <view class="banner-dot" />
      </view>
    </template>
  </view>
</template>

<style scoped lang="scss">
.home-banner {
  position: relative;
  width: 100%;
  height: 320rpx;
  border-radius: 12rpx;
  background: linear-gradient(180deg, #f6f7f9 0%, #eceef1 100%);
  overflow: hidden;
}

.home-banner-img {
  width: 100%;
  height: 100%;
}

.home-banner-title {
  position: absolute;
  left: 32rpx;
  top: 48rpx;
  color: #e8541e;
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-size: 44rpx;
  font-weight: 700;
  letter-spacing: 2rpx;
}

.home-banner-dots {
  position: absolute;
  left: 50%;
  bottom: 20rpx;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
}

.banner-dot {
  width: 10rpx;
  height: 10rpx;
  margin: 0 6rpx;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
}

.banner-dot-active {
  width: 20rpx;
  border-radius: 5rpx;
  background: rgba(0, 0, 0, 0.45);
}

@media (min-width: 751px) {
  .home-banner {
    height: 160px;
    border-radius: 6px;
  }

  .home-banner-title {
    left: 16px;
    top: 24px;
    font-size: 22px;
  }
}
</style>
