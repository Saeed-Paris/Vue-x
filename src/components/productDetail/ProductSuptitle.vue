<template>
  <div>
    <p>
      <span v-for="(item, index) in categories" :key="index">{{
        item.title+" "
      }}</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    categories: Array,
  },
  computed: {},
};
</script>
<style lang=""></style>
