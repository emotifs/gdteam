<template>
  <div class="bg-black text-white" >
    <section class="w-full bg-home-bg bg-cover text-white pt-40 h-screen z-50">
        <HomeHeader/>
      <div @click="scroll('services')" class="hover:cursor-pointer icon-scroll"></div>
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
.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 40px;
  height: 70px;
  margin-left: -20px;
  bottom: 30px;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
  animation-name: scroll;
}
@-webkit-keyframes scroll {
  0% {
    opacity: 0;
    transform: translateY(46px);
  }
  100% {
    opacity: 1;
  }
}
</style>
