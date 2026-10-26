<script setup>
defineProps({
  title: {
    type: String,
    default: "精选品牌",
  },
  brands: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["brand-click", "more"]);
</script>

<template>
  <view class="brand-row">
    <text class="section-title">{{ title }}</text>
    <view class="brand-list">
      <view
        v-for="(brand, index) in brands"
        :key="index"
        class="brand-item"
        @click="$emit('brand-click', brand)"
      >
        <view class="brand-logo">
          <image
            v-if="brand.image"
            class="brand-logo-img"
            :src="brand.image"
            mode="aspectFit"
          />
        </view>
        <text class="brand-name">{{ brand.name }}</text>
      </view>

      <view class="brand-item brand-more" @click="$emit('more')">
        <view class="brand-logo brand-more-box">
          <text class="brand-more-en">MORE</text>
        </view>
        <text class="brand-name">查看更多</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.brand-row {
  padding: 24rpx 24rpx 0;
}

.section-title {
  display: block;
  color: #111111;
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-size: 32rpx;
  font-weight: 700;
  line-height: 44rpx;
}

.brand-list {
  display: flex;
  align-items: flex-start;
  margin-top: 20rpx;
}

.brand-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180rpx;
  height: 88rpx;
}

.brand-logo-img {
  width: 100%;
  height: 100%;
}

.brand-name {
  margin-top: 8rpx;
  color: #333333;
  font-size: 26rpx;
  line-height: 36rpx;
}

.brand-more-box {
  border: 2rpx solid #111111;
  border-radius: 6rpx;
  box-sizing: border-box;
  width: 130rpx;
  height: 56rpx;
}

.brand-more-en {
  color: #111111;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-size: 26rpx;
  font-weight: 500;
  letter-spacing: 2rpx;
}

@media (min-width: 751px) {
  .section-title {
    font-size: 16px;
    line-height: 22px;
  }

  .brand-logo {
    width: 90px;
    height: 44px;
  }

  .brand-name {
    font-size: 13px;
  }
}
</style>
