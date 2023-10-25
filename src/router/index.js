import React from "react"
import { Navigate } from "react-router-dom"

/*
 使用 React.lazy() 和动态导入语法来异步加载项目中的 views/home 组件。
 懒加载组件可以优化应用的初始加载时间，只有在需要渲染该组件时才会进行加载;
 从而提高应用的性能和用户体验。
*/
const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/entire",
    element: <Entire />
  },
  {
    path: "/detail",
    element: <Detail />
  }
]

export default routes
