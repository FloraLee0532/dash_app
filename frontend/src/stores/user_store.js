
import AuthAPI from "@/api/user.js";
import { defineStore } from "pinia";

import { setAccessToken, setRefreshToken,clearToken } from "@/utils/auth";

export const useUserStore = defineStore("user", () => {
  
  /**
   * 登录
   *
   * @param {Object} LoginFormData
   * @returns
   */
  function login(LoginFormData) {
    return new Promise((resolve, reject) => {
      AuthAPI.login(LoginFormData)
        .then((data) => {
          const { accessToken, refreshToken } = data;
          setAccessToken(accessToken); // eyJhbGciOiJIUzI1NiJ9.xxx.xxx
          setRefreshToken(refreshToken);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }


  /**
   * 登出
   */
  function logout() {
    return new Promise((resolve, reject) => {
      AuthAPI.logout()
        .then(() => {
          clearSessionAndCache();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }



  /**
   * 清除用户会话和缓存
   */
  function clearSessionAndCache() {
    return new Promise((resolve) => {
      clearToken();
      //usePermissionStoreHook().resetRouter();
      //useDictStoreHook().clearDictCache();
      //userInfo.value = {};
      resolve();
    });
  }

  return {
    //userInfo,
    login,  
    logout,
    clearSessionAndCache,
    //refreshToken,
  };
});

/**
 * 用于在组件外部（如在Pinia Store 中）使用 Pinia 提供的 store 实例。
 * 官方文档解释了如何在组件外部使用 Pinia Store：
 * https://pinia.vuejs.org/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */