<template>
  <div class="icon">
    <div class="icon-container" @mouseover="showTooltip('去GitHub看看')" @mouseout="hideTooltip">
      <img src="/icon/github.svg" @click="goToGitPage" style="margin-left: 10px;">
    </div>
    <div class="icon-container" @mouseover="showTooltip('有什么事吗？宝')" @mouseout="hideTooltip">
      <img src="/icon/wechat.svg" @click="goToWeChatPage" style="margin-left: 30px;">
    </div>

    <div class="icon-container" @mouseover="showTooltip('欢迎登录QQ')" @mouseout="hideTooltip">
      <img src="/icon/qq.svg" @click="goToQQPage" style="margin-left: 30px;">
    </div>
    <div class="icon-container" @mouseover="showTooltip('(゜-゜)つロ干杯~')" @mouseout="hideTooltip">
      <img src="/icon/bilibili.svg" @click="goToBilibiliPage" style="margin-left: 30px;">
    </div>
    <div class="icon-container" @mouseover="showTooltip('搜索一下吧！')" @mouseout="hideTooltip">
      <img src="/icon/google.svg" @click="goToGooglePage" style="margin-left: 30px;">
    </div>
    <span class="iconTip">{{ showTip }}</span>
  </div>
</template>
  
<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';

const props = defineProps({
  name: {
    type: Array,
    required: true,
  },
});
const goToGitPage = () => {
  window.location.href = 'https://github.com/Gxi1';
};
const goToWeChatPage = () => {
  window.location.href = 'https://open.weixin.qq.com/';
};
const goToQQPage = () => {
  window.location.href = 'https://res.abeim.cn/api/qq/?qq=1176787592';
};
const goToBilibiliPage = () => {
  window.location.href = 'https://space.bilibili.com/100000000';
};
const goToGooglePage = () => {
  window.location.href = 'https://www.google.com';
};
const showTip = ref("欢迎联系我");
const showTooltip = (name) => {
  showTip.value = name;
};
const hideTooltip = () => {
  showTip.value = '欢迎联系我';
};

</script>
  
<style scoped>
.icon {
  position: absolute;
  /* 使用绝对定位 */
  backdrop-filter: blur(0px);
  /* 添加虚化效果 */
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  /* 添加过渡效果 */
  /* 弹性盒子属性 */
  display: flex;
  flex-direction: row;
  /* 设置为水平排列，可以根据需要修改为row-reverse或column等 */
  justify-content: left;
  /* 在主轴上居左对齐，可以根据需要修改为flex-start、flex-end等 */
  align-items: center;
  /* 在交叉轴上居中对齐，可以根据需要修改为flex-start、flex-end等 */
  width: 460px;
  height: 40px;
  bottom: 180px;
  left: 90px;
  color: #ffffff00;
}

.icon:hover {
  transform: scale(1.01);
  filter: brightness(1.12);
  /* 鼠标悬停时提高亮度 */
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgba(84, 84, 84, 0.5);
  /* 使用RGBA颜色值设置带透明度的背景色 */
  color: #ffffff;
}
.icon img:hover {
  transform: scale(1.2);
  filter: drop-shadow(0 0 0 #fff);
}
.icon img{
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  overflow: hidden;
}
.iconTip{
  /*右侧对齐 */
  position: absolute;
  right: 30px;

}

</style>
  