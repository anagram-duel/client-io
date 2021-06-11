<template>
	<div>
		<div class="room">
			<div class="card-body">
				<h5 class="card-title">{{ room.number }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">Host: {{ room.hostname }}</h6>
				<a
					href="#"
					class="card-link btn btn-sm btn-primary auto"
					@click="joinRoom(room.number)"
					v-if="room.available"
					>Join</a
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['room'],
	name: 'Room',
	methods: {
		joinRoom(roomNumber) {
			this.$store.dispatch('joinRoom', { room: roomNumber });
		},
	},
};
</script>

<style>
.room {
	width: 18rem;
	margin: 5px 0px;
	background: linear-gradient(
		to right bottom,
		rgba(255, 255, 255, 0.7),
		rgba(255, 255, 255, 0.3)
	);
	border-radius: 1rem;
}
</style>
