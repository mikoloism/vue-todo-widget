<template #WBody>
  <b-col tag="div" cols="12" class="mb-2">
    <b-card
      class="mt-2"
      v-for="item in this.Store.state.todoItems"
      :key="item.id"
    >
      <b-card-header>
        <h3>{{ item.title }}</h3>
      </b-card-header>
      <b-card-body v-if="item.description">
        {{ item.description }}
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script>
import Store from '@/store'
export default {
  name: 'WBody',
  data() {
    return { Store }
  },
}
</script>
