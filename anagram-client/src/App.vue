<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const audio = new Audio(require("./assets/background.mp3"));
export default {
  name: "App",
  mounted() {
    audio.play();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Baloo Tammudu 2", cursive;
  color: #90b4dc;
}
</style>
