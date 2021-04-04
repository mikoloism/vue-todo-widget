<template>
  <b-col tag="div" cols="12" class="mb-2">
    <b-row
      align-v="center"
      align-h="center"
      tag="header"
      class="text-light bg-primary"
    >
      <b-col cols="9" class="m-0 mt-1 p-1 h2" tag="h2">TO DO</b-col>
      <b-col cols="3">
        <b-btn
          pill
          @click="this.trigger"
          :class="`m-2 p-2 p-0 wg-todo__btn-add ${this.toggler(
            'wg-todo__btn-add--active',
            ''
          )}`"
          :variant="this.toggler('primary', 'danger')"
        >
          <b-icon :icon="this.toggler('plus', 'x')" variant="light" />
        </b-btn>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'WHeader',
  props: ['view'],
  data() {
    return {}
  },
  methods: {
    toggler(ifTrue = true, ifFalse = false, forWhat = 'list') {
      return this.view.reader() === forWhat ? ifTrue : ifFalse
    },
    trigger() {
      this.$emit('toggle', this.view.reader() === 'list' ? 'form' : 'list')
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
