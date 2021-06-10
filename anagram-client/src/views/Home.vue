<template>
	<div id="home" class="container-fluid">
		<div class="row align-items-center justify-content-center">
			<div class="col-8">
				<img src="../assets/Welcome.png" alt="Welcome" class="img-fluid" />
			</div>
			<div class="col-4">
				<form>
					<label for="" class="form-label">Are you ready to play?</label>
					<input type="text" class="from-input" placeholder="username" />
					<button type="submit">Lets play</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
};
</script>

<style scoped>
#home {
	height: 100vh;
}
.row {
	height: 100%;
}
</style>
