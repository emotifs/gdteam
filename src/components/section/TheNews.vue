<template>
  <div class="news__container container">
    <div class="news" v-for="news in news" :key="news.id">
    {{news}}
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

<style scoped>

</style>
