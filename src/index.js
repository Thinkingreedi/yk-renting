import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';
import "normalize.css"
import "./assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < React.StrictMode >
    {/* 延迟加载，直到异步加载的组件准备好后再显示正常内容 */}
    < Suspense fallback="loading" >
      {/* 哈希模式管理路由状态 */}
      < HashRouter >
        <App />
      </HashRouter >
    </Suspense >
  </React.StrictMode >
);

