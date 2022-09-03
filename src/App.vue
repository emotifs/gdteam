<template>
  <TheLoader v-if="this.$store.getters.isLoading === true"></TheLoader>
  <main>
    <TheNavbar :class="navbarClass" :close="isClose"/>
    <router-view></router-view>
    <TheFooter/>
  </main>
</template>

<style lang="scss">
@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"),
  url("./assets/fonts/Gilroy-Medium.ttf") format("truetype");
}

* {
  font-family: 'Gilroy', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

*:hover {
  text-decoration: none !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

main {
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
}

.positionAbsolute {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently
                                   supported by Chrome, Edge, Opera and Firefox */
}

.container-l {
  width: 95%;
  margin: 0 auto;
}
</style>
<script>
import TheNavbar from "@/components/layout/TheNavbar";
import './assets/tailwind.css'
import TheFooter from "@/components/layout/TheFooter";
import AOS from "aos";

export default {
  components: {TheFooter, TheNavbar},
  data() {
    return {
      isClose: false
    }
  },
  computed: {
    navbarClass() {
      if (this.$route.path === '/' || this.$route.path === '/about') {
        return 'positionAbsolute'
      }
    }
  },

  mounted() {
    this.$store.state.isNavbarClose = false
    AOS.init()
  },
  methods: {
    start() {
      let docWidth = document.documentElement.offsetWidth;

      [].forEach.call(
          document.querySelectorAll('*'),
          function (el) {
            if (el.offsetWidth > docWidth) {
              console.log(el);
            }
          }
      );

    }
  }
}
</script>
