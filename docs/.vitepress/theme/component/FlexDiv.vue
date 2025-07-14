<script setup lang="ts">
</script>

<template>
    <div class="flex-div">
        <slot/>
    </div>
</template>

<style scoped lang="sass">
    .flex-div
        display: flex

        @media screen and (orientation: portrait)
            flex-direction: column
        @media screen and (orientation: landscape)
            flex-direction: row
</style>
