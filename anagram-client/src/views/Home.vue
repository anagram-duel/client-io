<template>
  <div
    id="home"
    class="container d-flex align-items-center justify-content-center"
  >
    <div class="col">
      <img src="../assets/Welcome.png" alt="Welcome" class="img-fluid" />
    </div>
    <div class="col text-center">
      <div class="row">
        <div class="home-title">
          <h1 class="home-title">Let's Play!</h1>
        </div>
        <form>
          <div>
            <input
              type="text"
              placeholder="enter your name"
              class="form-control"
              v-model="name"
            />
            <button
              @click.prevent="setName"
              class="btn btn-primary btn-sm mt-3"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    setName() {
      this.$store.dispatch("setPlayerName", this.name);
      this.$router.push({ name: "Lobby" });
    },
  },
};
</script>

<style scoped>
#home {
	height: 100vh;
	width: 100vw;
}
.height {
  height: 100%;
}
.home-title {
  /* width: 100%; */
  font-weight: 500;
  font-size: 75px;
}
.form-control {
  display: block;
  width: 50%;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  border-color: #90b4dc !important;
  border-style: solid im !important;
  border-width: 0 0 1px 0 !important;
  padding: 0px im !important;
  color: #495057;
  height: auto;
  border-radius: 0px;
  background-color: #fff;
  background-clip: padding-box;
  margin: auto;
  text-align: center;
}
</style>
