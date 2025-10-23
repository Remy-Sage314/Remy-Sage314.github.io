<script setup lang="ts">
</script>

<template>
    <div class="flex-div">
        <slot/>
    </div>
</template>

<style lang="sass">
    .flex-div
        display: flex
        flex-wrap: wrap
        justify-content: flex-start

        @media screen and (orientation: portrait)
            flex-direction: column
        @media screen and (orientation: landscape)
            flex-direction: row
</style>
