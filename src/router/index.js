import { createRouter, createWebHistory } from 'vue-router';
import Livres from '../views/Livres.vue';
import Membres from '../views/Membres.vue';
import Prets from '../views/Prets.vue';

const routes = [
    { path: '/livres', component: Livres },
    { path: '/membres', component: Membres },
    { path: '/prets', component: Prets },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
