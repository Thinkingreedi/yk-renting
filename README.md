# yk-renting
## 租房网站PC端

## 项目规范

1. 文件夹、文件名称统一小写、多个单词以连接符(-)连接;
2. JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰;
3. CSS采用普通CSS和styled-component结合来编写(全局采用普通CSS、局部采用styled-component) ;
4. 整个项目不再使用class组件，统一使用函数式组件，并且全面拥抱Hooks;
5. 所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹;
6. 组件内部的状态，使用useState、useReducer; 业务数据全部放在redux中管理;
7. 函数组件内部基本按照如下顺序编写代码:
  * 组件内部state管理;
  * redux的hooks代码;
  * 其他hooks相关代码（比如自定义hooks) ;
  * 其他逻辑代码;
  * 返回JSX代码;
