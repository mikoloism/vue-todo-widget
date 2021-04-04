<template #WgTodoItem>
  <li class="wg-todo__item-box flex align-items-start list-group-item-action">
    <wg-todo-item-wrapper
      v-if="1 + 1 != 0"
      :header="header"
      :description="description"
      :checked="checked"
      :index="index"
    />
    <wg-todo-item-options v-else />
  </li>
</template>
<script>
import WgTodoItemWrapper from './item/wrapper'
import WgTodoItemOptions from './item/options'
export default {
  name: 'WgTodoItem',
  props: {
    index: [Number, String],
    header: String,
    description: String,
    checked: { type: Boolean, default: false },
  },
  components: { WgTodoItemWrapper, WgTodoItemOptions },
}
</script>

<style lang="scss">
.wg-todo {
  &__item-box {
    list-style: none;
    padding: 0.6rem 0.1rem 0;
    border-radius: 1rem;
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
