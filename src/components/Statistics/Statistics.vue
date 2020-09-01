<template>
    <div class=allPrice>
        <p>共计：{{$store.getters.allPrice}} 元</p>
    </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
.allPrice {
    text-align: right;
}
</style>