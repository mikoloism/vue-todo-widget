<template>
  <b-col
    tag="div"
    cols="12"
    class="wg-todo--width wg-todo--height p-0 text-justify mb-2 mt-3 w-100 overflow-auto"
  >
    <wg-todo-view
      today="true"
      :view="this.view"
      :current="this.view.reader()"
    />
  </b-col>
</template>
<script>
import WgTodoView from '@/components/wg-todo/view'
export default {
  name: 'WgTodoBody',
  props: ['view'],
  components: { WgTodoView },
}
</script>
