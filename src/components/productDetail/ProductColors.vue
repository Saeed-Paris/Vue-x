<template>
  <div class="btnGorup">
    <ProductColorBtn
      v-for="(item, index) in varieties"
      :key="index"
      :color="item"
      :class="{ selectedClass: activeBtn == index }"
      @click="changeColor(index)"
    />
  </div>
  <p>Tedad : {{ ProductQuant }}</p>
</template>
<script>
import ProductColorBtn from "@/components/productDetail/ProductColorBtn.vue";
export default {
  props: {
    varieties: Array,
  },
  data() {
    return {
      activeBtn: 0,
    };
  },
  computed: {
    ProductQuant() {
      if (this.$store.getters.getProductQuant>0) {
        return this.$store.getters.getProductQuant;
      }
      return "نا موجود";
    },
  },
  methods: {
    changeColor(indx) {
      this.activeBtn = indx;
      this.$store.commit("setCurrentcolorQuant", indx);
    },
  },
  components: {
    ProductColorBtn,
  },
  beforeMount() {
    this.$store.commit("setCurrentcolorQuant", 0);
  },
};
</script>
<style scoped>
.btnGorup {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.selectedClass {
  border: 1px solid red;
}
</style>
