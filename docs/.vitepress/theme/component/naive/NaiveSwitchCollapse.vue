<script setup lang="ts">
    import { ref } from 'vue'
    import { NCard, NIcon, NSpace, NSwitch, NCollapseTransition } from "naive-ui"
    import { ChevronDownOutline, ChevronForwardOutline } from '@vicons/ionicons5'

    const {
        tShow = "展开",
        tHide = "折叠",
    } = defineProps<{
        tShow ?: string,
        tHide ?: string,
    }>()

    const show = ref(false)
</script>

<template>
    <n-card><n-space vertical>
        <n-switch v-model:value="show">
            <template #checked> {{ tShow }} </template>
            <template #unchecked> {{ tHide }} </template>
            <template #checked-icon><n-icon :component="ChevronDownOutline" /></template>
            <template #unchecked-icon><n-icon :component="ChevronForwardOutline" /></template>
        </n-switch>
        <n-collapse-transition :show="!show">
            <slot name="hide"/>
        </n-collapse-transition>
        <n-collapse-transition :show="show">
            <slot/>
        </n-collapse-transition>
    </n-space></n-card>
</template>

<style scoped lang="sass">

</style>