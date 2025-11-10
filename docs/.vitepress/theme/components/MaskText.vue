<script setup lang="ts">
    const mask = defineModel("mask", { default: true })
    function toggle() {
        if (window.getSelection()?.toString()) return
        mask.value = !mask.value
    }
</script>

<template>
    <span
        class="mask-text"
        @click="toggle"
        :class="{ 'is-mask': mask }"
    > <slot/> </span>
</template>

<style lang="sass">
    $radius: 3px
    $transition-time: 0.3s

    .mask-text
        position: relative
        background: #8884
        border-radius: $radius

    .mask-text::after
        position: absolute
        user-select: none
        pointer-events: none
        content: ""
        inset: 0
        z-index: 1
        border-radius: $radius
        transition: background $transition-time, backdrop-filter $transition-time

    .mask-text.is-mask
        user-select: none

    .mask-text.is-mask::after
        background: #8882
        backdrop-filter: blur(10px)
</style>
