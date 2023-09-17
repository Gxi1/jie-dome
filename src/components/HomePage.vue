<script setup>
import { useGoToNotFound } from "@/router/goToRouter.js";
//import {ref} from "@vue/reactivity";
import { ref, onUnmounted, watch, onMounted } from "vue";
import { getThemeIcon, toggleTheme } from "@/tool/themeChange.js";
import { getLanguageName, toggleLanguage } from "@/tool/languageChange.js";
import { mainStore } from "@/store";
import Card from "@/page/Card.vue";
import Icon from "@/page/Icon.vue";
import RightCardL from "@/page/RightCardL.vue";
import RightCardR from "../page/RightCardR.vue";
import RightCardU from "../page/RightCardU.vue";

// const theme = ref(getThemeIcon());
// const swatchTheme = () => {
//     toggleTheme();
//     theme.value = getThemeIcon();
// }

// const language = ref(getLanguageName());
// const switchLanguage = () => {
//     toggleLanguage();
//     language.value = getLanguageName();
// }

// const goToNotFound = useGoToNotFound();

const store = mainStore();

// 定义 getWidth 函数
const getWidth = () => {
  store.setInnerWidth(window.innerWidth);
};

// 监听当前页面宽度
window.addEventListener("resize", getWidth);

// 监听宽度变化
watch(
  () => store.innerWidth,
  (value) => {
    if (value < 990) {
      store.boxOpenState = false;
    }
  }
);

// 在组件卸载前移除事件监听器
onUnmounted(() => {
  window.removeEventListener("resize", getWidth);
});
onMounted(() => {
  const containerElement = document.querySelector(".container");
  if (containerElement) {
    containerElement.style.height = window.innerHeight + "px";
  }
});
// 屏蔽右键
document.oncontextmenu = () => {
  ElMessage({
    message: "为了浏览体验，本站禁用右键",
    grouping: true,
    duration: 2000,
  });
  return false;
};

const backgrounds = ref([
  "./image1.jpg",
  "./image2.jpg",
  "./image3.jpg",
  "./image4.jpg",
  "./image5.jpg",
  "./image6.jpg",
  "./image7.jpg",
  "./image8.jpg",
]); // 背景图片的路径
const currentBackground = ref(backgrounds.value[0]); // 当前背景图片的路径
const changeBackground = () => {
  const index = backgrounds.value.indexOf(currentBackground.value);
  currentBackground.value =
    backgrounds.value[(index + 1) % backgrounds.value.length];
};
setInterval(changeBackground, 60000); // 每一分钟切换一次背景图片

// 时钟
// 使用 ref 创建响应式变量
const deg = 6; // 角度值
    const hourRotation = ref(0);
    const minRotation = ref(0);
    const secRotation = ref(0);

    // 使用 onMounted 来模拟 setInterval
    onMounted(() => {
      setInterval(() => {
        const day = new Date();

        // 计算旋转角度
        const hh = day.getHours() * 30;
        const mm = day.getMinutes() * deg;
        const ss = day.getSeconds() * deg;

        // 更新响应式变量
        hourRotation.value = hh + mm / 12;
        minRotation.value = mm;
        secRotation.value = ss;
      }, 1000); // 每隔1秒更新一次
    });
    
</script>

<template>
  <div
    class="container"
    :style="{ backgroundImage: `url(${currentBackground})` }"
  >
    <div id="homePage">
      <el-container>
        <el-header
          >Header
          <!-- <el-button @click="swatchTheme" :icon="theme">{{ $t('homePage.swatchThemeButton') }}</el-button>
        <el-icon><HomeFilled /></el-icon>
        <el-button @click="goToNotFound">{{ $t('homePage.notFoundButton') }}</el-button>
        <el-button @click="switchLanguage">{{ language }}</el-button> -->
        </el-header>
        <el-main
          >Main
          <!-- <h1>{{ $t('homePage.title') }}</h1> -->
          <div class="title-wrapper">
            <!-- 时钟的容器 -->
            <div class="clock">
              <!-- 时针盒子 -->
              <div class="hour" id="hour" :style="{ transform: `rotate(${hourRotation}deg)` }"></div>
              <!-- 分针盒子 -->
              <div class="min" id="min" :style="{ transform: `rotate(${minRotation}deg)` }"></div>
              <!-- 秒针盒子 -->
              <div class="sec" id="sec" :style="{ transform: `rotate(${secRotation}deg)` }"></div>
            </div>
            <h1>Xiao jie.top</h1>
          </div>
          <Card />
          <Icon />
          <RightCardL />
          <RightCardR />
          <RightCardU />
          <router-view> </router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/global.scss";
.container {
  display: flex;
  flex-wrap: wrap;
  /* 控制换行 */
  justify-content: space-between;
  /* 控制水平排列方式 */
  flex-direction: column;
  overflow: hidden;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-image 2s ease-in-out 0s;
  /* 添加过渡效果 */
  overflow: hidden; /* 隐藏溢出的内容 */
}

.title-wrapper {
  text-align: left;
  /* 调整标题的水平对齐方式 */
  align-items: center;
  /* 调整标题的垂直对齐方式 */
  margin-left: 90px;
  /* 调整标题距离左侧的距离 */
  margin-top: 66px;
  /* 调整标题距离顶部的距离 */
}

.el-container {
  height: 100vh;
  /* 设置容器元素的高度为100%视口高度，确保容器填充整个页面 */
  display: flex;
  /* 将容器元素设置为flex布局 */
  flex-direction: column;
  /* 设置主轴为垂直方向，即子元素垂直排列 */
  justify-content: space-between;
  /* 设置子元素在主轴上的对齐方式为两端对齐 */
}

.el-header {
  backdrop-filter: blur(8px);
  /* 添加虚化效果 */
}

.el-footer {
  backdrop-filter: blur(8px);
  /* 添加虚化效果 */
}

@font-face {
  font-family: "Pacifico";
  /* 自定义字体的名称 */
  src: url("/font/Pacifico.ttf");
  /* 字体文件的路径 */
}

.title-wrapper h1 {
  display: flex;
  flex-direction: row;
  font-size: 3em;
  color: #000000;
  font-family: "Pacifico", sans-serif;
  margin-left: 150px;
  margin-top: -60px;
}

/* 时钟的容器盒子 */
.title-wrapper .clock {
  width: 150px;
  height: 150px;
  border: 3px solid #091921;
  background: url("../clock.png") no-repeat center/cover;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05),
    0 15px 15px rgba(0, 0, 0, 0.05), inset 0 15px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 接下来我们来制作中间的白色轴点 */
.clock::before {
  content: "";
  width: 15px;
  height: 15px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  z-index: 999;
}

/* 时针、分针、秒针这三个盒子的公共样式 */
.hour,
.min,
.sec {
  position: absolute;
  display: flex;
  justify-content: center;
}

/* 时针容器盒子 */
.hour {
  width: 100px;
  height: 80px;
  /* border: 1px solid red; */
}

/* 时针 */
.hour::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 60px;
  background-color: #ff105e;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}

/* 时针一旦搞定了，那么分针、秒针都是一样的 */

/* 分针容器盒子 */
.min {
  width: 110px;
  height: 110px;
  /* border: 1px solid blue; */
}

/* 分针 */
.min::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background-color: #fff;
  z-index: 11;
  border-radius: 6px 6px 0 0;
}

/* 秒针容器盒子 */
.sec {
  width: 140px;
  height: 140px;
  /* border: 1px solid yellow; */
}

/* 秒针 */
.sec::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 70px;
  background-color: #fff;
  z-index: 12;
  border-radius: 6px 6px 0 0;
}
</style>
