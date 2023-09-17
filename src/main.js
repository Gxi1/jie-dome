import {createApp, provide, ref} from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import {useDark, useToggle} from "@vueuse/core";
import router from './router/index'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import hljs from 'highlight.js';
import * as languageChange from "@/tool/languageChange.js";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


// 引入所需的图标
import {} from '@fortawesome/free-solid-svg-icons';

// 将图标添加到图标库
library.add();

// 使用 createApp 创建 Vue 应用实例
const app = createApp(App)
// 遍历并注册 Element Plus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 注册 FontAwesome 图标组件
app.component('FontAwesomeIcon', FontAwesomeIcon);

// 使用路由配置和代码高亮插件
app.use(router)
app.use(hljs)

// 使用 i18n 实例
app.use(languageChange.i18n)

// 创建并使用自定义指令 'highlight'，用于高亮代码块
app.directive('highlight', (el) => {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})
const pinia = createPinia();
app.use(pinia);


// 挂载 Vue 应用实例到页面元素上
app.mount('#app')

// 使用 vueuse 库的 useToggle 函数，切换颜色模式
useToggle(useDark())