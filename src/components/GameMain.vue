<script setup lang="ts">
import { reactive, ref } from 'vue'
import Intro from './Intro.vue'

defineProps<{ msg: string }>()

</script>

<template>

  <Intro></Intro>
</template>

<style scoped>
a {
  color: #42b983;
}

</style>
