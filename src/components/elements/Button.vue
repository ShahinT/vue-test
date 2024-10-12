<template>
  <button
      @click.prevent="onClick()"
      type="button"
      :class="`inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[${PRIMARY_COLOR_HOVER}]`"
  >
    {{buttonText}}
  </button>
</template>

<script>

import {PRIMARY_COLOR_HOVER} from "@/constants/constants";

export default {
  methods: {
    PRIMARY_COLOR_HOVER() {
      return PRIMARY_COLOR_HOVER
    }
  },
  props: {
    onClick: {
      type: Function,
      default: () => '',
    },
    buttonText: {
      type: String,
      default: 'Button',
    },
  },
}
</script>
