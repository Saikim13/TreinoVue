import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ClubesLista from '../views/ClubesLista.vue'
import CadastrarTime from '../views/CadastrarTime.vue'
import SobreMim from '../views/SobreMim.vue'
import FormularioView from '../views/FormularioView.vue'
import FormularioEnviado from '../views/FormularioEnviado.vue'
import LoginUser from '../views/LoginUser.vue'
import PaginaUsuario from '../views/PaginaUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
  path: '/classificacao',
  name: 'ClubesLista',
  component: ClubesLista
  },
  {
    path: '/cadastro',
    name: 'CadastrarTime',
    component: CadastrarTime
  },
  {
    path: '/sobre',
    name: 'SobreMim',
    component: SobreMim
  },
  {
    path: '/form',
    name: 'FormularioView',
    component: FormularioView
  },
  {
    path: '/enviado',
    name: 'FormularioEnviado',
    component: FormularioEnviado
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/user',
    name: 'PaginaUsuario',
    component: PaginaUsuario
  }               
]

const router = new VueRouter({
  routes
})

export default router
