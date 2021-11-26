<template>
  <div class="menu pt-15" id="menu">
    <h2 class="section-title pt-15">
      <span class="spanContainer">Gallerie</span>
    </h2>

    <gallery :images="imagess" :index="index" @close="index = null"></gallery>
    <v-row
      justify="center"
      :class="{'imageRow' : windowWidth>960, 'imageRowHandy' : windowWidth<960}"
    >
      <v-col
        cols="12"
        md="4"
        sm="6"
        xs="12"
        v-for="(image, imageIndex) in imagesDescription"
        :key="imageIndex"
        class="ImageContainer"
      >
        <div
          class="galleryImage"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image.pfad + ')', width: '395px', height: '300px',borderRadius: '4px' }"
        ></div>
        <!-- <h4 class="py-5 MenuDescription">{{image.titel}}</h4> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  components: {
    gallery: VueGallery,
  },

  data: function() {
    return {
      index: null,
      imagesDescription: [
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Titelseite -"
        },
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Döner Spezialitäten -"
        },
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Döner Spezialitäten -"
        },
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Wraps / Dürümler -"
        },
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Überbacken / Pide -"
        },
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Pizzen -"
        },
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Vospeisen / Getränke -"
        },
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Zusatzstoffe / Allergene Auslöser -"
        },
        {
          pfad: require("../assets/RestaurantImages/ibosocakbasi.png"),
          titel: "- Zusatzstoffe -"
        }
        // {
        //   pfad: require("../assets/MenuPages/Back.png"),
        //   titel: ""
        // }
      ],
      images: [
        
          "../assets/RestaurantImages/ibosocakbasi.png"
        ,
        
          "../assets/RestaurantImages/ibosocakbasi.png"
        ,
        
          "../assets/RestaurantImages/ibosocakbasi.png"
        ,
        
          "../assets/RestaurantImages/ibosocakbasi.png"
        ,
        
          "../assets/RestaurantImages/ibosocakbasi.png"
        ,
        
          "../assets/RestaurantImages/ibosocakbasi.png"
        ,
        
          "../assets/RestaurantImages/ibosocakbasi.png"
        ,
        
          "../assets/RestaurantImages/ibosocakbasi.png"

        ,
        
          "../assets/RestaurantImages/ibosocakbasi.png"
        
        // {
        //   pfad: require("../assets/MenuPages/Back.png"),
        //   titel: ""
        // }
      ],
      windowWidth: window.innerWidth
    };
  },
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

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  }
};
</script>

<style lang="scss" >
.menu {
  /* height: 100vh; */
  background-color: #fff;
}

.galleryImage {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: 0.8s ease-in-out;
}

.galleryImage:hover {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #eee;
  margin: 5px 20px;
  border-radius: 3px;
  transform: scale(1.08);
  transition: 0.4s ease-in-out;
}

.ImageContainer {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imageRow {
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 40px; */
}
.imageRowHandy {
  padding-top: 50px;
}

.myanimation {
  width: 150px;
  height: 100px;
  margin: auto;
  background-color: #fff;
  padding-right: 30px;
}
.myanimationHandy {
  width: 150px;
  height: 150px;
  padding-bottom: 10px;
  margin: auto;
}
</style>