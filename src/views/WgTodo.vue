<template #WgTodo>
  <b-row class="wg-todo--width" align-h="center" align-v="center">
    <b-col cols="11">
      <b-row
        tag="section"
        align-h="center"
        class="rounded overflow-hidden border border-dark"
      >
        <wg-todo-header :currentRoute="currentRoute" @toNext="setNextRoute" />
        <!--  -->
        <wg-todo-body />
        <!--  -->
        <wg-todo-footer />
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import WgTodoHeader from '@/layouts/wg-todo/header'
import WgTodoBody from '@/layouts/wg-todo/body'
import WgTodoFooter from '@/layouts/wg-todo/footer'
export default {
  name: 'WgTodo',
  data() {
    return { currentRoute: '/todo' }
  },
  methods: {
    setNextRoute() {
      this.currentRoute =
        this.$router.currentRoute.path === '/todo' ? '/todo/new' : '/todo'
    },
  },
  components: { WgTodoHeader, WgTodoBody, WgTodoFooter },
}
</script>

<style lang="scss">
$fix-size: 400px;
.wg-todo {
  &--height {
    max-height: $fix-size;
    min-height: $fix-size;
  }
  &--width {
    max-width: $fix-size;
  }
}
</style>
