<template>
  <div class="mt-10">
    <add-user />
    <user-list />
  </div>
</template>

<script>
import AddUser from './components/add-user/AddUser.vue'
import UserList from './components/user-list/UserList.vue'

export default {
  name: 'App',
  components: {
    AddUser,
    UserList,
  },
}
</script>
