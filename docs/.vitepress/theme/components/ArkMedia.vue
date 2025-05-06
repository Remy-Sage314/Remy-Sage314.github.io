<script setup lang="ts">
    const {
        src,
        alt = "",
        draggable = false,
        unselectable = false,
    } = defineProps<{
        src : string,
        alt ?: string,
        draggable ?: boolean,
        unselectable ?: boolean,
    }>()
</script>

<template>
    <div :class="{ unselectable: unselectable }">
        <div style="margin: 3% 4% 0">
            <div class="ak-media-album">
                <img :src="src" :alt="alt" :draggable="draggable" />
            </div>
        </div>
    </div>
</template>

<!-- https://github.com/YunYouJun/ak-ui/blob/master/src/scss/_ak-media.scss -->
<style lang="sass">
    .ak-media-album
        position: relative
        display: inline-block
        border: 0.5rem solid white
        box-shadow: 0 8px 10px rgba($color: #000000, $alpha: 0.5)
        padding: 0
        margin: 10px
        transform-style: preserve-3d
        transform: rotate(2deg)
        max-width: 100%
        max-height: 100%

        img
            vertical-align: bottom

        &::before
            content: ""
            position: absolute
            top: 5px
            left: -10px
            width: 100%
            height: 98%
            border: 0.4rem solid white
            background-color: #333
            box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.5)
            transform: rotate(-5deg) translateZ(-1px)
</style>