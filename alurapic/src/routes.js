import Casdastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    {path: '', component: Home }, //localhost:3000/#/
    {path: '/cadastro', component: Casdastro } //localhost:3000/#/cadastro

];