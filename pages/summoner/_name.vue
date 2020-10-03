<template>
  <div class="bg-grey pb-6">
    <div class="container">
      <Profile :summoner="summoner" :staticUrl="staticUrl" />
      <Matches :summoner="summoner" :staticUrl="staticUrl" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  asyncData: async function({ params, store, $axios }) {
    const data = await $axios.$get(`/summoner?name=${params.name}`);
    store.commit("CLEAR_MATCHES");
    store.commit("SET_SUMMONER", data.summoner);
    return { summoner: data.summoner };
  },
  computed: {
    ...mapState(["staticUrl"])
  }
};
</script>

<style scoped>
.bg-grey {
  background: rgba(51, 51, 51, 0.75);
}
</style>
