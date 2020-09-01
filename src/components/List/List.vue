<template>
    <div class = "list">
        <slot name="header"></slot>
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.list {
    border:1px solid #000;
    width: 350px;
    text-align:center;
    margin: 0 auto;
    padding-bottom: 10px;
}
</style>