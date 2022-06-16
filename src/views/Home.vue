<template>
  <section>
    <h1>{{products}}</h1>
  </section>
</template>
<script>
export default {
  computed: {
    products() {

        // this.$store.mutations.IsAvailableFunc;
      return this.$store.getters.availableProducts;
    },
  },
};
</script>
<style lang=""></style>
