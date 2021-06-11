<template>
  <main class="d-flex align-items-center justify-content-center">
    <section class="glass">
      <div class="dashboard">
        <div class="user">
          <h1>{{ this.$store.state.playername }}</h1>
        </div>
        <div class="btn-create">
          <button class="btn btn-sm btn-success" @click="createRoom">
            Create Room
          </button>
        </div>
        <HowTo></HowTo>
      </div>
      <div class="anagram">
        <div class="anagram-title">
          <h1>Available Room</h1>
        </div>
        <div class="rooms">
          <Room
            v-for="room in this.$store.state.rooms"
            :key="room.id"
            :room="room"
          ></Room>
        </div>
        <div class="empty-room" v-if="!this.$store.state.rooms.length">
          <b-icon
            icon="exclamation-circle"
            style="width: 50; height: 50px"
            class="mb-3"
            font-scale="3"
            animation="throb"
          ></b-icon>
          <h1>No Room Available...</h1>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HowTo from "../components/HowTo.vue";
import Room from "../components/Room.vue";

export default {
  name: "Lobby",
  components: {
    HowTo,
    Room,
  },
  methods: {
    createRoom() {
      this.$socket.emit("createRoom", this.$store.state.playername);
    },
  },
  mounted() {
    this.$socket.on("roomsRefresh", (payload) => {
      this.$store.dispatch("setRooms", payload);
    });
    this.$socket.on("roomCreated", (payload) => {
      this.$store.dispatch("setRoomNumber", payload.number);
      this.$store.dispatch("setRoom", payload);
      this.$router.push({ name: "ActionPhase" });
    });
    this.$socket.emit("roomsFetch");
  },
};
</script>

<style>
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
.empty-room {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
