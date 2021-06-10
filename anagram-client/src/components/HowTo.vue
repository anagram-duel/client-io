<template>
	<div class="how-to">
		<p class="how-title">Cara Bermain Duel Anagram</p>
		<div class="how-content">
			<p>
				1. Buat atau join room yang tersedia.<br />
				2. Permainan hanya bisa dimulai oleh Room Master.<br />
				3. Ketika permainan dimulai, kamu akan diberikan huruf acak.<br />
				4. Tebaklah hewan apa dari huruf-huruf tersebut.<br />
				5. Untuk menang kamu harus bisa menebak dan mengirim jawaban lebih cepat
				dari lawanmu.<br />
				6. Permainan akan berakhir ketika salah seorang berhasil mengirimkan
				jawaban yang benar.
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
	color: #6c757d;
}
.how-title {
	font-size: 20px;
	font-weight: 700;
}
</style>
