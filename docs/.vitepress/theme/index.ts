import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'

import './main.sass'
import './css/css.ts'
import './cursor/cursor.ts'

import * as Comp from './components/_comps.ts'

const parent: Theme = DefaultTheme

// noinspection JSUnusedGlobalSymbols
export default {
    extends: parent,

    async enhanceApp(ctx) {
        parent.enhanceApp?.(ctx)

        const app = ctx.app
        Comp.component(app)

        if (!import.meta.env.SSR) {
        }
    },
} satisfies Theme
