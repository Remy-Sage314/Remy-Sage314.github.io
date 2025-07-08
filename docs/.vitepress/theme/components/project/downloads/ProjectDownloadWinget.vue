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
        <span><code>{{ name }}</code></span>
        <span> </span>
        <img class="unselectable" draggable="false" :src="'https://img.shields.io/winget/v/' + name"/>
    </ProjectDownload>
</template>
