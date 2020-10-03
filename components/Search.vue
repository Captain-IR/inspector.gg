<template>
  <div class="search text-center w-full">
    <form class="form flex justify-center" @submit.prevent="submitSearch">
      <select v-model="selected" class="form-select p-3">
        <option value="AMERICA_NORTH">NA</option>
        <option value="BRAZIL">BR</option>
        <option value="EU_EAST">EUNE</option>
        <option value="EU_WEST">EUW</option>
        <option value="JAPAN">JP</option>
        <option value="KOREA">KR</option>
        <option value="OCEANIA">OCE</option>
        <option value="RUSSIA">RU</option>
        <option value="TURKEY">TK</option>
      </select>
      <input
        v-model="searchQuery"
        type="text"
        class="form-input p-3"
        placeholder="Search Your Summoner"
        required
      />
      <button type="submit" class="form-submit bg-white p-3">
        <img class="form-submit__img " src="~assets/search-icon.png" alt="" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      searchQuery: "",
      selected: "EU_WEST"
    };
  },
  methods: {
    ...mapActions(["summonerSearch"]),
    submitSearch: function() {
      this.summonerSearch({
        searchQuery: this.searchQuery,
        region: this.selected
      })
        .then(data => {
          this.$router.push(`/summoner/${data.summoner.name}-${this.selected}`);
        })
        .catch(err => {
          console.log(err);
        });
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

.form-select {
  cursor: pointer;
  border-radius: 30px 0 0 30px;
}

.form-submit {
  outline: none;
  border-radius: 0 30px 30px 0;
}

.form-input {
  width: 30rem;
  outline: none;
}
</style>
