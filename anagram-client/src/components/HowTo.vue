<template>
	<div class="how-to">
		<p class="how-title">Cara Bermain Duel Anagram</p>
		<div class="how-content">
			<p>
				1. Buat atau join room yang tersedia.<br />
				2. Permainan hanya bisa dimulai oleh Room Master.<br />
				3. Kamu akan diberikan huruf dari nama hewan secara acak untuk
				bermain.<br />
				4. Pemenangnya adalah yang dapat menebak dengan benar lebih dulu.<br />
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HowTo',
};
</script>

<style>
.how-to {
	margin: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: linear-gradient(to right top, #65dfc9, #6cdbeb);
	border-radius: 1rem;
}
.how-to p {
	margin: 10px 0;
	padding: 0px 5px;
	color: #6c757d;
	text-align: center;
}
.how-title {
	font-size: 20px;
	font-weight: 700;
}
</style>
