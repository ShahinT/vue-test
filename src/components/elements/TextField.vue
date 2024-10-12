<template>
  <div>
    <label :for="computedId">
      {{ label }}
    </label>
    <input
        :class="error !== '' && 'error'"
        :id="computedId"
        :type="type"
        :placeholder="placeholder"
        v-model="inputValue"
    >
    <div class="h-6 flex items-center text-xs text-red-700">
      {{error}}
    </div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: [String, Number, Date],
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedId() {
      return this.id || `text-field-${this._uid}`;
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>

<style scoped>
input {
  @apply appearance-none block w-full text-gray-700 rounded-lg py-3 px-4 mb-1 ;
  border: 1px solid var(--border-color);
}
label {
  @apply text-sm text-gray-600 uppercase font-semibold;
}
.error{
  border: 1px solid red;
}
</style>