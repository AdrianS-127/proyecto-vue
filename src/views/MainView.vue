<template>
<div class="container">
    <Sidebar />
    <div class="content">
        <router-view></router-view>
    </div>
</div>
</template>

<script setup>
    import Sidebar from '../components/SideBar.vue';
</script>

<style>

.content{
    flex:1;
    padding: 20px;
}

.container{
    display: flex;
    justify-content: center;

}
</style>