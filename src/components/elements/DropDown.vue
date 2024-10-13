<template>
  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label>
      {{ label }}
    </label>
    <div class="relative">
      <select
          id="grid-state"
          v-model="selectedValue"
          class="block rounded-lg appearance-none w-full border border-gray-400 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
      >
        <option
            v-for="option in options"
            :value="option.value"
            v-text="option.text"
            :key="option.value"
        />
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <IconChevronDown />
      </div>
    </div>
  </div>
</template>

<script>
import IconChevronDown from "@/icons/IconChevronDown.vue";

export default {
  name: 'DropDown',
  components: {IconChevronDown},
  props: {
    options: {
      type: Array,
      default: () => [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
      ],
    },
    label: {
      type: String,
      default: 'Label',
    },
    modelValue: {
      type: Number,
      default: 1,
    }
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}
</script>

<style scoped>
label {
  @apply text-sm text-gray-600 uppercase font-semibold;
}
</style>
