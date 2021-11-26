<template>
  <div>
    <h2 class="section-title mt-15">Kontakt</h2>
    <iframe
      class="mb-7"
      id="Mapframe"
      style="border: 0; width: 100%; height: 350px"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.6221102426234!2d7.093298515366525!3d51.55682797964325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e5d44432bf99%3A0xa42af7431384507f!2sIBO&#39;s%20Ocakbasi%20Restaurant%20Ge-Erle!5e0!3m2!1sde!2sde!4v1636024921633!5m2!1sde!2sde"
      frameborder="0"
      allowfullscreen
      loading="lazy"
    ></iframe>

    <div class="container infoWrapper mb-15">
      <v-row>
        <v-col cols="12" md="4" xs="12" class="my-3">
          <div class="d-flex">
            <v-icon xLarge color="#441f1a" class="ficon" size="40">mdi-map-marker</v-icon>
            <div>
              <h4 class="title">Adresse:</h4>
              <p class="subTitle">
                Crangerstraße 333,
                <br />45891 Gelsenkirchen
                <br />Deutschland
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" xs="12" class="my-3">
          <div class="d-flex">
            <v-icon xLarge color="#441f1a" class="ficon" size="40">mdi-email</v-icon>
            <div>
              <h4 class="title">E-mail:</h4>
              <p class="subTitle">28osman99@gmail.com</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" xs="12" class="my-3">
          <div class="d-flex">
            <v-icon xLarge color="#441f1a" class="ficon" size="40">mdi-phone</v-icon>
            <div>
              <h4 class="title">Telefonnummer:</h4>
              <p class="subTitle">0209 3861480</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.infoWrapper {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  background: #eee;
}

.ficon {
  font-size: 40px;
  float: left;
  width: 44px;
  height: 44px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  padding: 30px;
  box-shadow: 0px 0px 5px #441f1a;
}

.title {
  padding: 0 0 0 60px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #433f39;
  font-family: "Poppins", sans-serif;
}
.subTitle {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #7a7368;
}
</style>