<template>
  <div v-if="game" class="bg-white my-6">
    <hr />
    <img :src="`${staticUrl}/champion/${game.champion}.png`" alt="" />
    {{ game }}
  </div>
</template>

<script>
export default {
  props: ["summoner", "match", "staticUrl"],
  data: function() {
    return {
      game: null,
      champion: "",
      win: false
    };
  },
  methods: {
    getChampionById: async function(id) {
      return this.$axios.$get(`/champion?id=${id}`);
    },
    winOrLoss: function(teamId) {}
  },
  mounted: async function() {
    const game = this.$axios.$get(`/match?id=${this.match.matchId}`);
    const champion = this.getChampionById(this.match.champion);
    const values = await Promise.all([champion, game]);
    this.game = {
      ...this.match,
      champion: values[0],
      ...values[1].match
    };
  }
};
</script>

<style></style>
