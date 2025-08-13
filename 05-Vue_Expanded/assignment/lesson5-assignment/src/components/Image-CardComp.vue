<template>
  <div class="image-card">
    <img class="card-img-top" :src="props.imageSrc" :alt="props.alt" />
    <div class="card-body">
      <h5 class="card-title">{{ props.title }}</h5>
      <p class="card-text">{{ props.cardText }}</p>
      <a :href="props.url" class="btn btn-success">{{ props.linkText }}</a>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "image",
  },
  title: String,
  cardText: String,
  url: String,
  linkText: String,
});
</script>
<style scoped></style>
