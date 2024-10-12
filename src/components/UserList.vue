<template>
  <div>
    <table class="table-auto mx-auto my-10">
      <thead>
        <tr>
          <th class="px-4 py-2" v-text="'Namn'"/>
          <th class="px-4 py-2" v-text="'Date of Birth'"/>
          <th class="px-4 py-2" v-text="'Age'"/>
          <th class="px-4 py-2" v-text="'Profession'"/>
          <th class="px-4 py-2" v-text="'Country'"/>
          <th class="px-4 py-2" v-text="'Favorite Quote'"/>
          <th class="px-4 py-2" v-text="''"/>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(user) in usersWithAge" :key="user.id">
        <td class="border px-4 py-2" v-text="user.firstName + ' ' + user.lastName"/>
        <td class="border px-4 py-2" v-text="user.birthDate"/>
        <td class="border px-4 py-2" v-text="getUserAge(user.id)"/>
        <td class="border px-4 py-2" v-text="user.profession_id"/>
        <td class="border px-4 py-2" v-text="user.country_id"/>
        <td class="border px-4 py-2" v-text="user.quote"/>
        <td class="px-4 py-2">
          <button-component
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              :on-click="() => removeRow(user.id)"
              :button-text="'Remove'"
          />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import User from './User';
import {mapState, mapActions, mapGetters} from 'vuex'
import ButtonComponent from './elements/Button.vue';
import {calculateAge} from "@/utility/utility";

export default {
  name: 'UserList',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      selected: []
    };
  },
  computed: {
    ...mapGetters([
        "getUserAge"
    ]),
    ...mapState({
        users: state => state.userModule.users,
        professions: state => state.professionModule.professions,
    }),
    usersWithAge() {
      return this.users.map(user => ({
       ...user,
        age: calculateAge(user.birthDate)
      }));
    }
  },
  methods: {
    ...mapActions([
      'removeUser'
    ]),
    removeRow(user) {
      this.removeUser(user);
    },

  },
}
</script>