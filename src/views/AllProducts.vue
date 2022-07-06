<template>
  {{ currentPage }}
  <section class="APList">
    <div class="productListContainer">
      <div>
        <div class="btnList">
          <button @click="changeFilterSort(`newest`)">جدید ترین ها</button>
          <button @click="changeFilterSort(`high_to_low`)">گران ترین ها</button>
          <button @click="changeFilterSort(`low_to_high`)">
            ارزان ترین ها
          </button>
          <button @click="changeFilterSort(`most_visited`)">
            پر بازدید ترین
          </button>
        </div>
        <div class="btnContainer">
          <button
            v-for="index in 7"
            :key="index"
            :disabled="index == 4"
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
            <!-- <img :src="product.major_image.url" /> -->
            <p><span>esm: </span>{{ product.title }}</p>
            <p><span>gheymat: </span>{{ product.price }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="filterContainer">
      <div>
        <ul>
          <li
            @click="listFunc(i)"
            v-for="(item, i) in categories"
            :key="i"
            :class="{ activeZirlist: zirListItemsflag }"
          >
            {{ item.title }}
            <ul v-show="zirListItemsflag == i">
              <li @click="callApi(ind)" v-for="(zirItem, ind) in item.children" :key="ind">
                {{ zirItem.title }}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <input type="text" v-model="title" />

      <div>
        <p>Only Available</p>
        <label class="switch">
          <input @click="toggle()" type="checkbox" />
          <span class="slider round"></span>
        </label>
        <br />
        <br />
        <button @click="filterAll()">فیلتر</button>
      </div>
    </div>
    <Loader v-if="loader" />
  </section>
</template>
<script>
import Loader from "../components/shared/loader.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
let self;
export default {
  components: {
    Loader,
  },
  setup() {
    const store = useStore();
    let title = ref("");
    let productList = ref(null);
    let zirListItemsflag = ref(null);
    let toggleValue = ref(false);
    let loader = ref(null);
    let currentPage = ref(null);
    let categories = ref(null);

    productList = computed(() => {
      return store.getters.getAllProducts;
    });

    currentPage = computed(() => {
      return store.getters.getCurrentPage;
    });
    loader = computed(() => {
      return store.getters.getLoader;
    });
    categories = computed(() => {
      return store.getters.getCategories;
    });

    function changePage(numb) {
      store.commit("toggleLoaderVisibilty", true);
      store.commit("changeCurrentPage", currentPage.value + numb);
      store.dispatch("callApiForProducts");
    }
    function filterAll() {
      store.commit("toggleLoaderVisibilty", true);
      store.commit("setTitle", title);
      store.commit("setAvailability", toggleValue.value ? 1 : 0);
      store.commit("changeCurrentPage", 1);
      store.dispatch("callApiForProducts");
    }
    function toggle() {
      toggleValue.value = !toggleValue.value;
    }
    function changeFilterSort(Type) {
      store.commit("toggleLoaderVisibilty", true);
      store.commit("setSortType", Type);
      store.commit("changeCurrentPage", 1);
      store.dispatch("callApiForProducts");
    }
    function callApi(numb){
      store.commit
    }
    function listFunc(index) {
      if (zirListItemsflag.value != index) {
        return (zirListItemsflag.value = index);
      }
      zirListItemsflag.value = null;
    }
    watch(productList, (newVal) => {
      if (newVal) {
        store.commit("toggleLoaderVisibilty", false);
      }
    });
    onMounted(() => {
      store.commit("setFlag", false);
      store.commit("setProductAllSizes", null);
      store.commit("setProductAllColors", null);
      store.commit("resetProductDetail");
      store.dispatch("callApiForProducts", 1);
      store.dispatch("callHomeDataFromApi");
    });
    return {
      loader,
      productList,
      currentPage,
      title,
      changePage,
      changeFilterSort,
      filterAll,
      toggleValue,
      toggle,
      categories,
      listFunc,
      zirListItemsflag,callApi
    };
  },
};
</script>
<style>
.APList {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
}
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
.filterContainer {
  width: 80%;
  grid-column: 8/-1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.filterContainer li {
  list-style-type: none;
  padding: 10px 0 ;
}
.filterContainer li li{
  color: red;
  position: relative;
  right: 50px;

}
/* copy */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
