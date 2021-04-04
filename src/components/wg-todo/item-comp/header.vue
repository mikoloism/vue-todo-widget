<template>
  <div class="wg-todo__header w-100">
    <h4 class="h4 font-weight-bold mb-1">
      {{ text }}
    </h4>
  </div>
</template>
<script>
export default {
  name: 'WgTodoItemHeader',
  props: {
    text: String,
  },
}
</script>
