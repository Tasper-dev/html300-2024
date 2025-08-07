<template>
  <main>
    <!-- //* Navbar that collapses *// -->
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img
            src="images/nw-chickens-rect-logo-150.jpg"
            class="img-thumbnail"
            alt=""
            width="150"
            height="90"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/coops-runs">Coops & Runs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/breeds">Breeds</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/feeds">Feeds</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <header class="header container-fluid bg-success p-3">
      <h1 class="display-1">NW Chickens</h1>
      <h2>Girls Gone Wild!</h2>
    </header>
    <component :is="currentView" />
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import Home from "./components/Home.vue";
import CoopsRuns from "./components/Coops-Runs.vue";
import Breeds from "./components/Breeds.vue";
import Feeds from "./components/Feeds.vue";

const routes = {
  "/home": Home,
  "/coops-runs": CoopsRuns,
  "/breeds": Breeds,
  "/feeds": Feeds,
};

if (!window.location.hash) {
  window.location.hash = "/home";
}

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1)] || Home;
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
