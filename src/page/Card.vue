<template>
  <el-card class="card " :style="{ width: cardWidth, height: cardHeight, marginTop: CardMarginTop, top: CardTop, marginLeft: CardMarginLeft, left: CardLeft }">
      <div class="card-icon"> 
      </div>
      <div class="card-text">
        <h2>Hello Word</h2>
        <h3>代码创造未来，数据驱动进步，算法开启智慧，网络连接全球。</h3>
      </div>
  </el-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  cardWidth: {
    type: String,
    default: '460px' // 默认宽度为460px
  },
  cardHeight: {
    type: String,
    default: '130px' // 默认高度为130px
  },
  CardMarginTop: {
    type: String,
    default: '380px' // 默认高度为360px
  },
  CardTop: {
    type: String,
    default: '0px' // 默认高度为0px
  },
  CardMarginLeft: {
    type: String,
    default: '90px' // 默认高度为90px
  },
  CardLeft: {
    type: String,
    default: '0px' // 默认高度为0px
  }
});
</script>

<style lang="scss" scoped>
.card {
  position: absolute; /* 使用绝对定位 */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgba(128, 128, 128, 0.5); /* 使用RGBA颜色值设置带透明度的背景色 */
  backdrop-filter: blur(8px); /* 添加虚化效果 */
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out; /* 添加过渡效果 */
  /* 弹性盒子属性 */
  display: flex;
  flex: 1; /* 填充剩余空间 */
  margin: 10px; /* 适当的外边距 */
  flex-direction: column; /* 设置为水平排列，可以根据需要修改为row-reverse或column等 */
  justify-content: center; /* 在主轴上居中对齐，可以根据需要修改为flex-start、flex-end等 */
  align-items: center; /* 在交叉轴上居中对齐，可以根据需要修改为flex-start、flex-end等 */
  width: 50%;
  margin-right: 10px;
  overflow: hidden;
}

.card:hover {
  transform: scale(1.01); /* 鼠标悬停时放大卡片 */
  filter: brightness(1.08); /* 鼠标悬停时提高亮度 */
}
.card-content {
  position: relative; /* 添加相对定位以支持绝对定位的子元素 */
}
@font-face {
  font-family: 'Pacifico'; /* 自定义字体的名称 */
  src: url('/font/Pacifico.ttf'); /* 字体文件的路径 */
}

.card-text {
  color: #323232;
  font-weight: bold;
  font-family: 'Pacifico', sans-serif;
}
.card-text h2{
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}
.card-text h3{
  font-size: 1em;
  font-weight: bold;
  color: #fff;
}
</style>
