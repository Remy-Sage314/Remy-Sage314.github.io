<script setup lang="ts">
    import ProjectDownload from "./ProjectDownload.vue";

    const {
        name
    } = defineProps<{
        name : string
    }>()
</script>

<template>
    <ProjectDownload>
        <span class="project-aur">aur</span>
        <span>/</span>
        <span class="project-package-name">{{ name }}</span>
        <span> </span>
        <img :src="'https://img.shields.io/aur/version/' + name"/>
    </ProjectDownload>
</template>
