<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <input v-model="loginData.username" />
      <span v-for="error in v$.username.$errors" :key="error.$uid">
        {{ error.$message }}
      </span>
      <input v-model="loginData.password" />
      <span v-for="error in v$.password.$errors" :key="error.$uid">
        {{ error.$message }}
      </span>
      <!-- <span v-for="error in v$.errors" :key="error.$uid"></span> -->
      <!-- {{error.$property}}  = {{error.$message}} -->
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { useAuthStore } from "../../store/authStore";
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength,
  email,
  sameAs,
  helpers,
} from "@vuelidate/validators";

export default defineComponent({
  setup() {
    const loginData = ref({
      username: "",
      password: "",
    });
    const containUser = (value) => {
      return value.includes("user");
    };
    const rules = computed(() => {
      return {
        username: {
          required,
          minLength: minLength(10),
          containUser: helpers.withMessage("the feld must contain user",containUser),
        },
        password: { required },
      };
    });
    const authStore = useAuthStore();
    const v$ = useVuelidate(rules, loginData);
    console.log("authStore", authStore.isLogin);
    const onSubmit = async (value) => {
      const result = await v$.value.$validate();
      if (result) {
        console.log(loginData.value);
        authStore.loginHandler(loginData.value);
        // alert("success form submittted");
      } else {
        // alert("No form submittted");
      }
      console.log(value);
    };
    return { onSubmit, loginData, v$ ,containUser };
  },
});
</script>
