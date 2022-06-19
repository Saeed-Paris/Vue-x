<template>
  <Header />
  <!--<SearchBox /> -->
  <TopProducts />
</template>
<script>
import TopProducts from "@/components/home/TopProducts";
import Header from "@/components/home/Header";

export default {
  components: {
    TopProducts,Header
  },
};
</script>
