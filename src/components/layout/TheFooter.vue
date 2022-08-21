<template>
  <footer class="bg-black text-white footer" style="font-size: 18px">
    <div class="bg-black py-5"></div>
    <div class="cont bg-black shadow-white shadow-2xl py-5 ">
      <div style="width: 95%" class="mx-auto">
        <div class="grid grid-cols-1 gap-8 py-8 lg:mb-24  md:grid-cols-3">
          <div data-aos="zoom-out-right" data-aos-duration="1500" class="ml-4 lg:ml-0">
            <h2 class="mb-10 text-sm font-semibold text-gray-400 uppercase">Address</h2>
            <ul class="text-white-500 text-white-400">
              <li class="mb-4">
                <a href="#" class=" hover:underline">{{$t(footer.address)}}</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">{{$t(footer.office)}}</a>
              </li>
            </ul>
          </div>
          <div data-aos="zoom-out-right" data-aos-delay="500" data-aos-duration="1500">
            <h2 class="mb-10 text-sm font-semibold text-gray-400 uppercase text-white-400">Contact</h2>
            <ul class="text-white-500 text-white-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">{{$t(footer.contact.email)}}</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">{{$t(footer.contact.number)}}</a>
              </li>
            </ul>
          </div>
          <div data-aos="zoom-out-right" data-aos-delay="1000" data-aos-duration="1500" class="ml-4 lg:ml-0">
            <h2 class="mb-9  text-sm font-semibold text-white-500 uppercase text-gray-400">Social Network</h2>
            <div class="flex mt-4 md:mt-0 lg:ml-0 icons" >
              <a :href="$t(footer.social.instagram)" class="text-white-400 mr-3 hover:text-white-900 hover:text-white">
                <img src="../../assets/instagram.png" class="w-9 h-9" alt="">
                <span class="sr-only">Instagram page</span>
              </a>
              <a :href="$t(footer.social.telegram)" class="text-white-400 hover:text-white-900 hover:text-white">
                <img src="../../assets/telegram.png" class="w-9 h-9" alt="">
                <span class="sr-only">Telegram page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block">
        <section class="flex mx-auto" style="width: 95%; ">
          <p class="text-white text-left" :style="{'font-size' : '16px', 'width' : '350px'}">Global Digital Agency 2021-2022</p>
          <div class="line mt-3 ml-4" ></div>
        </section>
      </div>
    </div>
  </footer>

</template>

<script>
import {useStore} from "vuex";

export default {
  name: "TheFooter",
  setup(){
    const store = useStore();
    const footer = store.getters.footer

    return {
      footer
    }

  }
}
</script>

<style scoped>
 a:hover{
   color: #ccc!important;
 }
 .line{
   width: 100%;
   height: 2px;
   background-color: #fff;
 }

 .icons{
   margin-left: 40%;
 }

 footer{
   text-align: center;
 }

 @media(min-width: 767px){
   .icons{
     margin-left: 0;
   }

   footer{
     text-align: left!important;
   }
 }
</style>
