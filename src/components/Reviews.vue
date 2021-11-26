<template>
  <div class="reviewSection" id="rewiewSection">
    <h2 class="section-title pt-15">
      <span class="spanContainer">Unsere</span> Kunden
    </h2>

    <splide :options="windowWidth > 500 ? options : optionsHandy" has-slider-wrapper>
      <splide-slide v-for="(item,i) in reviews " :key="i">
        <div class="reviewContainer">
          <!-- <v-icon x-large color="#70927B" class="mb-7">mdi-chat-processing-outline</v-icon> -->
          <lottie-animation
            ref="anim"
            :animationData="require('../assets/Lottie/customer.json')"
            :loop="true"
            :autoPlay="true"
            :speed="0.6"
            class="myanimation"
          />
          <p class="reviewSubTitle px-7 pt-1">{{item.review}}</p>
          <p class="reviewAuthor px-7 pt-5">{{item.author}}</p>
        </div>
      </splide-slide>
    </splide>

    <br />
    <br />
    <br />
  </div>
</template>

<script>
// import carousel from "vue-owl-carousel";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// or
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
// or
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue
export default {
  components: {
    // carousel
    Splide,
    SplideSlide,
    LottieAnimation
  },

  
  

  data: () => ({
    windowWidth: window.innerWidth,
    txt: "",
    reviews:[
      {review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure consectetur iusto, dicta odit officia dolore, possimus ad aliquam doloremque impedit iste nulla mollitia, quidem consequuntur porro? Nam, velit! Quibusdam?",
      author: "asds asdadas"},
      {review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure consectetur iusto, dicta odit officia dolore, possimus ad aliquam doloremque impedit iste nulla mollitia, quidem consequuntur porro? Nam, velit! Quibusdam?",
      author: "asds asdadas"},
      {review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure consectetur iusto, dicta odit officia dolore, possimus ad aliquam doloremque impedit iste nulla mollitia, quidem consequuntur porro? Nam, velit! Quibusdam?",
      author: "asds asdadas"},
      {review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure consectetur iusto, dicta odit officia dolore, possimus ad aliquam doloremque impedit iste nulla mollitia, quidem consequuntur porro? Nam, velit! Quibusdam?",
      author: "asds asdadas"},
    ],
    options: {
      rewind: true,
      perPage: 3,
      gap: "1rem",
      autoplay: true,
      pauseOnHover: false,
      arrows: false,
      width: "100%",
      pagination: false
    },
    optionsHandy: {
      rewind: true,
      perPage: 1,
      gap: "1rem",
      autoplay: true,
      pauseOnHover: false,
      arrows: false,
      width: "100%",
      pagination: false
    }
  }),

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  },

  watch: {
    windowWidth(newHeight, oldHeight) {
      this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.reviewSection {
  background-color: #fff;
  width: 100%;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0px;
}

.myanimation {
  width: 80px;
  height: 80px;
  margin: auto;
  margin-bottom: 30px;
}

.section-title :before {
  content: "\a0\a0\a0\a0\a0\a0\a0\a0";
  display: block;
  position: absolute;
  text-decoration: underline;
  width: 290px;
  overflow: hidden;
  color: #eee;
  padding: 15px;
  margin-bottom: 20px;
}
.spanContainer {
  color: #5f5950;
  margin-right: 9px;
}

.reviewContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

.reviewSubTitle {
  color: #5f5950;
  font-size: 15px;
  text-align: center;
}
.reviewAuthor {
  color: black;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
}
</style>