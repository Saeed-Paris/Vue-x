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
let self;
export default {
  created() {
    self = this;
  },
  setup() {
    const store = useStore();
    let CurrentProduct = ref(null);
    let currentColor = ref(null);
    let currentSize = ref(null);
    CurrentProduct = computed(() => {
      return store.getters.getProductDetail;
    });
    currentColor = computed(() => {
      return store.getters.getProductDetail;
    });
    currentSize = computed(() => {
      return store.getters.getProductDetail;
    });
    function AddCartFunc() {
      let obj = new Object();
      obj.name = CurrentProduct.value.title;
      obj.size = CurrentProduct.value.title;
      obj.name = CurrentProduct.value.title;
      console.log(obj);
      store.commit("AddProcutToCart", obj);
    }
    //   function Car(name, size, color, price, discount) {
    //     let obj = new Object();
    //     obj.name = name;
    // store.commit("AddProcutToCart", obj.name);
    //   }

    return {
      CurrentProduct,
      AddCartFunc,
      currentSize,
      currentColor,
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
