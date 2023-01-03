<template>
  <div class="body">
    <div class="news__container container">
      <div class="news" v-for="news in news" :key="news.id">
        <router-link :to="`/news/${news.id}`" class="news__item flex flex-row">
          <img :src="news.image" alt="">
          <div class="news__item__content">
            <h3 class="news__item__title">{{news.title}}</h3>
            <p class="news__item__body">{{news.body}}</p>
            <a href="#" class="bg-white text-black px-4 py-2 rounded-2xl">Read <i class="fa fa-arrow-right ml-3 mt-5"></i></a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "TheNews",
  setup(){
    const news = ref([])

    axios.get('main/blog/')
      .then(res => {
        news.value = res.data
      })
      .catch(err => {
        console.log(err)
      })

    return{
      news
    }
  },
}
</script>

<style scoped lang="scss">
  .body{
    height: 100vh!important;
    background-color: #000;
  }
  .news__container{
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .news{
    background-color: rgba(255, 255, 255, 0.16) !important;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }
  .news__item{
    height: 300px;
    &:hover{
      color: #fff;
    }
  }
  .news__item__title{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .news__item__content {
    padding-left: 20px;
  }
  .news__item__body{
    font-size: 18px;
    font-weight: 400;
    width: 85%;
    text-align: justify;
  }

</style>
