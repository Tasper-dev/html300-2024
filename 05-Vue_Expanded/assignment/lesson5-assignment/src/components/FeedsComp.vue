<template>
  <HeaderComp
    ><template #subheader>
      <h2>Pellets & Crumbles</h2>
    </template>
  </HeaderComp>

  <div class="container-fluid my-3">
    <div class="row">
      <div class="col-12 col-md-8 bg-body-tertiary p-3">
        <!-- // Article Component used with a V-for loop // -->
        <ArticlesComp
          v-for="(feedsArticleObj, index) in feedsArticle"
          :key="index"
          :title="feedsArticleObj.title"
          :text="feedsArticleObj.text"
        ></ArticlesComp>
      </div>
      <div class="col-12 col-md-4 p-3">
        <img
          src="images/chicken-feed-350.jpg"
          class="image-fluid"
          alt="chickens eating"
        />
      </div>
    </div>
    <!-- //* Accordion component with v-for loop *// -->
    <div class="row">
      <article class="col-12 col-md-8 bg-body-tertiary p-3">
        <h3>Best Feeds Based on Age</h3>
        <AccordionComp
          :id="feedAccordionObj.id"
          v-for="(feedAccordionObj, index) in feedAccordion"
          :key="index"
          :data-bs-target="feedAccordionObj.dataTarg"
          :aria-expanded="feedAccordionObj.ariaExpand"
          :aria-controls="feedAccordionObj.ariaControl"
          :btnText="feedAccordionObj.btnText"
          :accBodyId="feedAccordionObj.accBodyId"
          :accClass="feedAccordionObj.accClass"
          :parent="feedAccordionObj.parent"
          :accTitle="feedAccordionObj.accTitle"
          :accBody="feedAccordionObj.accBody"
        ></AccordionComp>
      </article>
    </div>
  </div>
</template>
<script setup>
import HeaderComp from "./HeaderComp.vue";
import { ref } from "vue";
import ArticlesComp from "./ArticlesComp.vue";
import AccordionComp from "./AccordionComp.vue";
const feedsArticle = ref([
  {
    title: "Chicken Feed for Every Stage",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut
          nam quibusdam possimus, minima deleniti repellendus dignissimos
          consectetur, laboriosam ullam error reprehenderit soluta qui
          molestias? Perferendis natus nulla veritatis est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad
          tempora nulla voluptatem, deserunt cupiditate voluptate, perspiciatis
          nam tempore, animi incidunt ratione? Officiis labore incidunt
          voluptatem facere quaerat et assumenda.`,
  },
]);

const feedAccordion = ref([
  {
    id: "accordionFeeds",
    dataTarg: "#collapseOne",
    ariaExpand: "true",
    ariaControl: "collapseOne",
    btnText: "Chicks (1-6 Weeks)",
    accBodyId: "collapseOne",
    accClass: "accordion-collapse collapse show",
    parent: "#accordionFeeds",
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
    id: "accordionFeeds",
    dataTarg: "#collapseTwo",
    ariaExpand: "false",
    ariaControl: "collapseTwo",
    btnText: "Teen Chickens (6-18 Weeks)",
    accBodyId: "collapseTwo",
    accClass: "accordion-collapse collapse",
    parent: "#accordionFeeds",
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
    id: "accordionFeeds",
    dataTarg: "#collapseThree",
    ariaExpand: "false",
    ariaControl: "collapseThree",
    btnText: "Layers (18+ Weeks)",
    accBodyId: "collapseThree",
    accClass: "accordion-collapse collapse",
    parent: "#accordionFeeds",
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
