<template>
  <li class="wg-todo__item-box flex align-items-start list-group-item-action">
    <label class="wg-todo__item pl-3" :for="`todo-check-${index}`">
      <div class="wg-todo__checkbox-wrapper">
        <input
          type="checkbox"
          :name="`todo-check-${index}`"
          :id="`todo-check-${index}`"
          :checked="checked ? 'checked' : ''"
          @change="this.handleCheck"
        />
      </div>
      <section class="wg-todo__content text-wrap text-break">
        <div class="wg-todo__header w-100">
          <h4 class="h4 font-weight-bold mb-1">
            {{ header }}
          </h4>
        </div>
        <p class="wg-todo__description mb-1 mt-3 text-break" v-if="description">
          {{ description }}
        </p>
      </section>
    </label>
  </li>
</template>
<script>
export default {
  props: {
    index: [Number, String],
    header: String,
    description: String,
    checked: { type: Boolean, default: false },
  },
  methods: {
    handleCheck(e) {
      this.$store.commit('TODO_TOGGLE_CHECK', this.index)
    },
  },
}
</script>

<style lang="scss">
.wg-todo {
  &__item-box {
    list-style: none;
    padding: 0.6rem 0.1rem 0;
    border-radius: 1rem;
  }
  &__item {
    display: flex;
  }
  &__checkbox-wrapper {
    width: 25px;
    padding: 0;
    padding-top: 7%;
    margin: 0;
  }
  &__header {
    padding: 0.7rem;
    width: calc(100% - 37px);
    // border: 3px solid $secondary;
    border-radius: 0.6rem;
  }
}
</style>
