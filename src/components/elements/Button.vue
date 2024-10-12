<template>
  <button @click.prevent="onClick()" :type="type" :class="variant">
    <slot />
  </button>
</template>

<script>

export default {
  props: {
    onClick: {
      type: Function,
      default: () => '',
    },
    type: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<style scoped>
.primary {
  @apply flex items-center justify-center outline-none rounded-xl px-4 h-10  text-white shadow-sm;
  background-color: var(--primary-color);
}

.primary:hover {
  background-color: var(--primary-color-hover);
}

.danger {
  @apply flex items-center justify-center outline-none rounded-xl px-4 h-10  text-white shadow-sm;
  background-color: var(--danger-color);
}

.danger:hover {
  background-color: var(--danger-color-hover);
}

.icon {
  @apply w-10 h-10 flex items-center justify-center cursor-pointer rounded-full
}
.icon:hover {
  background-color: var(--icon-button-hover);
}
</style>