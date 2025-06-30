<template>
    <div class="project-container">
        <slot/>
    </div>
</template>

<style lang="sass">
    .project-container
        display: flex
        flex-wrap: nowrap
        align-items: center
        gap: 4px

    html.dark
        .project-package-name
            color: lightblue
        .project-archlinuxcn
            color: lightcoral
        .project-aur
            color: lightblue
    html
        .project-package-name
            color: blue
        .project-archlinuxcn
            color: red
        .project-aur
            color: blue

</style>
