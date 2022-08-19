<template>
  <section id="services">
    <base-header title="Services" class="mt-20" size="24px"></base-header>
    <div style="width: 95%" class="mx-auto lg:flex md:flex justify-center mb-5 mt-8 flex-wrap">

      <div class="sm:w-max md:w-1/2 lg:w-1/4" v-for="(serv, idx) in services" :key="serv.id">
        <div v-if="idx % 2 === 0" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
          <div class="shadow-md relative servbg" :style="{'background-image' : `url(${require('.' + $t(serv.bg))})`, 'background-size' : 'cover', 'height': '500px'}">
            <a href="#">
              <img class="rounded-t-lg" src="#" alt=""/>
            </a>
            <div class="px-5 py-4 absolute bottom-0">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{{ $t(serv.name) }}</h5>
              </a>
              <p class="mb-3 font-normal text-white">{{ $t(serv.description) }}</p>
            </div>
          </div>
        </div>
        <div v-else data-aos="fade-down" data-aos-duration="2000" data-aos-delay="500">
          <div class="shadow-md relative servbg" :style="{'background-image' : `url(${require('.' + $t(serv.bg))})`, 'background-size' : 'cover', 'height': '500px'}">
          <a href="#">
              <img class="rounded-t-lg" src="#" alt=""/>
            </a>
            <div class="px-5 py-4 absolute bottom-0">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ $t(serv.name) }}</h5>
              </a>
              <p class="mb-3 font-normal text-white">{{ $t(serv.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {useStore} from 'vuex'

export default {
  name: "HomeServices",
  components: {},
  setup() {
    const store = useStore()
    const services = store.getters.services
    return {
      services
    }
  }

}
</script>

<style scoped>
  .servbg{
    filter: grayscale(100%);
  }
  .servbg:hover{
    filter: grayscale(0%);
    transition: 0.4s;
  }
</style>
