import {createStore} from 'vuex'
import services from './data/services.json'
import partners from './data/partners.json'
import footer from './data/footer.json'
export default createStore({
    state: {
        services: services,
        partners : partners,
        footer : footer
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
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
