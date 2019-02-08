const initialState = {
  value: 0
}

const reducer = (state = initialState, action) => {
  let { type } = action
  //  let type = action.type
  // let { value } = action
  if (type === 'INCREMENT') {
    console.log('action', action)
    return {
      value: state.value + action.value
    }
  }
  return state
}
