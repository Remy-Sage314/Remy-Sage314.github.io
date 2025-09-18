<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'

import { ref, onMounted, onUnmounted } from 'vue'
import { darkTheme, lightTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'

const { Layout } = DefaultTheme

// 响应式主题变量
const theme = ref<GlobalTheme | null>(null)

// 检查 HTML 元素是否包含 dark 类 并设置 theme
function checkDarkMode() {
    theme.value = document.documentElement.classList.contains('dark')
        ? darkTheme : lightTheme
}

// 创建 MutationObserver 监听类名变化
let observer: MutationObserver | null = null

onMounted(() => {
    // 初始检查
    checkDarkMode()

    // 配置监听 html 的 class 变化
    observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class')
                checkDarkMode()
        })
    })
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    })
})

onUnmounted(() => {
    // 组件卸载时断开监听
    observer?.disconnect()
})

</script>



<template>
    <n-config-provider :theme="theme">
        <Layout/>
    </n-config-provider>
</template>

<style scoped lang="sass">

</style>