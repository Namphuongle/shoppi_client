import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import AdminUser from '../components/AdminUser.vue'
import AdminDashboard from '../components/AdminDashboard.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin,
        children: [
            {

                path: "dashboard",
                name: "dashboard",
                component: AdminDashboard,
            },
            {

                path: "user",
                name: "user",
                component: AdminUser,
            },
        ]
    },



    // {
    //     path: "/admin",
    //     name: "adminHome",
    //     component: Home,
    // },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;