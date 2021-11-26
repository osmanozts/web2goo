<template>
  <v-app>
    <!-- Navbar -->
    <navbar />

    <!-- Main Content -->
    <v-main>
      <!-- Router -->
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <Footer />

    <!-- Cookie Banner -->
    <cookie-law class="base">
      <div slot-scope="props">
        <p
          class="Cookie__content"
          style="font-size:17px"
        >Wir verwenden Cookies 🍪, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren.</p>
        <!-- <button class="Cookie__button mx-2" @click="buyProduct">
          <span>JETZT FREISCHALTEN!</span>
        </button>-->
        <button class="Cookie__button mx-2 my-2" @click="props.accept">
          <span>Akzeptieren</span>
        </button>

        <button class="Cookie__button mx-2 my-2" @click="props.close">
          <span>Ignorieren</span>
        </button>
      </div>
    </cookie-law>
  </v-app>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import CookieLaw from "vue-cookie-law";

// import axios from "axios";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    CookieLaw,

  },
  data: () => ({
    //
  }),

};
</script>

<style lang="scss" >
@import "~bootstrap/dist/css/bootstrap.css";

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
}

.section-bg {
  background-color: #f8fbfe;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #5f5950;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #5f5950;
}

.section-title h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #ffb03b;
  bottom: 0;
  left: calc(50% - 20px);
}

.section-title h2 span {
  color: #ffb03b;
}

.section-title p {
  margin: 15px auto 0 auto;
  font-weight: 300;
}

@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
</style>
