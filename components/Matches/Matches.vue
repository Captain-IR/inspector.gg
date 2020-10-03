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
  <div v-else class="text-center mt-6">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["summoner", "region", "staticUrl"],
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
    this.summonerMatches({
      summonerId: this.summoner.accountId,
      region: this.region
    });
  }
};
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
