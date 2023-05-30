<template>
  <div class="icon">
    <div class="icon-container" @mouseover="showTooltip('git')" @mouseout="hideTooltip">
      <svg @click="goToGitPage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style="margin-left: 10px;" >
        <path
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
      <span class="icon-text" v-if="showGitTooltip">去GitHub看看</span>
    </div>
    <div class="icon-container" @mouseover="showTooltip('wechat')" @mouseout="hideTooltip">
      <svg @click="goToWeChatPage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="margin-left: 30px;">
      <path
        d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z" />
    </svg>
      <span class="icon-text" v-if="showWeChatTooltip">有什么事吗？宝</span>
    </div>
    
    <div class="icon-container" @mouseover="showTooltip('qq')" @mouseout="hideTooltip">
      <svg @click="goToQQPage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="margin-left: 30px;">
      <path
        d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z" />
    </svg>
      <span class="icon-text" v-if="showQQTooltip">欢迎登录QQ</span>
    </div>
    <div class="icon-container" @mouseover="showTooltip('bilibili')" @mouseout="hideTooltip">
      <svg @click="goToBilibiliPage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="margin-left: 30px;">
      <path
        d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z" />
    </svg>
      <span class="icon-text" v-if="showBilibiliTooltip">(゜-゜)つロ干杯~</span>
    </div>
    <div class="icon-container" @mouseover="showTooltip('google')" @mouseout="hideTooltip">
      <svg @click="goToGooglePage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" style="margin-left: 30px;">
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
      <span class="icon-text" v-if="showGoogleTooltip">搜索一下吧！</span>
    </div>
  </div>
</template>
  
<script setup>
import { defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
const showGitTooltip = ref(false);
const showWeChatTooltip = ref(false);
const showQQTooltip = ref(false);
const showBilibiliTooltip = ref(false);
const showGoogleTooltip = ref(false);
const showTooltip = (name) => {
  switch (name) {
    case 'git':
      showGitTooltip.value = true;
      break;
    case 'wechat':
      showWeChatTooltip.value = true;
      break;
    case 'qq':
      showQQTooltip.value = true;
      break;
    case 'bilibili':
      showBilibiliTooltip.value = true;
      break;
    case 'google':
      showGoogleTooltip.value = true;
      break;
  }
};
const hideTooltip = () => {
  showGitTooltip.value = false;
  showWeChatTooltip.value = false;
  showQQTooltip.value = false;
  showBilibiliTooltip.value = false;
  showGoogleTooltip.value = false;
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
  bottom: 210px;
  left: 90px;
}

.icon:hover {
  transform: scale(1.01);
  filter: brightness(1.12);
  /* 鼠标悬停时提高亮度 */
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgba(84, 84, 84, 0.5);
  /* 使用RGBA颜色值设置带透明度的背景色 */
}

.icon svg:hover {
  transform: scale(1.2);
  filter: drop-shadow(0 0 0 #fff);
}

.icon svg {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #fff;
}

.icon-text {
  position: absolute;
  top: 0;
  left: 290px;
  width: 140px;
  height: 100%;
  color: #fff;
  /* 设置文字颜色 */
  opacity: 0;
  transition: opacity 0.3s ease;
  /* 添加过渡效果 */
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 14px;
  /* 设置文字大小 */
}

.icon-container:hover .icon-text {
  visibility: visible;
  opacity: 1;
  /* 鼠标悬停时显示文字 */
}</style>
  