<template>
  <button
    :class="{ notAvailable: this.$store.getters.getProductQuant <= 0 }"
    @click="AddCartFunc()"
  >
    اضافه کردن به سبد خرید
  </button>
</template>
<script>
export default {
  methods: {
    AddCartFunc() {
      this.$store.commit("AddProcutToCart");
    },
  },
};
</script>
<style scoped>
button {
  font-size: 20px;
  padding: 20px;
  color: white;
  background-color: green;
  border: none;
}
.notAvailable {
  background-color: red;
  pointer-events: none;
  opacity: 0.4;
}
</style>
