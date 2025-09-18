<script setup lang="ts">
    const {
        text
    } = defineProps<{
        text : string
    }>()
</script>

<template>
    <n-tooltip trigger="hover">
        <template #trigger>
            <u class="mark-hl"> {{ text }} </u>
        </template>

        <slot/>
    </n-tooltip>
</template>

<style scoped lang="sass">

</style>