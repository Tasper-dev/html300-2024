<template>
  <header class="header container-fluid bg-success p-3">
    <h1 class="display-1">NW Chickens</h1>
    <h2>Breeds A-Z</h2>
  </header>
  <!-- //* Grid Content: Responsive Images*// -->
  <section class="container my-3">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        v-for="(breedsListObj, index) in breedsList"
        :key="index"
        class="col"
      >
        <div class="card">
          <img
            :src="breedsListObj.imgSrc"
            class="card-img-top"
            :alt="breedsListObj.altText"
          />
          <div class="card-body">
            <h5 class="card-title">{{ breedsListObj.title }}</h5>
            <p class="card-text">{{ breedsListObj.cardText }}</p>
            <a :href="breedsListObj.url" class="btn btn-success">{{
              breedsListObj.linkText
            }}</a>
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
