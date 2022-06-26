<template>
  <div  @click="qwe" :style="{ 'background-color': color }">
    <button>
      {{ colorName}}  
    </button>
  </div>
 
</template>
<script>
export default {
  props: {
    colorName: String,
    color:String
  },

};
</script>
<style scoped>
div {
    width: 60px;
    height: 80px;
    position: relative;
    border: 2px solid #dedede;
}
button{
   bottom: 0;
   right: 0;
   left: 0;
   border: none;
   position: absolute;
   width: 100%;
   background-color: #dedede;
}
</style>
