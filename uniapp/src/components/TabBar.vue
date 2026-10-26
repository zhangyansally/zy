<script setup>
import { computed } from "vue";

const props = defineProps({
  // 当前选中项的 key
  modelValue: {
    type: String,
    default: "home",
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

const ACTIVE = "#1c64ee";
const INACTIVE = "#333333";

// 把 svg 内容编码成 data URI，供 <image src> 使用（跨端可靠）
const svg = (inner) =>
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${inner}</svg>`
  );

// 每个图标提供选中（填充）与未选中（描边）两种画法
const ICONS = {
  home: {
    active: (c) => svg(`<path fill="${c}" d="M11.3 2.6 3 9.6V21h6v-6h6v6h6V9.6l-8.3-7a1 1 0 0 0-1.4 0Z"/>`),
    inactive: (c) =>
      svg(`<path fill="none" stroke="${c}" stroke-width="1.8" stroke-linejoin="round" d="M4 10 12 3.4 20 10v10.2h-5.2V14H9.2v6.2H4z"/>`),
  },
  category: {
    active: (c) =>
      svg(`<g fill="${c}"><rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/></g>`),
    inactive: (c) =>
      svg(`<g fill="none" stroke="${c}" stroke-width="1.8"><rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/></g>`),
  },
  plan: {
    active: (c) =>
      svg(`<g><rect x="5" y="3" width="14" height="18" rx="2.2" fill="${c}"/><g stroke="#fff" stroke-width="1.6" stroke-linecap="round"><line x1="8.6" y1="8" x2="15.4" y2="8"/><line x1="8.6" y1="12" x2="15.4" y2="12"/><line x1="8.6" y1="16" x2="12.6" y2="16"/></g></g>`),
    inactive: (c) =>
      svg(`<g fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2.2"/><line x1="8.6" y1="8" x2="15.4" y2="8"/><line x1="8.6" y1="12" x2="15.4" y2="12"/><line x1="8.6" y1="16" x2="12.6" y2="16"/></g>`),
  },
  cart: {
    active: (c) =>
      svg(`<g fill="${c}"><path d="M2.5 3.2a.9.9 0 0 0 0 1.8h1.6l2.3 10.9a1.6 1.6 0 0 0 1.6 1.3h9.2a.9.9 0 0 0 0-1.8H8.3l-.32-1.5h9.1a1.6 1.6 0 0 0 1.57-1.26L19.9 7a.9.9 0 0 0-.88-1.1H6.2l-.35-1.66a1.2 1.2 0 0 0-1.17-.94z"/><circle cx="9" cy="20.2" r="1.5"/><circle cx="17" cy="20.2" r="1.5"/></g>`),
    inactive: (c) =>
      svg(`<g fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4.1h1.9l2.3 11a1 1 0 0 0 1 .8h8.3a1 1 0 0 0 1-.78L20.4 7.4H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></g>`),
  },
  mine: {
    active: (c) =>
      svg(`<g fill="${c}"><circle cx="12" cy="8" r="4"/><path d="M4.4 20.2c0-4.2 3.4-6.6 7.6-6.6s7.6 2.4 7.6 6.6a.8.8 0 0 1-.8.8H5.2a.8.8 0 0 1-.8-.8Z"/></g>`),
    inactive: (c) =>
      svg(`<g fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="3.8"/><path d="M5 20.2c0-3.9 3.1-6.4 7-6.4s7 2.5 7 6.4"/></g>`),
  },
};

const TABS = [
  { key: "home", text: "首页" },
  { key: "category", text: "分类" },
  { key: "plan", text: "采购方案" },
  { key: "cart", text: "购物车" },
  { key: "mine", text: "我的" },
];

const tabs = computed(() =>
  TABS.map((t) => {
    const isActive = t.key === props.modelValue;
    return {
      ...t,
      isActive,
      icon: ICONS[t.key][isActive ? "active" : "inactive"](
        isActive ? ACTIVE : INACTIVE
      ),
    };
  })
);

const handleTap = (key) => {
  if (key === props.modelValue) return;
  emit("update:modelValue", key);
  emit("change", key);
};
</script>

<template>
  <view class="tab-bar">
    <view class="tab-bar-inner">
      <view
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-item"
        @click="handleTap(tab.key)"
      >
        <image class="tab-icon" :src="tab.icon" mode="widthFix" />
        <text class="tab-text" :class="{ 'tab-text-active': tab.isActive }">{{
          tab.text
        }}</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background: #ffffff;
  border-top: 2rpx solid #ececec;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-inner {
  display: flex;
  align-items: center;
  height: 100rpx;
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tab-icon {
  width: 48rpx;
  height: 48rpx;
}

.tab-text {
  margin-top: 6rpx;
  color: #333333;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 22rpx;
  line-height: 30rpx;
}

.tab-text-active {
  color: #1c64ee;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-weight: 500;
}

@media (min-width: 751px) {
  .tab-bar-inner {
    height: 50px;
  }

  .tab-icon {
    width: 24px;
    height: 24px;
  }

  .tab-text {
    margin-top: 3px;
    font-size: 11px;
    line-height: 15px;
  }
}
</style>
