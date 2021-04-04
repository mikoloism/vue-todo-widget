<template>
  <b-col
    align-self="center"
    tag="div"
    cols="12"
    style="height: 1em; border-top: 1px solid gray"
    class="mt-2"
  >
    <b-row
      style="transform: scale(0.6)"
      align-h="center"
      align-v="center"
      tag="footer"
      class="p-0 m-0"
    >
      <span class="text-muted" style="margin-top: -0.3rem">
        powerd by
        <b-link href="https://github.com/miko-github">
          <b-icon-github class="ml-1 mr-2" />
          <span class="font-weight-bold">#miko</span> &COPY;
          {{ new Date().getFullYear() }}
        </b-link>
      </span>
    </b-row>
  </b-col>
</template>
<script>
export default {
  name: 'WgTodoFooter',
}
</script>
