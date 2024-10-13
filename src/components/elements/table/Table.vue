<template>
  <table class="w-full text-sm text-left">
    <thead class="text-xs text-gray-700 uppercase bg-gray-200">
      <tr>
        <th v-for="(header, index) in headers" :key="index" class="px-6 py-3">
          {{header}}
        </th>
      </tr>
    </thead>
    <tbody class="relative">
    <template v-if="data.length > 0">
      <tr v-for="item in data" :key="item.id" class="bg-white border-b hover:bg-gray-50">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input
                @change="toggleSelection(item.id, $event)"
                type="checkbox"
                class="w-4 h-4 cursor-pointer"
            >
          </div>
        </td>
        <td v-for="dataKey in renderingDataKeys" :key="dataKey">
          {{item[dataKey]}}
        </td>
        <td class="justify-end flex">
          <ButtonComponent :on-click="() => $emit('removeRow', item.id)" variant="icon">
            <IconRemove :size="22" />
          </ButtonComponent>
        </td>
      </tr>
    </template>
    <template v-else>
      <div class="my-10 text-center text-gray-600 w-full absolute">
        There is no user added yet
      </div>
    </template>

    </tbody>
  </table>
</template>
<script>
import IconRemove from "@/icons/IconRemove.vue";
import ButtonComponent from "@/components/elements/Button.vue";

export default {
  name: "Table",
  components: {ButtonComponent, IconRemove},
  props: ["headers", "data", "renderingDataKeys"],
  data() {
    return {
      selectedRows: [],
    };
  },
  methods: {
    toggleSelection(id, event) {
      if (event.target.checked) {
        this.selectedRows.push(id);
      } else {
        this.selectedRows = this.selectedRows.filter(rowId => rowId !== id);
      }
      this.$emit("updateSelectedRows", this.selectedRows);
    },
  },
}
</script>
<style scoped>
td {
  @apply px-6 py-4
}
</style>