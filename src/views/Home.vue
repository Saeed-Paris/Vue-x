<template>
  <section>
    <button @click="addApple()">+1 to quantity of apple</button>
    <button @click="availableProducts()">Show Only Availabe products</button>
    <button @click="allProducts()">Show All</button>
    <h1 v-for="(item, index) in products" :key="index">
      {{ item }}
    </h1>
  </section>
</template>
<script>
export default {
  computed: {
    allProducts() {
      // this.$store.mutations.IsAvailableFunc;
      return this.$store.getters.getAllProducts;
    },
    availableProducts() {
      return this.$store.getters.getAvailableProducts;
    },
  },
};
</script>
<style lang=""></style>
