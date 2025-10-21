<template>
  <div class="subcategoria">
    <h3>Bebidas</h3>
    <RecipeCard :receta="{ id: 4, nombre: 'Mote con huesillo', imagen: '/images/mote.jpg' }" />
  </div>
</template>

<script>
import RecipeCard from '../../components/RecipeCard.vue'

export default {
  name: 'ViewBebidas',
  components: { RecipeCard }
}
</script>

<style scoped>
.subcategoria {
  padding: 2rem;
  text-align: center;
}
</style>
