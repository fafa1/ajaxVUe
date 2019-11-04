<template>
  <div>
    <h1>Categorias</h1>
    <h3>{{leanList}}</h3>
    <h2>{{list.sobreNome}}</h2>
    <ul class="lista">
      <!-- <li v-for="item in list">{{item}}</li> -->
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  mounted() {
    this.setList();
  },

  methods: {
    ...mapActions("Category", ["setList"])
  },

  computed: {
    ...mapState("Category", ["list"]),
    ...mapGetters("Category", ["leanList"])
  }
};
</script>

<style scoped>
.lista li {
  list-style: none;
}
</style>