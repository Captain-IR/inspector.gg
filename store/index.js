// const getMatch = async id => {
//   return await this.$axios.$get(`/match?matchId=${id}`);
// };

export const state = () => ({
  summoner: null,
  matches: [],
  staticUrl: process.env.STATIC_URL
});

export const mutations = {
  SET_SUMMONER: function(state, summoner) {
    state.summoner = summoner;
  },
  SET_MATCHES: function(state, matches) {
    state.matches = [...matches];
  },
  SET_NEW_MATCHES: function(state, newMatches) {
    console.log(newMatches);
    state.newMatches = [...newMatches];
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

  summonerMatches: async function({ commit }, summonerId) {
    try {
      const data = await this.$axios.$get(`/matches?summonerId=${summonerId}`);
      commit("SET_MATCHES", data.matches);
    } catch (error) {
      console.log(error);
    }
  }

  // matchDetails: async function({ commit }, matchId) {
  //   try {
  //     const res = await axiosInstance.get(`/match?matchId=${matchId}`);
  //     commit("SET_MATCHES_DETAIL", res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
};

export const getters = {
  getSummoner: function(state) {
    return state.summoner;
  },
  getMatches: function(state) {
    return state.matches;
  },
  getNewMatches: function(state) {
    return state.newMatches;
  }
};
