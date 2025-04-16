import { defineStore } from "pinia";
import { ref } from "vue";


export const useMainStore = defineStore('mainStore', () => {
    const showSideNav = ref(false)
    const toggleSidenavCollapse = () => {
        showSideNav.value = !showSideNav.value
    }
    return { showSideNav, toggleSidenavCollapse }
})