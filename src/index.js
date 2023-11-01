import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import "normalize.css"
import "./assets/css/index.less"
import "antd/dist/antd.less"
import store from './store';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // < React.StrictMode >
  < Suspense fallback="loading" >
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        < HashRouter >
          <App />
        </HashRouter >
      </ThemeProvider>
    </Provider>
  </Suspense >
  // </React.StrictMode >
);

/*
  1. React.StrictMode 严格模式
     在严格模式下，react会对组件进行两次重复渲染
     第一次渲染用于收集组件的信息
     第二次渲染用于展示组件
     这个过程可能会导致某些组件重复发起相同的网络请求
     可以使用shouldComponentUpdate或者useMemo来避免重复渲染

  2. Suspense 延迟加载
     直到异步加载的组件准备好后再显示正常内容
  
  3. Provider 对象传递
      通过Provider对象将store对象传递给子组件
      子组件可以通过connect方法获取store对象中的数据
      也可以通过dispatch方法修改store对象中的数据

  4. ThemeProvider 主题管理
      通过ThemeProvider对象将theme对象传递给子组件
      子组件可以通过props.theme获取theme对象中的数据

  5. HashRouter 哈希路由
     哈希模式管理路由状态
*/
