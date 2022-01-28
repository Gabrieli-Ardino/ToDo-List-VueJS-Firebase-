import Vue from "vue";
import VueRouter from "vue-router";
import {auth} from "./firebase";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("@/layouts/default"),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("./views/home.vue"),
            },
            {
                path: "/profile",
                name: "profile",
                component: () => import("./views/profile.vue"),
            },
        ],
    },
    {
        path: "/",
        component: () => import("@/layouts/blank"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("./views/login.vue"),
            },
        ],
    },
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

    if (requiresAuth && !auth.currentUser) {
        next("/login");
    } else {
        next();
    }
});

export default router;
