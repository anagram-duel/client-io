<template>
  <main class="d-flex align-items-center justify-content-center">
    <section class="glass">
      <div class="dashboard">
        <div class="user">
          <h1>Players</h1>
          <div class="players">
            <h5>Host player: {{ this.$store.state.room.hostname }}</h5>
            <h5>Challenger: {{ this.$store.state.room.challenger }}</h5>
          </div>
        </div>
      </div>
      <div class="anagram-game">
        <div class="start" v-if="isHost">
          <h1>Start the Game</h1>
          <button class="btn btn-warning btn-sm">Start!</button>
        </div>
        <!-- <div class="start" v-if="isHost === false">
					<h1>Waiting host to start...</h1>
				</div> -->
        <div class="play">
          <h1>{{ this.$store.state.room.scrambleWord }}</h1>
          <input type="text" class="answer" v-model="answer" />
          <button @click="submitAnswer">Submit</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ActionPhase",
  data() {
    return {
      isHost: false,
      scrambleWord: "Kijang",
      answer: "",
    };
  },
  methods: {
    submitAnswer() {
      this.$socket.emit("submitAnswer", {
        answer: this.answer,
        room: this.$store.state.room.number,
      });
    },
  },

  mounted() {
    this.$socket.on("roomDetailRefresh", (payload) => {
      this.$store.dispatch("setRoom", payload);
    });
    this.$socket.on("gameCheck", (payload) => {
      console.log(payload);
    });
    this.$socket.emit("getRoom", this.$store.state.roomNumber);
  },
};
</script>

<style>
.anagram-game {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.start {
  text-align: center;
}
.play {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input.answer:focus {
  outline-width: 0;
}
input.answer {
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  border-color: #90b4dc !important;
  border-style: solid im !important;
  border-width: 0 0 1px 0 !important;
  padding: 0px im !important;
  color: #90b4dc;
  height: auto;
  border-radius: 0px;
  background-color: #fff;
  background-clip: padding-box;
  margin: auto;
  text-align: center;
}
</style>
