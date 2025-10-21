<template>
  <div class="detalle">
    <h2>{{ receta.nombre }}</h2>
    <img :src="receta.imagen" :alt="receta.nombre" />
    <p>{{ receta.descripcion }}</p>
  </div>
</template>

<script>
export default {
  name: 'ViewDetalleReceta',
  props: ['id'],
  data() {
    return {
      recetas: {
        1: {
          nombre: 'Empanadas de pino',
          imagen: '/images/empanada.jpg',
          descripcion: 'Masa rellena de carne, cebolla, huevo y aceituna. Se hornea hasta dorar.'
        },
        2: {
          nombre: 'Charquicán',
          imagen: '/images/charquican.jpg',
          descripcion: 'Guiso de zapallo, papa, carne y verduras. Se sirve caliente.'
        },
        3: {
          nombre: 'Leche asada',
          imagen: '/images/leche-asada.jpg',
          descripcion: 'Postre horneado con leche, huevo y azúcar. Similar al flan.'
        },
        4: {
          nombre: 'Mote con huesillo',
          imagen: '/images/mote.jpg',
          descripcion: 'Bebida dulce con durazno seco y trigo mote. Se sirve fría.'
        }
      }
    }
  },
  computed: {
    receta() {
      return this.recetas[this.id]
    }
  }
}
</script>

<style scoped>
.detalle {
  padding: 2rem;
  text-align: center;
}
img {
  max-width: 400px;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>
