<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Email:</label>
                <Field v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su email"/>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/validationSchema';
import {useRegistrarStore} from '../stores/registrarStore';
import {ref} from 'vue';

const nombre = ref('');
const email = ref('');
const registrarStore = useRegistrarStore();

const onSubmit = (values) => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Se ha enviado el formulario con los datos:', values);
};
</script>

<style scoped> 
.form {
    margin-bottom: 10px;
}
.error-message {
    color: red;
    font-size: 0.9em;
}
</style>
