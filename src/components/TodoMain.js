import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { change_all } from '../store/actions/todos'

const TodoMain = () => {
  let todo_list = useSelector((state) => state.todos)
  const filter_type = useSelector((state) => state.filter)
  if (filter_type === 'Active') {
    todo_list = todo_list.filter((item) => !item.done)
  } else if (filter_type === 'Completed') {
    todo_list = todo_list.filter((item) => item.done)
  }

  const dispatch = useDispatch()

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={todo_list.every((item) => item.done)}
        onChange={(e) => dispatch(change_all(todo_list, e.target.checked))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todo_list.map((item) => (
          <TodoItem key={item.id} todo={item}></TodoItem>
        ))}
      </ul>
    </section>
  )
}

export default TodoMain
