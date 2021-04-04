<template #WgTodoItemBody>
  <p class="wg-todo__description mb-1 mt-3 text-break" v-if="text.length > 0">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'WgTodoItemBody',
  props: {
    text: String,
  },
}
</script>
