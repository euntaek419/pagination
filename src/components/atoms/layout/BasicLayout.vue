<template>
    <div class="basic-layout">
        <slot></slot>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.basic-layout {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    border-radius: 24px;
    
    background-color: $color-white-000;
}

</style>