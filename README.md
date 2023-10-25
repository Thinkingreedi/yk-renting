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
8. redux代码规范如下:
  * redux目前我们学习了两种模式，在项目实战中尽量两个都用起来，都需要掌握;
  * 每个模块有自己独立的reducer或者slice，之后合并在一起;
  * redux中会存在共享的状态、从服务器获取到的数据状态;
9. 网络请求采用axios
  * 对axios进行二次封装;
  * 所有的模块请求会放到一个请求文件中单独管理;
10. 项目使用AntDesign、MUI (Material UI)
  * 项目本身的设计风格更多偏向于Material Ul，但是课程中也会尽量讲到AntDesign的使用方法;
  * 项目中某些AntDesign、MUI中的组件会被拿过来使用;
  * 但是多部分组件还是自己进行编写、封装、实现;
11. 其他规范在项目中根据实际情况决定和编写
