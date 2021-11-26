<template>
  <div id="home" class="hero-image">
    <div class="hero-text">
      <div
        :class="{
          'd-flex heroTitleContainer': windowWidth > 960,
          'd-flex heroTitleContainerHandy': windowWidth < 960,
        }"
      >
        <v-row>
          <v-col cols="12" md="12" sm="12" class="columnContainer">
            <h1
              :class="{
                heroTextTitle: windowWidth > 960,
                heroTextTitleHandy: windowWidth < 960,
              }"
            >Ibos Ocakbasi</h1>
          </v-col>
          <!-- <v-col cols="12" md="6" sm="12" class="columnContainer">
            <lottie-animation
              ref="anim"
              :animationData="require('../assets/Lottie/foodhero.json')"
              :loop="true"
              :autoPlay="true"
              :speed="1"
              :class="{
                myanimation: windowWidth > 960,
                myanimationHandy: windowWidth < 960,
              }"
            />
          </v-col>-->
        </v-row>
      </div>

      <v-row justify="center" class="container btnRowContainer">
        <v-col cols="12" sm="6" :class="{'btnColumnContainerLeft'  : windowWidth > 960}">
          <div class="d-flex justify-center">
            <a id="btn" href="#menu">Gallerie</a>
          </div>
        </v-col>
        <v-col cols="12" sm="6" :class="{'btnColumnContainerRight' : windowWidth > 960  }">
          <div class="d-flex justify-center">
            <a id="btn" href="#Mapframe" v-smooth-scroll>Kontakt</a>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue

export default {
  name: "Hero",

  components: {
    // LottieAnimation,
  },

  data: () => ({ windowWidth: window.innerWidth }),

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {
    windowWidth(newHeight, oldHeight) {
      this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    },
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
};
</script>

<style lang="scss" scoped>
/* The hero image */
.btnRowContainer {
  margin: auto;
  width: 50%;
}
.btnColumnContainerLeft {
  position: relative;
}
.btnColumnContainerRight {
  position: relative;
}

.columnContainer {
  display: flex;
  justify-content: center;
}

.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url("../assets/RestaurantImages/PizzaHero.jpeg");

  /* Set a specific height */
  height: 100vh;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.heroTitleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: auto;
}
.heroTitleContainerHandy {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

/* Place text in the middle of the image */
.heroTextTitle {
  font-size: 55px;
  color: #eee;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin: auto;
}

.heroTextTitleHandy {
  font-size: 38px;
  color: #eee;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  justify-content: space-between;
  width: 100%;
}

#btn {
  /* border: 2px solid #003BF1; */
  background: #441f1a;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  transition: all 0.5s;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
  box-shadow: 0px 0px 8px #441f1a;
  text-transform: uppercase;
  text-decoration: none;
  min-width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: #441f1a 1px solid;
  font-weight: bold;
}

#btn:before {
  width: 100%;
  height: 100%;
  content: "";
  margin: auto;
  position: absolute;
  top: -100%;
  left: -100%;
  background: #441f1a;
  transition: ease-in-out 0.5s;
  z-index: -1;
  border-radius: 5px;
}

#btn:hover {
  color: white;
  transform: scale(1.2);
}
#btn:hover:before {
  top: 0;
  left: 0;
} /**
	#btn:hover:after{
			transform: rotateY(90deg);

	}**/

/* Lottie Animation */
.animationContainer {
  display: flex;
  justify-content: center;
}

.myanimation {
  width: 250px;
  height: 150px;
}
.myanimationHandy {
  width: 200px;
  height: 200px;
  padding-bottom: 10px;
}
</style>
