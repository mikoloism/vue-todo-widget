<template #WgTodoBody>
  <b-col
    tag="div"
    cols="12"
    class="wg-todo--width wg-todo--height p-0 text-justify mb-2 mt-3 w-100 overflow-auto"
  >
    <router-view />
  </b-col>
</template>
<script>
export default {
  name: 'WgTodoBody',
}
</script>
