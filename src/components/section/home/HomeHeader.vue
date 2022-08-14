<template>
  <section class="pl-5 mt-24 md:mt-48 lg:mt-48 sm:mt-36 h-screen absolute">
    <h1 class="font-semi-bold tracking-wider mb-5 header-text" style="overflow-y: hidden" data-aos="zoom-out-down" data-aos-delay="200"  data-aos-duration="1500">{{ $t("home.products") }}</h1>
    <router-link to="/portfolio" class="hover:text-black text-black bg-white px-4 py-3 h-5 text-xl" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">{{ $t("home.beautiful") }} >
    </router-link>
  </section>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: "HomeHeader",
  setup() {
    const i18n = useI18n;
    const {t} = useI18n({
      i18n
    })

    return {
      t
    }
  }
}
</script>

<style scoped>
  .header-text{
    font-size: 84px;
  }

  @media(max-width: 767px){
    .header-text{
      font-size: 64px
    }
  }
</style>
