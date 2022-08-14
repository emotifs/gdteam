<template>
  <div class="bg-black text-white" >
    <section class="w-full bg-home-bg bg-cover text-white pt-40 h-screen" style="background-position: top">
      <HomeHeader/>
      <img @click="scroll('services')" src="../../../assets/mouse.png" class="w-8 absolute left-1/2 bottom-10 hover:cursor-pointer" alt="">
    </section>
    <HomeServices/>
    <HomePartners />
  </div>
</template>

<script>
import HomeHeader from "@/components/section/home/HomeHeader";
import HomeServices from "@/components/section/home/HomeServices";
import HomePartners from "@/components/section/home/HomePartners";

export default {
  name: "TheHome",
  components: {HomePartners, HomeServices, HomeHeader},
  methods : {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
</style>
