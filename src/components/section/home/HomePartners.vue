<template>
  <base-header title="Partners" class="mt-20" size="24px"></base-header>
  <div style="width: 95%" class="hover:cursor-pointer mx-auto mt-16 w-full">
    <Carousel :settings='settings' :breakpoints='breakpoints' :autoplay="3000">
    <Slide  class="w-full noselect" v-for="(part, idx) in partners" :key="part.name" >
      <div class="shadow-md w-full relative" style="background-color: #202020; height: 300px">
        <div class="absolute top-10 w-full px-5 border-r-2 border-r-white h-56" v-if="idx !== partners.length -1">
          <div class="mt-3 lg:mt-0 px-5 mt- 5 overflow-hidden" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-delay="500"  >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{$t(part.name)}}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$t(part.description)}}</p>
          </div>
        </div>
        <div class="absolute top-10 w-full px-5" v-else   >
          <div class="mt-3 lg:mt-0 px-5 mt- 5 overflow-hidden" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-delay="500"  >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{$t(part.name)}}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{$t(part.description)}}</p>
          </div>
        </div>
      </div>
    </Slide >
    </Carousel>
  </div>
</template>

<script>
import {useStore} from "vuex";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
  name: "HomePartners",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup(){
    const store = useStore()
    const partners = store.getters.partners
    return{
      partners
    }
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4  ,
        snapAlign: 'start',
      },
    },
  }),
}
</script>

<style scoped>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

*{
  overflow-x: auto!important;
  overflow-y: hidden;
}
</style>
