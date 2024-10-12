<template>
  <div class="max-w-6xl mx-auto my-10">
    <div class="h-12 flex w-full justify-end">
      <Button v-if="selected.length > 0" variant="danger" :on-click="removeSelectedUserHandler">
        Delete selected rows
      </Button>
    </div>
    <Table
        @updateSelectedRows="updateSelectedRowsHandler"
        @removeRow="removeUserHandler"
        :headers="tableHeaders"
        :data="updatedUsers"
        :renderingDataKeys="renderingDataKeys"
    />
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import {calculateAge} from "@/utility/utility";
import {RENDERING_DATA_KEYS, TABLE_HEADERS} from "@/constants/constants";
import Table from "@/components/elements/table/Table.vue";
import Button from "@/components/elements/Button.vue";

export default {
  name: 'UserList',
  components: {
    Button,
    Table,
  },
  data() {
    return {
      selected: [],
      tableHeaders: TABLE_HEADERS,
      renderingDataKeys: RENDERING_DATA_KEYS
    };
  },
  computed: {
    ...mapGetters([
        "getUserAge"
    ]),
    ...mapState({
      users: state => state.userModule.users,
      professions: state => state.professionModule.professions,
      countries: state => state.countryModule.countries
    }),
    updatedUsers() {
      return this.users.map(user => ({
       ...user,
        name: `${user.firstName} ${user.lastName}`,
        age: calculateAge(user.birthDate),
        profession: this.professions.find(prof => prof.value === user.profession_id).text,
        country: this.countries.find(prof => prof.value === user.country_id).text,
      }));
    }
  },
  methods: {
    ...mapActions([
      'removeUsers'
    ]),
    removeUserHandler(user) {
      this.removeUsers([user]);
    },
    removeSelectedUserHandler() {
      this.removeUsers(this.selected);
    },
    updateSelectedRowsHandler(updatedSelectedRows){
      this.selected = updatedSelectedRows
    }

  },
}
</script>
