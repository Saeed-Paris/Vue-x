<template>
  <div class="header">
    <router-link to="/cart"
      ><span class="cartNumb">{{ cartQuant }}</span
      ><img src="@/assets/images/cart.png" alt=""
    /></router-link>
  </div>
  <router-view />
</template>
<script>
export default {
  computed: {
    cartQuant() {
      return this.$store.getters.getCartQuant;
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.header {
  position: relative;
  display: flex;
  justify-content: start;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
}
.cartNumb {
  font-size: 20px;
  color: red;
  position: absolute;
  left: 20px;
  bottom: -20px;
}
#app {
  text-align: center;
}
</style>
