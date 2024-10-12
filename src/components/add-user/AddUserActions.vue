<template>
  <div class="pl-4 mt-4">
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

      const requiredFields = ['firstName', 'lastName', 'birthDate', 'quote'];
      for (const field of requiredFields) {
        if (!this.user[field]) {
          errors[field] = true;
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
