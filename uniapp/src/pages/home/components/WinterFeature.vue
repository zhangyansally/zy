<script setup>
import ProductCard from "./ProductCard.vue";

defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["product-click"]);
</script>

<template>
  <view class="winter-feature">
    <text class="section-title">暖冬序章</text>

    <view class="winter-body">
      <!-- 左侧主视觉横幅 -->
      <view class="winter-hero">
        <text class="winter-hero-title">暖冬序章</text>
        <text class="winter-hero-sub">动势开启</text>
      </view>

      <!-- 右侧横向滚动商品 -->
      <scroll-view class="winter-scroll" scroll-x :show-scrollbar="false">
        <view class="winter-scroll-inner">
          <view
            v-for="(item, index) in products"
            :key="index"
            class="winter-card"
          >
            <ProductCard
              :image="item.image"
              :title="item.title"
              :price="item.price"
              :origin-price="item.originPrice"
              @click="$emit('product-click', item)"
            />
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.winter-feature {
  padding: 8rpx 24rpx 0;
}

.section-title {
  display: block;
  color: #111111;
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-size: 32rpx;
  font-weight: 700;
  line-height: 44rpx;
}

.winter-body {
  margin-top: 20rpx;
  padding: 20rpx;
  border-radius: 12rpx;
  background: linear-gradient(180deg, #f7ead6 0%, #fbf5ec 100%);
}

.winter-hero {
  display: flex;
  flex-direction: column;
  height: 132rpx;
  padding: 24rpx 0 0 8rpx;
}

.winter-hero-title {
  color: #7a4a1e;
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-size: 40rpx;
  font-weight: 700;
  line-height: 52rpx;
}

.winter-hero-sub {
  color: #7a4a1e;
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-size: 40rpx;
  font-weight: 700;
  line-height: 52rpx;
}

.winter-scroll {
  width: 100%;
  white-space: nowrap;
}

.winter-scroll-inner {
  display: inline-flex;
}

.winter-card {
  flex: 0 0 auto;
  width: 200rpx;
  margin-right: 16rpx;
  padding: 12rpx;
  border-radius: 8rpx;
  background: #ffffff;

  &:last-child {
    margin-right: 0;
  }
}

@media (min-width: 751px) {
  .section-title {
    font-size: 16px;
    line-height: 22px;
  }

  .winter-body {
    margin-top: 10px;
    padding: 10px;
    border-radius: 6px;
  }

  .winter-hero {
    height: 66px;
  }

  .winter-hero-title,
  .winter-hero-sub {
    font-size: 20px;
    line-height: 26px;
  }

  .winter-card {
    width: 100px;
    margin-right: 8px;
  }
}
</style>
