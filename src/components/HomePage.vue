<script setup>
import {useGoToNotFound} from "@/router/goToRouter.js";
import {ref} from "@vue/reactivity";
import {getThemeIcon, toggleTheme} from "@/tool/themeChange.js";
import {getLanguageName, toggleLanguage} from "@/tool/languageChange.js";
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
const avatarSrc = ref("R.gif"); // GIF 图片的路径
const backgrounds = ref([
'/image.jpg',
'/image1.jpg',
'/image2.jpg',
'/image3.jpg',
'/image4.jpg',
'/image5.jpg',
'/image6.jpg',
'/image7.jpg',
]) // 背景图片的路径
const currentBackground = ref(backgrounds.value[0]) // 当前背景图片的路径
const changeBackground = () => {
    const index = backgrounds.value.indexOf(currentBackground.value)
    currentBackground.value = backgrounds.value[(index + 1) % backgrounds.value.length]
}
setInterval(changeBackground, 60000) // 每一分钟切换一次背景图片


</script>

<template>
<div class="container" :style="{ backgroundImage: `url(${currentBackground})` }">
    <div id="homePage">
    <el-container>
      <el-header>Header
        <!-- <el-button @click="swatchTheme" :icon="theme">{{ $t('homePage.swatchThemeButton') }}</el-button>
        <el-icon><HomeFilled /></el-icon>
        <el-button @click="goToNotFound">{{ $t('homePage.notFoundButton') }}</el-button>
        <el-button @click="switchLanguage">{{ language }}</el-button> -->
      </el-header>
      <el-main>Main
        <!-- <h1>{{ $t('homePage.title') }}</h1> -->
        <div class="title-wrapper">
          <img :src="avatarSrc" alt="Avatar" class="avatar">
            <h1>Xiao jie.top</h1>
          </div>
        <Card/>
        <Icon/>
        <RightCardL/>
        <RightCardR/>
        <RightCardU/>
        <router-view>
        </router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</div>
</template>

<style scoped>
.container {  
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
}
.title-wrapper {
  text-align: left; /* 调整标题的水平对齐方式 */
  align-items: center; /* 调整标题的垂直对齐方式 */
  margin-left: 90px; /* 调整标题距离左侧的距离 */
  margin-top: 66px; /* 调整标题距离顶部的距离 */
}
.el-container {
  height: 100vh; /* 设置容器元素的高度为100%视口高度，确保容器填充整个页面 */
    display: flex; /* 将容器元素设置为flex布局 */
    flex-direction: column; /* 设置主轴为垂直方向，即子元素垂直排列 */
    justify-content: space-between; /* 设置子元素在主轴上的对齐方式为两端对齐 */
}
.el-header {
  backdrop-filter: blur(8px); /* 添加虚化效果 */
}
.el-footer {
  backdrop-filter: blur(8px); /* 添加虚化效果 */
}
@font-face {
  font-family: 'Pacifico'; /* 自定义字体的名称 */
  src: url('/font/Pacifico.ttf'); /* 字体文件的路径 */
}
.title-wrapper h1 {
  display: inline;
  text-align: center;
  font-size: 50px;
  color: #423e3e;
  font-family: 'Pacifico', sans-serif;
  margin-left: 40px;
}
.avatar {
  display: inline;
  text-align: center;
  border-radius: 50%; /* 将图片设置为圆形 */
  width: 150px; /* 根据需求调整头像的宽度 */
  height: 150px; /* 根据需求调整头像的高度 */
}
</style>