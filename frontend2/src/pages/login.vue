<template>
    <div class="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-85-screen">
        <div class="container z-10">
            <div class="flex flex-wrap mt-0 -mx-3">
                <div class="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                <div class="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                    <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                    <h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Welcome back</h3>
                    <p class="mb-0">Enter your email and password to sign in</p>
                    </div>
                    <div class="flex-auto p-6">
                    <form role="form">
                        <label class="mb-2 ml-1 font-bold text-xs text-slate-700">Email</label>
                        <div class="mb-4">
                        <input type="email" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                        </div>
                        <label class="mb-2 ml-1 font-bold text-xs text-slate-700">Password</label>
                        <div class="mb-4">
                        <input type="email" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                        </div>
                        <div class="text-center">
                        <button type="button" @click="handleLoginSubmit" class="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">Sign in</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div class="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                <div class="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                    <div class="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10 bg-[url('@/assets/img/curved6.jpg')]"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import router from "@/router";

import { useUserStore } from "@/stores/user_store.js";
import { ref } from "vue";
const userStore = useUserStore();

const route = useRoute();

const loading = ref(false); // 按钮 loading 状态

const loginFormData = ref({
  username: "admin",
  password: "123456",
});




// 登录提交处理
async function handleLoginSubmit() {
  try {
    // 1. 表单验证
    
    loading.value = true;

    // 2. 执行登录
    await userStore.login(loginFormData.value);

    // 4. 解析并跳转目标地址
    const redirect = resolveRedirectTarget(route.query);
    await router.push(redirect);
  } catch (error) {
    // 5. 统一错误处理
    console.error("登录失败:", error);
    ElNotification({
        title: "提示",
        message: "登录失败，请重新登录",
        type: "info",
  });
  } finally {
    loading.value = false;
  }
}

/**
 * 解析重定向目标
 * @param query 路由查询参数
 * @returns 标准化后的路由地址对象
 */
function resolveRedirectTarget(query) {
  // 默认跳转路径
  const defaultPath = "/";

  // 获取原始重定向路径
  const rawRedirect = (query.redirect) || defaultPath;

  try {
    // 6. 使用Vue Router解析路径
    const resolved = router.resolve(rawRedirect);
    return {
      path: resolved.path,
      query: resolved.query,
    };
  } catch {
    // 7. 异常处理：返回安全路径
    return { path: defaultPath };
  }
}

// 未完成功能提示
function unfinished() {
  ElMessage.warning("功能开发中，敬请期待！");
}

</script>
  