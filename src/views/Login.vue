<script>
import Modal from "../components/Modal.vue";
import { ref } from "vue";

export default {
  name: "Login",
  components: {
    Modal,
  },
  data() {
    return {
      username: "",
      password: "",
      warning: false,
      passwordFieldType: "password",
    };
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
  methods: {
    go() {
      this.$router.push({ path: "/anime" });
    },

    //*NOTE : this may not be the correct way to authenticate user
    handleSubmit() {
      if (this.username === "unissula" && this.password === "fti") {
        return this.go();
      } else {
        this.toggleModal();
      }
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    // *NOTE : I always get cors issues when implementing this api
    // and I can't find a good solution to solve it.

    // handleSubmit() {
    //   const apiUrl = "http://www.hardana.com/api/";
    //   let myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   myHeaders.append("Access-Control-Allow-Origin", "*");
    //   myHeaders.append("Access-Control-Allow-Credentials", "true");
    //   let raw = JSON.stringify({
    //     user: this.username,
    //     pswd: this.password,
    //   });
    //   const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //     mode: "no-cors",
    //   };
    //   fetch(apiUrl, requestOptions)
    //     .then((res) => res.json())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log(error));
    // },
  },
};
</script>

<template>
  <div class="login">
    <div class="form-wrapper">
      <form @submit.prevent="handleSubmit">
        <h3 class="title">Sign In</h3>
        <input type="text" v-model="username" placeholder="Username" />
        <div class="password-field">
          <input
            :type="passwordFieldType"
            v-model="password"
            placeholder="Password"
          />
          <i class="bi bi-eye" @click="switchVisibility"></i>
        </div>

        <button class="login-btn" type="submit">Submit</button>
      </form>
    </div>

    <Modal
      msg="404 User Not Found"
      @close="toggleModal"
      :modalActive="modalActive"
    />
  </div>
</template>

<style>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  box-sizing: border-box;
}
.form-wrapper {
  background: #d8dbe2;
  border-radius: 10px;
  padding: 20px 25px;
}
.title {
  color: #0466c8;
  align-self: center;
  font-size: 1.4rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

form input {
  font-size: 1.1rem;
  background: inherit;
  color: #000;
  border: none;
  padding: 10px;
  box-sizing: border-box;
}
.password-field {
  display: flex;
  align-items: center;
}
.login-btn {
  background: #0466c8;
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 1.2rem;
}
</style>
