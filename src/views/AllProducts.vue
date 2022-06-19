<template>
  <section class="APList">
    <ProductList />
    <FilterComp />
  </section>
</template>
<script>
import ProductList from "@/components/allProductList/ProductList";
import FilterComp from "@/components/allProductList/FilterComp";
export default {
  components: {
    FilterComp,
    ProductList,
  },
 
};
</script>
<style>
.APList {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
}
</style>
