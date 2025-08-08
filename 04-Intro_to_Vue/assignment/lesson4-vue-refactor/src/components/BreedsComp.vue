<template>
  <!-- //* Grid Content: Responsive Images*// -->
  <section class="container my-3">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        v-for="(breedsListObj, index) in breedsList"
        :key="index"
        class="col"
      >
        <div class="card">
          <img :src="breedsListObj.imgSrc" :alt="breedsListObj.altText" />
          <div class="card-body">
            <h5>{{ breedsListObj.title }}</h5>
            <p>{{ breedsListObj.cardText }}</p>
            <a :href="breedsListObj.url">{{ breedsListObj.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const breedsList = ref([
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Chicken Breed",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta possimus, cumque consectetur eos ad quis nostrum
                  deleniti asperiores, pariatur dolorum reiciendis corporis
                  nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Rhode Island Red",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta possimus, cumque consectetur eos ad quis nostrum
                  deleniti asperiores, pariatur dolorum reiciendis corporis
                  nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "White Leghorn",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta possimus, cumque consectetur eos ad quis nostrum
                  deleniti asperiores, pariatur dolorum reiciendis corporis
                  nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Golden",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta possimus, cumque consectetur eos ad quis nostrum
                  deleniti asperiores, pariatur dolorum reiciendis corporis
                  nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Chicken Breed",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta possimus, cumque consectetur eos ad quis nostrum
                  deleniti asperiores, pariatur dolorum reiciendis corporis
                  nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    title: "Chicken Breed",
    cardText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta possimus, cumque consectetur eos ad quis nostrum
                  deleniti asperiores, pariatur dolorum reiciendis corporis
                  nobis architecto, quaerat molestias iste vero sit ut.`,
    url: "#",
    linkText: "Source Locally",
  },
]);
</script>
<style></style>
