<script setup>
import { ref } from "vue";
import TabBar from "@/components/TabBar.vue";
import HomeHeader from "./components/HomeHeader.vue";
import HomeBanner from "./components/HomeBanner.vue";
import SceneGrid from "./components/SceneGrid.vue";
import BrandRow from "./components/BrandRow.vue";
import PromoBar from "./components/PromoBar.vue";
import WinterFeature from "./components/WinterFeature.vue";
import OutfitSection from "./components/OutfitSection.vue";

const current = ref("home");

const LABELS = {
  home: "首页",
  category: "分类",
  plan: "采购方案",
  cart: "购物车",
  mine: "我的",
};

// —— mock 数据（真实图片 URL 后续替换 image 字段即可）——
const scenes = [
  { name: "工会福利", image: "" },
  { name: "劳保工服", image: "" },
  { name: "集体活动", image: "" },
  { name: "跑团", image: "" },
  { name: "足球队", image: "" },
  { name: "龙舟队", image: "" },
];

const brands = [
  { name: "蓝步龙舟", image: "" },
  { name: "鸣猫垂钓", image: "" },
];

const makeProduct = (price, originPrice) => ({
  image: "",
  title: "蓝步男摇粒绒三合一 LR10...",
  price,
  originPrice,
});

const winterProducts = [
  makeProduct(1103, 1298),
  makeProduct(1103, 1298),
  makeProduct(1103, 1298),
];

const outfitProducts = [
  makeProduct(1103, 1298),
  makeProduct(963, 1298),
  makeProduct(289, 1298),
  makeProduct(1103, 1298),
  makeProduct(963, 1298),
  makeProduct(289, 1298),
];

const handleChange = (key) => {
  if (key === "home") return;
  uni.showToast({ title: LABELS[key], icon: "none" });
};

const toast = (title) => uni.showToast({ title, icon: "none" });
</script>

<template>
  <view class="home-page">
    <!-- 固定顶部 -->
    <view class="home-fixed-top">
      <HomeHeader @search="toast('搜索')" @menu="toast('菜单')" />
    </view>

    <!-- 滚动内容 -->
    <scroll-view class="home-scroll" scroll-y>
      <HomeBanner @click="toast('banner')" />
      <SceneGrid :items="scenes" @item-click="(i) => toast(i.name)" />
      <BrandRow
        :brands="brands"
        @brand-click="(b) => toast(b.name)"
        @more="toast('查看更多品牌')"
      />
      <PromoBar @click="toast('专属协议价')" />
      <WinterFeature
        :products="winterProducts"
        @product-click="toast('暖冬商品')"
      />
      <OutfitSection
        :products="outfitProducts"
        @product-click="toast('穿搭商品')"
        @more="toast('查看更多穿搭')"
        @tab-change="(t) => toast(t.text)"
      />
      <view class="home-bottom-space" />
    </scroll-view>

    <!-- 固定底部 -->
    <TabBar v-model="current" @change="handleChange" />
  </view>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f6f8;
  overflow: hidden;
}

.home-fixed-top {
  flex: 0 0 auto;
  background: #ffffff;
}

.home-scroll {
  flex: 1;
  min-height: 0;
}

/* 底部留白，避免最后内容被 TabBar 遮挡 */
.home-bottom-space {
  height: calc(120rpx + constant(safe-area-inset-bottom));
  height: calc(120rpx + env(safe-area-inset-bottom));
}
</style>
