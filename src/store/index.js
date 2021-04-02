import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import storage from './../plugins/local-storage'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    todoLastInserted: undefined,
    todoLastInsertId: undefined,
    todoItems: [{ id: 0, title: 'Hi' }],
  },
  actions: {},
  mutations: {
    alt: () => window.alert('hi'),
    todoUpdate: (state, id, newItem) => ({ state, id, newItem }),
    todoRemove: (state, id) => {
      const selectedItem = _.filter(state.todo.items, { id })
      const removedItem = _.remove(state.todo.items, (item) =>
        _.isEqual(item, selectedItem)
      )
      return removedItem
    },
    todoInsert: (state, item) => {
      const id = _.uniqueId('todo-item-')
      const todoItem = { id, ...item }
      state.todoItems.push({ ...todoItem })
      state.todoLastInsertId = id
      state.todoLastInserted = todoItem
      return id
    },
    todoGet: (state, id) =>
      id ? _.filter(state, (item) => _.isEqual(item.id, id)) : state.todoItems,
    todoSync: (state) => {
      const { todoItems } = state
      return storage().sync(todoItems)
    },
    todoDownload: () => storage().parse(),
    todoUpload: (state) => storage().push(state.todoLastInserted),
  },
  modules: {},
})
