import Vue from "vue";
import Vuex from "vuex";
// import socket from "./config/socket";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		playername: "",
	},
	mutations: {
		SET_PLAYERNAME(state, payload) {
			state.playername = payload;
		},
	},
	actions: {
		setPlayerName(context, payload) {
			context.commit("SET_PLAYERNAME", payload);
		},
	},
	modules: {},
});
