<template>
  <div class="perfil">
    <h2>Perfil de {{ nombre }}</h2>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script>
export default {
  name: 'ViewPerfilAutor',
  props: ['nombre'],
  computed: {
    descripcion() {
      return `Autora destacada en cocina chilena. ${this.nombre} ha compartido más de 100 recetas tradicionales.`
    }
  }
}
</script>

<style scoped>
.perfil {
  padding: 2rem;
  text-align: center;
}
</style>
