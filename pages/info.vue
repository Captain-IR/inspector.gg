<template>
  <div class="relative">
    <div class="page h-screen blur"></div>
    <div class="container">
      <Navbar />
      <Profile />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page {
  background: url("~assets/league.jpg") no-repeat center center / cover;
}
.blur {
  filter: blur(5px);
}
</style>
