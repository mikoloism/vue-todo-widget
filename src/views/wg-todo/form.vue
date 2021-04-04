<template>
  <b-form @submit="(e) => e.preventDefault()" class="p-3 pt-2 pd-2">
    <b-form-group>
      <b-input
        autocomplete="off"
        title="title of you todo"
        placeholder="What is your focus today?"
        class="h4"
        @change="inputChange"
        :value="inputValue"
      />
    </b-form-group>
    <b-form-group>
      <b-textarea
        title="description of you todo"
        placeholder="description"
        no-resize
        rows="8"
        @change="textareaChange"
        :value="textareaValue"
      />
    </b-form-group>
    <b-form-group content-cols="8">
      <b-btn
        class="ml-1 mr-1"
        variant="primary"
        type="submit"
        @click="this.handleSubmit"
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
  name: 'WgTodoForm',
  props: ['view'],
  data() {
    return {
      inputValue: '',
      textareaValue: '',
    }
  },
  methods: {
    inputChange(value) {
      this.inputValue = value
    },
    textareaChange(value) {
      this.textareaValue = value
    },
    handleSubmit() {
      const [title, description] = [this.inputValue, this.textareaValue]
      useAction(
        (res) => {
          if (res) this.view.to('list')
        },
        'TODO_INSERT',
        { title, description }
      )
    },
  },
}
</script>
