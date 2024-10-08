import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "layout" */ '@/layouts/BaseLayout'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import(/* webpackChunkName: "about" */ '@/views/About')
            },
            {
                path: '/skills',
                name: 'Skills',
                component: () => import(/* webpackChunkName: "skills" */ '@/views/Skills')
            },
            {
                path: '/works',
                name: 'Works',
                component: () => import(/* webpackChunkName: "works" */ '@/views/Works')
            },
            {
                path: '/contact',
                name: 'Contact',
                component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact')
            },
            {
                path: '/experience',
                name: 'Experience',
                component: () => import(/* webpackChunkName: "experience" */ '@/views/Experience')
            }
        ]
    }
];

function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    } else {
        return { top: 0, behavior: 'smooth' };
    }
}

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior
});

router.beforeEach((to, from, next) => {
    store.commit('loader/change', true); // Show loading indicator
    next();
});

router.afterEach(() => {
    store.commit('loader/change', false);
});

export default router;
