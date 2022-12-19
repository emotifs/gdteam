<template>
  <Carousel
      class="carousel__container"
      :itemsToShow="2"
      :wrapAround="true"
      :transition="100"
      :autoplay="5000"
      :breakpoints="{
        700: {
        itemsToShow: 1
        },
        1024: {
        itemsToShow: 4
        }
      }"
  >
    <Slide v-for="member in team" :key="member.id">
        <div class="carousel__item" :style="{'background-image' : `linear-gradient(45deg, #000, rgba(0, 0, 0, 0.2)), url(${member.image})`}">
        <div class="item">
          <h3 class="name">{{ member.full_name }}</h3>
        </div>
      </div>
    </Slide>
    <template #addons>
    <Pagination />
    <Navigation />
  </template>

  </Carousel>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

export default defineComponent({
  name: 'HomeTeam',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  setup(){
    const team = reactive([
      {
        id : 1,
        full_name : 'Mirzohid Abbdurazzaqov',
        image : 'https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2xlJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        job_type : 'Manager',
        linkedin : 'https://linkedin.com',
        telegram : 'https://t.me/emotifs',
        instagram : 'https://instagram.com/emotifs_',
        twitter : 'https://twitter.com'
      },
      {
        id : 2,
        full_name : 'Dilbek Alimurodov',
        image: 'https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg',
        job_type : 'Front End Dev',
        telegram : 'https://t.me/emotifs',
        instagram : 'https://instagram.com/emotifs_',
      },
      {
        id : 3,
        full_name : 'Dilmurod Dadaboyev',
        image: 'https://lulebora.al/wp-content/uploads/2018/11/h1-team-img-4.jpg',
        job_type : 'Designer',
        telegram : 'https://t.me/emotifs',
        linkedin : 'https://linkedin.com',
        instagram : 'https://instagram.com/emotifs_',
      },
      {
        id : 4,
        full_name : 'Muhammadjon Muhammedov',
        image: 'https://salahineo.github.io/Stocker/images/team4.jpg',
        job_type : 'Back End Dev',
        telegram : 'https://t.me/emotifs',
        linkedin : 'https://linkedin.com'
      },

      {
        id : 5,
        full_name : 'Kimdur Kimdurov',
        image: 'https://salahineo.github.io/Stocker/images/team4.jpg',
        job_type : 'Back End Dev',
        telegram : 'https://t.me/emotifs',
        linkedin : 'https://linkedin.com'
      },

      {
        id : 6,
        full_name : 'Kimdur1 Kimdurov',
        image: 'https://salahineo.github.io/Stocker/images/team4.jpg',
        job_type : 'Back End Dev',
        telegram : 'https://t.me/emotifs',
        linkedin : 'https://linkedin.com'
      }
    ])

    return{
      team
    }
  }
})
</script>

<style scoped lang="scss">
.carousel__item{
  background-image: linear-gradient(rgba(69, 71, 80, 0.8), rgba(24, 23, 23, 0.8));
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px!important;
  width : 100%;
  min-height: 460px;
  padding: 50px;
  position: relative;

  .name{
    color: #fff;
    position: absolute;
    bottom: 100px;
    text-align: center;
    font-size: 18px;
  }
}

.carousel__container{
  width: 80%;
  margin: 0 auto;
}

@media(max-width: 767px){
  .carousel__container{
    width: 90%
  }
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.8);
}

.carousel__slide--prev {
  transform: rotateY(-10deg) scale(0.9);
}



.item:hover{
  cursor: pointer;
}

.carousel__slide--next {
  transform: rotateY(10deg) scale(0.8);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
