<template>
  <HeaderComp>
    <template #subheader>
      <h2>Coops & Runs</h2>
    </template>
  </HeaderComp>

  <div class="container my-5 bg-body tertiary">
    <!-- // V-for Loop over each Article // -->
    <div
      v-for="(coopsArticlesObj, index) in coopsArticles"
      :key="index"
      class="row mb-4"
      :class="coopsArticlesObj.customClass"
    >
      <!-- //Add Article Component // -->
      <div class="col-xl-6 col-md-8 col-sm-10 col-12">
        <ArticlesComp
          :title="coopsArticlesObj.title"
          :text="coopsArticlesObj.text"
        ></ArticlesComp>
      </div>
    </div>
  </div>
</template>
<script setup>
import HeaderComp from "./HeaderComp.vue";
import ArticlesComp from "./ArticlesComp.vue";
import { ref } from "vue";

const coopsArticles = ref([
  {
    customClass: "justify-content-start",
    title: "What to Know",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab incidunt, officia adipisci aliquam quos a est totam voluptate
              et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
              Maiores.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores amet itaque deserunt, ad voluptatem cupiditate quam
              suscipit. Reiciendis at expedita porro, vero delectus odio nobis
              sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.\n Explicabo sit velit quasi qui aspernatur vero,
              reprehenderit, magni accusantium laudantium placeat quos, animi
              facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda ipsum necessitatibus neque doloremque autem vel corporis
              repudiandae. Doloremque ratione, culpa asperiores modi corrupti
              eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
  {
    customClass: "justify-content-center",
    title: "Size & Space",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab incidunt, officia adipisci aliquam quos a est totam voluptate
              et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
              Maiores.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores amet itaque deserunt, ad voluptatem cupiditate quam
              suscipit. Reiciendis at expedita porro, vero delectus odio nobis
              sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.\n Explicabo sit velit quasi qui aspernatur vero,
              reprehenderit, magni accusantium laudantium placeat quos, animi
              facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda ipsum necessitatibus neque doloremque autem vel corporis
              repudiandae. Doloremque ratione, culpa asperiores modi corrupti
              eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
  {
    customClass: "justify-content-end",
    title: "Protection & Security",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ab incidunt, officia adipisci aliquam quos a est totam voluptate
              et voluptas, sunt soluta ad voluptates deleniti atque nemo autem.
              Maiores.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              maiores amet itaque deserunt, ad voluptatem cupiditate quam
              suscipit. Reiciendis at expedita porro, vero delectus odio nobis
              sapiente corrupti a. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.\n Explicabo sit velit quasi qui aspernatur vero,
              reprehenderit, magni accusantium laudantium placeat quos, animi
              facere nobis ullam amet earum similique consectetur sed?\n Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda ipsum necessitatibus neque doloremque autem vel corporis
              repudiandae. Doloremque ratione, culpa asperiores modi corrupti
              eligendi exercitationem. Temporibus at nostrum laborum dolores.`,
  },
]);
</script>
<style></style>
