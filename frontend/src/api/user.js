import request from "@/utils/request";


const AuthAPI = {
  /** 登录接口*/
  login(data) {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    //formData.append("captchaKey", data.captchaKey);
    //formData.append("captchaCode", data.captchaCode);
    return request({
      url: `/auth/login/`,
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "no-auth",
      },
    });
  },

  /** 刷新 token 接口*/
  refreshToken(refreshToken) {
    return request({
      url: `/auth/refresh-token/`,
      method: "post",
      params: { refreshToken: refreshToken },
      headers: {
        Authorization: "no-auth",
      },
    });
  },

  /** 注销登录接口 */
  logout() {
    return request({
      url: `/auth/logout`,
      method: "delete",
    });
  },


};

export default AuthAPI; 
