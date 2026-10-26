<script setup>
const emit = defineEmits(["search", "menu"]);
</script>

<template>
  <view class="home-header">
    <view class="header-top">
      <text class="brand-logo">天团<text class="brand-logo-num">1</text>号</text>
      <view class="header-caps">
        <text class="cap-dots">···</text>
        <view class="cap-circle" />
      </view>
    </view>

    <view class="header-search">
      <view class="search-box" @click="emit('search')">
        <text class="search-icon">🔍</text>
        <text class="search-placeholder">搜索</text>
      </view>
      <view class="search-menu" @click="emit('menu')">
        <view class="menu-line" />
        <view class="menu-line" />
        <view class="menu-line" />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.home-header {
  padding: 0 24rpx;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88rpx;
}

.brand-logo {
  color: #111111;
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-size: 40rpx;
  font-weight: 700;
}

.brand-logo-num {
  color: #1c64ee;
}

.header-caps {
  display: flex;
  align-items: center;
}

.cap-dots {
  color: #111111;
  font-size: 32rpx;
  letter-spacing: 2rpx;
}

.cap-circle {
  width: 32rpx;
  height: 32rpx;
  margin-left: 16rpx;
  border: 3rpx solid #111111;
  border-radius: 50%;
  box-sizing: border-box;
}

.header-search {
  display: flex;
  align-items: center;
  padding: 8rpx 0 16rpx;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  height: 64rpx;
  padding: 0 20rpx;
  border-radius: 32rpx;
  background: #f2f3f5;
}

.search-icon {
  font-size: 26rpx;
  margin-right: 10rpx;
}

.search-placeholder {
  color: #9aa0a6;
  font-size: 26rpx;
}

.search-menu {
  flex: 0 0 auto;
  width: 44rpx;
  height: 44rpx;
  margin-left: 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-line {
  width: 34rpx;
  height: 3rpx;
  margin: 4rpx 0;
  background: #111111;
  border-radius: 2rpx;
}

@media (min-width: 751px) {
  .header-top {
    height: 44px;
  }

  .brand-logo {
    font-size: 20px;
  }

  .search-box {
    height: 32px;
    border-radius: 16px;
  }
}
</style>
