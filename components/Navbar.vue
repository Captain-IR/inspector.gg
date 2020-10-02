<template>
  <div class="navbar sticky top-0">
    <div class="flex justify-between">
      <h1>Inspector.gg</h1>
      <ul class="flex">
        <li class="mr-5"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="mr-5"><nuxt-link to="/champions">Champions</nuxt-link></li>
        <li class="mr-5"><nuxt-link to="/items">Items</nuxt-link></li>
        <li class="mr-5"><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background: #333;
  color: #fff;
  z-index: 1;
  padding: 1rem;
}
</style>
