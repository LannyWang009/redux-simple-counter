
// ----------
// Util
// ----------
const byId = (id) => document.getElementById(id)
const squigglyLine = () => console.log('~~~~~~~~~~~~~~~~~~~~~')
const deepCopy = (x) => JSON.parse(JSON.stringify(x))

// ==============================================================
// RENDER

const counterEl = byId('counterValue')
const render = () => {
  const currentState = getState()
  counterEl.innerHTML = Immutable.get(currentState, 'counter')
  counterEl.style.color = Immutable.get(currentState, 'color')
}

// ==============================================================
// Initial Value and Reducer
const initialValue = Immutable.fromJS({
  color: 'blue',
  counter: 0
})

const reducer = (currentState = initialValue, action) => {
  // to write an error message if the assertion is false
  console.assert(Immutable.isImmutable(currentState), 'Redux store should be an immutable value.')

  let nextState = currentState
  let { type } = action
  //  let type = action.type
  if (type === 'INCREMENT') {
    console.log('action', action)
    nextState = Immutable.updateIn(currentState, ['counter'], (c) => c + action.value)
  } else if (type === 'CHANGECOLOR') {
    console.log('action', action)
    nextState = Immutable.set(currentState, 'color', action.color)
  } return nextState
}

// ==============================================================
// Create Redux Store
const { createStore } = Redux

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer)

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(render)

// dispatch an empty 'INIT' event to trigger the first render
dispatch({ type: 'INIT' })

// ==============================================================
// DOM EVENTS
const addEvents = () => {
// Dispatch the "INCREMENT" action every time the +1 button is pressed
  const increment1Button = document.getElementById('increment1')
  increment1Button.addEventListener('click', e => dispatch({ type: 'INCREMENT', value: 1 }))

  // Dispatch the "INCREMENT" action every time the -1 button is pressed
  const decrement1Button = document.getElementById('decrement1')
  decrement1Button.addEventListener('click', e => dispatch({ type: 'INCREMENT', value: -1 }))

  // Dispatch the "INCREMENT" action every time the +5 button is pressed
  const increment5Button = document.getElementById('increment5')
  increment5Button.addEventListener('click', e => dispatch({ type: 'INCREMENT', value: 5 }))

  // Dispatch the "INCREMENT" action every time the -5 button is pressed
  const decrement5Button = document.getElementById('decrement5')
  decrement5Button.addEventListener('click', e => dispatch({ type: 'INCREMENT', value: -5 }))

  // Dispatch the "CHANGECOLOR" action every time the color is submitted
  const colorForm = document.getElementById('colorForm')

  colorForm.addEventListener('submit', e => {
    let formData = new FormData(colorForm)
    e.preventDefault()
    console.log('you submitted the form')
    let newColor = formData.get('color')
    console.log(newColor)
    dispatch({ type: 'CHANGECOLOR', color: newColor })
  })
}

addEvents()
