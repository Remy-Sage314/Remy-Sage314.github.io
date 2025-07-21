<!-- 生成: DeepSeek -->

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'

// 响应式主题变量
const theme = ref<GlobalTheme | null>(null)

// 检查HTML元素是否包含dark类
const checkDarkMode = () => {
    theme.value = document.documentElement.classList.contains('dark')
        ? darkTheme
        : null
}

// 创建MutationObserver监听类名变化
let observer: MutationObserver | null = null

onMounted(() => {
    // 初始检查
    checkDarkMode()

    // 配置监听html类变化
    observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                checkDarkMode()
            }
        })
    })

    // 开始监听html元素
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
        <slot />
    </n-config-provider>
</template>