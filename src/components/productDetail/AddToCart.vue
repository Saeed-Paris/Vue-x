<template>
  <button
    :class="{ notAvailable: this.$store.getters.getProductQuant <= 0 }"
    @click="AddCartFunc()"
  >
    اضافه کردن به سبد خرید
  </button>
</template>
<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useCookies } from "vue3-cookies";
let self;
export default {
  created() {
    self = this;
  },
  setup() {
    const store = useStore();
    const { cookies } = useCookies();
    let CurrentProduct = ref(null);
    let currentColor = ref(null);
    let productAllSizes = ref(null);
    let cartQuant = ref(null);
    CurrentProduct = computed(() => {
      return store.getters.getProductDetail;
    });
    productAllSizes = computed(() => {
      return store.getters.getProductAllSizes;
    });
    currentColor = computed(() => {
      return store.getters.getCurrentColor;
    });
    cartQuant = computed(() => {
      return store.getters.getCartQuant;
    });
    function AddCartFunc() {
      let obj = {};
      obj.name = "" + CurrentProduct.value.title;
      if (CurrentProduct.value.varieties[currentColor.value].color) {
        obj.color =
          "" + CurrentProduct.value.varieties[currentColor.value].color.name;
      }

      if (productAllSizes.value) {
        obj.size =
          "" +
          productAllSizes.value[
            currentColor.value % productAllSizes.value.length
          ];
      } else {
        obj.size = "" + null;
      }
      obj.price = "" + CurrentProduct.value.price;
      obj.image = "" + CurrentProduct.value.major_image.url;
      store.commit("AddProcutToCart", obj);
      // self.$cookies.set("Cart", cartQuant.value);
    }
    onMounted(() => {});
    //   function Car(name, size, color, price, discount) {
    //     let obj = new Object();
    //     obj.name = name;
    // store.commit("AddProcutToCart", obj.name);
    //   }
    return {
      CurrentProduct,
      AddCartFunc,
      currentColor,
      productAllSizes,
      cookies,
      cartQuant,
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
