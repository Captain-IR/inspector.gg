<template>
  <div class="page h-screen">
    <div class="container relative">
      <Navbar />
      <Search />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: require("~/components/Navbar").default,
    Search: require("~/components/Search").default
  }
};
</script>

<style>
.page {
  background: url("~assets/league.jpg") no-repeat center center / cover;
}

.container {
  @apply min-h-screen p-6 mx-auto;
}
</style>
