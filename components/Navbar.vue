<template>
  <div class="navbar sticky top-0">
    <div class="flex justify-between items-center">
      <h1>LeagousGG</h1>
      <!-- <form class="form" @submit.prevent="submitSearch">
        <input
          v-model="searchQuery"
          type="text"
          class="form-input p-1 text-black"
          placeholder="Search Your Summoner"
        />
        <button
          type="submit"
          class="p-1 bg-green-600 hover:bg-green-500 uppercase"
        >
          Search
        </button>
      </form> -->
      <ul class="flex">
        <li class="mr-5"><nuxt-link to="/">Home</nuxt-link></li>
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
  background-color: #070720;
  color: #fff;
  z-index: 1;
  padding: 0.5rem;
}
</style>
