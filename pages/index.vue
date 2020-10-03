<template>
  <div class="home">
    <div class="bg-opacity">
      <div class="container relative">
        <Search />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  background: url("~assets/league.jpg") no-repeat center center / cover;
  height: 100vh;
}

.bg-opacity {
  background: rgba(7, 7, 32, 0.25);
}
</style>
