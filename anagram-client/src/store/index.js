import Vue from "vue";
import Vuex from "vuex";
// import socket from "./config/socket";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		playername: "",
		roomNumber: "",
		rooms: [],
	},
	mutations: {
		SET_PLAYERNAME(state, payload) {
			state.playername = payload;
		},
		SET_ROOMS(state, payload) {
			state.rooms = payload;
		},
	},
	actions: {
		setPlayerName(context, payload) {
			context.commit("SET_PLAYERNAME", payload);
		},
		setRooms(context, payload) {
			context.commit("SET_ROOMS", payload);
		},
	},
	modules: {},
});
