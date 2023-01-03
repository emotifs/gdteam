<template>
  <nav class="relative flex flex-wrap bg-black items-center justify-between px-2 pb-3 mb-3 w-full pt-8">
    <div class="w-full mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-2 lg:static lg:block lg:justify-start">
        <button
            class="text-white w-14 border-none outline-0 static lg:absolute lg:left-10 lg:top-10 text-xl leading-none px-3 py-1 rounded bg-transparent block outline-none focus:outline-none"
            type="button" v-on:click="toggleNavbar">
          <img src="../../assets/hamburger.png" alt="" v-if="!showMenu">
          <i v-if="showMenu" class="fa-solid fa-xmark fa-2x"></i>
        </button>
        <router-link to="/"
                     class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white block lg:hidden xl:hidden">
          <img src="../../assets/logo.png" class="w-40 block " alt="">
        </router-link>
        <div class="lang-edit">
          <select
              class="bg-white text-black border-none outline-0 h-8 w-12 lg:absolute lg:top-10  lg:right-10 rounded"
              v-model="$i18n.locale"
              @change="onChangeLocal"
          >
            <option class="text-black" value="uz">UZ</option>
            <option class="text-black"  value="ru">RU</option>
            <option class="text-black" value="en">EN</option>
          </select>
        </div>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu }" class="lg:flex lg:flex-grow items-center w-screen">
        <ul class="flex flex-col lg:flex-row list-none lg:mx-auto bg-black w-full h-screen lg:w-max lg:h-max lg:bg-transparent  z-50">
          <li class="nav-item mx-5 py-2">
            <router-link to="/"
                         class="px-3 py-2 flex items-center text-md lg:text-xs uppercase font-bold leading-snug text-white hover:opacity-75 no-underline">
              <span class="ml-2" style="font-size: 18px"><i class="fa-sharp fa-solid fa-house mr-2 inline lg:hidden"></i>{{ $t('nav.home') }}</span>
            </router-link>
          </li>
          <li class="nav-item mx-5 py-2">
            <router-link to="/about"
                         class="px-3 py-2 flex items-center text-md lg:text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
              <span class="ml-2" style="font-size: 18px"><i class="fa-solid fa-circle-info mr-2 inline lg:hidden"></i>{{ $t('nav.about') }}</span>
            </router-link>
          </li>
          <router-link to="/"
                       class="text-sm font-bold leading-relaxed inline-block mx-8 whitespace-nowrap uppercase text-white hidden lg:block xl:block sm:hidden md:hidden">
            <img src="../../assets/logo.png" class="w-40" alt="">
          </router-link>
          <li class="nav-item mx-5 py-2">
            <router-link to="/portfolio"
                         class="px-3 py-2 flex items-center text-md lg:text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
              <span class="ml-2" style="font-size: 18px"><i class="fa-solid fa-briefcase mr-2 inline lg:hidden"></i>{{ $t('nav.portfolio') }}</span>
            </router-link>
          </li>

          <li class="nav-item mx-5 py-2">
            <router-link to="/news"
                         class="px-3 py-2 flex items-center text-md lg:text-xs  uppercase font-bold leading-snug text-white hover:opacity-75">
              <span class="ml-2" style="font-size: 18px"><i class="fa-regular fa-newspaper mr-2 inline lg:hidden"></i>{{ $t('nav.news') }}</span>
            </router-link>
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {ref} from 'vue'
import {useI18n} from 'vue-i18n';
export default {
  name: "TheNavbar",
  props : ['isClose'],
  setup(props) {
    const i18n = useI18n;
    const {t} = useI18n({
      i18n
    })

    const showMenu = ref(false)
    const onChangeLocal = (e) => {
      localStorage.setItem('lang', e.target.value)
    }

    function toggleNavbar() {
      showMenu.value = !showMenu.value
    }

    const langs = ["ru", "uz", "en"]
    return {
      langs,
      onChangeLocal,
      showMenu,
      toggleNavbar,
      t
    }
  },

  mounted(){
    if (localStorage.getItem("lang")) {
      this.$i18n.locale = localStorage.getItem("lang")
    }
  },

  watch: {
    '$route' () {
      this.showMenu = false
    }
  },
}
</script>

<style scoped>
  select{
    background-color: #fff;
  }
  option{
    background-color: #fff;
  }
  option:hover{
    background-color: #2c3e50!important;
    color: #fff;
  }

  .lang-edit:hover{
    color: red;
  }

  .lang-edit{
    margin-top : 0
  }

  @media(max-width: 1200px){
    .lang-edit{
      margin-top: 1.5rem
    }

  }
</style>
