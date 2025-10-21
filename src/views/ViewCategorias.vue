<template>
  <div class="categorias">
    <h2>Categorías</h2>
    <nav class="subnav">
      <router-link to="/categorias/postres">Postres</router-link>
      <router-link to="/categorias/bebidas">Bebidas</router-link>
    </nav>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ViewCategorias'
}
</script>

<style scoped>
.categorias {
  padding: 2rem;
  text-align: center;
}
.subnav {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
a {
  text-decoration: none;
  color: #1d3557;
  font-weight: bold;
}
a:hover {
  color: #e63946;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from {
  transform: translateX(100px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
