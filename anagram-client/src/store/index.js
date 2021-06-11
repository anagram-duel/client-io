import Vue from "vue";
import Vuex from "vuex";
import socket from "../config/socket.js";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		playername: "",
		challengername: "",
		hostname: "",
		roomNumber: "",
		rooms: [],
		room: null,
	},
	mutations: {
		SET_PLAYERNAME(state, payload) {
			state.playername = payload;
		},
		SET_ROOMS(state, payload) {
			state.rooms = payload;
		},
		SET_ROOM_NUMBER(state, payload) {
			state.roomNumber = payload;
		},
		SET_CHALLENGERNAME(state, payload) {
			state.challengername = payload;
		},
		SET_HOSTNAME(state, payload) {
			state.hostname = payload;
		},
		SET_ROOM(state, payload) {
			state.room = payload;
		},
	},
	actions: {
		setPlayerName(context, payload) {
			context.commit("SET_PLAYERNAME", payload);
		},
		setRooms(context, payload) {
			context.commit("SET_ROOMS", payload);
		},
		setRoomNumber(context, payload) {
			context.commit("SET_ROOM_NUMBER", payload);
		},
		setRoom(context, payload) {
			context.commit("SET_ROOM", payload);
		},
		joinRoom(context, payload) {
			socket.emit("joinRoom", {
				toJoin: payload.room,
				toLeave: payload.joined,
				name: context.state.playername,
			});
			context.commit("SET_ROOM_NUMBER", payload.room);
			router.push({ name: "ActionPhase" });
		},
	},
	modules: {},
});
