<template>
  <b-list-group class="p-0 m-0 mr-3 ml-3 w-auto widget-todo__items-group">
    <t-item
      v-for="item in Items"
      :key="item.id"
      :index="item.id"
      :header="item.title"
      :checked="item.isDone"
      :description="item.description"
    />
  </b-list-group>
</template>
<script>
import TItem from '@/components/todo-item.vue'
import useAction from '@/plugins/useAction'
export default {
  name: 'TodoList',
  data() {
    return { Items: [] }
  },
  mounted() {
    useAction((items) => {
      this.Items = items
    }, 'TODO_READ')
  },
  components: { TItem },
}
</script>
