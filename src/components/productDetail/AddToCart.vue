<template>
  <button
    :class="{ notAvailable: this.$store.getters.getProductQuant <= 0 }"
    @click="AddCartFunc()"
  >
    اضافه کردن به سبد خرید
  </button>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let CurrentProduct = ref(null);
    CurrentProduct = computed(() => {
      return store.getters.productDetail;
    });
    function AddCartFunc() {
     store.commit("AddProcutToCart", CurrentProduct);
    }
    return {
      CurrentProduct,
      AddCartFunc,
    };
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
