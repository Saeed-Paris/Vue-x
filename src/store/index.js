import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
    getAllCategories(state) {
      const res = Object.values(
        state.products.reduce((a, { category }) => {
          a[category] = { category };
          return a;
        }, {})
      );
      return res
    },
    //   const res = Object.values(
    //     state.products.reduce((a, { category }) => {
    //       a[category] = { category };
    //       return a;
    //     }, {})
    //   );

    //   return res;
    // state.products.forEach(function (e) {
    //   if (!state.products.includes(e.category)) {
    //    state.products.push(e.category)
    //   }
    // });

    // getAvailableProducts: (state) => {
    //   return state.products.filter((p) => p.isAvailable);
    // },
  },
  // mutation commit
  // action dispatch
  mutations: {
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

    setProducts(state, newProducts) {
      // for API
      state.products = newProducts;
    },
    latestProducts(state) {
      state.products.sort((a, b) => {
        return b.id - a.id;
      });
    },
    mostExpProducts(state) {
      state.products.sort((a, b) => {
        return b.price - a.price;
      });
    },
    bestProdocts(state) {
      state.products.sort((a, b) => {
        return b.rating.rate - a.rating.rate;
      });
    },
  },
  actions: {
    async callApiForProducts({ commit }) {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      commit("setProducts", data);
    },
    showLatestProductsAction({ commit }) {
      commit("latestProducts");
    },
    mostExpProductsAction({ commit }) {
      commit("mostExpProducts");
    },
  },

  modules: {},
});
