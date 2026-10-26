<script setup>
defineEmits(["click"]);
</script>

<template>
  <view class="service-entry" @click="$emit('click')">
    <image
      class="service-icon"
      mode="scaleToFill"
      src="https://lanhu-oss-2537-2.lanhuapp.com/SketchPng221b4e6a97d49b0f9173d8a717b184b1ee4eaa86b057608af3f498d26ab413b4"
    />
    <view class="service-copy">
      <text class="service-text">遇到问题？请联系客服</text>
      <image
        class="service-line"
        mode="scaleToFill"
        src="https://lanhu-oss-2537-2.lanhuapp.com/SketchPng0de9f23758b88a261522024dd317005888672aeef3c19508284676edddb6d2fd"
      />
    </view>
  </view>
</template>

<style scoped lang="scss">
.service-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 340rpx;
  height: 40rpx;
}

.service-icon {
  flex: 0 0 40rpx;
  width: 40rpx;
  height: 40rpx;
}

.service-copy {
  position: relative;
  width: 292rpx;
  height: 40rpx;
}

.service-text {
  position: absolute;
  left: 0;
  top: 0;
  color: #a4a4a4;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 28rpx;
  font-weight: 400;
  line-height: 40rpx;
  white-space: nowrap;
}

.service-line {
  position: absolute;
  right: 2rpx;
  bottom: 2rpx;
  width: 108rpx;
  height: 2rpx;
}

@media (min-width: 751px) {
  .service-entry {
    width: 170px;
    height: 20px;
  }

  .service-icon {
    flex-basis: 20px;
    width: 20px;
    height: 20px;
  }

  .service-copy {
    width: 146px;
    height: 20px;
  }

  .service-text {
    font-size: 14px;
    line-height: 20px;
  }

  .service-line {
    right: 1px;
    bottom: 1px;
    width: 54px;
    height: 1px;
  }
}
</style>
