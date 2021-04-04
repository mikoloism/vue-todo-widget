<template #WgTodoItemCheckbox>
  <div class="wg-todo__checkbox-wrapper">
    <input
      type="checkbox"
      :name="`todo-check-${index}`"
      :id="`todo-check-${index}`"
      :checked="checked ? 'checked' : ''"
      @change="this.trigger"
    />
  </div>
</template>
<script>
export default {
  name: 'WgTodoItemCheckbox',
  props: {
    index: [String, Number],
    checking: Object,
    checked: Boolean,
  },
  methods: {
    trigger() {
      this.$emit('checking')
    },
  },
}
</script>
