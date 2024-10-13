<template>
  <div class="contents">
    <TextField
        v-for="formField in formTextFields"
        :key="formField.model"
        :type="formField.type"
        :label="formField.label"
        :placeholder="formField.placeholder"
        v-model="user[formField.model]"
        :error="errors[formField.model]"
        class="w-1/3 px-4"
    />
  </div>
</template>

<script>
import TextField from "@/components/elements/TextField.vue";

export default {
  name: 'AddUserTextFields',
  components: {TextField},
  props: ["formTextFields", "errors", "user"]
}
</script>
