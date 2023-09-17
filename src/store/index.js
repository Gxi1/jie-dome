import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      // 移动端导航栏状态
      innerWidth: null, // 当前窗口宽度
    };
  },
  getters: {
    // 获取页面宽度
    getInnerWidth(state) {
      return state.innerWidth;
    },
  },
  actions: {
    // 更改当前页面宽度
    setInnerWidth(value) {
      this.innerWidth = value;
      if (value >= 720) {
        // 大于720px时，关闭移动端导航栏
        this.mobileOpenState = false;
        this.mobileFuncState = false;
      }
    },
  },
  persist: {
    // 持久化
    key: "data", // 存储在localStorage的key
    storage: window.localStorage,
    paths: [
      // 需要持久化的数据
      "innerWidth",
      "mobileOpenState",
      "mobileFuncState",
      "headerBlur",
      "footerBlur",
    ],
  },
});
