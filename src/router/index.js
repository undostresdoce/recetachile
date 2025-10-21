import { createRouter, createWebHistory } from 'vue-router'

import ViewInicio from '../views/ViewInicio.vue'
import ViewCategorias from '../views/ViewCategorias.vue'
import ViewDetalleReceta from '../views/ViewDetalleReceta.vue'
import ViewPerfilAutor from '../views/ViewPerfilAutor.vue'
import ViewPostres from '../views/categorias/ViewPostres.vue'
import ViewBebidas from '../views/categorias/ViewBebidas.vue'

const routes = [
  { path: '/', name: 'Inicio', component: ViewInicio },
  { path: '/inicio', redirect: '/' },
  {
    path: '/categorias',
    component: ViewCategorias,
    children: [
      { path: 'postres', name: 'Postres', component: ViewPostres },
      { path: 'bebidas', name: 'Bebidas', component: ViewBebidas }
    ]
  },
  {
    path: '/receta/:id',
    name: 'DetalleReceta',
    component: ViewDetalleReceta,
    props: true
  },
  {
    path: '/autor/:nombre',
    name: 'PerfilAutor',
    component: ViewPerfilAutor,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
