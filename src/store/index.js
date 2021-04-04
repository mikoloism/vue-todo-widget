import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import storage from './../plugins/local-storage'
import Schems, { Types } from './../plugins/schems'
const { STRING, BOOLEAN } = Types
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    TodoLastUpdated: undefined,
    TodoLastInserted: undefined,
    TodoItems: [],
    TodoSchema: Schems({
      id: {
        type: STRING,
      },
      title: {
        type: STRING,
        def: 'Simple Title Todo',
      },
      description: {
        type: STRING,
        default: '',
      },
      isDone: {
        type: BOOLEAN,
        default: false,
      },
    }),
    TodoSyncing: false,
    TodoSynced: [false, undefined],
  },
  actions: {
    TODO_VALIDATION: ({ state }, prop) => state.TodoSchema.validate(prop),
    TODO_READ: ({ state }, index) => {
      const id = _.isLength(index) ? `todo-item--${index}` : index
      if (index) return _.filter(state.TodoItems, (item) => item.id === id)
      return state.TodoItems
    },
    TODO_INSERT: async ({ dispatch, commit }, todo) => {
      if (todo.title) {
        return dispatch('TODO_VALIDATION', {
          ...todo,
          id: _.uniqueId('todo-item--'),
        })
          .then(({ res }) => {
            console.log(res)
            commit('TODO_INSERT', res)
            return true
          })
          .catch((err) => {
            throw err
          })
      } else return false
    },
    TODO_DELETE: async ({ dispatch, commit }, index) => {
      return dispatch('TODO_READ', index)
        .then((todo) => {
          commit('TODO_DELETE', todo)
          return true
        })
        .catch((err) => {
          throw err
        })
    },
    TODO_UPDATE: ({ dispatch }, index, updated) => {
      return dispatch('TODO_READ', index)
        .then((todoObject) => {
          const newTodo = { ...todoObject, ...updated }
          return dispatch('TODO_VALIDATION', newTodo)
            .then(({ res }) => {
              return dispatch('TODO_DELETE', res.id)
                .then(() => {
                  return dispatch('TODO_INSERT', res)
                    .then(() => res)
                    .catch(() => false)
                })
                .catch((err) => {
                  throw err
                })
            })
            .catch((err) => {
              throw err
            })
        })
        .catch((err) => {
          throw err
        })
    },
    TODO_CHANGE: ({ commit, dispatch }, index, changed) => {
      dispatch('TODO_READ', index)
        .then((item) => commit('TODO_CHANGE', item, changed))
        .catch((err) => {
          throw err
        })
    },

    TODO_SYNC: async ({ commit, dispatch }) => {
      return dispatch('TODO_READ')
        .then((items) => {
          commit('TODO_SYNCED')
          return storage().sync(items)
        })
        .catch((err) => {
          throw err
        })
    },
    TODO_READ_SYNC: () => storage().parse(),
    TODO_LAST_INSERT_SYNC: ({ state }) =>
      storage().push(state.TodoLastInserted),
    TODO_LAST_UPDATE_SYNC: ({ state }) => storage().push(state.TodoLastUpdated),
  },
  mutations: {
    TODO_INSERT: (state, todo) => {
      state.TodoItems.push(todo)
      state.TodoLastInserted = todo
    },
    TODO_DELETE: (state, todoObject) => {
      if (todoObject)
        _.remove(state.TodoItems, (item) => item.id === todoObject.id)
    },
    TODO_TOGGLE_CHECK: ({ TodoItems }, index) => {
      const selectedItem = _.filter(TodoItems, (item) => item.id === index)
      if (selectedItem.length > 0)
        selectedItem[0].isDone = !selectedItem[0].isDone
      console.log(selectedItem)
    },
    TODO_CHANGE: ({ TodoItems }, prevItem, nextItem) => {
      const value = { ...prevItem, ...nextItem }
      const selected = _.filter(TodoItems, (item) => item.id === prevItem.id)
      if (selected.length > 0) selected[0] = { ...value }
    },
    TODO_SYNCED: (state) => {
      state.TodoSynced = [true, new Date()]
    },
  },
  modules: {},
})
