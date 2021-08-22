<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{nombre}}</h2>
    <button @click="onChangeNombre">
        Cambiar Nombre
    </button>
</template>

<script>
export default {
    data() {
        return {
            nombre: 'Jesús Zúñiga Trejo'
        }
    },
    methods: {
        onChangeNombre() {
            this.nombre = 'Ana María Alejandre Arroyo'
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        this.nombre = 'Yesmeli'
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured: (err, vm, info) => {
        console.log('errorCaptured')
    },
    renderTracked({key, target, type}) {
        console.log('renderTracked')
    },
    renderTriggered({key, target, type}) {
        console.log('renderTriggered')
    },
}
</script>