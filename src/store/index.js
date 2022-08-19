import {createStore} from 'vuex'
import services from './data/services.json'
import partners from './data/partners.json'
import footer from './data/footer.json'
import about from './data/about.json'
import portfolio from './data/portfolio.json'
export default createStore({
    state: {
        services: services,
        partners : partners,
        footer : footer,
        about : about,
        portfolio : portfolio
    },
    getters: {
        services(state) {
            return state.services
        },

        partners(state){
            return state.partners
        },

        footer(state){
            return state.footer
        },

        about(state){
            return state.about
        },
        portfolio(state){
            return state.portfolio
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
