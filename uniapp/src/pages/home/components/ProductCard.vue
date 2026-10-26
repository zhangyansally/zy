<script setup>
defineProps({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  price: {
    type: [Number, String],
    default: 0,
  },
  originPrice: {
    type: [Number, String],
    default: 0,
  },
});

defineEmits(["click"]);
</script>

<template>
  <view class="product-card" @click="$emit('click')">
    <view class="product-image">
      <image
        v-if="image"
        class="product-image-img"
        :src="image"
        mode="aspectFill"
      />
    </view>
    <text class="product-title">{{ title }}</text>
    <view class="product-price-row">
      <text class="product-price">¥{{ price }}</text>
      <text v-if="originPrice" class="product-origin">¥{{ originPrice }}</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 100%;
  height: 220rpx;
  border-radius: 8rpx;
  background: #f2f2f2;
  overflow: hidden;
}

.product-image-img {
  width: 100%;
  height: 100%;
}

.product-title {
  margin-top: 12rpx;
  color: #333333;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 24rpx;
  line-height: 34rpx;
  /* 两行省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price-row {
  display: flex;
  align-items: baseline;
  margin-top: 8rpx;
}

.product-price {
  color: #fa2c19;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-size: 30rpx;
  font-weight: 500;
}

.product-origin {
  margin-left: 8rpx;
  color: #999999;
  font-size: 22rpx;
  text-decoration: line-through;
}

@media (min-width: 751px) {
  .product-image {
    height: 110px;
    border-radius: 4px;
  }

  .product-title {
    margin-top: 6px;
    font-size: 12px;
    line-height: 17px;
  }

  .product-price {
    font-size: 15px;
  }

  .product-origin {
    font-size: 11px;
  }
}
</style>
