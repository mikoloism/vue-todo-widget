<template #WHeader>
  <b-col tag="div" cols="12" class="mb-2">
    <b-row
      align-v="center"
      align-h="center"
      tag="header"
      class="text-light bg-primary"
    >
      <b-col cols="9" class="m-0 mt-1 p-1 h2" tag="h2">TO DO</b-col>
      <b-col cols="3">
        <router-link pill class="m-2 p-2" :to="currentRoute">
          <b-btn
            as="div"
            @click="this.trigger"
            pill
            :class="`p-0 wg-todo__btn-add ${router(
              '',
              'wg-todo__btn-add--active'
            )}`"
            :variant="router('primary', 'danger')"
          >
            <b-icon-plus v-if="currentRoute === '/todo'" variant="light" />
            <b-icon-x v-else variant="light" />
          </b-btn>
        </router-link>
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
export default {
  name: 'WHeader',
  props: { currentRoute: String },
  data() {
    return {}
  },
  methods: {
    router(next, prev) {
      return this.currentRoute === '/todo' ? next : prev
    },
    trigger() {
      this.$emit('toNext')
    },
  },
}
</script>
<style lang="scss">
.wg-todo {
  &__btn-add {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 0.4em 1em 0.4em 0;
    font-size: 1.9em;
    border: 1px;
    transition: 0.2s ease;
    &:hover {
      margin: 0.4em 1em 0.4em 0;
      border: 1px;

      transform: scale(0.9);
    }
  }
}
</style>
