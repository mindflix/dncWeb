<template>
  <v-card>
    <v-app-bar app color="white" shrink-on-scroll class="overflow-y-hidden" tile>
      <banner class="advert"></banner>
      <div class="mx-auto my-auto">
        <v-toolbar-title class="text-h6">
          <router-link to="/" class="d-block nav-title">D&C</router-link>
        </v-toolbar-title>
        <v-toolbar-items>
          <div class="d-block">
            <router-link
              class="nav-links"
              v-for="routes in links"
              v-bind:key="routes.id"
              :to="`${routes.page}`"
            >{{routes.text}}</router-link>
          </div>
        </v-toolbar-items>
      </div>
    </v-app-bar>
  </v-card>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.advert {
  position: absolute;
  top: 0;
  left: 0;
  height: 0.4em;
  width: 100%;
  background-color: black;
}

.nav-title {
  font-family: "Jacques Francois Shadow", cursive;
  text-align: center;
  font-size: 2em;
  margin: 0.1em 0 0.15em 0;
}

.nav-links {
  margin: 0 1em;
  font-size: 0.7em;
}
</style>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Price",
          page: "/price",
        },
        {
          id: 1,
          text: "Network",
          page: "/Network",
        },
        {
          id: 2,
          text: "About",
          page: "/About",
        },
        {
          id: 3,
          text: "Contact",
          page: "/Contact",
        },
        {
          id: 4,
          text: "Project",
          page: "/Project",
        },
        {
          id: 5,
          text: "Partner",
          page: "/Partner",
        },
      ],
    };
  },
};
</script>