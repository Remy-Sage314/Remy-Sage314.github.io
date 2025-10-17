import * as Lumen from '@theojs/lumen'
import * as Naive from 'naive-ui/es/components'

import NTooltipText from "./component/naive/NTooltipText.vue";
import MaskText from "./component/MaskText.vue";

export default {
    "nt": NTooltipText,
    "mt": MaskText,

    "DocPill": Lumen.DocPill,
    "DocLinks": Lumen.DocLinks,
    "DocBoxCube": Lumen.DocBoxCube,

    "NButton": Naive.NButton,
    "NIcon": Naive.NIcon,
    "NImage": Naive.NImage,
    "NSkeleton": Naive.NSkeleton,
    "NTooltip": Naive.NTooltip,
}
