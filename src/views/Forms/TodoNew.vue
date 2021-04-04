<template>
  <b-row
    v-if="state === 'read'"
    class="m-0 text-justify"
    align-v="center"
    align-h="center"
  >
    <b-col class="mb-3 mt-1" cols="11">
      <b-card>
        <h3 class="h3">{{ prevTitle }}</h3>
        <b-card-body class="p-0 pt-1 pb-1" tag="p">
          {{ prevDescription }}
        </b-card-body>
      </b-card>
    </b-col>
    <b-col cols="12" class="mt-2">
      <b-btn class="mr-1 mt-1" variant="outline-info">
        <b-icon-star />
      </b-btn>
      <b-btn class="mr-1 ml-1" variant="outline-info">
        <b-icon-tags-fill />
      </b-btn>
      <b-btn class="mr-1 ml-1" variant="outline-info">
        <b-icon-pencil-fill />
      </b-btn>
      <b-btn class="mr-1 ml-1" variant="outline-danger">
        <b-icon-trash-fill />
      </b-btn>
    </b-col>
  </b-row>
  <b-form @submit="(e) => e.preventDefault()" v-else class="p-3 pt-2 pd-2">
    <b-form-group>
      <b-input
        autocomplete="off"
        title="title of you todo"
        placeholder="What is your focus today?"
        class="h4"
        @change="this.titleChange"
        :value="prevTitle"
      />
    </b-form-group>
    <b-form-group>
      <b-textarea
        title="description of you todo"
        placeholder="description"
        @change="this.descriptionChange"
        no-resize
        rows="8"
        :value="prevDescription"
      />
    </b-form-group>
    <b-form-group content-cols="8">
      <b-btn
        class="ml-1 mr-1"
        @click="onSubmit"
        variant="primary"
        type="submit"
        to="/todo"
      >
        <b-icon-archive />
      </b-btn>
      <b-btn class="mr-1 ml-1" variant="outline-danger" type="reset">
        <b-icon-arrow-clockwise />
      </b-btn>
    </b-form-group>
  </b-form>
</template>
<script>
import useAction from '@/plugins/useAction'
export default {
  name: 'TFNew',
  data() {
    return {
      canRedirect: false,
      state: 'create',
      prevTitle: '',
      prevDescription: '',
      todoId: undefined,
    }
  },
  methods: {
    titleChange(value) {
      this.prevTitle = value
    },
    descriptionChange(value) {
      this.prevDescription = value
    },
    onSubmit() {
      if (this.state === 'update') return false
      else if (this.state === 'create') {
        const title = this.prevTitle
        const description = this.prevDescription
        if (title) {
          useAction(
            (item) => {
              this.canRedirect = true
            },
            'TODO_INSERT',
            { title, description }
          )
        }
      }
    },
    setUpdater(id) {
      useAction(
        (item) => {
          this.state = 'update'
          this.prevTitle = item[0].title || ''
          this.prevDescription = item[0].description || ''
        },
        'TODO_READ',
        id
      )
    },
    setReader(id) {
      useAction(
        (item) => {
          this.state = 'read'
          this.prevTitle = item[0].title || ''
          this.prevDescription = item[0].description || ''
        },
        'TODO_READ',
        id
      )
    },
    setCreator() {
      this.prevTitle = ''
      this.prevDescription = ''
      this.state = 'create'
    },
  },
  mounted() {
    const call = (end = '', callback) => {
      const id = this.$route.params.id
      if (id) this.todoId = id
      const { path } = this.$route

      if (String(path).startsWith(`/todo/${end}`)) callback(id)
    }
    call('new', () => {})
    call('read', this.setReader)
    // if (path) this.setUpdater(id)
  },
}
</script>
