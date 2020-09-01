<template>
    <div id="user-info">
        <p>ID: {{$store.getters.userID}}</p>
        <p>Name: {{$store.getters.userName}}</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#user-info {
    text-align: right;
}
</style>