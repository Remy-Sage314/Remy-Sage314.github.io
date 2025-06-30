<script setup lang="ts">
    import { DocPill } from '@theojs/lumen'

    const {
        project
    } = defineProps<{
        project : string
    }>()
</script>

<template>
    <DocPill
        name="GitHub"
        :link="'https://github.com/' + project"
        :image="{
            light: 'https://i.theojs.cn/logo/github.svg',
            dark: 'https://i.theojs.cn/logo/github-dark.svg',
        }"
        rel="noopener noreferrer"
    />
</template>
