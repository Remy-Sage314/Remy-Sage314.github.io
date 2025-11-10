<!-- https://note.weizwz.com/vitepress/extend/vitepress-giscus -->
<script setup lang="ts">
import { watch } from 'vue'
import { inBrowser, useData, useRoute } from 'vitepress'
import GisCus from "@giscus/vue";

const { isDark } = useData()
const route = useRoute()

watch(isDark, (dark) => {
    if (!inBrowser) return
    const iframe = document.querySelector('giscus-widget')?.shadowRoot?.querySelector('iframe')

    iframe?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: dark ? 'dark_tritanopia' : 'light_tritanopia' } } },
        'https://giscus.app'
    )
})
</script>

<template>
    <GisCus repo="Remy-Sage314/Remy-Sage314.github.io"
    repo-id="R_kgDOP6Gr_w"
    category="Announcements"
    category-id="DIC_kwDOP6Gr_84CxngX"
    :key="route.path"
    mapping="pathname"
    strict="1"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="top"
    lang="zh-CN"
    loading="lazy"
    :theme="isDark ? 'dark_tritanopia' : 'light_tritanopia'"
    >
    </GisCus>
</template>
