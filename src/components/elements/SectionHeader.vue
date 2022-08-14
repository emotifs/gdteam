<template>
  <section class="flex mx-auto" style="width: 95%; ">
    <p class="text-white text-left" :style="{'font-size' : size, 'width' : wid}">{{title}}</p>
    <div class="line mt-3 ml-4" data-aos="fill-up" data-aos-duration="1000"></div>
  </section>
</template>

<script>
export default {
  name: "SectionHeader",
  props : ['title', 'size', 'wid'],
  setup(props){

  }
}
</script>

<style scoped>
  .line{
    width: 100%;
    height: 2px;
    background-color: #fff;
  }

  [data-aos='fill-up'] {
    width: 40%;
  }
  /*  Animation ends here */
  [data-aos='fill-up'].aos-animate {
    width: 100%;
  }
</style>
