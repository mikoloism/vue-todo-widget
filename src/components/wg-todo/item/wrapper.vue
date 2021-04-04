<template>
  <label class="wg-todo__item pl-3" :for="`todo-check-${index}`">
    <wg-todo-item-checkbox
      :checked="checked"
      @checking="this.handleChecking"
      :index="index"
    />
    <section class="wg-todo__content text-wrap text-break">
      <wg-todo-item-header :text="header" />
      <wg-todo-item-body :text="description" />
    </section>
  </label>
</template>

<script>
import WgTodoItemCheckbox from './checkbox'
import WgTodoItemHeader from './header'
import WgTodoItemBody from './body'
export default {
  name: 'WgTodoItemWrapper',
  props: {
    header: String,
    description: String,
    index: [String, Number],
  },
  methods: {
    handleChecking(e) {
      this.$store.commit('TODO_TOGGLE_CHECK', this.index)
    },
  },
  components: { WgTodoItemCheckbox, WgTodoItemHeader, WgTodoItemBody },
}
</script>
