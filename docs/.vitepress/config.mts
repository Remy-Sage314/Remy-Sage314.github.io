// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    title: "MoYingJi QwQ",
    description: "一个不知道是什么的网站",
    themeConfig: {
        // https://vitepress.dev/zh/reference/default-theme-config
        nav: [
        ],

        sidebar: [
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/MoYingJi/moyingji.github.io' }
        ],
    },

    lang: 'zh-CN',
    locales: {
        root: {
            label: '中文',
            lang: 'zh-CN'
        },
    },

    outDir: '../public',
})
