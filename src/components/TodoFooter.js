import { useDispatch, useSelector } from 'react-redux'
import { change_type } from '../store/actions/filter'
import { clear_todos } from '../store/actions/todos'

const TodoFooter = () => {
  const types = [
    { id: 1, href: '#/', textHtml: 'All' },
    { id: 2, href: '#/active', textHtml: 'Active' },
    { id: 3, href: '#/completed', textHtml: 'Completed' },
  ]

  const filter_type = useSelector((state) => state.filter)
  const todo_list = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const done_ids = todo_list
    .map((item) => item.done && item.id)
    .filter((item) => item)

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todo_list.filter((item) => !item.done).length}</strong> item
        left
      </span>
      <ul className="filters">
        {types.map((item) => (
          <li key={item.id}>
            <a
              className={filter_type === item.textHtml ? 'selected' : ''}
              href={item.href}
              onClick={() => dispatch(change_type(item.textHtml))}
            >
              {item.textHtml}
            </a>
          </li>
        ))}
      </ul>
      {todo_list.filter((item) => item.done).length > 0 && (
        <button
          className="clear-completed"
          onClick={() => dispatch(clear_todos(done_ids))}
        >
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default TodoFooter
