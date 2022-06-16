import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { id: 1, price: 1000, isAvailable: true, title: "Book" },
      { id: 2, price: 2000, isAvailable: false, title: "Apple" },
      { id: 3, price: 3000, isAvailable: true, title: "Banana" },
    ],
  },
  getters: {
    availableBooks: (state) => {
      return state.products.filter((product) => product.isAvailable);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
