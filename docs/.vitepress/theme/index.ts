import { h } from "vue";
import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'

import MyLayout from './MyLayout.vue'

import './style/_css.ts'
import './other/cursor-and-ring/cursor.ts'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import * as Comp from './component/_comps.ts'

import Comps from './comps.ts'

if (!import.meta.env.SSR) {
    import('./other/search-box-animation/script.ts')
}

const parent: Theme = DefaultTheme

// noinspection JSUnusedGlobalSymbols
export default {
    extends: parent,
    Layout: MyLayout,

    async enhanceApp(ctx) {
        parent.enhanceApp?.(ctx)

        const app = ctx.app
        Comp.component(app)
        Object.keys(Comps).forEach(k => {
            app.component(k, Comps[k])
        })

        if (!import.meta.env.SSR) {
        }
    },
} satisfies Theme
