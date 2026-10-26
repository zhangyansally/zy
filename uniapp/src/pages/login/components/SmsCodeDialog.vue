<script setup>
import { ref, computed, watch, onUnmounted } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["cancel", "complete"]);

const smsCode = ref("");
const countdown = ref(0);
let countdownTimer = null;

const smsDigits = computed(() => {
  const chars = smsCode.value.split("");
  return Array.from({ length: 6 }, (_, i) => chars[i] || "");
});

const startCountdown = () => {
  countdown.value = 59;
  clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    if (countdown.value <= 1) {
      countdown.value = 0;
      clearInterval(countdownTimer);
      countdownTimer = null;
      return;
    }
    countdown.value -= 1;
  }, 1000);
};

const stopCountdown = () => {
  clearInterval(countdownTimer);
  countdownTimer = null;
  countdown.value = 0;
};

// 打开时清空并开始倒计时，关闭时停止
watch(
  () => props.visible,
  (val) => {
    if (val) {
      smsCode.value = "";
      startCountdown();
    } else {
      stopCountdown();
    }
  }
);

// 输满 6 位自动通知父级
watch(smsCode, (val) => {
  if (val.length === 6) {
    emit("complete", val);
  }
});

onUnmounted(() => {
  clearInterval(countdownTimer);
});

const handleCancel = () => {
  emit("cancel");
};

const handleResend = () => {
  if (countdown.value > 0) {
    return;
  }
  startCountdown();
  uni.showToast({ title: "验证码已发送", icon: "success" });
};
</script>

<template>
  <view v-if="visible" class="sms-overlay" @click="handleCancel">
    <view class="sms-popup" @click.stop>
      <text class="sms-title">输入短信验证码</text>
      <text class="sms-subtitle">验证码将发送至{{ phone }}</text>

      <view class="sms-code-wrap">
        <input
          v-model="smsCode"
          class="sms-code-input"
          type="number"
          maxlength="6"
        />
        <view class="sms-code-cells">
          <view
            v-for="(digit, index) in smsDigits"
            :key="index"
            class="sms-code-cell"
            :class="{ 'sms-code-cell-active': index === smsCode.length }"
          >
            <text class="sms-code-digit">{{ digit }}</text>
          </view>
        </view>
      </view>

      <view class="sms-actions">
        <text class="sms-btn-cancel" @click="handleCancel">取消</text>
        <text
          class="sms-btn-resend"
          :class="{ 'sms-btn-resend-disabled': countdown > 0 }"
          @click="handleResend"
          >{{ countdown > 0 ? countdown + "s后重发" : "重新获取" }}</text
        >
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.sms-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
}

.sms-popup {
  width: 540rpx;
  padding: 40rpx 30rpx 0;
  border-radius: 16rpx;
  background: #ffffff;
  overflow: hidden;
}

.sms-title {
  display: block;
  color: #111111;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-size: 30rpx;
  font-weight: 500;
  line-height: 30rpx;
  text-align: center;
}

.sms-subtitle {
  display: block;
  margin-top: 20rpx;
  color: #999999;
  font-family: PingFangSC-Regular, "Microsoft YaHei", Arial, sans-serif;
  font-size: 28rpx;
  font-weight: 400;
  line-height: 40rpx;
  text-align: center;
}

.sms-code-wrap {
  position: relative;
  margin-top: 48rpx;
  height: 80rpx;
}

.sms-code-input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
}

.sms-code-cells {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80rpx;
}

.sms-code-cell {
  flex: 0 0 72rpx;
  height: 80rpx;
  border: 2rpx solid #e0e0e0;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.sms-code-cell-active {
  border-color: #1c64ee;
}

.sms-code-digit {
  color: #111111;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-size: 36rpx;
  font-weight: 500;
  line-height: 44rpx;
}

.sms-actions {
  display: flex;
  align-items: stretch;
  margin: 40rpx -30rpx 0;
  border-top: 2rpx solid #ebebeb;
}

.sms-btn-cancel,
.sms-btn-resend {
  flex: 1;
  height: 88rpx;
  font-family: PingFangSC-Medium, "Microsoft YaHei", Arial, sans-serif;
  font-size: 30rpx;
  font-weight: 500;
  line-height: 88rpx;
  text-align: center;
}

.sms-btn-cancel {
  color: #111111;
}

.sms-btn-resend {
  color: #1c64ee;
  border-left: 2rpx solid #ebebeb;
}

.sms-btn-resend-disabled {
  color: #a4c1f7;
}

@media (min-width: 751px) {
  .sms-popup {
    width: 270px;
    padding: 20px 15px 0;
    border-radius: 8px;
  }

  .sms-title {
    font-size: 15px;
    line-height: 15px;
  }

  .sms-subtitle {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
  }

  .sms-code-wrap {
    margin-top: 24px;
    height: 40px;
  }

  .sms-code-cells {
    height: 40px;
  }

  .sms-code-cell {
    flex-basis: 36px;
    height: 40px;
    border-radius: 4px;
  }

  .sms-code-digit {
    font-size: 18px;
    line-height: 22px;
  }

  .sms-actions {
    margin: 20px -15px 0;
  }

  .sms-btn-cancel,
  .sms-btn-resend {
    height: 44px;
    font-size: 15px;
    line-height: 44px;
  }
}
</style>
