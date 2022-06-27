<template>
  <div class="btnGorup">
    <div class="PDCB"> 
      <ProductColorBtn
        v-for="(item, index) in productColors"
        :key="index"
        :colorName="
          varieties[index * (this.varieties.length / this.productColors.length)]
            .color.name
        "
        :color="item"
        :class="{
          selectedClass: colorIndex == index,
        }"
        @click="changeColor(index)"
      />
    </div>
    <div class="PDSB">
      <ProductSizeBtn
        v-for="(itm, index) in productSizes"
        :key="index"
        :size="itm"
        :class="{
          selectedClass: sizeIndex == index,
          notAvail:
            !varieties[
              index +
                colorIndex * (this.varieties.length / this.productSizes.length)
            ].quantity,
        }"
        @click="showQuant(index)"
      />
    </div>
  </div>
  <p>Tedad : {{ ProductQuant }}</p>
</template>
<script>
import ProductColorBtn from "@/components/productDetail/ProductColorBtn.vue";
import ProductSizeBtn from "@/components/productDetail/ProductSizeBtn.vue";
export default {
  props: {
    varieties: Array,
  },
  data() {
    return {
      sizeIndex: 0,
      colorIndex: 0,
    };
  },

  methods: {
    changeColor(indx) {
      this.colorIndex = indx;

      this.$store.commit(
        "setCurrentcolorQuant",
        this.colorIndex * (this.varieties.length / this.productColors.length) +
          this.sizeIndex
      );
    },
    showQuant(index) {
      this.sizeIndex = index;
      this.$store.commit(
        "setCurrentcolorQuant",
        this.colorIndex * (this.varieties.length / this.productColors.length) +
          this.sizeIndex
      );
    },
  },
  components: {
    ProductColorBtn,
    ProductSizeBtn,
  },
  // console.log(this.varieties[0].attributes[0])
  mounted() {
    this.$store.commit("resetProductColorsSizes");
    this.$store.commit("setCurrentcolorQuant", 0);
    // console.log(this.varieties[0].color)
    // if(this.varieties[0].color != null){
    //   console.log("salam")
    // }
    if (this.varieties[0].attributes[0]) {
      const uniqueSizes = [
        ...new Set(this.varieties.map((obj) => obj.attributes[0].pivot.value)),
      ];
      this.$store.commit("setProductAllSizes", uniqueSizes);
    }
    if (this.varieties[0].color != null) {
      console.log("salam");
      const uniqueColors = [
        ...new Set(this.varieties.map((obj) => obj.color.code)),
      ];
      this.$store.commit("setProductAllColors", uniqueColors);
    }
  },
  computed: {
    ProductQuant() {
      if (this.$store.getters.getProductQuant > 0) {
        return this.$store.getters.getProductQuant;
      }
      return "نا موجود";
    },
    productSizes() {
      return this.$store.getters.getProductAllSizes;
    },
    productColors() {
      return this.$store.getters.getProductAllColors;
    },
  },
};
</script>
<style scoped>
.btnGorup {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 50px;
}
.selectedClass {
  border: 4px solid red;
}
.PDSB {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.notAvail {
  pointer-events: none;
  opacity: 0.3;
}
.PDSB button {
  width: 30px;
  height: 30px;
}
.PDCB {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
