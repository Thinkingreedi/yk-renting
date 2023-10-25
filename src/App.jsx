import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

// memo是React的高阶组件，用于优化组件性能,对props进行浅比较，如果props没有变化，就不会重新渲染
const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>header</div>
      {/* useRoutes是react-router-dom提供的一个路由钩子，用于匹配路由 */}
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App