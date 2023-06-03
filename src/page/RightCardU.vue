<template>
    <div class="links">
        <div class="line">
            <span class="title">网站列表</span>
        </div>
            <div class="icon">
                <h2>wz</h2>
            </div>
            <div class="icon icon2">
                <h2>wz</h2>
            </div>
            <div class="icon icon3">
                <h2>wz</h2>
            </div>
            <div class="icon icon4">
                <h2>wz</h2>
            </div>
            <div class="icon icon5">
                <h2>wz</h2>
            </div>
            <div class="icon icon6">
                <h2>wz</h2>
            </div>
    </div>
</template>
    
<script setup>
</script>
    
<style scoped>
.title {
    position: absolute;
    width: 200px;
    height: 100px;
    bottom: 300px;
    right: 580px;
    font-size: 20px;
    color: #fff;
    font-family: 'Pacifico';

}
@font-face {
    font-family: 'Pacifico'; /* 自定义字体的名称 */
    src: url('/font/Pacifico.ttf'); /* 字体文件的路径 */
  }
.icon {
    position: absolute;
    /* 使用绝对定位 */
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: rgba(128, 128, 128, 0.5);
    /* 使用RGBA颜色值设置带透明度的背景色 */
    backdrop-filter: blur(8px);
    /* 添加虚化效果 */
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    /* 添加过渡效果 */
    /* 弹性盒子属性 */
    display: flex;
    flex-direction: row;
    /* 设置为水平排列，可以根据需要修改为row-reverse或column等 */
    justify-content: center;
    /* 在主轴上居左对齐，可以根据需要修改为flex-start、flex-end等 */
    align-items: center;
    /* 在交叉轴上居中对齐，可以根据需要修改为flex-start、flex-end等 */
    width: 200px;
    height: 100px;
    bottom: 260px;
    right: 580px;
}

.icon:hover {
    transform: scale(1.01);
    filter: brightness(1.12);
    /* 鼠标悬停时提高亮度 */
}

.icon2 {
    bottom: 260px;
    right: 350px;
}

.icon3 {
    bottom: 260px;
    right: 120px;
}

.icon4 {
    bottom: 130px;
    right: 580px;
}

.icon5 {
    bottom: 130px;
    right: 350px;
}

.icon6 {
    bottom: 130px;
    right: 120px;
}</style>
    