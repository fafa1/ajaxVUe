<template>
  <div id="app">
    <category></category>
  </div>
</template>

<script>
import Category from "@/features/category";

export default {
  name: "App",

  components: {
    Category
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
