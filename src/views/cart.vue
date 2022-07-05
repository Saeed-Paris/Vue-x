<template>
  <div>
    <ul>
      <li v-for="(item, i) in selctedProdcuts" :key="i"></li>
    </ul>
  </div>
</template>
<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let selctedProdcuts = ref(null);
    selctedProdcuts = computed(() => {
        return store.getters.qew

    });

    return {
      selctedProdcuts,
    };
  },
};
</script>
<style></style>
