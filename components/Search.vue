<template>
  <div class="search text-center w-full">
    <form class="form" @submit.prevent="submitSearch">
      <input v-model="searchInput" type="text" class="form-input p-3 " />
      <button
        type="submit"
        class="py-3 px-4 bg-green-600 hover:bg-green-500 text-white uppercase"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      searchInput: ""
    };
  },
  methods: {
    ...mapActions(["searchSummoner"]),
    submitSearch: function() {
      this.searchSummoner(this.searchInput);
    }
  }
};
</script>

<style scoped>
.search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.form-input {
  width: 25rem;
  outline: none;
}
</style>
