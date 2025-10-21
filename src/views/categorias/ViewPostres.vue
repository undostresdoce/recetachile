<template>
  <div class="subcategoria">
    <h3>Postres</h3>
    <RecipeCard :receta="{ id: 3, nombre: 'Leche asada', imagen: '/images/leche-asada.jpg' }" />
  </div>
</template>

<script>
import RecipeCard from '../../components/RecipeCard.vue'

export default {
  name: 'ViewPostres',
  components: { RecipeCard }
}
</script>

<style scoped>
.subcategoria {
  padding: 2rem;
  text-align: center;
}
</style>
