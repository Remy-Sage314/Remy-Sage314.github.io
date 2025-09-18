import * as Lumen from '@theojs/lumen'
import * as Naive from 'naive-ui/es/components'

import NaiveTooltipText from "./component/naive/NaiveTooltipText.vue";
import MaskText from "./component/MaskText.vue";

export default {
    "nt": NaiveTooltipText,
    "mt": MaskText,

    "DocPill": Lumen.DocPill,
    "DocLinks": Lumen.DocLinks,
    "DocBoxCube": Lumen.DocBoxCube,

    "NConfigProvider": Naive.NConfigProvider,
    "NButton": Naive.NButton,
    "NIcon": Naive.NIcon,
    "NSkeleton": Naive.NSkeleton,
    "NTooltip": Naive.NTooltip,
}
