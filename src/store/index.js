import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { id: 1, price: 1000, isAvailable: true, title: "Orange", quantity: 5 },
      { id: 2, price: 2000, isAvailable: false, title: "Apple", quantity: 0 },
      { id: 3, price: 3000, isAvailable: true, title: "Banana", quantity: 3 },
    ],
  },
  getters: {
    getAllProducts: (state) => {
      return state.products;
    },
    getAvailableProducts: (state) => {
      return state.products.filter((p) => p.isAvailable);
    },
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
    
  },
  actions: {},
  modules: {},
});
