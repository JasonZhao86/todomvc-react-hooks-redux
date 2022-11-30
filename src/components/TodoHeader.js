import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_todo } from '../store/actions/todos'

const TodoHeader = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const addTodo = (e) => {
    if (e.keyCode === 13) {
      dispatch(add_todo(name))
      setName('')
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={addTodo}
        autoFocus
      />
    </header>
  )
}

export default TodoHeader
