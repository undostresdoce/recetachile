<template>
  <nav class="navbar">
    <router-link to="/">Inicio</router-link>
    <router-link to="/categorias">Categorías</router-link>
    <router-link to="/autor/Juanita">Perfil Autor</router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  background: #e63946;
  padding: 1rem;
  justify-content: center;
}
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
</style>
