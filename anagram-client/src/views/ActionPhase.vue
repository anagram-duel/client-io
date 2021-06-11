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
        <div
          class="start"
          v-if="
            this.$store.state.playername === this.$store.state.room.hostname &&
            !this.$store.state.room.gameStart &&
            this.$store.state.room.challenger
          "
        >
          <h1>Start the Game</h1>
          <button @click="gameStart" class="btn btn-warning btn-sm">
            Start!
          </button>
        </div>
        <div
          class="start"
          v-if="
            this.$store.state.playername ===
              this.$store.state.room.challenger &&
            !this.$store.state.room.gameStart
          "
        >
          <h1>Waiting host to start...</h1>
        </div>
        <div
          class="play"
          v-if="
            this.$store.state.room.gameStart && !this.$store.state.room.gameEnd
          "
        >
          <h1>{{ this.$store.state.room.scrambleWord }}</h1>
          <input type="text" class="answer" v-model="answer" />
          <b-button
            @click="submitAnswer"
            class="btn-answer btn btn-success btn-sm"
          >
            Submit
          </b-button>
        </div>
        <div class="end" v-if="this.$store.state.room.gameEnd">
          <h1>{{ endMessage }}</h1>
          <button @click="newGame" class="btn-newGame btn btn-primary btn-sm">
            New Game
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Toastify from "toastify-js";

export default {
  name: "ActionPhase",
  data() {
    return {
      endMessage: "",
      answer: "",
    };
  },
  methods: {
    submitAnswer() {
      this.$socket.emit("submitAnswer", {
        answer: this.answer,
        room: this.$store.state.room.number,
      });
      this.answer = "";
    },
    gameStart() {
      this.$socket.emit("gameStart", {
        room: this.$store.state.room.number,
      });
    },
    newGame() {
      this.$router.push({ name: "Lobby" });
      this.$store.dispatch("clearRoom");
    },
  },

  mounted() {
    this.$socket.on("roomDetailRefresh", (payload) => {
      this.$store.dispatch("setRoom", payload);
    });
    this.$socket.on("gameCheck", (payload) => {
      if (payload.gameEnd) {
        this.endMessage = payload.message;
      } else if (!payload.gameEnd) {
        Toastify({
          text: payload.message,
          backgroundColor: "#FF6263",
        }).showToast();
      }
    });
    this.$socket.emit("getRoom", this.$store.state.roomNumber);
  },
  beforeDestroy() {
    this.$socket.off("gameCheck");
    this.$socket.off("roomDetailRefresh");
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
.btn-answer {
  margin-top: 8px;
}
.end {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
