<template>
  <div class="body">
    <div class="container">
      <div class="news__detail">
        <div class="news__detail__title text-center text-2xl my-5 font-bold">
          <h1>{{news.title}}</h1>
        </div>
        <div class="news__detail__content">
          <div class="news__detail__content__image">
            <img :src="news.image" alt="">
          </div>
          <div class="news__detail__content__body my-5">
            <p>{{news.body}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

export default {
  name: "NewsDetail",
  props : [
      'id'
  ],
  setup(props) {
    let news = ref([]);
    axios.get('main/blog/' + props.id)
      .then(res => {
        news.value = res.data;
      })
      .catch(err => {
        console.log(err)
      })
    console.log(props.id)
    return {
      news
    };
  },
}
</script>

<style scoped lang="scss">
  .body{
    height: 100vh;
    background-color: #000;
  }

  .news__detail__content__image{
    width: 400px;
    margin: auto;
  }

  .news__detail__content__body{
    width: 70%;
    text-align: center;
    margin: auto;
  }
</style>
