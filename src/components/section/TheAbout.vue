<template>
  <section class="bg-about-bg w-full h-full pt-44" style="background-size: cover; background-position: center">
    <div class="container-l">
      <h1 class="text-4xl" data-aos="fade-right" data-aos-duration="1500">{{$t(about.header)}}</h1>
      <p class="mt-16" data-aos-delay="500" data-aos-duration="1000" data-aos="fade-up" style="font-size: 18px">Lorem ipsum - dolor sit amet, consectetur adipiscing elit ut aliquam, <br><br>

        purus sit amet luctus venenatis,ipsum dolor sit amet, consectetur ingilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra</p>
    </div>
  </section>
</template>

<script>
import {useI18n} from "vue-i18n";
import {useStore} from "vuex";

export default {
  name: "TheAbout.vue",
  setup(){
    const store = useStore()
    const about = store.getters.about
    return{
      about
    }
  },
  mounted() {
    this.$store.dispatch('setLoad', false)
  }
}
</script>

<style scoped>

</style>
