<template>
  <div class="btnGorup">
    <div class="PDCB">
      <ProductColorBtn
        v-for="(item, index) in productColors"
        :key="index"
         :colorName="
          varieties[index * (varieties.length / productColors.length)]
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
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
let self;
export default {
  created() {
    self = this;
  },
  props: {
    varieties: Array,
  },
  setup() {
    const store = useStore();
    let sizeIndex = ref(0);
    let colorIndex = ref(0);
    let ProductQuant = ref(0);
    let productColors = ref(null);
    let productSizes = ref(null);
    ProductQuant = computed(() => {
      if (store.getters.getProductQuant > 0) {
        return store.getters.getProductQuant;
      }
      return "نا موجود";
    });
    productColors = computed(() => {
      return store.getters.getProductAllColors;
    });
    productSizes = computed(() => {
      return store.getters.getProductAllSizes;
    });

    function changeColor(indx) {
      self.colorIndex = indx;

      store.commit(
        "setCurrentcolorQuant",
        self.colorIndex * (self.varieties.length / self.productColors.length) +
          self.sizeIndex
      );
    }
    function showQuant(index) {
      self.sizeIndex = index;
      if (!self.productColors) {
        return store.commit(
          "setCurrentcolorQuant",
          self.varieties.length / self.productSizes.length + self.sizeIndex -1
        );
      }
      store.commit(
        "setCurrentcolorQuant",
        self.colorIndex * (self.varieties.length / self.productColors.length) +
          self.sizeIndex
      );
    }
    onMounted(() => {
      store.commit("resetProductColorsSizes");
      store.commit("setCurrentcolorQuant", 0);
      console.log(self.productSizes);
      console.log(self.productColors);
      if (self.varieties[0].attributes[0]) {
        const uniqueSizes = [
          ...new Set(
            self.varieties.map((obj) => obj.attributes[0].pivot.value)
          ),
        ];
        store.commit("setProductAllSizes", uniqueSizes);
      }
      if (self.varieties[0].color != null) {
        const uniqueColors = [
          ...new Set(self.varieties.map((obj) => obj.color.code)),
        ];
        store.commit("setProductAllColors", uniqueColors);
      }

    });
    return {
      colorIndex,
      sizeIndex,
      changeColor,
      showQuant,
      ProductQuant,
      productSizes,
      productColors,
    };
  },

  components: {
    ProductColorBtn,
    ProductSizeBtn,
  },
  // console.log(this.varieties[0].attributes[0])
  mounted() {
    // console.log(this.varieties[0].color)
    // if(this.varieties[0].color != null){
    //   console.log("salam")
    // }
  },
  computed: {},
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
