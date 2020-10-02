<template>
  <div>
    <Match
      v-for="match in getMatches"
      :key="match.matchId"
      :match="match"
      :staticUrl="staticUrl"
      :summoner="summoner"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["summoner", "staticUrl"],
  computed: {
    ...mapGetters(["getMatches", "getNewMatches"])
  },
  components: {
    Match: require("~/components/Matches/Match").default,
    NewMatch: require("~/components/Matches/NewMatch").default
  }
};
</script>

<style></style>
