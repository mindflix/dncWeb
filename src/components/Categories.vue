<template>
  <v-img :src="image"></v-img>
</template>

<script>
import image from "../assets/voirplus.png";

export default {
  name: "Categories",
  data: function () {
    return {
      image: image,
    };
  },
};
</script>
