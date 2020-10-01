<template>
  <div class="relative">
    <div class="page h-screen blur"></div>
    <div class="container">
      <Navbar />
      <Profile :getSummoner="getSummoner" :staticUrl="staticUrl" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  async asyncData({ params, store }) {
    const name = params.name;
    return { name };
  },
  computed: {
    ...mapState(["staticUrl"]),
    ...mapGetters(["getSummoner"])
  },
  methods: {
    ...mapActions(["summonerSearch", "summonerMatches"])
  },
  mounted: function() {
    this.summonerMatches(this.getSummoner.accountId);
  }
};
</script>

<style scoped>
.page {
  background: url("~assets/league.jpg") no-repeat center center / cover;
}
.blur {
  filter: blur(5px);
}
</style>
