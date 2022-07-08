<template>
  <div>
    <ul class="ulCart">
      <li v-for="(item, i) in selctedProdcuts" :key="i">
        <img :src="item.image" alt="" />
        <hr /> 
        <div class="liItems">
          <span>name:{{ item.name }}</span>
          <span>color:{{ item.color }}</span>
          <span>price:{{ item.price }}</span>
          <span v-if="item.size"> size:{{ item.size }}</span>
        </div>
      </li>
    </ul>
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
    let selctedProdcuts = ref(null);
    selctedProdcuts = computed(() => {
      // if (self.$cookies.isKey("Cart")) {
      //   console.log("this is a ", self.$cookies.get("Cart"));
      //   let matn = self.$cookies.get("Cart");
      // let qwe=  JSON.parse(matn);
      //   console.log(qwe);
      //   // return matn;
      // }
      return store.getters.getCartQuant;
    });

    return {
      selctedProdcuts,
    };
  },
};
</script>
<style>
.ulCart li:nth-child(odd) {
  background-color: #eee;
}
.ulCart li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 30px;
}
.ulCart img {
  width: 100px;
  height: 100px;
}
.liItems {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
