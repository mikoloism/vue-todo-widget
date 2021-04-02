<template>
  <b-row id="widget__todo" align-h="center" align-v="center">
    <b-col cols="10">
      <b-row
        tag="section"
        align-h="center"
        class="rounded overflow-hidden border border-dark"
      >
        <w-header />
        <!--  -->
        <w-body id="widget__todo__body" class="rounded overflow-auto" />
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
    return { items: [] }
  },
  methods: {},
  components: { WHeader, WBody, WFooter },
  mounted() {},
}
</script>

<style lang="scss">
$fix-size: 400px;
#widget__todo {
  &__body {
    max-height: $fix-size;
    min-height: $fix-size;
  }
  max-width: $fix-size;
}
</style>
