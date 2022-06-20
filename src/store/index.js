import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    dufultVars: {
      isLoading: false,
      currentPage: 1,
    },
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
    getCurrentPage(state) {
      return state.dufultVars.currentPage;
    },
    getIsLoading(state) {
      return state.dufultVars.isLoading;
    },
  },
  // mutation commit
  // action dispatch
  mutations: {
    setProducts(state, newProducts) {
      // for API
      state.products = newProducts;
    },
    changeCurrentPage(state, page) {
      state.dufultVars.currentPage = page;
    },
    changeIsLoading(state, isLoading) {
      state.dufultVars.isLoading = isLoading;
    },
    // toggleAvailability(state, product) {
    //   const index = state.products.findIndex((v) => v.id === product.id);
    //   state.products[index].isAvailable = !state.products[index].isAvailable;
    //   // state.products[index].quantity+=
    // },
    // IsAvailableFunc(state) {
    //   state.products.forEach((p) =>
    //     p.quantity > 0 ? (p.isAvailable = true) : (p.isAvailable = false)
    //   );
    // },
    // addProductQuantity(state, product, numb) {
    // state.products.product.quantity += numb;
    // },
    // SET_Products(state, products) {
    //   state.products = products;
    // },

    // latestProducts(state) {
    //   state.products.sort((a, b) => {
    //     return b.id - a.id;
    //   });
    // },
    // mostExpProducts(state) {
    //   state.products.sort((a, b) => {
    //     return b.price - a.price;
    //   });
    // },
    // bestProdocts(state) {
    //   state.products.sort((a, b) => {
    //     return b.rating.rate - a.rating.rate;
    //   });
    // },
    // viewedProducts(state) {
    //   state.products.sort((a, b) => {
    //     return b.views_count - a.views_count;
    //   });
    // },
  },
  actions: {
    async callApiForProducts({ commit }, page) {
      commit("changeIsLoading", true);
      const { data } = await axios.get(
        `https://api.elinorboutique.com/v1/front/products?page=${page}${""}`
      );
      commit("setProducts", data.data.products.data);
      commit("changeIsLoading", false);
      
    },
    // showLatestProductsAction({ commit }) {
    //   commit("latestProducts");
    // },
    // mostExpProductsAction({ commit }) {
    //   commit("mostExpProducts");
    // },
  },

  modules: {},
});
// MG va MS Computed
// MM methodes
