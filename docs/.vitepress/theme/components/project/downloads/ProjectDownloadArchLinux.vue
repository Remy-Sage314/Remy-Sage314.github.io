<script setup lang="ts">
    import ProjectDownload from "./ProjectDownload.vue";

    const {
        repo,
        name,
        arch = "x86_64"
    } = defineProps<{
        repo  : string
        name  : string
        arch ?: string
    }>()
</script>

<template>
    <ProjectDownload>
        <span :class="'project-arch-repo-' + repo">{{ repo }}</span>
        <span>/</span>
        <span class="project-package-name">{{ name }}</span>
        <span> </span>
        <img class="unselectable" draggable="false" :src="'https://img.shields.io/archlinux/v/' + repo + '/' + arch + '/' + name"/>
    </ProjectDownload>
</template>

<style lang="sass">
    .project-arch-repo-core
        color: yellow
    .project-arch-repo-extra
        color: green
</style>
