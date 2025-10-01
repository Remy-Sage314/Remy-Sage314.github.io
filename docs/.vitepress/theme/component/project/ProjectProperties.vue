<script setup lang="ts">
    const {
        name
    } = defineProps<{
        name : string
    }>()
</script>

<template>
    <table>
        <tbody>
            <tr> <td>名称</td> <td>{{ name }}</td> </tr>
            <tr v-if="$slots.platform"> <td>平台</td> <td><slot name="platform"></slot></td> </tr>
            <tr v-if="$slots.url"> <td>链接</td> <td><slot name="url"></slot></td> </tr>
            <tr v-if="$slots.license"> <td>协议</td> <td><slot name="license"></slot></td> </tr>
            <tr v-if="$slots.android"> <td>Android 包名</td> <td><code><slot name="android"></slot></code></td> </tr>
        </tbody>
    </table>
</template>

<style scoped lang="sass">
    td
        white-space: nowrap
</style>
