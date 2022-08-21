<template>

 <section class="bg-black">
   <div class="container-l">
     <h1 class="text-4xl my-5" >
       {{$t('portfolio.title')}}
     </h1>

     <div class="grid-cols-3 space-y-2 lg:space-y-0 lg:gap-3 lg:grid relative">
       <div class="w-full" v-for="(item, idx) in portfolio" :key="item.id" :class="[idx + 1 === 1 || idx + 1 === 6 ? 'col-span-2' : '', idx + 1 === 3 ? 'row-span-2' : '']">
         <img :src="require('.' + $t(item.url))" alt="" @load="onImgLoad">
       </div>
     </div>
   </div>

  <div class="flex justify-center mt-5">
    <h1 class="text-xl mt-1 mr-2"> To be continued</h1>
    <svg class="w-12" version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
  <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
    <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.1"/>
  </circle>
      <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
    <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.2"/>
  </circle>
      <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
    <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.3"/>
  </circle>
</svg>
  </div>
 </section>
</template>

<script>
import {useStore} from "vuex";
import {useI18n} from "vue-i18n";


export default {
  name: "ThePortfolio",
  setup(){
    const store = useStore()
    const portfolio = store.getters.portfolio
    const i18n = useI18n;
    const {t} = useI18n({
      i18n
    })
    const onImgLoad = function (){
      store.dispatch('setLoad', false)
    }

    return {
      portfolio,
      t,
      onImgLoad
    }
  }
}
</script>

<style scoped>
</style>
