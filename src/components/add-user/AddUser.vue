<template>
  <form class="max-w-6xl mx-auto my-10">
    <FieldsContainer>
      <AddUserTextFields
          :formTextFields="formTextFields"
          :errors="errors"
          :user="user"
      />
      <AddUserDropDowns
          :professions="professions"
          :countries="countries"
          :user="user"
      />
    </FieldsContainer>
    <AddUserActions :user="user" @onUserAdded="userAddedHandler" @onSetErrors="setErrorsHandler"/>
  </form>
</template>

<script>
import { mapState} from 'vuex';
import {FORM_TEXT_FIELDS} from "@/constants/constants";
import FieldsContainer from "@/components/add-user/FieldsContainer.vue";
import AddUserActions from "@/components/add-user/AddUserActions.vue";
import AddUserTextFields from "@/components/add-user/AddUserTextFields.vue";
import AddUserDropDowns from "@/components/add-user/AddUserDropDowns.vue";

export default {
  name: 'AddUser',
  components: {
    AddUserDropDowns,
    AddUserTextFields,
    AddUserActions,
    FieldsContainer,
  },
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        birthDate: null,
        quote: "",
        profession_id: 1,
        country_id: 1
      },
      formTextFields: FORM_TEXT_FIELDS,
      errors: {},
    };
  },
  computed: {
    ...mapState({
      professions: state => state.professionModule.professions,
      countries: state => state.countryModule.countries,
    }),
  },
  methods: {
    setErrorsHandler(errors) {
      this.errors = errors;
    },
    userAddedHandler() {
      this.setErrorsHandler({});
      this.user = {
        firstName: "",
        lastName: "",
        birthDate: null,
        quote: "",
        profession_id: 1,
        country_id: 1
      };
    },
  },
}
</script>
