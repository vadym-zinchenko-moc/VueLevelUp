<template>
  <div class="products">
    <div class="products__body">
      <h1 class="products__title">Products list</h1>
      <form @submit.prevent="setProduct">
        <label>Product name:</label>
        <input
          class="product__input-name"
          placeholder="Enter product name"
          v-model="newProduct.name"
        />
        <label>Important:</label>
        <input
          class="product__input-important"
          type="checkbox"
          v-model="newProduct.important"
        />
        <button class="product__btn-add" type="submit">+ Add</button>
      </form>
      <ul class="list-products">
        <li v-for="(item, i) in list" :key="item.id" class="list-products__item">
          <span> {{ i + 1 }}) </span>
          {{ item.name }}
          <div :class="['circle', { important: item.important }]"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [
        { id: 1, name: "Bread", important: false },
        { id: 2, name: "Butter", important: true },
        { id: 3, name: "Shrimps", important: false },
      ],
      newProduct: {
        name: "",
        important: false,
        id: new Date(),
      },
    };
  },
  methods: {
    setProduct() {
      this.list.push(this.newProduct);
      this.newProduct = { name: "", important: false, id: new Date() };
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.products {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
}

.products__body {
  width: 500px;
}
.products__title {
  margin-bottom: 20px;
}

.product__input-name {
  padding: 5px 10px;
  display: block;
  width: 100%;
  margin-bottom: 5px;
}

.product__btn-add {
  display: block;
  padding: 5px 10px;
  border: none;
  border-radius: 30px;
  background-color: red;
  color: white;
  width: 200px;
  margin: 10px 0;
  cursor: pointer;
}

.list-products {
  list-style: none;
}

.list-products__item {
  margin: 10px 0;
}

.circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
}

.important {
  background-color: red;
}
</style>
