import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" }
});

export const state = () => ({
  searchInput: "",
  summoner: null
});

export const mutations = {
  SET_SUMMONER: function(state, summoner) {
    state.summoner = summoner;
  }
};

export const actions = {
  searchSummoner: async function({ commit }, searchInput) {
    try {
      const res = await axiosInstance.get(`/summoner?name=${searchInput}`);
      console.log(res.data.summoner);
      commit("SET_SUMMONER", res.data.summoner);
    } catch (error) {
      console.log(error);
    }
  }
};

export const getters = {
  getSummoner: function (state) {
    return state.summoner
  }
}