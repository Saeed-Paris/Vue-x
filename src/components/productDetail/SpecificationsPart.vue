<template>
  <section>
    <div class="specif" v-for="(item, index) in specifications" :key="index">
      <span>{{ item.pivot.value }}</span>
      <span>{{ item.label }}</span>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    specifications: Object,
  },
};
</script>
<style>
.specif {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 20px;
  font-size: 20px;
}
.specif div {
  text-align: center;
}
</style>
