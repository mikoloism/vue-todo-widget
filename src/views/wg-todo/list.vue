<template>
  <b-list-group class="p-0 m-0 mr-3 ml-3 w-auto widget-todo__items-group">
    <wg-todo-item
      v-for="item in Items"
      :key="item.id"
      :index="item.id"
      :header="item.title"
      :done="item.isDone"
      :description="item.description"
    />
  </b-list-group>
</template>
<script>
import WgTodoItem from '@/components/wg-todo/item.vue'
import useAction from '@/plugins/useAction'
export default {
  name: 'WgTodoList',
  data() {
    return { Items: [] }
  },
  props: [],
  mounted() {
    useAction((items) => {
      this.Items = items
    }, 'TODO_READ')
  },
  components: { WgTodoItem },
}
</script>
