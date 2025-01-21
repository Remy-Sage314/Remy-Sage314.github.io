import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'

import './main.sass'

const parent: Theme = DefaultTheme

// noinspection JSUnusedGlobalSymbols
export default {
    extends: parent,

    async enhanceApp(ctx: any) {
        parent?.enhanceApp?.(ctx)

        if (!import.meta.env.SSR) {
            // await live2d() // 效果不好 鸽了
        }
    },
} satisfies Theme

async function live2d() {
    const { loadOml2d } = await import('oh-my-live2d');
    loadOml2d( {
        models: [
            { path: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json" }
        ],
    } )
}