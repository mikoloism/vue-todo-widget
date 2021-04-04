<template #WgTodoItemOptions>
  <b-col cols="12">
    <b-btn class="mr-1 ml-1" variant="danger">
      <b-icon-trash />
    </b-btn>
    <b-btn class="mr-1 ml-1" variant="outline-warning">
      <b-icon-star />
    </b-btn>
  </b-col>
</template>

<script>
export default {
  name: 'WgTodoItemOptions',
}
</script>
