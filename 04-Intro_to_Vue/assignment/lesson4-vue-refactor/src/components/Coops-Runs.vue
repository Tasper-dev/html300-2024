<template>
  <header class="header container-fluid bg-success p-3">
    <h1 class="display-1">NW Chickens</h1>
    <h2>Coops & Runs</h2>
  </header>
  <div class="container my-5">
    <div
      v-for="(coopsArticlesObj, index) in coopsArticles"
      :key="index"
      :class="coopsArticlesObj.class"
    >
      <article class="col-xl-6 col-md-8 col-sm-10 col-12 bg-body-tertiary">
        <h3>{{ coopsArticlesObj.title }}</h3>
        <p>{{ coopsArticlesObj.text }}</p>
      </article>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const coopsArticles = ref([
  {
    class: "row mb-4 justify-content-start",
    title: "What to Know",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab incidunt, officia adipisci aliquam quos a est totam voluptate
              et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
              Maiores.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores amet itaque deserunt, ad voluptatem cupiditate quam
              suscipit. Reiciendis at expedita porro, vero delectus odio nobis
              sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo sit velit quasi qui aspernatur vero,
              reprehenderit, magni accusantium laudantium placeat quos, animi
              facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda ipsum necessitatibus neque doloremque autem vel corporis
              repudiandae. Doloremque ratione, culpa asperiores modi corrupti
              eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
  {
    class: "row mb-4 justify-content-center",
    title: "Size & Space",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab incidunt, officia adipisci aliquam quos a est totam voluptate
              et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
              Maiores.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores amet itaque deserunt, ad voluptatem cupiditate quam
              suscipit. Reiciendis at expedita porro, vero delectus odio nobis
              sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo sit velit quasi qui aspernatur vero,
              reprehenderit, magni accusantium laudantium placeat quos, animi
              facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda ipsum necessitatibus neque doloremque autem vel corporis
              repudiandae. Doloremque ratione, culpa asperiores modi corrupti
              eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
  {
    class: "row mb-4 justify-content-end",
    title: "Protection & Security",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab incidunt, officia adipisci aliquam quos a est totam voluptate
              et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
              Maiores.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores amet itaque deserunt, ad voluptatem cupiditate quam
              suscipit. Reiciendis at expedita porro, vero delectus odio nobis
              sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo sit velit quasi qui aspernatur vero,
              reprehenderit, magni accusantium laudantium placeat quos, animi
              facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda ipsum necessitatibus neque doloremque autem vel corporis
              repudiandae. Doloremque ratione, culpa asperiores modi corrupti
              eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
]);
</script>
<style></style>
