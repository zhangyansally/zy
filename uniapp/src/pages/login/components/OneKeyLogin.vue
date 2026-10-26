<script setup>
import ServiceEntry from "./ServiceEntry.vue";

defineProps({
  agreed: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits([
  "toggle-agreement",
  "login",
  "other-login",
  "service",
  "show-message",
]);
</script>

<template>
  <view class="login-content">
    <view class="agreement-row" @click="emit('toggle-agreement')">
      <image
        v-if="agreed"
        class="agreement-icon"
        mode="scaleToFill"
        src="https://lanhu-oss-2537-2.lanhuapp.com/SketchPng789089d8200ba491dc0acd5c213f70638bd09f2d65e8f5693a7a5a2b52fa749c"
      />
      <view v-else class="agreement-icon agreement-icon-empty" />
      <view class="agreement-copy">
        <text class="agreement-muted">我已阅读并同意</text>
        <text class="agreement-link" @click.stop="emit('show-message', '用户协议')"
          >《用户协议》</text
        >
        <text class="agreement-link" @click.stop="emit('show-message', '隐私政策')"
          >、《隐私政策》</text
        >
      </view>
    </view>

    <button class="login-button" @click="emit('login')">
      <text class="login-button-text">本机号码一键登录</text>
    </button>

    <button class="plain-button other-login" @click="emit('other-login')">
      请输入手机号登录/注册
    </button>

    <view class="service-entry-wrap">
      <ServiceEntry @click="emit('service')" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.image-button,
.plain-button,
.login-button {
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  line-height: 1;

  &::after {
    border: 0;
  }
}

.login-content {
  padding: 102rpx 34rpx 0;
}

.agreement-row {
  display: flex;
  align-items: center;
  width: 534rpx;
  height: 48rpx;
  margin: 0 auto;
}

.agreement-icon {
  flex: 0 0 48rpx;
  width: 48rpx;
  height: 48rpx;
}

.agreement-icon-empty {
  border: 2rpx solid #c8c8c8;
  border-radius: 50%;
  box-sizing: border-box;
  background: #ffffff;
}

.agreement-copy {
  height: 34rpx;
  margin: 6rpx 0 8rpx 6rpx;
  font-size: 0;
  line-height: 34rpx;
  white-space: nowrap;
}

.agreement-muted,
.agreement-link {
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 34rpx;
  white-space: nowrap;
}

.agreement-muted {
  color: #a4a4a4;
}

.agreement-link {
  color: #1c64ee;
}

.login-button {
  width: 100%;
  height: 80rpx;
  margin-top: 40rpx;
  border-radius: 8rpx;
  background: #1c64ee;
  line-height: 80rpx;
}

.login-button:active {
  background: #1859d4;
}

.login-button-text {
  color: #ffffff;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-size: 30rpx;
  font-weight: 500;
  line-height: 42rpx;
  white-space: nowrap;
}

.other-login {
  display: block;
  height: 34rpx;
  margin: 40rpx auto 0;
  color: #333333;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 34rpx;
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
  .login-content {
    padding: 51px 17px 0;
  }

  .agreement-row {
    width: 267px;
    height: 24px;
  }

  .agreement-icon {
    flex-basis: 24px;
    width: 24px;
    height: 24px;
  }

  .agreement-copy {
    height: 17px;
    margin: 3px 0 4px 3px;
    line-height: 17px;
  }

  .agreement-muted,
  .agreement-link {
    font-size: 12px;
    line-height: 17px;
  }

  .login-button {
    height: 40px;
    margin-top: 20px;
    border-radius: 4px;
    line-height: 40px;
  }

  .login-button-text {
    font-size: 15px;
    line-height: 21px;
  }

  .other-login {
    width: 72px;
    height: 17px;
    margin-top: 20px;
    font-size: 12px;
    line-height: 17px;
  }

  .service-entry-wrap {
    bottom: calc(36px + constant(safe-area-inset-bottom));
    bottom: calc(36px + env(safe-area-inset-bottom));
  }
}

@media (max-width: 340px) {
  .login-content {
    padding-left: 24rpx;
    padding-right: 24rpx;
  }

  .agreement-row {
    transform: scale(0.92);
    transform-origin: center center;
  }
}
</style>
