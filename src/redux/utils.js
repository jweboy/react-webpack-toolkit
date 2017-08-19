//* Action Creator
export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.map((arg, index) => (action[argNames[index]] = args[index]))
  return action
}

//* Reducers Generate
export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (Object.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action)
  }
  return state
}
