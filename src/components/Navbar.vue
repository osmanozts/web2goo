<template>
  <nav class="navbar navbar-default navbar-fixed-top fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Ibos Ocakbasi</a>
        <!-- <img src="../assets/Images/logo.png" class="logoNavbar" alt /> -->
      </div>
      <div>
        <ul class="nav navbar-right d-flex" v-if="windowWidth > 960">
          <li class="mx-5 navbarLinkContainer">
            <a class="navbarLink" href="#/">Home</a>
          </li>
          <li class="mx-5 navbarLinkContainer">
            <a class="navbarLink" href="#menu" v-smooth-scroll>Gallerie</a>
          </li>
          <li class="mx-5 navbarLinkContainer">
            <a class="navbarLink" href="#rewiewSection" v-smooth-scroll>Kunden</a>
          </li>

          <li class="mx-5 navbarLinkContainer">
            <a class="navbarLink" href="#Mapframe" v-smooth-scroll>Kontakt</a>
          </li>
        </ul>
        <ul class="nav navbar-right d-flex" v-else>
          <li class="navbarLinkContainer">
            <NavHamburger />
          </li>
        </ul>
      </div>

      <!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
import jQuery from "jquery";
import $ from "jquery";
import NavHamburger from "./NavHamburger";

export default {
  components: { NavHamburger },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

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

    $(document).ready(function () {
      // Smooth scroll for the navigation menu and links with .scrollto classes
      var scrolltoOffset = $("#header").outerHeight() - 1;

      // Activate smooth scroll on page load with hash links in the url
      $(document).ready(function () {
        if (window.location.hash) {
          var initial_nav = window.location.hash;
          if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $("html, body").animate(
              {
                scrollTop: scrollto,
              },
              1500,
              "easeInOutExpo"
            );
          }
        }
      });

      // Transition effect for navbar
      // checks if window is scrolled more than 500px, adds/removes solid class
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $(".navbar").addClass("solid");
        } else {
          $(".navbar").removeClass("solid");
          // $(".navbar").removeClass("navbar-dark bg-dark");
          // $(".navbar").addClass("navbar-light bg-light");
        }
      });
    })(jQuery);
  },
};
</script>

<style lang="scss" scoped>
/*!
* Based on Bootstrap v4.0.0 (https://getbootstrap.com) 
*/
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,400,700");
/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

.navbarBG {
  color: red;
  background-color: red;
  transition: 1s ease-in-out;
}

.image {
  background-color: #490d40;
  background: url(https://sonorangirl.github.io/Earth-Quotes/img/google-earth-view-South-Iceland3.jpg)
    no-repeat center center;
  background-size: cover;
  height: 570px;
  margin-top: -20px;

  .heading {
    color: white;
    text-align: center;
    padding-top: 200px;
  }

  p {
    text-align: center;
    padding: 20px 60px;

    .btn {
      background-color: transparent;
      color: #003bf1;
      border: 1px solid white;
      padding: 10px;
      font-size: 1.2em;

      &:hover {
        color: #c57ed3;
        border-color: #c57ed3;
      }
    }
  }
}

.navbar {
  height: 80px;
  background-color: transparent;
  border: none;
  color: white;
  z-index: 100;
  transition: background-color 1s ease 0s;
}

.navbar-default {
  .navbar-brand {
    font-size: 25px;
    color: #eee;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    margin: auto;

    &:hover {
      color: #c57ed3;
      border: 1px solid #c57ed3;
    }
  }

  .navbar-nav {
    > li {
      > a {
        color: #003bf1;
        margin: 10px 5px 5px 5px;
      }
      > a:hover,
      > a:active,
      > a:focus {
        color: black;
        border: 1px solid #c57ed3;
      }
      > a:visited {
        color: #c57ed3;
        text-decoration: none;
      }
    } //end li
  }
} //end .navbar-default

/* Solid class attached on scroll past first section */

.navbar.solid {
  background-color: rgba(228, 227, 227, 0.98);
  transition: background-color 1s ease 0s;
  box-shadow: 0 0 4px grey;

  .navbar-brand {
    color: #441f1a;
    transition: color 1s ease 0s;
  }

  .navbarLink {
    text-decoration: none;
    color: #441f1a;
    font-weight: bold;
  }
}

.logoNavbar {
  max-height: 45px;
  cursor: pointer;
  margin-bottom: 5px;
}

.navbarLink {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
.navbarLink:hover {
  text-decoration: none;
  color: white;
  transition: 0.5s ease-in-out;
}

/* *********** /ROO ADDED CONTENT ***********  */
</style>
