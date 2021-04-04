<template>
  <li
    :class="`wg-todo__item-box flex align-items-start list-group-item-action ${
      checked ? 'disabled' : ''
    }`"
  >
    <wg-todo-item-wrapper
      :header="header"
      :description="description"
      :checked="checked"
      :index="index"
    />
    <!-- <wg-todo-item-options v-else /> -->
  </li>
</template>
<script>
import WgTodoItemWrapper from './item-comp/wrapper.vue'
// import WgTodoItemOptions from './item/options'
export default {
  name: 'WgTodoItem',
  props: {
    index: [Number, String],
    header: String,
    description: String,
    checked: { type: Boolean, default: false },
  },
  components: { WgTodoItemWrapper }, // WgTodoItemOptions
}
</script>

<style lang="scss">
.wg-todo {
  &__item-box {
    order: 1;
    list-style: none;
    padding: 0.6rem 0.1rem 0;
    border-radius: 1rem;
    &[done='true'] {
      opacity: 0.3;
      order: 9;
    }
  }
  &__item {
    display: flex;
  }
  &__checkbox-wrapper {
    width: 25px;
    padding: 0;
    padding-top: 7%;
    margin: 0;
  }
  &__header {
    padding: 0.7rem;
    width: calc(100% - 37px);
    // border: 3px solid $secondary;
    border-radius: 0.6rem;
  }
}
</style>
