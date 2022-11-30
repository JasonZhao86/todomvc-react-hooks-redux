import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
import './styles/base.css'
import './styles/index.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_list } from './store/actions/todos'

const App = () => {
  const dispatch = useDispatch()
  /**
   * 本意就是只需要在组件渲染完成后通过redux thunks只发送一次axios请求获取list数据，
   * 但是编辑器提示需要依赖dispatch，原因是我们用到了redux中的dispatch这个函数。为
   * 了去掉这个warning，可以写上dispatch这个依赖，也不会有影响，因为只要store不变，
   * 它里面的useDispatch()方法就不会变，一个项目中只有一个全局的store，所以它里面的
   * useDispatch()方法也就不会变，因此这里写上despatch依赖也不会有问题，写上以后，
   * useEffect也只会在组件渲染完成后执行一次，组件更新时不会执行，因为store中的
   * useDispatch方法没有变。
   */
  useEffect(() => {
    // 如果不是清理函数，花括号不能去掉，否则会把dispatch执行结果反回，报错，回调函数如果有返回值必须是一个清理函数
    dispatch(get_list())
  }, [dispatch])

  return (
    <section className="todoapp">
      <TodoHeader></TodoHeader>
      <TodoMain></TodoMain>
      <TodoFooter></TodoFooter>
    </section>
  )
}

export default App
