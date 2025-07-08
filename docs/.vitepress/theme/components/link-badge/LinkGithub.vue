<script setup lang="ts">
    import { DocPill } from '@theojs/lumen'

    const {
        project,
        suffix,
    } = defineProps<{
        project : string,
        suffix ?: string,
    }>()

    const _s = suffix || project
</script>

<template>
    <DocPill
        :name="'GitHub: ' + _s"
        :link="'https://github.com/' + project"
        :image="{
            light: 'https://i.theojs.cn/logo/github.svg',
            dark: 'https://i.theojs.cn/logo/github-dark.svg',
        }"
        rel="noopener noreferrer"
    />
</template>
