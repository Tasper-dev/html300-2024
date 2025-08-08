<template>
  <div>
    <!-- //*Carousel*// -->
    <div id="homeCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/images/chicken-carousel-one.jpg"
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
        <br /><br />
        <h4>Steps to getting your own brood:</h4>
        <ol>
          <!-- <li>
                Coops and Runs for your area weather conditions.<a
                  href="#"
                  class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Coops & Runs</a
                >
              </li> -->
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
        <!-- <li>
            Best breeds for the NW.<a
              href="#"
              class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Breeds</a
            >
          </li>
          <li>
            Source best feed that supplies what your ladies need.<a
              href="#"
              class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Feeds</a
            >
          </li>
          <li>
            Predators: what you need to know!<a
              href="#"
              class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Predators</a
            >
          </li>
          <li>
            Connect with other Chicken Lovers<a
              href="#"
              class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              List of local groups</a
            >
          </li>
        </ol> -->
        <img
          src="images/chickens-grazing-700.jpg"
          class="img-fluid py-5"
          alt="chickens grazing"
          width="700"
          height="467"
        />
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
