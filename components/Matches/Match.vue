<template>
  <div v-if="game" class="bg-white my-6">
    <hr />
    <img :src="`${staticUrl}/champion/${game.champion}.png`" alt="" />
    {{ game }}
  </div>
</template>

<script>
export default {
  props: ["match", "staticUrl"],
  data: function() {
    return {
      game: null,
      teams: [],
      participants: [],
      participantIdentities: []
    };
  },
  mounted: async function() {
    const game = this.$axios.$get(`/match?id=${this.match.matchId}`);
    const champion = this.$axios.$get(`/champion?id=${this.match.champion}`);
    Promise.all([champion, game]).then(values => {
      this.game = {
        ...this.match,
        champion: values[0].name,
        ...values[1].match
      };
    });
  }
};
</script>

<style></style>
