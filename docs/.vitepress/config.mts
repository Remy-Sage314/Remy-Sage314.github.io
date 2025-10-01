import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'

import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import markdownIns from 'markdown-it-ins'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/zh/reference/site-config
const config: UserConfig<NoInfer<DefaultTheme.Config>> = {
    title: "RemySage314 QwQ",
    description: "RemySage314的个人小站",

    head: [['meta', { name: 'msvalidate.01', content: '065026287AAE1E77F72E0B9E3D39CA40' }]],

    sitemap: {
        hostname: 'https://remy-sage314.github.io/'
    },

    srcDir: './src',
    cleanUrls: true,

    rewrites: {
        // List
        ":path/list/:name": ":path/:name",
    },

    themeConfig: {
        // https://vitepress.dev/zh/reference/default-theme-config
        nav: [
            {text: '激扬文字', link: '/articles'},
            { text: '关于', link: '/about' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Remy-Sage314/Remy-Sage314.github.io' }
        ],
        sidebar: {
        },

        search: {
            provider: 'local',
            options: {
                translations: {
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
                },
            }
        },
        editLink: {
            pattern: 'https://github.com/Remy-Sage314/Remy-Sage314.github.io/edit/main/docs/src/:path',
            text: "于 GitHub 编辑此页"
        },
        outline: "deep",


        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        outlineTitle: "页面导航",
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

        config(md) {
            md.set({
                breaks: true,
            })
            md.use(mathjax3)
            md.use(vitepressDemoPlugin)
            md.use(markdownIns)
        },

        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        }
    },

    vite: {
        // Vite 配置选项
        // https://cn.vitejs.dev/config

        publicDir: '../public',

        plugins: [
        ],

        optimizeDeps: {
            exclude: [
                '@nolebase/vitepress-plugin-enhanced-readabilities/client',
                'vitepress',
                '@nolebase/ui',
            ]
        },
        ssr: {
            noExternal: [
                "@nolebase/ui-asciinema",
                '@nolebase/vitepress-plugin-enhanced-readabilities',
                '@nolebase/ui',

                'naive-ui', 'date-fns', 'vueuc'
            ]
        }
    },

    vue: {
        // Vue 配置选项
        template: {
            compilerOptions: {
                isCustomElement: (tag) => {
                    if (tag.startsWith('mjx-')) return true
                }
            }
        }
    },
}



// noinspection JSUnusedGlobalSymbols
export default defineConfig(config)
