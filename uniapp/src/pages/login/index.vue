<script setup>
import { ref } from "vue";
import OneKeyLogin from "./components/OneKeyLogin.vue";
import PhoneLogin from "./components/PhoneLogin.vue";
import CaptchaDialog from "./components/CaptchaDialog.vue";
import SmsCodeDialog from "./components/SmsCodeDialog.vue";

const agreed = ref(true);
const loginMode = ref("one-key"); // 'one-key' | 'phone'
const phoneNumber = ref("");
const smsSent = ref(false);
const showCaptcha = ref(false);
const showSmsDialog = ref(false);

const showMessage = (title, icon = "none") => {
  uni.showToast({ title, icon });
};

// 登录成功后进入首页，reLaunch 清空页面栈，避免返回回到登录页
const goHome = () => {
  uni.reLaunch({ url: "/pages/home/index" });
};

const toggleAgreement = () => {
  agreed.value = !agreed.value;
};

const handleBack = () => {
  if (loginMode.value === "phone") {
    loginMode.value = "one-key";
    smsSent.value = false;
    return;
  }
  const pages = getCurrentPages();
  if (pages.length > 1) {
    uni.navigateBack();
    return;
  }
  // 无上级页面时（登录页是入口），返回进入首页
  goHome();
};

const handleLogin = () => {
  if (!agreed.value) {
    showMessage("请先阅读并同意协议");
    return;
  }
  showMessage("登录成功", "success");
  setTimeout(goHome, 800);
};

const handleOtherLogin = () => {
  loginMode.value = "phone";
};

const handleSendSms = () => {
  if (!phoneNumber.value) {
    showMessage("请输入手机号");
    return;
  }
  if (!/^1[3-9]\d{9}$/.test(phoneNumber.value)) {
    showMessage("请输入正确的手机号");
    return;
  }
  showCaptcha.value = true;
};

const handleCaptchaCancel = () => {
  showCaptcha.value = false;
};

const handleCaptchaConfirm = () => {
  showCaptcha.value = false;
  smsSent.value = true;
  showSmsDialog.value = true;
};

const handleSmsCancel = () => {
  showSmsDialog.value = false;
};

const handleSmsComplete = () => {
  showSmsDialog.value = false;
  showMessage("登录成功", "success");
  setTimeout(goHome, 800);
};

const handlePhoneLogin = () => {
  if (!phoneNumber.value) {
    showMessage("请输入手机号");
    return;
  }
  showMessage("登录成功", "success");
  setTimeout(goHome, 800);
};

const handleService = () => {
  showMessage("联系客服");
};
</script>

<template>
  <view class="login-page">
    <view class="design-frame">
      <!-- 顶部背景图区域（两个视图共用） -->
      <view class="hero-art">
        <view class="nav-row">
          <button
            class="image-button back-button"
            aria-label="返回"
            @click="handleBack"
          >
            <image
              class="back-image"
              mode="scaleToFill"
              src="https://lanhu-oss-2537-2.lanhuapp.com/SketchPngf0b2a872bccc4677aef45f18ce9b638157236ab735d005daa98eec22ff99434f"
            />
          </button>
        </view>

        <image
          class="brand-image"
          mode="scaleToFill"
          src="https://lanhu-oss-2537-2.lanhuapp.com/SketchPngec6659883916a0c21d80a83238361b1399fe8238a52e502e78983a6fc68d4ffa"
        />
        <text class="visually-hidden">天团1号</text>
        <text v-if="loginMode === 'one-key'" class="visually-hidden"
          >运动正品 · 现货秒发 · 省钱省心</text
        >
      </view>

      <!-- 一键登录内容 -->
      <OneKeyLogin
        v-if="loginMode === 'one-key'"
        :agreed="agreed"
        @toggle-agreement="toggleAgreement"
        @login="handleLogin"
        @other-login="handleOtherLogin"
        @service="handleService"
        @show-message="showMessage"
      />

      <!-- 手机号验证码登录内容 -->
      <PhoneLogin
        v-if="loginMode === 'phone'"
        v-model="phoneNumber"
        :sms-sent="smsSent"
        @send-sms="handleSendSms"
        @login="handlePhoneLogin"
        @service="handleService"
      />

      <!-- 图形验证码弹框 -->
      <CaptchaDialog
        :visible="showCaptcha"
        @cancel="handleCaptchaCancel"
        @confirm="handleCaptchaConfirm"
      />

      <!-- 短信验证码弹框 -->
      <SmsCodeDialog
        :visible="showSmsDialog"
        :phone="phoneNumber"
        @cancel="handleSmsCancel"
        @complete="handleSmsComplete"
      />
    </view>
  </view>
</template>

<style scoped lang="scss">
.login-page {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: #f0f0f0;
  overflow: hidden;
}

.design-frame {
  position: relative;
  box-sizing: border-box;
  width: 750rpx;
  min-height: 100vh;
  background: #ffffff;
}

.hero-art {
  position: relative;
  height: 494rpx;
  overflow: hidden;
  background: url("https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f0fb44032cdf4a3bbd340892db8977d0_mergeImage.png")
    0 0 / 100% 100% no-repeat;
}

.nav-row {
  display: flex;
  align-items: flex-start;
  width: 44rpx;
  margin: 100rpx 0 0 32rpx;
}

.image-button {
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  line-height: 1;

  &::after {
    border: 0;
  }
}

.back-button {
  width: 44rpx;
  height: 44rpx;
  margin-top: 2rpx;
}

.back-image {
  display: block;
  width: 44rpx;
  height: 44rpx;
}

.brand-image {
  display: block;
  width: 412rpx;
  height: 160rpx;
  margin: 60rpx auto 0;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
}

@media (min-width: 751px) {
  .design-frame {
    width: 375px;
  }

  .hero-art {
    height: 247px;
  }

  .nav-row {
    width: 22px;
    margin: 50px 0 0 16px;
  }

  .back-button,
  .back-image {
    width: 22px;
    height: 22px;
  }

  .back-button {
    margin-top: 1px;
  }

  .brand-image {
    width: 206px;
    height: 80px;
    margin-top: 30px;
  }
}
</style>
