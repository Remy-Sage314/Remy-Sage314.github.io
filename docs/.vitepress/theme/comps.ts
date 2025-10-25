import { App, Component } from "vue";

const glob = import.meta.glob(
    ['./components/**/*.vue', '../extensions/components/**/*.vue'],
    { eager: true }
)

const modules: Record<string, any> = {}
Object.keys(glob).forEach(key => {
    const name = key.split('/').pop()?.replace(/^([a-zA-Z]*)\.vue$/, '$1')
    if (!name) return
    modules[name] = glob[key]
})

export function component(app: App) {
    for (const name in modules) {
        const comp: any = modules[name]
        app.component(name, comp.default)
    }
}

import * as Lumen from '@theojs/lumen'
import * as Naive from 'naive-ui/es/components'

import NTooltipText from "../extensions/components/naive/NTooltipText.vue";
import MaskText from "../extensions/components/MaskText.vue";

export const components = {
    "nt": NTooltipText,
    "mt": MaskText,

    "DocPill": Lumen.DocPill,
    "DocLinks": Lumen.DocLinks,
    "DocBoxCube": Lumen.DocBoxCube,

    "NButton": Naive.NButton,
    "NFlex": Naive.NFlex,
    "NIcon": Naive.NIcon,
    "NImage": Naive.NImage,
    "NSkeleton": Naive.NSkeleton,
    "NTooltip": Naive.NTooltip,
} as Record<string, Component>
