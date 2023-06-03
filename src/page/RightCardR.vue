<template>
    <el-card class="card" :style="{ width: cardWidth, height: cardHeight, marginTop: CardMarginTop, top: CardTop, marginRight: CardMarginRight, right: CardRight }">
      <div class="card-content">
        <div class="card-info">
        <a>{{ currentDate }}</a>
        <p>{{ currentTime }}</p>
        <p>{{ weather }}</p>
      </div>
      </div>
    </el-card>
  </template>
  
  <script setup>
  import { defineProps, ref ,onMounted } from 'vue';
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
      default: '130px' // 默认高度为520px
    },
    CardRight: {
      type: String,
      default: '0px' // 默认高度为0px
    }
  });
const currentDate = ref('');
const currentTime = ref('');
const weather = ref('');

// 获取实时日期
const updateDate = () => {
  const date = new Date();
  currentDate.value = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

// 获取实时时间
const updateTime = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  currentTime.value = `${hours}:${minutes}:${seconds}`;
};

// 获取实时天气
const updateWeather = async () => {
  try {
    const response = await fetch(`https://api.seniverse.com/v3/weather/daily.json?key=S25CqQMLVo1PEyzTC&location=大连&language=zh-Hans&unit=c&start=-1&days=1`);
    const data = await response.json();

    const weatherData = data.results[0].daily[0];
    const temperature = `${weatherData.low}°C - ${weatherData.high}°C`;
    const weatherDescription = weatherData.text_day;

    weather.value = `${temperature}，${weatherDescription}`;
  } 
  catch (error) {
    console.error('获取天气信息失败：', error.message);
  }
};

// 更新日期、时间和天气
updateDate();
updateTime();
updateWeather();

// 每秒更新一次时间
setInterval(() => {
  updateTime();
}, 1000);
// 组件挂载后更新天气
onMounted(() => {
  updateWeather();
});
  </script>
  
  <style scoped>
  .card {
    position: absolute; /* 使用绝对定位 */
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  .card-info {
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  margin-left: 10px;
  font-family: Arial, sans-serif;
}
  @font-face {
    font-family: 'UniDream LED Regular'; /* 自定义字体的名称 */
    src: url('/font/UniDream LED Regular.ttf'); /* 字体文件的路径 */
  }
    .card-info a {
        margin: 0;
        font-size: 20px;
    }
    .card-info p {
        margin: 0;
        font-family: 'UniDream LED Regular', sans-serif;
        font-size: 50px;
    }
  </style>
  