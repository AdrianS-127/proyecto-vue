<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
        <li><router-link to="/Contador">Contador</router-link></li>
        <li><router-link to="/ListDeTareas">Lista de Tareas</router-link></li>
        <li><router-link to="/Registrar">Registrar</router-link></li>
    </ul>
</div>

</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import { ref, watch } from 'vue';
const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre);
const email = ref(registrarStore.email);
watch(
  () => [registrarStore.nombre, registrarStore.email], // Propiedades observadas
([newNombre, newEmail]) => {
    nombre.value = newNombre;
    email.value = newEmail;
}
);


</script>

<style> 
.sidebar{
    width: 200px;
    background-color: #666565;
    padding: 20px;
}
</style>