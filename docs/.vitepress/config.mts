import { defineConfig } from 'vitepress'

import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import { LocalSearchTranslations } from "vitepress/types/local-search.js";

// https://vitepress.dev/zh/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    title: "MoYingJi QwQ",
    description: "一个不知道是什么的网站",

    srcDir: './src',

    themeConfig: {
        // https://vitepress.dev/zh/reference/default-theme-config
        nav: [
            { text: '关于', link: '/about' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/MoYingJi/moyingji.github.io' }
        ],
        sidebar: [
        ],

        search: {
            provider: 'local',
            options: {
                translations: searchTranslation(),
            }
        },
    },

    lang: 'zh-CN',
    locales: {
        root: {
            label: '中文',
            lang: 'zh-CN'
        },
    },

    markdown: {
        // Markdown 配置选项
        // https://vitepress.dev/guide/markdown
        // https://vitepress.dev/zh/reference/site-config#markdown

        image: {
            lazyLoading: true
        },
        math: true,

        config(md) {
            md.use(vitepressDemoPlugin)
        },
    },

    vite: {
        // Vite 配置选项
        // https://cn.vitejs.dev/config

        publicDir: '../public',

        plugins: [
        ]
    },

    ssr: {
        noExternal: [
            "@nolebase/ui-asciinema",
        ]
    }
})

function searchTranslation(): LocalSearchTranslations { return {
    button: {
        buttonText: '搜索文档',
    },
    modal: {
        displayDetails: '显示详细信息',
        resetButtonTitle: '清除查询条件',
        backButtonTitle: '返回',
        noResultsText: '没有搜索结果',
        footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
        },
    }
} }
