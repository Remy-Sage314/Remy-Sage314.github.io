<script setup lang="ts">
    import BadgeCustom from "../text/BadgeCustom.vue";

    const {
        text = "Linux"
    } = defineProps<{
        text ?: string
    }>()
</script>

<template>
    <BadgeCustom :text="text" bColor="#565656" tColor="white" />
</template>
