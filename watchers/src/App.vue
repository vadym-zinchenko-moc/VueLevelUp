<template>
  <div class="products">
    <div class="products-add-form">
      <input class="products-add-form__input" v-model.lazy="newProduct" />
      <button class="products-add-form__button" @click="addNewProduct">
        Add product
      </button>
    </div>
    <ul>
      <li v-for="product of products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    newProduct: "",
    products: [
      { id: 1, name: "Bread" },
      { id: 2, name: "Butter" },
      { id: 3, name: "Candies" },
    ],
  }),
  methods: {
    addNewProduct() {
      this.products.push({ id: this.products.length + 1, name: this.newProduct });
      this.newProduct = "";
    },
  },
  watch: {
    products: {
      handler() {
        console.log("List product changed");
      },
      deep: true
      
    },
    newProduct() {
      console.log('Input value changed');
    },
  },
};
</script>

