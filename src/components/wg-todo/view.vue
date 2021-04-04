<template>
  <!-- * may use them with <wg-todo-view name="list | form" /> -->
  <wg-todo-form :view="this.view" v-if="this.current === 'form'" />
  <wg-todo-form :view="this.view" v-else-if="this.current === 'form-edit'" />
  <wg-todo-list :view="this.view" v-else-if="this.current === 'list-one'" />
  <wg-todo-list :view="this.view" v-else />
</template>

<script>
import WgTodoList from '@/views/wg-todo/list'
import WgTodoForm from '@/views/wg-todo/form'
export default {
  name: 'wg-todo-view',
  props: ['current', 'view'],
  methods: {},
  components: { WgTodoList, WgTodoForm },
}
</script>
