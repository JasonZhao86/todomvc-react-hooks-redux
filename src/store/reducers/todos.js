import {
  TODOS_GETLIST,
  TODOS_ADDTODO,
  TODOS_CHANGEDONE,
  TODOS_DELETETODO,
  TODOS_CHANGENAME,
  TODOS_CLEARTODOS,
  TODOS_CHANGEALL,
} from '../action-types'

/**
 * 处理任务的列表数据
 * @param {*} state
 * @param {*} action
 * @returns
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case TODOS_GETLIST:
      return action.payload
    case TODOS_ADDTODO:
      return [...state, action.payload]
    case TODOS_CHANGEDONE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload
        } else {
          return item
        }
      })
    case TODOS_DELETETODO:
      return state.filter((item) => item.id !== action.payload)
    case TODOS_CHANGENAME:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload
        } else {
          return item
        }
      })
    case TODOS_CLEARTODOS:
      return state.filter((item) => !item.done)
    case TODOS_CHANGEALL:
      return state.map((item) => ({ ...item, done: action.payload }))
    default:
      return state
  }
}

export default todos
