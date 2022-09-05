<template>
  <section id="services">
    <base-header title="Services" class="mt-20" size="24px"></base-header>
    <div style="width: 95%" class="mx-auto flex justify-center mb-5 mt-8 flex-wrap">
      <div class="w-1/2 md:w-1/2 lg:w-1/4 m-0 hei" v-for="(serv, idx) in services" :key="serv.id">
        <div v-if="idx % 2 === 0" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
          <div class="shadow-md relative servbg hei" :style="{'background-image' : `url(${require('.' + $t(serv.bg))})`, 'background-size' : 'cover', 'height': '500px'}">
            <a href="#">
              <img class="rounded-t-lg" src="#" alt=""/>
            </a>
            <div class="py-4 absolute bottom-0 servCon">
              <a href="#">
                <h5 class="mb-2  font-bold tracking-tight text-white dark:text-white servName">{{ $t(serv.name) }}</h5>
              </a>
              <p class="mb-3 font-normal text-white servDescr">{{ $t(serv.description) }}</p>
            </div>
          </div>
        </div>
        <div v-else data-aos="fade-down" style="height: 200px!important;" data-aos-duration="2000" data-aos-delay="500">
          <div class="shadow-md relative servbg hei"  :style="{'background-image' : `url(${require('.' + $t(serv.bg))})`, 'background-size' : 'cover', 'height': '500px'}">
          <a href="#">
              <img class="rounded-t-lg" src="#" alt=""/>
            </a>
            <div class="py-4 absolute bottom-0 servCon">
              <a href="#">
                <h5 class="mb-2 servName font-bold tracking-tight text-white">{{ $t(serv.name) }}</h5>
              </a>
              <p class="mb-3 font-normal text-white servDescr">{{ $t(serv.description) }}</p>
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



  .servName{
    font-size: 28px;
  }

  .servDescr{
    font-size: 18px;
  }

  .servCon{
    padding: 0 50px;
  }


  @media (max-width: 767px) {
    .hei{
      height: 300px!important;
      background-position: bottom;
    }

    .servName{
      font-size: 18px;
    }

    .servDescr{
      font-size: 14px;
    }

    .servCon{
      padding: 0 10px;
    }
  }
</style>
