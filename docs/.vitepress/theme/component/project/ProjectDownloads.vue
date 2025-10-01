<script setup lang="ts">
    import ProjectDownloadWinget from "./downloads/ProjectDownloadWinget.vue";
    import ProjectDownloadArchLinux from "./downloads/ProjectDownloadArchLinux.vue";
    import ProjectDownloadArchLinuxCN from "./downloads/ProjectDownloadArchLinuxCN.vue";
    import ProjectDownloadAUR from "./downloads/ProjectDownloadAUR.vue";
    import LinkGithub from "../link-badge/LinkGithub.vue";

    const {
        winget,
        archlinux_repo,
        archlinux_name,
        archlinux_arch,
        archlinuxcn,
        aur,
        obtainium_github,
    } = defineProps<{
        winget ?: string,
        archlinux_repo ?: string,
        archlinux_name ?: string,
        archlinux_arch ?: string,
        archlinuxcn ?: string,
        aur ?: string,
        obtainium_github ?: string,
    }>()
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>食用方法</th>
                <th>特殊值</th>
            </tr>
        </thead>

        <tbody>

            <tr v-if="winget">
                <td>Windows Winget</td>
                <td> <ProjectDownloadWinget :name="winget"/> </td>
            </tr>

            <tr v-if="archlinux_repo && archlinux_name">
                <td>Arch Linux</td>
                <td> <ProjectDownloadArchLinux :name="archlinux_name" :repo="archlinux_repo" :arch="archlinux_arch"/> </td>
            </tr>

            <tr v-if="archlinuxcn">
                <td>Arch Linux CN</td>
                <td> <ProjectDownloadArchLinuxCN :name="archlinuxcn"/> </td>
            </tr>

            <tr v-if="aur">
                <td>Arch Linux AUR</td>
                <td> <ProjectDownloadAUR :name="aur"/> </td>
            </tr>

            <tr v-if="obtainium_github">
                <td>Android Obtainium</td>
                <td> <LinkGithub :project="obtainium_github"/> </td>
            </tr>

        </tbody>
    </table>
</template>

<style scoped lang="sass">
    td
        white-space: nowrap
</style>
