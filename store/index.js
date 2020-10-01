import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: { "Content-Type": "application/json" }
});

export const state = () => ({
  searchQuery: "",
  summoner: null,
  matches: [],
  staticUrl:  process.env.STATIC_URL
});

export const mutations = {
  SET_SUMMONER: function(state, summoner) {
    state.summoner = summoner;
  },
  SET_MATCHES: function(state, matches) {
    state.matches = matches;
  },
};

export const actions = {
  summonerSearch: async function({ commit }, searchQuery) {
    try {
      const res = await axiosInstance.get(`/summoner?name=${searchQuery}`);
      commit("SET_SUMMONER", res.data.summoner);
      return res
    } catch (error) {
      console.log(error);
    }
  },

  summonerMatches: async function({ commit }, summonerId) {
    try {
      const res = await axiosInstance.get(`/matches?summonerId=${summonerId}`);
      console.log(res.data.matches);
      commit("SET_MATCHES", res.data.matches);
    } catch (error) {
      console.log(error);
    }
  },
};

export const getters = {
  getSummoner: function (state) {
    return state.summoner
  },
}