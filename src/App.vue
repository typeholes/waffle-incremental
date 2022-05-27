<script setup lang="ts">
import GameMain from "./components/GameMain.vue";

const x = 1;
</script>

<template>
  <div>
    <img alt="Waffle Maker" src="./assets/waffleMaker.png" />
    <component :is="GameMain" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
}
</style>
