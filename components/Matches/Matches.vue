<template>
  <div>
    <Match
      v-for="match in getMatches"
      :key="match.matchId"
      :match="match"
      :staticUrl="staticUrl"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["staticUrl"],
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
