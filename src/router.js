import Vue from "vue";
import VueRouter from 'vue-router';
import Index from "@/works/Index";
import Watcher from "@/works/01-watcher/Watcher";
import BooleanProp from "@/works/02-boolean-prop/BooleanProp";
import StrangeComponent from "@/works/04-strange-component/StrangeComponent";

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/watcher',
        component: Watcher,
    },
    {
        path: '/boolean-prop',
        component: BooleanProp,
    },
    {
        path: '/strange-component',
        component: StrangeComponent,
    },
];

export const router = new VueRouter({routes, mode: 'history'});