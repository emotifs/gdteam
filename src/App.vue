<template>
  <TheNavbar :class="navbarClass"/>
    <router-view></router-view>
  <TheFooter/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Poppins', sans-serif;
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
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
<script>
import TheNavbar from "@/components/layout/TheNavbar";
import './assets/tailwind.css'
import TheFooter from "@/components/layout/TheFooter";
import AOS from "aos";

export default {
  components: {TheFooter, TheNavbar},
  computed: {
    navbarClass() {
      if (this.$route.path === '/') {
        return 'positionAbsolute'
      }
    }
  },

  mounted(){
    AOS.init()
  },
  methods : {
    start(){
      let docWidth = document.documentElement.offsetWidth;

      [].forEach.call(
          document.querySelectorAll('*'),
          function(el) {
            if (el.offsetWidth > docWidth) {
              console.log(el);
            }
          }
      );

    }
  }
}
</script>
