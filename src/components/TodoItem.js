import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { change_done, change_name, delete_todo } from '../store/actions/todos'

const TodoItem = ({ todo }) => {
  const [current, setCurrent] = useState('')
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [current])

  return (
    <li
      className={[
        todo.done ? 'completed' : '',
        current === todo.id ? 'editing' : '',
      ].join(' ')}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.done}
          onChange={() => dispatch(change_done(todo))}
        />
        <label onDoubleClick={() => setCurrent(todo.id)}>{todo.name}</label>
        <button
          className="destroy"
          onClick={() => dispatch(delete_todo(todo.id))}
        />
      </div>
      <input
        className="edit"
        value={todo.name}
        ref={inputRef}
        onChange={() => dispatch(change_name(todo.id, current))}
        onBlur={() => setCurrent('')}
      />
    </li>
  )
}

export default TodoItem
