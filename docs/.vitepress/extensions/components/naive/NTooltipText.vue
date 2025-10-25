<script setup lang="ts">
    import { NTooltip } from 'naive-ui'

    const {
        text
    } = defineProps<{
        text : string
    }>()
</script>

<template>
    <n-tooltip trigger="hover" :themeOverrides="{}">
        <template #trigger>
            <u class="mark-hl"> {{ text }} </u>
        </template>

        <slot/>
    </n-tooltip>
</template>
