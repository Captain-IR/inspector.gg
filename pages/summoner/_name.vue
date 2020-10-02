<template>
  <div class="bg-grey">
    <div class="container">
      <Profile :summoner="summoner" :staticUrl="staticUrl" />
      <Matches :summoner="summoner" :staticUrl="staticUrl" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  asyncData: async function({ params, store, $axios }) {
    const data = await $axios.$get(`/summoner?name=${params.name}`);
    store.commit("SET_SUMMONER", data.summoner);
    return { summoner: data.summoner };
  },
  computed: {
    ...mapState(["staticUrl"])
  },
  methods: {
    ...mapActions(["summonerMatches"])
  },
  mounted: function() {
    this.summonerMatches(this.summoner.accountId);
  }
};
</script>

<style scoped>
.bg-grey {
  background-color: #f3f3f3;
}
</style>
