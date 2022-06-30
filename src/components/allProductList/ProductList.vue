<template>
  <div class="productListContainer">
    <div>
      <div class="btnList">
        <button @click="showLatestProducts()">جدید ترین ها</button>
        <button @click="mostExpProducts()">گران ترین ها</button>
        <button @click="mostViewed()">محبوب ترین</button>
      </div>
      <div class="btnContainer">
        <button
          v-for="index in 7"
          :key="index"
          :disabled="index == 4 || isLoading"
          v-show="index - 4 + currentPage > 0"
          @click="changePage(index - 4)"
        >
          {{ currentPage + index - 4 }}
        </button>
      </div>
    </div>
    <div class="productList">
      <div v-for="(product, index) in productList" :key="index">
        <router-link
          :to="{ name: 'details', params: { productId: product.id } }"
        >
          <img :class="{ blur: isLoading }" :src="product.major_image.url" />  
          <p><span>esm: </span>{{ product.title }}</p>
          <p><span>gheymat: </span>{{ product.price }}</p>
        </router-link>
      </div>
    </div>
  </div> 
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
    let productList = ref(null);
    let currentPage = ref(null);
    let isLoading = ref(null);
    productList = computed(() => {
      return store.getters.getAllProducts;
    });
    currentPage = computed(() => {
      return store.getters.getCurrentPage;
    });
    isLoading = computed(() => {
      return store.getters.getIsLoading;
    });
    function changePage(numb) {
      store.commit("changeCurrentPage", self.currentPage + numb);
      store.dispatch("callApiForProducts", self.currentPage);
    }
    onMounted(() => {
      store.dispatch("callApiForProducts", self.currentPage);
    });
    return {
      productList,
      currentPage,
      isLoading,
      changePage,
    };
  },
};
</script>
<style>
.btnContainer {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px;
}
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
.btnContainer button {
  padding: 3px 10px;
}
.blur {
  filter: blur(5px);
}
</style>
