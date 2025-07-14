<script setup lang="ts">
    import { NuAsciinemaPlayer } from '@nolebase/ui-asciinema'
    import 'asciinema-player/dist/bundle/asciinema-player.css'

    const {
        src,
        cols,
        rows,
        fontsize = '12px',
        autoplay = false,
        loop = false,
    } = defineProps<{
        src : string,
        cols ?: number,
        rows ?: number,
        fontsize ?: string,
        autoplay ?: boolean,
        loop ?: boolean,
    }>()
</script>

<template>
    <NuAsciinemaPlayer
        :src="src"
        :cols="cols"
        :rows="rows"
        :terminal-font-size="fontsize"
        :auto-play="autoplay"
        :loop="loop"

        :preload="true"
        :controls="true"
    />
</template>