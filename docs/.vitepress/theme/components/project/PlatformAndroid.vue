<script setup lang="ts">
    import BadgeCustom from "../BadgeCustom.vue";

    const {
        text = "Android"
    } = defineProps<{
        text ?: string
    }>()
</script>

<template>
    <BadgeCustom :text="text" bColor="#31b06a" tColor="black" />
</template>
