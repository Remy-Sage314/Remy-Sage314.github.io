<script setup lang="ts">
    import BadgeCustom from "../BadgeCustom.vue";

    const {
        text = "MacOS"
    } = defineProps<{
        text ?: string
    }>()
</script>

<template>
    <BadgeCustom :text="text" bColor="#7f76bf" tColor="white" />
</template>
