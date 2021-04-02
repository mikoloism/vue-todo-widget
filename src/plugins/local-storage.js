import _ from 'lodash'

const json = {
  parse: (jsonString) => JSON.parse(jsonString),
  stringify: (jsonObject) => JSON.stringify(jsonObject),
}
const STORAGE = window.localStorage
STORAGE.setItem('TODO_ITEMS', JSON.stringify({}))
const storage = (STORAGE_NAME = 'TODO_ITEMS') => {
  if (_.isNull(STORAGE.getItem(STORAGE_NAME))) {
    STORAGE.setItem(STORAGE_NAME, json.stringify([]))
  }
  return {
    get: () => STORAGE.getItem(STORAGE_NAME),
    parse: () => json.parse(storage().get()),
    find: (item) => {
      const data = storage().parse()
      const isAvailable = _.find(data, item)
      return isAvailable
    },
    push: (item) => {
      const prevItems = storage().parse()
      const newItems = [...prevItems, item]
      return storage().save(newItems)
    },
    save: (item) => {
      STORAGE.setItem(STORAGE_NAME, json.stringify(item))
      const isInserted = storage().find(item)
      return isInserted
    },
    sync: (items) => {
      const prevItems = storage().parse()
      const diff = _.difference(prevItems, items)
      console.log(diff)
    },
  }
}

export default storage
