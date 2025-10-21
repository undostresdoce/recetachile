<template>
  <div class="inicio">
    <h1>Recetas Chilenas</h1>
    <p>Explora sabores tradicionales con nuestras recetas destacadas:</p>
    <transition name="fade" mode="out-in">
      <div class="grid">
        <RecipeCard v-for="r in recetas" :key="r.id" :receta="r" />
      </div>
    </transition>
  </div>
</template>

<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
  name: 'ViewInicio',
  components: { RecipeCard },
  data() {
    return {
      recetas: [
        { id: 1, nombre: 'Empanadas de pino', imagen: '/images/empanada.jpg' },
        { id: 2, nombre: 'Charquicán', imagen: '/images/charquican.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.inicio {
  padding: 2rem;
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
