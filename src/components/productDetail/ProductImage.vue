<template>
  <div>
    <img :src="imageUrl" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: String,
  },
};
</script>
<style scoped>
img{
  width: 300px;
  height: auto;
}
</style>