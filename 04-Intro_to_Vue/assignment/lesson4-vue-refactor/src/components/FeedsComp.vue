<template>
  <!-- //* Grid Content and Accordion *// -->
  <div class="container-fluid my-3">
    <div class="row">
      <article class="col-12 col-md-8 bg-body-tertiary p-3">
        <h3>Chicken Feed for Every Stage</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut
          nam quibusdam possimus, minima deleniti repellendus dignissimos
          consectetur, laboriosam ullam error reprehenderit soluta qui
          molestias? Perferendis natus nulla veritatis est?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad
          tempora nulla voluptatem, deserunt cupiditate voluptate, perspiciatis
          nam tempore, animi incidunt ratione? Officiis labore incidunt
          voluptatem facere quaerat et assumenda.
        </p>
      </article>
      <div class="col-12 col-md-4">
        <img
          src="images/chicken-feed-350.jpg"
          class="image-fluid"
          alt="chickens eating"
        />
      </div>
    </div>
    <div class="row">
      <article class="col-12 col-md-8 bg-body-tertiary p-3">
        <h3>Best Feeds Based on Age</h3>
        <div class="accordion" id="accordionFeeds">
          <div
            v-for="(feedAccordionObj, index) in feedAccordion"
            :key="index"
            class="accordion-item"
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="feedAccordionObj.dataTarg"
                :aria-expanded="feedAccordionObj.ariaExpand"
                :aria-controls="feedAccordionObj.ariaControl"
              >
                {{ feedAccordionObj.btnText }}
              </button>
            </h2>
            <div
              :id="feedAccordionObj.id"
              :class="feedAccordionObj.class"
              data-bs-parent="#accordionFeeds"
            >
              <div class="accordion-body">
                <strong> {{ feedAccordionObj.accTitle }}</strong>
                {{ feedAccordionObj.accBody }}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const feedAccordion = ref([
  {
    dataTarg: "#collapseOne",
    ariaExpand: "true",
    ariaControl: "collapseOne",
    btnText: "Chicks (1-6 Weeks)",
    id: "collapseOne",
    class: "accordion-collapse collapse show",
    accTitle: "Chick Starter Feed",
    accBody: `Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Obcaecati, placeat quam.
                    Maiores asperiores eligendi, quis laboriosam at reiciendis!
                    Suscipit nemo voluptatem aut necessitatibus optio modi sint
                    id repudiandae? Ab. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Delectus aperiam pariatur eius, unde
                    molestiae reiciendis, optio quisquam impedit nam officiis
                    rem alias quo ipsam. Accusamus repellendus facere soluta
                    blanditiis unde?`,
  },
  {
    dataTarg: "#collapseTwo",
    ariaExpand: "false",
    ariaControl: "collapseTwo",
    btnText: "Teen Chickens (6-18 Weeks)",
    id: "collapseTwo",
    class: "accordion-collapse collapse",
    accTitle: "Grower Poultry Feed",
    accBody: `Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Obcaecati, placeat quam.
                    Maiores asperiores eligendi, quis laboriosam at reiciendis!
                    Suscipit nemo voluptatem aut necessitatibus optio modi sint
                    id repudiandae? Ab. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Delectus aperiam pariatur eius, unde
                    molestiae reiciendis, optio quisquam impedit nam officiis
                    rem alias quo ipsam. Accusamus repellendus facere soluta
                    blanditiis unde?`,
  },
  {
    dataTarg: "#collapseThree",
    ariaExpand: "false",
    ariaControl: "collapseThree",
    btnText: "Layers (18+ Weeks)",
    id: "collapseThree",
    class: "accordion-collapse collapse",
    accTitle: "Grower Poultry Feed",
    accBody: `Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Obcaecati, placeat quam.
                    Maiores asperiores eligendi, quis laboriosam at reiciendis!
                    Suscipit nemo voluptatem aut necessitatibus optio modi sint
                    id repudiandae? Ab. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Delectus aperiam pariatur eius, unde
                    molestiae reiciendis, optio quisquam impedit nam officiis
                    rem alias quo ipsam. Accusamus repellendus facere soluta
                    blanditiis unde?`,
  },
]);
</script>
<style></style>
