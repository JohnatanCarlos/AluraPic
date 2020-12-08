<template>
    <img class="img-resposiva" :src="url" :alt="titulo">
</template>

<script>
export default {
    props: ['url', 'titulo']
}
</script>

<style scoped>
    .img-resposiva{
        width: 100%;
    }
</style>