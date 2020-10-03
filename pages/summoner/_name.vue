<template>
  <div class="home ">
    <div class="bg-opacity pb-6">
      <div class="container">
        <Profile :summoner="summoner" :staticUrl="staticUrl" />
        <Matches :summoner="summoner" :staticUrl="staticUrl" />
      </div>
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
.home {
  background: url("~assets/league.jpg") no-repeat center center / cover;
}

.bg-opacity {
  background: rgba(7, 7, 32, 0.75);
}
</style>
