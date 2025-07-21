<script setup lang="ts">
    import { ref } from 'vue'
    import NaiveContainer from "../NaiveContainer.vue"
    import { NCard, NSpace, NSwitch, NCollapseTransition } from "naive-ui";

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
    <NaiveContainer>
        <n-card><n-space vertical>
            <n-switch v-model:value="show">
                <template #checked> {{ tShow }} </template>
                <template #unchecked> {{ tHide }} </template>
            </n-switch>
            <n-collapse-transition :show="!show">
                <slot name="hide"/>
            </n-collapse-transition>
            <n-collapse-transition :show="show">
                <slot/>
            </n-collapse-transition>
        </n-space></n-card>
    </NaiveContainer>
</template>

<style scoped lang="sass">

</style>