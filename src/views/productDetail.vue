<template>
  <div class="PDContainer" v-if="flag">
    <div><ProductImage :imageUrl="productDetail.major_image.url" /></div>
    <div>
      <ProductSuptitle :categories="productDetail.categories" />
      <ProductTitle :title="productDetail.title" />
      <ProductPrice :price="productDetail.price" /> 
      <ProductColors :varieties="productDetail.varieties" />
      <!-- move quantity to Product Colors cuz its based on which color do we want -->
      <AddToCart />
      <SpecificationsPart :specifications="productDetail.specifications" />
    </div>
  </div>
</template>
<script>
import ProductImage from "@/components/productDetail/ProductImage.vue";
import ProductSuptitle from "@/components/productDetail/ProductSuptitle.vue";
import ProductTitle from "@/components/productDetail/ProductTitle.vue";
import ProductPrice from "@/components/productDetail/ProductPrice.vue";
import ProductColors from "@/components/productDetail/ProductColors.vue";
import AddToCart from "@/components/productDetail/AddToCart.vue";
import SpecificationsPart from "@/components/productDetail/SpecificationsPart.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
let self;
export default {
  created() {
    self = this;
  },
  setup() {
    const store = useStore();
    let productDetail = ref(null);
    let flag = ref(false);
    productDetail = computed(() => {
      return store.getters.getProductDetail;
    });
    flag = computed(() => {
      return store.getters.getFlag;
    });
    function callProductDetail() {
      store.dispatch("callProductDetailFromApi", self.productId);
    }
    onMounted(() => {
      callProductDetail();
    });
    return {
      productDetail,
      callProductDetail,
      flag,
    };
  },
  props: ["productId"],
  components: {
    ProductPrice,
    ProductImage,
    ProductSuptitle,
    ProductTitle,
    ProductColors,
    AddToCart,
    SpecificationsPart,
  },
};
</script>
<style scoped>
.PDContainer {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 50px;
}
</style>