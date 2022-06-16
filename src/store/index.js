import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { id: 1, price: 1000, isAvailable: null, title: "Book", quantity: 5 },
      { id: 2, price: 2000, isAvailable: null, title: "Apple", quantity: 0 },
      { id: 3, price: 3000, isAvailable: null, title: "Banana", quantity: 3 },
    ],
  },
  getters: {
    availableProducts: (state) => {
      return state.products.filter((product) => product.isAvailable);
    },
  },
  mutations: {
    toggleAvailability(state, product) {
      const index = state.products.findIndex((v) => v.id === product.id);
      state.products[index].isAvailable = !state.products[index].isAvailable;
      // state.products[index].quantity+=
    },
    IsAvailableFunc(state, product) {
      state.products.forEach((p) => 
        p.quantity > 0 ? (p.isAvailable = true) : (p.isAvailable = false)
      );
    },
  },
  actions: {},
  modules: {},
});
