<template>
  <base-header title="Partners" class="mt-20" size="24px"></base-header>
  <div style="background-color: #202020; width: 100%; height: 150%" class="mt-5">
    <div class="container my-5 flex flex-row ">
      <div v-for="el in partners" class="p-5">
        <div class="partners__item">
          <img :src="el.logo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
export default {
  name: "HomePartners",
  setup() {
    const partners = ref([]);
    axios.get('/base/partner/')
      .then(response => {
        partners.value = response.data;
      })
      .catch(error => {
        console.log(error)
      })
    return{
      partners
    }
  }
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
