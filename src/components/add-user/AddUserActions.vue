<template>
  <div class="pl-4 mt-2">
    <ButtonComponent type="button" :on-click="addUser">
      Add User
    </ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from "@/components/elements/Button.vue";
import {mapActions} from "vuex";

export default {
  name: 'AddUserActions',
  components: {ButtonComponent},
  props: ["user"],
  methods: {
    ...mapActions([
      'addNewUser',
    ]),
    addUser() {
      if (this.validateForm()) {
        this.addNewUser(this.user);
        this.$emit('onUserAdded');
      }
    },
    validateForm() {
      let isValid = true;
      let errors = {};

      /**
       *  Simple validation to check if text fields are not empty.
       *  And ony one additinal check for the date to not be in the future.
       * **/
      const requiredFields = ['firstName', 'lastName', 'birthDate', 'quote'];
      for (const field of requiredFields) {
        if(field === "birthDate"){
          const birthDate = new Date(this.user.birthDate);
          const currentDate = new Date();
          if(birthDate > currentDate){
            errors.birthDate = "Birthdate cannot be in the future";
            isValid = false;
          }
        }
        if (!this.user[field]) {
          errors[field] = "Field cannot be empty";
          isValid = false;
        }
      }
      if(!isValid){
        this.$emit('onSetErrors', errors);
      }
      return isValid;
    },
  }
}
</script>
