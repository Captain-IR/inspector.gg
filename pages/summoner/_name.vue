<template>
  <div class="home ">
    <div class="bg-opacity pb-6">
      <div class="container">
        <Profile :summoner="summoner" :staticUrl="staticUrl" />
        <Matches :summoner="summoner" :region="region" :staticUrl="staticUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  asyncData: async function({ params, store, $axios }) {
    const summoner = params.name.split("-")[0];
    const region = params.name.split("-")[1];
    const data = await $axios.$get(
      `/summoner?name=${summoner}&region=${region}`
    );
    store.commit("CLEAR_MATCHES");
    store.commit("SET_SUMMONER", data.summoner);
    return { summoner: data.summoner, region };
  },
  computed: {
    ...mapState(["staticUrl"])
  }
};
</script>

<style scoped>
.home {
  background: url("~assets/league-minified.jpg") no-repeat center center / cover;
}

.bg-opacity {
  background: rgba(7, 7, 32, 0.75);
}
</style>
