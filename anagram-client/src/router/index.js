import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Lobby from '../views/Lobby.vue';
import ActionPhase from '../views/ActionPhase.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/lobby',
		name: 'Lobby',
		component: Lobby,
	},
	{
		path: '/action',
		name: 'ActionPhase',
		component: ActionPhase,
	},

	// {
	//   path: "/about",
	//   name: "About",
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () =>
	//     import(/* webpackChunkName: "about" */ "../views/About.vue"),
	// },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.name !== 'Home' && !store.state.playername) {
		next({ name: 'Home' });
	}
	next();
});

export default router;
