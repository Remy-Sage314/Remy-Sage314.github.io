<script setup lang="ts">
    import BadgeCustom from "../BadgeCustom.vue";

    const {
        text = "Android"
    } = defineProps<{
        text ?: string
    }>()
</script>

<template>
    <BadgeCustom class="badge-android" :text="text" bColor="#31b06a" tColor="var(--badge-android-color)" />
</template>

<style lang="sass">
    html.dark
        .badge-android
            --badge-android-color: black
    html
        .badge-android
            --badge-android-color: white
</style>
