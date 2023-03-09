<template>
  <div class="modal-bg" v-show="modalActive">
    <div class="modal-main">
      <button @click="close" type="button" class="close-btn">
        <i class="bi bi-x"></i>
      </button>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalActive", "msg"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>

<style>
.bi {
  /* font-size: 0.rem; */
  color: #000;
}
.modal-bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-main {
  background: #eff6e0;
  border-radius: 10px;
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;
  width: 40vw;
  font-size: 1.2rem;
  color: #000;
  display: flex;
  flex-direction: column;
}
.close-btn {
  background: inherit;
  align-self: flex-end;
  top: 0;
}
@media only screen and (max-width: 768px) {
  .modal-main {
    width: 80vw;
  }
}
</style>
