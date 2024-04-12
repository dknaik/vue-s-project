<template>
  <div>
    <form @submit.prevent="onSubmit()">
      <input v-model="registerData.username" />
      <span v-for="error in v$.username.$errors" :key="error.$uid">
        {{ error.$message }}
      </span>
      <input v-model="registerData.password" />
      <span v-for="error in v$.password.$errors" :key="error.$uid">
        {{ error.$message }}
      </span>
      <input v-model="registerData.email" />
      <span v-for="error in v$.email.$errors" :key="error.$uid">
        {{ error.$message }}
      </span>
      <input v-model="registerData.confirmPassword" />
      <span v-for="error in v$.confirmPassword.$errors" :key="error.$uid">
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
    const registerData = ref({
      username: "abasdasdac",
      email: "abc@gmail.com",
      password: "123",
      confirmPassword: "123",
    });
    const containUser = (value) => {
      return value.includes("user");
    };
    const confirmPasswordMatchesPassword = (value) => {
      return value == registerData.value.password;
    };
    const rules = computed(() => {
      return {
        username: {
          required,
          minLength: minLength(10),
          //   containUser: helpers.withMessage(
          //     "the feld must contain user",
          //     containUser
          //   ),
        },
        email: {
          required,
          email,
        },
        password: { required },
        confirmPassword: {
          required,
          confirmPasswordMatchesPassword: helpers.withMessage(
            "Password should match",
            confirmPasswordMatchesPassword
          ),
        },
      };
    });
    const authStore = useAuthStore();
    const v$ = useVuelidate(rules, registerData);
    console.log("v$", v$);
    const onSubmit = async (value) => {
      const result = await v$.value.$validate();
      if (result) {
        console.log(registerData.value);
        authStore.registerUser(registerData.value);
       
        // alert("success form submittted");
      } else {
        // alert("No form submittted");
      }
      console.log(value);
    };
    return { onSubmit, registerData, v$ };
  },
});
</script>
