import { Component } from "vue";

import * as Lumen from '@theojs/lumen'
import * as Naive from 'naive-ui/es/components'

import NTooltipText from "./components/naive/NTooltipText.vue";
import MaskText from "./components/MaskText.vue";

export default {
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
