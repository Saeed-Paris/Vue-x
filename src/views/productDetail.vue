<template>
  <div class="PDContainer">
    <div><ProductImage :imageUrl="productDetail.major_image.url" /></div>
    <div>   
      <ProductTitle :title="productDetail.title" />
    <ProductPrice :price="productDetail.price" />
      <ProductColors :varieties="productDetail.varieties" />
      <!-- move quantity to Product Colors cuz its based on which color do we want --> 
      <AddToCart />  
      <SpecificationsPart :Specifications="productDetail.Specifications" />
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
export default {
  props: ["productId"],
  components: {
    ProductImage,
    ProductSuptitle,
    ProductTitle,
    ProductPrice,
    ProductColors,
    AddToCart,
    SpecificationsPart,
  },
  beforeMount() {
    //     let x = this.productId.split("-");
    //     alert(x[x.length - 1]);
    this.$store.dispatch("callProductDetailFromApi", this.productId);
  },
  computed: {
    productDetail() {
      return this.$store.getters.getProductDetail;
    },
  },
  methods: {
    callProductDetail() {
      this.$store.dispatch("callProductDetailFromApi", this.productId);
    },
  },
};
</script>
<style scoped>
.PDContainer{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 50px;
}
</style>
