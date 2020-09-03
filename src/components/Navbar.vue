<template>
  <v-card class="overflow-hidden">
    <v-app-bar app color="white" shrink-on-scroll>
      <nav class="mx-auto">
        <div class="nav-title">D&C</div>
        <div class="nav-links">
          <router-link
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{routes.text}}</router-link>
        </div>
      </nav>
    </v-app-bar>
  </v-card>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.nav-title {
  font-family: "Jacques Francois Shadow", cursive;
  text-align: center;
  font-size: 2em;
}

ul {
  text-transform: uppercase;
  list-style: none;
  display: inline-flex;
}

.nav-links > li {
  margin: 0 1em;
  font-family: "Poppins", sans-serif;
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