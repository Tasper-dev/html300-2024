<template>
  <section class="container my-3">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div>
        <ImageCardComp
          imageSrc="images/chicken-thumbnail-350.jpg"
          alt="chicken"
          title="Chicken Breed"
          cardText="Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Dicta possimus, cumque consectetur eos ad
        quis nostrum deleniti asperiores, pariatur dolorum reiciendis corporis
        nobis architecto, quaerat molestias iste vero sit ut."
          url="#"
          linkText="Source Locally"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import ImageCardComp from "./Image-CardComp.vue";
</script>
<style></style>
