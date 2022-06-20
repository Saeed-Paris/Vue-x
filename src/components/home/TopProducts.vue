<template>
  <section>
    <div>
      <button @click="showLatestProducts()">جدید ترین ها</button
      ><button @click="mostViewed()">محبوب ترین</button>
      <button @click="mostExpProducts()">گران ترین ها</button>
    </div>
    <div class="gridContainer">
      <div v-for="(product, index) in call4ProductsGetters" :key="index">
        <img :src="product.major_image.url" />
        <p><span>esm: </span>{{ product.title }}</p>
        <p><span>gheymat: </span>{{ product.price }}</p>
        <p><span>id: </span>{{ product.id }}</p>
        <!-- <p><span>rate:  </span>{{ product.rating.rate }}</p> -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    call4ProductsGetters() {
      return this.$store.getters.getAllProducts.slice(0, 5);
    },
  },

  methods: {
    callAllProductsAction() {
      this.$store.dispatch("callApiForProducts");
    },
    showLatestProducts() {
      this.$store.commit("latestProducts");
    },
    mostExpProducts() {
      this.$store.commit("mostExpProducts");
    },

    mostViewed() {
      this.$store.commit("viewedProducts");
    },
  },
  beforeMount() {
    this.callAllProductsAction();
  },
};
</script>
<style>
.gridContainer {
  width: 80%;
  margin: 0 auto;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.gridContainer div img {
  width: 100%;
  height: 100%;
}
.gridContainer div {
  width: 300px;
  height: 300px;
}
.gridContainer span {
  font-size: 20px;
  color: red;
}
</style>
