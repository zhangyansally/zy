<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["cancel", "confirm"]);

const captchaCode = ref("");

// 每次打开时清空输入
watch(
  () => props.visible,
  (val) => {
    if (val) {
      captchaCode.value = "";
    }
  }
);

const handleCancel = () => {
  emit("cancel");
};

const handleConfirm = () => {
  if (!captchaCode.value) {
    uni.showToast({ title: "请输入图形验证码", icon: "none" });
    return;
  }
  emit("confirm", captchaCode.value);
};
</script>

<template>
  <view v-if="visible" class="captcha-overlay" @click="handleCancel">
    <view class="captcha-popup" @click.stop>
      <text class="captcha-title">请填写图形验证码</text>
      <view class="captcha-row">
        <view class="captcha-input-wrap">
          <input
            v-model="captchaCode"
            class="captcha-input"
            type="text"
            maxlength="4"
            placeholder="输入图形验证码"
            placeholder-style="color: #999999; font-size: 26rpx;"
          />
        </view>
        <view class="captcha-img">
          <text class="captcha-num captcha-num-1">3</text>
          <text class="captcha-num captcha-num-2">4</text>
          <text class="captcha-num captcha-num-3">5</text>
          <text class="captcha-num captcha-num-4">7</text>
        </view>
      </view>
      <text class="captcha-refresh">看不清？换一张</text>
      <view class="captcha-actions">
        <text class="captcha-btn-cancel" @click="handleCancel">取消</text>
        <text class="captcha-btn-confirm" @click="handleConfirm">确定</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.captcha-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
}

.captcha-popup {
  width: 540rpx;
  padding: 40rpx 32rpx 0;
  border-radius: 16rpx;
  background: #ffffff;
  overflow: hidden;
}

.captcha-title {
  display: block;
  color: #000000;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-size: 30rpx;
  font-weight: 500;
  line-height: 30rpx;
  text-align: center;
}

.captcha-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 476rpx;
  margin-top: 54rpx;
}

.captcha-input-wrap {
  flex: 0 0 298rpx;
  height: 68rpx;
  background: #f1f1f1;
  border-radius: 8rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.captcha-input {
  width: 100%;
  height: 56rpx;
  color: #111111;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 26rpx;
  font-weight: 400;
  line-height: 56rpx;
  min-height: 56rpx;
}

.captcha-img {
  flex: 0 0 160rpx;
  height: 68rpx;
  background: #f4bcbc;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.captcha-num {
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-size: 34rpx;
  font-weight: 600;
  line-height: 48rpx;
  letter-spacing: 10rpx;
}

.captcha-num-1 {
  color: #fe0000;
}

.captcha-num-2 {
  color: #09570a;
}

.captcha-num-3 {
  color: #b300fe;
}

.captcha-num-4 {
  color: #fe0000;
}

.captcha-refresh {
  display: block;
  width: 476rpx;
  color: #999999;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 22rpx;
  font-weight: 400;
  line-height: 22rpx;
  text-align: right;
  margin: 12rpx 0 0;
}

.captcha-actions {
  display: flex;
  align-items: stretch;
  margin: 40rpx -32rpx 0;
  border-top: 2rpx solid #ebebeb;
}

.captcha-btn-cancel,
.captcha-btn-confirm {
  flex: 1;
  height: 88rpx;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 34rpx;
  font-weight: 400;
  line-height: 88rpx;
  text-align: center;
}

.captcha-btn-cancel {
  color: #666666;
}

.captcha-btn-confirm {
  color: #1c64ee;
  font-family: PingFangSC-Semibold, "Microsoft YaHei", Arial, sans-serif;
  font-weight: 600;
  border-left: 2rpx solid #ebebeb;
}

@media (min-width: 751px) {
  .captcha-popup {
    width: 270px;
    padding: 20px 16px 0;
    border-radius: 8px;
  }

  .captcha-title {
    font-size: 15px;
    line-height: 15px;
  }

  .captcha-row {
    width: 238px;
    margin-top: 27px;
  }

  .captcha-input-wrap {
    flex-basis: 149px;
    height: 34px;
    border-radius: 4px;
    padding: 0 10px;
  }

  .captcha-input {
    height: 28px;
    font-size: 13px;
    line-height: 28px;
    min-height: 28px;
  }

  .captcha-img {
    flex-basis: 80px;
    height: 34px;
    border-radius: 4px;
  }

  .captcha-num {
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 5px;
  }

  .captcha-refresh {
    width: 238px;
    font-size: 11px;
    line-height: 11px;
    margin: 6px 0 0;
  }

  .captcha-actions {
    margin: 20px -16px 0;
  }

  .captcha-btn-cancel,
  .captcha-btn-confirm {
    height: 44px;
    font-size: 17px;
    line-height: 44px;
  }
}
</style>
