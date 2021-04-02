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
        <b-btn pill class="m-2 p-2" variant="primary"><b-icon-plus /></b-btn>
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
export default {
  name: 'WHeader',
}
</script>
