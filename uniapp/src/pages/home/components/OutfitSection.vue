<script setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  // 分类 tab 文案
  tabs: {
    type: Array,
    default: () => ["棉羽", "夹克/外套", "抓绒服", "卫衣/套头衫"],
  },
  products: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["product-click", "more", "tab-change"]);

const activeTab = ref(0);

const handleTab = (index) => {
  if (index === activeTab.value) return;
  activeTab.value = index;
  emit("tab-change", { index, text: props.tabs[index] });
};
</script>

<template>
  <view class="outfit-section">
    <text class="section-title">上身穿搭</text>

    <!-- 主视觉横幅占位 -->
    <view class="outfit-hero" />

    <!-- 分类 tab 横向滚动 -->
    <scroll-view class="outfit-tabs" scroll-x :show-scrollbar="false">
      <view class="outfit-tabs-inner">
        <view
          v-for="(tab, index) in tabs"
          :key="index"
          class="outfit-tab"
          :class="{ 'outfit-tab-active': index === activeTab }"
          @click="handleTab(index)"
        >
          <text class="outfit-tab-text">{{ tab }}</text>
        </view>
      </view>
    </scroll-view>

    <!-- 商品网格 -->
    <view class="outfit-grid">
      <view
        v-for="(item, index) in products"
        :key="index"
        class="outfit-grid-item"
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

    <!-- 查看更多 -->
    <view class="outfit-more" @click="emit('more')">
      <text class="outfit-more-text">查看更多</text>
      <text class="outfit-more-arrow">›</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.outfit-section {
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

.outfit-hero {
  width: 100%;
  height: 200rpx;
  margin-top: 20rpx;
  border-radius: 12rpx;
  background: #d8ccc0;
}

.outfit-tabs {
  margin-top: 20rpx;
  width: 100%;
  white-space: nowrap;
}

.outfit-tabs-inner {
  display: inline-flex;
}

.outfit-tab {
  flex: 0 0 auto;
  height: 56rpx;
  padding: 0 24rpx;
  margin-right: 16rpx;
  border-radius: 28rpx;
  background: #f2f3f5;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-right: 0;
  }
}

.outfit-tab-active {
  background: #e5efff;
}

.outfit-tab-text {
  color: #333333;
  font-size: 26rpx;
  line-height: 36rpx;
}

.outfit-tab-active .outfit-tab-text {
  color: #1c64ee;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-weight: 500;
}

.outfit-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24rpx;
}

.outfit-grid-item {
  width: calc((100% - 32rpx) / 3);
  margin-right: 16rpx;
  margin-bottom: 24rpx;

  &:nth-child(3n) {
    margin-right: 0;
  }
}

.outfit-more {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88rpx;
}

.outfit-more-text {
  color: #333333;
  font-size: 28rpx;
}

.outfit-more-arrow {
  margin-left: 6rpx;
  color: #999999;
  font-size: 30rpx;
}

@media (min-width: 751px) {
  .section-title {
    font-size: 16px;
    line-height: 22px;
  }

  .outfit-hero {
    height: 100px;
    margin-top: 10px;
    border-radius: 6px;
  }

  .outfit-tab {
    height: 28px;
    padding: 0 12px;
    border-radius: 14px;
  }

  .outfit-tab-text {
    font-size: 13px;
  }

  .outfit-grid-item {
    margin-bottom: 12px;
  }
}
</style>
