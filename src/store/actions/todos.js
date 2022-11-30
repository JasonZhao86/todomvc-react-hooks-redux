import axios from 'axios'
import {
  TODOS_ADDTODO,
  TODOS_GETLIST,
  TODOS_CHANGEDONE,
  TODOS_DELETETODO,
  TODOS_CHANGENAME,
  TODOS_CLEARTODOS,
  TODOS_CHANGEALL,
} from '../action-types'

/**
 * 获取任务列表
 * @returns action
 */
const get_list = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:8888/todos')
    dispatch({
      type: TODOS_GETLIST,
      payload: res.data,
    })
  }
}

/**
 * 添加任务
 * @param {string} data 新增todo对象
 * @returns action
 */
const add_todo = (name) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:8888/todos', {
      name,
      done: false,
    })
    dispatch({
      type: TODOS_ADDTODO,
      payload: res.data,
    })
  }
}

/**
 * 修改任务的状态
 * @param {object} todo
 * @returns
 */
const change_done = (todo) => {
  return async (dispatch) => {
    const res = await axios.patch(`http://localhost:8888/todos/${todo.id}`, {
      id: todo.id,
      done: !todo.done,
    })
    dispatch({
      type: TODOS_CHANGEDONE,
      payload: res.data,
    })
  }
}

/**
 * 删除任务
 * @param {number} id
 * @returns
 */
const delete_todo = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:8888/todos/${id}`)
    dispatch({
      type: TODOS_DELETETODO,
      payload: id,
    })
  }
}

/**
 * 修改任务的名称
 * @param {string} name
 * @returns
 */
const change_name = (id, name) => {
  return async (dispatch) => {
    const res = await axios.patch(`http://localhost:8888/todos/${id}`, {
      id,
      name,
    })
    dispatch({
      type: TODOS_CHANGENAME,
      payload: res.data,
    })
  }
}

/**
 * 批量删除任务（json-server不支持批量删除接口）
 * @param {array} ids
 * @returns
 */
const clear_todos = (ids) => {
  return (dispatch) => {
    ids.forEach((id) => axios.delete(`http://localhost:8888/todos/${id}`))
    dispatch({
      type: TODOS_CLEARTODOS,
    })
  }
}

/**
 * 批量修改任务状态（json-server不支持批量删除接口）
 * @param {boolean} checked
 * @returns
 */
const change_all = (todo_list, checked) => {
  return async (dispatch) => {
    todo_list.forEach((item) =>
      axios.patch(`http://localhost:8888/todos/${item.id}`, {
        id: item.id,
        done: checked,
      })
    )

    dispatch({
      type: TODOS_CHANGEALL,
      payload: checked,
    })
  }
}

export {
  get_list,
  add_todo,
  change_done,
  delete_todo,
  change_name,
  clear_todos,
  change_all,
}
