<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
a {
  color: black !important;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}
</style>