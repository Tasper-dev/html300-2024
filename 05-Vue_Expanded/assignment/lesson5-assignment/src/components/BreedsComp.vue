<template>
  <section class="container my-3">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <!-- // Image Card Component used with a V-for loop // -->
      <ImageCardComp
        v-bind:key="ImageCardComp.index"
        v-for="ImageCardComp in breedsList"
        :imageSrc="ImageCardComp.imgSrc"
        :alt="ImageCardComp.altText"
        :title="ImageCardComp.title"
        :cardText="ImageCardComp.cardText"
        :url="ImageCardComp.url"
        :linkText="ImageCardComp.linkText"
      ></ImageCardComp>
    </div>
  </section>
</template>
<script setup>
import ImageCardComp from "./Image-CardComp.vue";

import { ref } from "vue";
const breedsList = ref([
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
    title: "Sapphire Jewel",
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
    title: "Seramas",
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
    title: "Wheaten Olive Egger",
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
]);
</script>
<style></style>
