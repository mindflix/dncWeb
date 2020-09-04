<template>
  <div class="home">
    <v-sheet class="overflow-y-auto">
      <v-container style="height: 2000px;">
        <Categories />
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from "../components/Categories";

export default {
  name: "Home",
  components: {
    Categories,
  },
};
</script>