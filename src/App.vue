<template>
  <v-app>
    <Navbar />
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
