<template>
	<main class="d-flex align-items-center justify-content-center">
		<section class="glass">
			<div class="dashboard">
				<div class="user">
					<h1>User</h1>
				</div>
				<div class="btn-create">
					<button class="btn btn-sm btn-success">Create Room</button>
				</div>
				<HowTo></HowTo>
			</div>
			<div class="anagram">
				<div class="anagram-title">
					<h1>Available Room</h1>
				</div>
				<div class="rooms">
					<Room></Room>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import HowTo from '../components/HowTo.vue';
import Room from '../components/Room.vue';

export default {
	name: 'Lobby',
	components: {
		HowTo,
		Room,
	},
};
</script>

<style scoped>
main {
	min-height: 100vh;
	background: linear-gradient(to right top, #65dfc9, #6cdbeb);
}
.glass {
	background: white;
	max-height: 90vh;
	min-height: 90vh;
	width: 60%;
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.3)
	);
	border-radius: 1rem;
	backdrop-filter: blur(2rem);
	display: flex;
}
.dashboard {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.3)
	);
	border-radius: 1rem;
}
.user {
	margin-top: 50px;
}

.anagram {
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.anagram-title {
	margin-top: 50px;
}
h1 {
	font-weight: 600;
	font-size: 2rem;
}
.rooms {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	overflow: auto;
	margin: 10px;
}
</style>
