<template>
  <v-card class="overflow-hidden">
    <v-app-bar app color="white" shrink-on-scroll>
      <nav class="mx-auto">
        <div class="nav-title">D&C</div>
        <ul class="nav-links">
          <li>Price</li>
          <li>Network</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
          <li>Partner</li>
        </ul>
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
