<template>
  <div class="header">
    <router-link to="/cart"
      ><span class="cartNumb">{{ cartQuant }}</span
      ><img src="@/assets/images/cart.png" alt=""
    /></router-link>
    <router-link to="/"> HOME </router-link>
  </div>
  <router-view />
</template>
<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
let self;
export default {
  created() {
    self = this;
  },
  setup() {
    const store = useStore();
    let cartQuant = ref(null);
    cartQuant = computed(() => {
      return store.getters.getCartQuant;
    });
    onMounted(() => {});
    return {
      cartQuant,
    };
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
  justify-content: flex-start;
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
