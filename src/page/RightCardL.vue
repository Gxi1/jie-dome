<template>
    <el-card class="card" :style="{ width: cardWidth, height: cardHeight, marginTop: CardMarginTop, top: CardTop, marginRight: CardMarginRight, right: CardRight }">
      <div class="content" @click="updateHitokoto">
      <span class="text">{{ hitokotoData.text }}</span>
      <span class="from">-「&nbsp;{{ hitokotoData.from }}&nbsp;」</span>
    </div>
    </el-card>
  </template>
  
  <script setup>
  import { defineProps,reactive, onMounted} from 'vue';
  import debounce from "@/router/debounce.js";

  
  const props = defineProps({
    cardWidth: {
      type: String,
      default: '300px' // 默认宽度为460px
    },
    cardHeight: {
      type: String,
      default: '164px' // 默认高度为164px
    },
    CardMarginTop: {
      type: String,
      default: '200px' // 默认高度为200px
    },
    CardTop: {
      type: String,
      default: '0px' // 默认高度为0px
    },
    CardMarginRight: {
      type: String,
      default: '480px' // 默认高度为520px
    },
    CardRight: {
      type: String,
      default: '0px' // 默认高度为0px
    }
  });
  
// 一言数据
const hitokotoData = reactive({
  text: "这里应该显示一句话",
  from: "名"
});
// 获取一言数据
const getHitokoto = async () => {
  const res = await fetch("https://v1.hitokoto.cn");
  const data = await res.json();
  hitokotoData.text = data.hitokoto;
  hitokotoData.from = data.from;
};
// 获取一言数据
const getHitokotoData = () => {
  getHitokoto();
};
// 更新一言数据
const updateHitokoto = () => {
  hitokotoData.text = "新的一言正在赶来的路上";
  hitokotoData.from = "来源加载中";
  // 防抖
  debounce(() => {
    getHitokotoData();
  }, 500);
};

onMounted(() => {
  getHitokotoData();
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
    display: flex;
    margin: 0 auto; /* 适当的外边距 */
    flex-wrap: wrap; /* 设置为水平排列，可以根据需要修改为row-reverse或column等 */
    justify-content: space-around; /* 在主轴上居左对齐，可以根据需要修改为flex-start、flex-end等 */
    align-items: center;
    // /* 弹性盒子属性 */
    // display: flex;
    // flex: 1; /* 填充剩余空间 */
    // margin: 10px; /* 适当的外边距 */
    // flex-direction: row; /* 设置为水平排列，可以根据需要修改为row-reverse或column等 */
    // justify-content: center; /* 在主轴上居左对齐，可以根据需要修改为flex-start、flex-end等 */
    // align-items: center; /* 在交叉轴上居中对齐，可以根据需要修改为flex-start、flex-end等 */
    // width: 50%;
    // margin-right: 10px;
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
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'Pacifico', sans-serif;
    color: #fff;
  }
    .text {
      font-size: 1.1em;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .from {
      margin-top: 10px;
      font-weight: bold;
      align-self: flex-end;
      font-size: 1.2em;
    }
  </style>
  