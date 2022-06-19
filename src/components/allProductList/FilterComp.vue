<template>
  <div class="filterContainer">
    <input type="text" placeholder="عنوان" />
    <select name="categ">
      <option
        v-for="(item, index) in call4ProductsGetters"
        :key="index"
        :value="index"
      >
        {{ item }}
      </option>
    </select>
    <f7-block-title class="display-flex justify-content-space-between"
      >Price Filter
      <span>${{ priceMin }} - ${{ priceMax }}</span></f7-block-title
    >
    <f7-list simple-list>
      <f7-list-item>
        <f7-list-item-cell
          class="flex-shrink-0"
          :style="{ width: theme.ios ? '28px' : theme.md ? '24px' : '18px' }"
        >
          <f7-icon
            ios="f7:money_dollar_circle"
            aurora="f7:money_dollar_circle"
            md="material:attach_money"
          ></f7-icon>
        </f7-list-item-cell>
        <f7-list-item-cell class="flex-shrink-3">
          <f7-range
            :min="0"
            :max="500"
            :step="1"
            :value="[priceMin, priceMax]"
            :label="true"
            :dual="true"
            color="green"
            @range:change="onPriceChange"
          />
        </f7-list-item-cell>
        <f7-list-item-cell
          class="flex-shrink-0"
          :style="{ width: theme.ios ? '28px' : theme.md ? '24px' : '18px' }"
        >
          <f7-icon
            ios="f7:money_dollar_circle_fill"
            aurora="f7:money_dollar_circle_fill"
            md="material:monetization_on"
          ></f7-icon>
        </f7-list-item-cell>
      </f7-list-item>
    </f7-list>
  </div>
</template>
<script>
export default {
  computed: {
    call4ProductsGetters() {
      return this.$store.getters.getAllCategories;
    },
  },
  methods: {
    callAllProductsAction() {
      this.$store.dispatch("callApiForProducts");
    },
  },
  beforeMount() {
    this.callAllProductsAction();
  },
};
</script>
<style>
.filterContainer {
  width: 80%;
  grid-column: 8/-1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
