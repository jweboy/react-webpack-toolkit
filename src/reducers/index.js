const createReducers = (state = [], action) => {
  switch (action.type) {
  case 'LOGIN':
    console.log(state)
    return state.push({
      status: 'success',
    })
  case 'GET_SORT_LIST':
    console.log(action)
    return action.id
  default:
    return state
  }
}

export default createReducers
