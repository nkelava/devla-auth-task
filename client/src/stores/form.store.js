import { defineStore } from "pinia";

export function createFormStore(formName, fields) {
  return defineStore(`${formName}`, {
    state: () => {
      return {
        ...fields,
        initState: { ...fields },
      };
    },
    actions: {
      clearForm() {
        this.$reset();
      },
    },
    persist: true,
  });
}

const initLoginState = {
  email: "",
  password: "",
  error: "",
};

const initRegisterState = {
  ...initLoginState,
  repeatedPassword: "",
};

export const useLoginStore = createFormStore("login", initLoginState);
export const useRegisterStore = createFormStore("register", initRegisterState);
