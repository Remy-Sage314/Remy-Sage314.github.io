<script setup lang="ts">
    import { ref } from "vue"

    const mask = ref(true)
    function toggle() {
        if (window.getSelection()?.toString()) return
        mask.value = !mask.value
    }
</script>

<template>
    <div class="mask-text" @click="toggle" :class="{ 'is-mask': mask }">
        <slot/>
    </div>
</template>

<style lang="sass">
    $radius: 2px

    .mask-text
        position: relative
        display: inline
        background: #8882
        border-radius: $radius

    .mask-text::after
        position: absolute
        display: inline
        user-select: none
        pointer-events: none
        content: ""
        inset: 0
        z-index: 1
        border-radius: $radius
        transition: background 0.3s, backdrop-filter 0.3s

    .mask-text.is-mask
        user-select: none

    .mask-text.is-mask::after
        background: #8882
        backdrop-filter: blur(10px)
</style>
