<script setup lang="ts">
    const {
        breakpoint = '768px',
    } = defineProps<{
        breakpoint: string,
    }>()
</script>

<template>
    <div class="flex-div" :style="{ '--breakpoint': breakpoint }">
        <slot/>
    </div>
</template>

<style lang="sass">
    .flex-div
        display: flex
        flex-direction: column

    @media (orientation: landscape), (min-width: var(--breakpoint))
        .flex-div
            flex-direction: row
</style>
