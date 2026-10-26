<script setup>
defineEmits(["click"]);
</script>

<template>
  <view class="promo-bar" @click="$emit('click')">
    <view class="promo-content">
      <text class="promo-text">消费满<text class="promo-amount">10000</text>元</text>
      <view class="promo-tag">
        <text class="promo-tag-text">即享专属协议价</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.promo-bar {
  margin: 24rpx 24rpx 0;
  height: 96rpx;
  border-radius: 12rpx;
  background: linear-gradient(90deg, #e8f0ff 0%, #d6e4ff 100%);
  display: flex;
  align-items: center;
  padding: 0 28rpx;
}

.promo-content {
  display: flex;
  align-items: center;
}

.promo-text {
  color: #1a1a1a;
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-size: 32rpx;
  font-weight: 700;
}

.promo-amount {
  color: #1c64ee;
  font-size: 40rpx;
}

.promo-tag {
  margin-left: 20rpx;
  padding: 6rpx 16rpx;
  border-radius: 20rpx;
  background: #1c64ee;
}

.promo-tag-text {
  color: #ffffff;
  font-size: 24rpx;
}

@media (min-width: 751px) {
  .promo-bar {
    height: 48px;
    border-radius: 6px;
  }

  .promo-text {
    font-size: 16px;
  }

  .promo-amount {
    font-size: 20px;
  }
}
</style>
