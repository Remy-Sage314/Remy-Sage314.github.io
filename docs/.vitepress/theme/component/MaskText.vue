<script setup lang="ts">
import { ref } from 'vue'

const mask = ref(true)
function toggle() { mask.value = !mask.value }
</script>

<template>
    <div class="mask-text" @click="toggle" :class="{ 'is-mask': mask }">
        <slot/>
    </div>
</template>

<style scoped lang="sass">
    .mask-text
        display: inline
        transition: filter 0.3s

        &.is-mask
            filter: blur(5px)
</style>
