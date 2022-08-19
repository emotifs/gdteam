<template>
 <section class="bg-black">
   <div class="container-l">
     <h1 class="text-4xl my-5" data-aos="fade-down" data-aos-duration="1000">
       {{$t('portfolio.title')}}
     </h1>
     <div class="grid-cols-3 space-y-2 lg:space-y-0 lg:gap-3 lg:grid relative" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
       <div class="w-full" v-for="(item, idx) in portfolio" :key="item.id" :class="[idx + 1 === 1 || idx + 1 === 6 ? 'col-span-2' : '', idx + 1 === 3 ? 'row-span-2' : '']">
         <img :src="require('.' + $t(item.url))" alt="">
       </div>
     </div>
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
    return {
      portfolio,
      t
    }
  }
}
</script>

<style scoped>
</style>
