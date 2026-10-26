<script setup>
import ServiceEntry from "./ServiceEntry.vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  smsSent: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  "update:modelValue",
  "send-sms",
  "login",
  "service",
]);

const onInput = (e) => {
  emit("update:modelValue", e.detail.value);
};
</script>

<template>
  <view class="phone-content">
    <view class="phone-input-row">
      <text class="phone-label">手机号</text>
      <input
        :value="modelValue"
        class="phone-input"
        type="number"
        maxlength="11"
        placeholder="请输入手机号"
        placeholder-style="color: #a4a4a4; font-size: 28rpx;"
        @input="onInput"
      />
    </view>

    <button v-if="!smsSent" class="phone-login-button" @click="emit('send-sms')">
      <text class="phone-login-button-text">获取验证码</text>
    </button>

    <button v-else class="phone-login-button" @click="emit('login')">
      <text class="phone-login-button-text">登录</text>
    </button>

    <view class="service-entry-wrap">
      <ServiceEntry @click="emit('service')" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.phone-content {
  padding: 84rpx 34rpx 0;
}

.phone-input-row {
  display: flex;
  align-items: center;
  width: 100%;
}

.phone-label {
  color: #111111;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 30rpx;
  font-weight: 400;
  line-height: 42rpx;
  white-space: nowrap;
}

.phone-input {
  flex: 1;
  margin-left: 16rpx;
  color: #111111;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 28rpx;
  font-weight: 400;
  line-height: 40rpx;
  min-height: 42rpx;
}

.phone-login-button {
  width: 100%;
  height: 80rpx;
  margin-top: 44rpx;
  padding: 0;
  border: 0;
  border-radius: 44rpx;
  background: #1c64ee;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  &::after {
    border: 0;
  }
}

.phone-login-button:active {
  background: #1859d4;
}

.phone-login-button-text {
  color: #ffffff;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-size: 30rpx;
  font-weight: 500;
  line-height: 42rpx;
  white-space: nowrap;
}

.service-entry-wrap {
  position: absolute;
  left: 50%;
  bottom: calc(72rpx + constant(safe-area-inset-bottom));
  bottom: calc(72rpx + env(safe-area-inset-bottom));
  transform: translateX(-50%);
}

@media (min-width: 751px) {
  .phone-content {
    padding: 42px 17px 0;
  }

  .phone-input-row {
    width: 100%;
  }

  .phone-label {
    font-size: 15px;
    line-height: 21px;
  }

  .phone-input {
    font-size: 14px;
    line-height: 20px;
    min-height: 21px;
  }

  .phone-login-button {
    height: 40px;
    margin-top: 22px;
    border-radius: 22px;
  }

  .phone-login-button-text {
    font-size: 15px;
    line-height: 21px;
  }

  .service-entry-wrap {
    bottom: calc(36px + constant(safe-area-inset-bottom));
    bottom: calc(36px + env(safe-area-inset-bottom));
  }
}
</style>
