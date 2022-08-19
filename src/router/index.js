import {createRouter, createWebHistory} from 'vue-router'
import TheHome from "@/components/section/home/TheHome";
import TheAbout from "@/components/section/TheAbout";
import ThePortfolio from "@/components/section/portfolio/ThePortfolio";
import TheNews from "@/components/section/TheNews";

const routes = [
    {
        name: 'home', path: '/', component: TheHome
    },
    {name: 'about', path: '/about', component: TheAbout},
    {name: 'portfolio', path: '/portfolio', component: ThePortfolio},
    {name: 'news', path: '/news', component: TheNews}

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})


export default router
