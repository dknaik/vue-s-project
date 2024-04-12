import { defineStore } from "pinia";
import axios from "axios"

export const useAuthStore = defineStore("authStore", {
  state: () => ({ isLogin: false }),
  actions: {
    setIsLogin(payload) {
      this.isLogin = payload;
    },
    loginHandler(payload) {
      console.log("payload", payload.value);
    },
    async registerUser(payload) {
      console.log("payload register", payload);
      const result = await axios.post("http://localhost:3000/user", {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      });
      console.log("result", result);
    },
  },
  getters: {
    getIsLogin() {
      return this.isLogin;
    },
  },
});
