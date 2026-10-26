<script setup>
defineProps({
  title: {
    type: String,
    default: "场景采购",
  },
  items: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["item-click"]);
</script>

<template>
  <view class="scene-grid">
    <text class="section-title">{{ title }}</text>
    <view class="scene-list">
      <view
        v-for="(item, index) in items"
        :key="index"
        class="scene-item"
        @click="$emit('item-click', item)"
      >
        <view class="scene-thumb">
          <image
            v-if="item.image"
            class="scene-thumb-img"
            :src="item.image"
            mode="aspectFill"
          />
        </view>
        <text class="scene-name">{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.scene-grid {
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

.scene-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20rpx;
}

.scene-item {
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28rpx;
}

.scene-thumb {
  width: 160rpx;
  height: 160rpx;
  border-radius: 12rpx;
  background: #f2f2f2;
  overflow: hidden;
}

.scene-thumb-img {
  width: 100%;
  height: 100%;
}

.scene-name {
  margin-top: 12rpx;
  color: #333333;
  font-size: 26rpx;
  line-height: 36rpx;
}

@media (min-width: 751px) {
  .section-title {
    font-size: 16px;
    line-height: 22px;
  }

  .scene-thumb {
    width: 80px;
    height: 80px;
    border-radius: 6px;
  }

  .scene-name {
    margin-top: 6px;
    font-size: 13px;
  }
}
</style>
