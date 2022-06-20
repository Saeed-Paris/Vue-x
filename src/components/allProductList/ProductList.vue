<template>
  <div class="productListContainer">
    <div class="btnList">
      <button @click="showLatestProducts()">جدید ترین ها</button>
      <button @click="mostExpProducts()">گران ترین ها</button>
      <button @click="mostViewed()">محبوب ترین</button>
      <!-- mostViewed based on views-count -->
    </div>
    <div class="productList">
      <!-- :to="{ name: 'product-details', params: { id: product.id } }"-->
      <router-link to="" v-for="(product, index) in productList" :key="index">
        <img :src="product.major_image.url" />
        <p><span>esm: </span>{{ product.title }}</p>
        <p><span>gheymat: </span>{{ product.price }}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    productList() {
      return this.$store.getters.getAllProducts;
    },
  },
  methods: {
    mostExpProducts() {
      this.$store.commit("mostExpProducts");
    },
    showLatestProducts() {
      this.$store.commit("latestProducts");
    },
    mostViewed() {
      this.$store.commit("viewedProducts");
    },
  },
};
</script>
<style>
.productListContainer {
  grid-column: 1/8;
  width: 80%;
  margin: 0 auto;
}
.productList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.productListContainer a img {
  width: 100%;
}
.btnList {
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>
