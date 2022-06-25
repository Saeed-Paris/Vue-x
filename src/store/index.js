import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    cartQuant: 3,
    productQuant: 0,
    currentColor: null,
    products: [],
    productDetail: [],
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
    getProductDetail(state) {
      return state.productDetail;
    },
    getCartQuant(state) {
      return state.cartQuant;
    },
    getProductQuant(state) {
      return state.productQuant;
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
    changeIsLoading(state) {
      state.dufultVars.isLoading = !state.dufultVars.isLoading;
    },
    changeProductDetail(state, productDetail) {
      state.productDetail = productDetail;
    },
    setCartQuant(state, numb) {
      state.cartQuant += numb;
    },
    setCurrentcolorQuant(state, numb) {
      state.productQuant = state.productDetail.varieties[numb].quantity;
      state.currentColor = numb;
    },
    AddProcutToCart(state) {
      state.productDetail.varieties[state.currentColor].quantity--;
      state.productQuant--;
      state.cartQuant++;
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
      commit("changeIsLoading");
      const { data } = await axios.get(
        `https://api.elinorboutique.com/v1/front/products?page=${page}`
      );
      commit("setProducts", data.data.products.data);
      commit("changeIsLoading");
    },
    async callProductDetailFromApi({ commit }, id) {
      const { data } = await axios.get(
        `https://api.elinorboutique.com/v1/front/products/${id}`
      );
      commit("changeProductDetail", data.data.product);
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
