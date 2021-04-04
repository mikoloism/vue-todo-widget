import Store from '@/store'
const useAction = (response, actionsType, ...params) => {
  return Store.dispatch(actionsType, ...params)
    .then(response)
    .catch((err) => {
      throw err
    })
}
export default useAction
