<script setup lang="ts">
    import BadgeCustom from "../text/BadgeCustom.vue";

    const {
        text = "Windows"
    } = defineProps<{
        text ?: string
    }>()
</script>

<template>
    <BadgeCustom :text="text" bColor="#0083bf" tColor="white" />
</template>
