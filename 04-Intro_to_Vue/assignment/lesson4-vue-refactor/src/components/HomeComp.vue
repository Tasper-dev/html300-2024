<template>
  <header class="header container-fluid bg-success p-3">
    <h1 class="display-1">NW Chickens</h1>
    <h2>Girls gone wild!</h2>
  </header>

  <div>
    <!-- //*Carousel*// -->
    <div id="homeCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="images/chicken-carousel-one.jpg"
            class="d-block w-100"
            alt="chickens"
          />
        </div>
        <div class="carousel-item">
          <img
            src="images/chicken-carousel-two.jpg"
            class="d-block w-100"
            alt="chickens"
          />
        </div>
        <div class="carousel-item">
          <img
            src="images/chicken-carousel-three.jpg"
            class="d-block w-100"
            alt="chickens"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="container-fluid my-3">
    <div class="row">
      <article
        class="col-xl-10 col-lg-8 col-sm-6 col-12 bg-body-tertiary my-3 p-3"
      >
        <h2>Intro Article</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta est
          cupiditate veritatis molestiae deleniti, voluptate perferendis
          perspiciatis eos consequatur nulla, in exercitationem reprehenderit?
          Velit sit doloribus delectus quasi quod eius?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sapiente quia molestias architecto
          vero quo? Possimus fugit accusantium similique, sapiente obcaecati
          laboriosam quo? Numquam ex accusamus officia? Vero distinctio nulla
          beatae.
        </p>

        <!-- //* V-for Loop for List *// -->
        <h4>Steps to getting your own brood:</h4>
        <ol>
          <li v-for="(stepObj, index) in stepsGetChickens" :key="index">
            {{ stepObj.step }}
            <a
              :href="stepObj.url"
              class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              {{ stepObj.linkText }}</a
            >
          </li>
        </ol>
        <img
          src="images/chickens-grazing-700.jpg"
          class="img-fluid py-5"
          alt="chickens grazing"
          width="700"
          height="467"
        />
      </article>

      <!-- //* V-for Loop for Image cards *//-->
      <aside class="my-3 col-xl-2 col-lg-4 col-sm-6 col-12">
        <h3>New Breeds</h3>
        <div
          v-for="(newBreedsObj, index) in newBreeds"
          :key="index"
          class="card"
        >
          <img :src="newBreedsObj.imgSrc" :alt="newBreedsObj.altText" />
          <div class="card-body">
            <p class="card-text">{{ newBreedsObj.cardText }}</p>
            <a :href="newBreedsObj.url">{{ newBreedsObj.linkText }}</a>
          </div>
        </div>
      </aside>
    </div>

    <!-- //* Tooltip in this article *// -->
    <article class="bg-body-tertiary p-3">
      <h2>Latest Poultry News</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error
        exercitationem amet, reiciendis delectus illum at ducimus reprehenderit
        qui facilis iusto consectetur, voluptas natus aut vel deserunt est. Est,
        natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        eos! Optio aliquid veniam unde, reprehenderit vero maiores!
        <a
          href="#"
          data-bs-toggle="tooltip"
          data-bs-title="Link takes you offsite"
          >Chicken Flu</a
        >
        This is now just filler, no killer. Content placed here just to mimic
        the presence of
        <a
          href="#"
          data-bs-toggle="tooltip"
          data-bs-title="Link opens in a new tab"
          >Poultry Vitamins</a
        >Neque ducimus, officiis fugit sit, non dolorum blanditiis nulla ipsa
        voluptates magnam quas!
      </p>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as bootstrap from "bootstrap";
const stepsGetChickens = ref([
  {
    step: "Coops and Runs for your area weather conditions.",
    url: "#/coops-runs",
    linkText: "Coops & Runs",
  },

  { step: "Best breeds for the NW.", url: "#/breeds", linkText: "Breeds" },
  {
    step: "Source best feed that supplies what your ladies need.",
    url: "#/feeds",
    linkText: "Feeds",
  },
  {
    step: "Predators: what you need to know!",
    url: "#",
    linkText: "Predators",
  },
  {
    step: "Connect with other Chicken Lovers",
    url: "#",
    linkText: "List of local groups",
  },
]);

const newBreeds = ref([
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    cardText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas itaque enim quas praesentium porro sapiente quod, quibusdam molestias repudiandae.`,
    url: "#",
    linkText: "Sapphire Jewel",
  },
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    cardText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas itaque enim quas praesentium porro sapiente quod, quibusdam molestias repudiandae.`,
    url: "#",
    linkText: "Seramas",
  },
  {
    imgSrc: "images/chicken-thumbnail-350.jpg",
    altText: "chicken",
    cardText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas itaque enim quas praesentium porro sapiente quod, quibusdam molestias repudiandae.`,
    url: "#",
    linkText: "Wheaten Olive Egger",
  },
]);
onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
