import { h } from "vue";
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'

import './style/_css.ts'
import './other/cursor-and-ring/cursor.ts'

import * as ER from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import * as Comp from './component/_comps.ts'

import * as Lumen from '@theojs/lumen'

if (!import.meta.env.SSR) {
    import('./other/search-box-animation/script.ts')
}

const parent: Theme = DefaultTheme

// noinspection JSUnusedGlobalSymbols
export default {
    extends: parent,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // 为较宽的屏幕的导航栏添加阅读增强菜单
            'nav-bar-content-after': () => h(ER.NolebaseEnhancedReadabilitiesMenu),
            // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
            'nav-screen-content-after': () => h(ER.NolebaseEnhancedReadabilitiesScreenMenu),
        })
    },

    async enhanceApp(ctx) {
        parent.enhanceApp?.(ctx)

        const app = ctx.app
        Comp.component(app)
        app.component("DocPill", Lumen.DocPill)
        app.component("DocLinks", Lumen.DocLinks)
        app.component("DocBoxCube", Lumen.DocBoxCube)

        if (!import.meta.env.SSR) {
        }
    },
} satisfies Theme
