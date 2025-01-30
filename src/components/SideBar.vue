<template>
<div class="sidebar">
    <H2>Barra Lateral</H2>
    <ul>
        <li><router-link to="/Contador">Contador</router-link></li>
        <li><router-link to="/ListDeTareas">Lista de Tareas</router-link></li>
        <li><router-link to="/Registrar">Registrar</router-link></li>
    </ul>
</div>

</template>

<script setup>

</script>

<style> 
.sidebar{
    width: 200px;
    background-color: #666565;
    padding: 20px;
}
</style>