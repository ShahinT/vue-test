<template>
  <div class="contents">
    <DropDown
        :options="professions"
        v-model="user.profession_id"
        label="Profession"
    />
    <DropDown
        :options="countries"
        v-model="user.country_id"
        label="Country"
    />
  </div>
</template>

<script>
import DropDown from "@/components/elements/DropDown.vue";

export default {
  name: 'AddUserDropDowns',
  components: {DropDown},
  props: ["professions", "countries", "user"]
}
</script>
