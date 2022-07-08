import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    cartQuant: [],
    productQuant: 0,
    currentColor: null,
    products: null,
    productDetail: null,
    productAllSizes: null,
    productAllColors: null,
    categories: null,
    defultVars: {
      currentPage: 1,
      loader: true,
      flag: false,
    },
    // object{
    title: "",
    sortType: null,
    minPrice: 0,
    maxPrice: 0,
    available: false,
    // }
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getFlag(state) {
      return state.defultVars.flag;
    },
    getTitle(state) {
      return state.title;
    },
    getSortType(state) {
      return state.sortType;
    },
    getLoader(state) {
      return state.defultVars.loader;
    },
    getAllProducts(state) {
      return state.products;
    },
    getCurrentPage(state) {
      return state.defultVars.currentPage;
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
    getProductAllColors(state) {
      return state.productAllColors;
    },
    getProductAllSizes(state) {
      return state.productAllSizes;
    },
    getCurrentColor(state) {
      return state.currentColor;
    },
    getCurrentSize(state) {
      return state.currents;
    },
  },
  // mutation commit
  // action dispatch
  mutations: {
    setCategory(state, data) {
      state.categories = data;
    },
    resetProductDetail(state) {
      state.productDetail = null;
    },
    setAvailability(state, bool) {
      state.available = bool;
    },
    setTitle(state, val) {
      state.title = val;
    },
    setSortType(state, val) {
      state.sortType = val;
    },
    toggleLoaderVisibilty(state, bool) {
      state.defultVars.loader = bool;
    },
    setProducts(state, newProducts) {
      // for API
      state.products = newProducts;
    },
    changeCurrentPage(state, page) {
      state.defultVars.currentPage = page;
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
    AddProcutToCart(state, data) {
      state.productDetail.varieties[state.currentColor].quantity--;
      state.productQuant--;
      state.cartQuant[state.cartQuant.length] = data;
    },
    setProductAllColors(state, arr) {
      state.productAllColors = arr;
    },
    setProductAllSizes(state, arr) {
      state.productAllSizes = arr;
    },
    resetProductColorsSizes(state) {
      state.productAllSizes = null;
      state.productAllColors = null;
    },
    setFlag(state, bool) {
      state.defultVars.flag = bool;
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
    async callApiForProducts({ commit, state }) {
      const { data } = await axios.get(
        `https://api.atlasmode.ir/v1/front/products?${
          state.sortType ? "sort=" + state.sortType : ""
        }${state.title ? "&title=" + state.title : ""}${
          state.minPrice != 0 ? "&min_price=" + state.minPrice : ""
        }${state.maxPrice ? "&max_price=" + state.maxPrice : ""}${
          state.available ? "&available=" + state.available : ""
        }${
          state.defultVars.currentPage
            ? "&page=" + state.defultVars.currentPage
            : ""
        } 
`
        // (state.minPrice) ? ("&min_price=" + state.minPrice) : ((state.maxPrice) ? ("&max_price=" + state.maxPrice) : (?))
        // title: "",
        // sortType: null,
        // minPrice: 0,
        // maxPrice: 0,
        // available: 0,
      );
      commit("setProducts", data.data.products.data);
    },
    async callProductDetailFromApi({ commit }, id) {
      const { data } = await axios.get(
        `https://api.elinorboutique.com/v1/front/products/${id}`
      );
      commit("changeProductDetail", data.data.product);
      commit("setFlag", true);
    },
    async callHomeDataFromApi({ commit }) {
      const { data } = await axios.get(
        `https://api.atlasmode.ir/v1/front/home`
      );
      commit("setCategory", data.data.response.categories);
      commit("setFlag", true);
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
