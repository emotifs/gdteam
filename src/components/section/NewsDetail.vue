<template>
  <TheLoader v-if="isLoading"/>
  <div class="body" v-else="!isLoading">
    <div class="container">
      <div class="news__detail">

        <div class="news__detail__content">
          <div class="news__detail__content__image">
            <img :src="news.image" alt="">
          </div>
          <div class="news__detail__title text-2xl mt-4 font-bold">
            <h1>{{news.title}}</h1>
          </div>
          <div class="news__detail__content__body mt-3 mb-4">
            <p>{{news.body}}</p>
          </div>

          <button @click="copy" class="bg-white py-2 px-3 text-black rounded-xl">Share <i v-if="!isShared" class="fa fa-upload ml-2"></i> <i v-else class="ml-2 fa fa-check"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import TheLoader from "@/components/layout/TheLoader";

export default {
  name: "NewsDetail",
  components: {TheLoader},
  props : [
      'id'
  ],
  setup(props) {
    const isLoading = ref(true)
    const isShared = ref(false)
    window.scrollTo(0, 0);
    let news = ref([]);
    if(!props.id){
      console.log('props', props)
    }
    axios.get('main/blog/' + props.id)
      .then(res => {
        console.log(res)
        news.value = res.data;
        isLoading.value = false
      })
      .catch(err => {
        console.log(err)
      })

    const copy = () => {
      navigator.clipboard.writeText(window.location.href)
      isShared.value = true
    }

    return {
      news,
      isLoading,
      copy,
      isShared
    };
  },
}
</script>

<style scoped lang="scss">
  .body{
    height: 100%;
    background-color: #000;
  }

  .container{
    border: 1px solid rgba(255, 255, 255, 0.52);
    background-color: rgba(255, 255, 255, 0.16) !important;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
  }

  .news__detail__content__image{
    margin: auto;

    width: 100%;

    img{
      height: 400px!important;
      width: 100%;
      object-fit: cover;
    }
  }

  .news__detail__content__body{
    width: 70%;
  }
</style>
