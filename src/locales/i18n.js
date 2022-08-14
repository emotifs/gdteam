import {createI18n} from 'vue-i18n'
import en from './en.json'
import ru from './ru.json'
import uz from './uz.json'
const i18n = createI18n({
    locale : 'en',
    fallbackLocale : 'en',
    legacy : false,
    messages : {
        en, ru, uz
    }
})

export default i18n
