<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export default {
  name: "App",
  mounted() {
    socket.on("connect", () => {
      console.log("Sudah connect punya id", socket.id);
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
