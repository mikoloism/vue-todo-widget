<template>
  <b-row class="wg-todo--width" align-h="center" align-v="center">
    <b-col cols="11">
      <b-row
        tag="section"
        align-h="center"
        class="rounded overflow-hidden border border-dark"
      >
        <w-header :currentRoute="currentRoute" @toNext="setNextRoute" />
        <!--  -->
        <w-body />
        <!--  -->
        <w-footer />
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import WHeader from '@/layouts/widget/header'
import WBody from '@/layouts/widget/body'
import WFooter from '@/layouts/widget/footer'
export default {
  name: 'WidgetTodo',
  data() {
    return { currentRoute: '/todo' }
  },
  methods: {
    setNextRoute() {
      this.currentRoute =
        this.$router.currentRoute.path === '/todo' ? '/todo/new' : '/todo'
    },
  },
  components: { WHeader, WBody, WFooter },
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
