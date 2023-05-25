<template>
  <el-card class="card flex-card" :style="{ width: cardWidth, height: cardHeight, marginTop: CardMarginTop, top: CardTop, marginLeft: CardMarginLeft, left: CardLeft }">
    <div class="card-content">
      <div class="card-icon"> 
      </div>
      <div class="card-text">
        <h2>hello word</h2>
        <br>
        <h3>代码创造未来，数据驱动进步，算法开启智慧，网络连接全球。</h3>
        <slot></slot>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  cardWidth: {
    type: String,
    default: '400px' // 默认宽度为400px
  },
  cardHeight: {
    type: String,
    default: '130px' // 默认高度为130px
  },
  CardMarginTop: {
    type: String,
    default: '450px' // 默认高度为450px
  },
  CardTop: {
    type: String,
    default: '0px' // 默认高度为0px
  },
  CardMarginLeft: {
    type: String,
    default: '100px' // 默认高度为100px
  },
  CardLeft: {
    type: String,
    default: '0px' // 默认高度为0px
  }
});
</script>

<style scoped>
.card {
  position: absolute; /* 使用绝对定位 */
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  background-color: rgba(128, 128, 128, 0.5); /* 使用RGBA颜色值设置带透明度的背景色 */
  backdrop-filter: blur(8px); /* 添加虚化效果 */
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out; /* 添加过渡效果 */
  /* 弹性盒子属性 */
  display: flex;
  flex-direction: row; /* 设置为水平排列，可以根据需要修改为row-reverse或column等 */
  justify-content: center; /* 在主轴上居中对齐，可以根据需要修改为flex-start、flex-end等 */
  align-items: center; /* 在交叉轴上居中对齐，可以根据需要修改为flex-start、flex-end等 */
}

.card:hover {
  transform: scale(1.01); /* 鼠标悬停时放大卡片 */
  filter: brightness(1.08); /* 鼠标悬停时提高亮度 */
}
.card-content {
  position: relative; /* 添加相对定位以支持绝对定位的子元素 */
}

.card-icon {
  position: absolute; /* 使用绝对定位 */
  top: 0;
  left: 0;
  width: 100px; /* 根据需求调整图标的宽度 */
  height: 100px; /* 根据需求调整图标的高度 */
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 1; /* 将图标置于卡片的最上层 */
}
@font-face {
  font-family: 'Pacifico'; /* 自定义字体的名称 */
  src: url('/font/Pacifico.ttf'); /* 字体文件的路径 */
}

.card-text {
  color: #323232;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.0;
  font-family: 'Pacifico', sans-serif;
}
.card-text h3{
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-top: 1px;
  margin-bottom: 35px;
}
</style>
