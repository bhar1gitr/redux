import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Features/Counter/counters'
import "./App.css";

const App = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='main'>

      <h1>Counter</h1>

      <div>
        <button className='btn'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button className='btn'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default App