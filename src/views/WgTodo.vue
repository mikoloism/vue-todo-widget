<template>
  <b-row class="wg-todo--width" align-h="center" align-v="center">
    <b-col cols="11">
      <b-row
        tag="section"
        align-h="center"
        class="rounded overflow-hidden border border-dark"
      >
        <wg-todo-header :view="view" @toggle="this.forwardView" />
        <!--  -->
        <wg-todo-body :view="view" />
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
    return {
      currentView: 'list', // item, form-create,form-edit,
      view: {
        reader: this.getView,
        to: this.forwardView,
        current: this.currentView,
      },
    }
  },
  methods: {
    toggleView() {},
    getView() {
      return this.currentView
    },
    forwardView(to = 'list') {
      console.log(
        `[forwardView] (/views/wg-todo.vue) changed from <${this.currentView}> to <${to}>`
      )
      this.currentView = to
    },
    nextView() {
      return this.currentView === 'list' ? 'form' : 'list'
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
