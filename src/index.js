const { createStore } = Redux

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer)

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

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
const colorButton = document.getElementById('colorform')
const colorSubmit = document.getElementById('colorSubmit')
colorSubmit.addEventListener('click', e=> console.log())
console.log(selectedColor.value)
