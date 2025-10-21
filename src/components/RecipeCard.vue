<template>
  <div class="card">
    <img :src="receta.imagen" :alt="receta.nombre" />
    <h3>{{ receta.nombre }}</h3>
    <router-link :to="`/receta/${receta.id}`" class="ver-receta">Ver receta</router-link>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    receta: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s;
  background-color: #f9f9f9;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.card:hover {
  transform: scale(1.03);
}
img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
.ver-receta {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #e63946;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
.ver-receta:hover {
  background-color: #d62828;
}
</style>
