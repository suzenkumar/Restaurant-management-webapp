
import { createRouter, createWebHistory } from 'vue-router';

// Direct import for essential route
import Home from '../components/Home.vue';
import Signup from '../components/Signup.vue';
import login from '../components/Login.vue';
import add from '../components/add.vue';
import update from '../components/update.vue';

// Lazy-loaded route for better performance
// const Signup = () => import('../components/Signup.vue');

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Signup.vue",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/Login.vue",
        name: "login",
        component: login,
    },
    {
        path: "/add.vue",
        name: "add",
        component: add,
    },
    {
        path: "/update/:id",
        name: "Update",
        component: update,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
