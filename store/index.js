export const state = () => ({
  summoner: null,
  matches: [],
  staticUrl: process.env.STATIC_URL
});

export const mutations = {
  SET_SUMMONER: function(state, summoner) {
    state.summoner = { ...summoner };
  },
  SET_MATCHES: function(state, matches) {
    state.matches = [...matches];
  },
  CLEAR_MATCHES: function(state) {
    state.matches = [];
  }
};

export const actions = {
  summonerSearch: async function({ commit }, searchQuery) {
    try {
      const data = await this.$axios.$get(`/summoner?name=${searchQuery}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  summonerMatches: async function({ commit, dispatch }, summonerId) {
    try {
      const data = await this.$axios.$get(`/matches?summonerId=${summonerId}`);
      commit("SET_MATCHES", data.matches);
    } catch (error) {
      console.log(error);
    }
  }
};

export const getters = {
  getSummoner: function(state) {
    return state.summoner;
  },
  getMatches: function(state) {
    return state.matches;
  }
};
