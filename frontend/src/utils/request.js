import axios from "axios";
import qs from "qs";
import { useUserStore } from "@/stores/user_store.js";
import { getAccessToken } from "@/utils/auth";
import router from "@/router";



// 创建 axios 实例
const service = axios.create({
  baseURL: '/api',//import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
  paramsSerializer: (params) => qs.stringify(params),
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    // 如果 Authorization 设置为 no-auth，则不携带 Token
    if (config.headers.Authorization !== "no-auth" && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 如果响应是二进制流，则直接返回，用于下载文件、Excel 导出等
    if (response.config.responseType === "blob") {
      return response;
    }
    const { code, data, msg } = response.data;
    if (code == 200) {
      return data;
    }
    ElMessage.error(msg || "系统出错");
    return Promise.reject(new Error(msg || "Error"));
  },
  async (error) => {
    console.error("request error", error); // for debug
    
    await handleSessionExpired();
    return Promise.reject(new Error(msg || "Error"));  
  }
);

export default service;

// 是否正在刷新标识，避免重复刷新
let isRefreshing = false;



// 处理会话过期
async function handleSessionExpired() {
  ElNotification({
    title: "提示",
    message: "您的会话已过期，请重新登录",
    type: "info",
  });
  await useUserStore().clearSessionAndCache();
  router.push("/login");
}