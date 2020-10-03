<template>
  <div v-if="getMatches.length > 0">
    <Match
      v-for="match in getMatches"
      :key="match.gameId"
      :match="match"
      :staticUrl="staticUrl"
      :summoner="summoner"
    />
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["summoner", "staticUrl"],
  components: {
    Match: require("~/components/Matches/Match").default
  },
  computed: {
    ...mapGetters(["getMatches"])
  },
  methods: {
    ...mapActions(["summonerMatches"])
  },
  mounted: function() {
    this.summonerMatches(this.summoner.accountId);
  }
};
</script>

<style></style>
