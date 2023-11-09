# yk-renting -- 在线租房

## 技术选型

* `react18 + @reduxjs/toolkit + styled-components + m-ui + antd + react-router-domV6`



## 项目简介

* 全球民宿公寓短租住宿预订平台，可以查看各地房源，热门目的地，目的地旅游景点，高分房源，好评房源等。提供丰富多样的房源信息，包括公寓、别墅、酒店等多种选择。可以通过平台查看详细的房源信息和图片，快速了解房屋的位置、面积、价格等关键信息。平台致力于提供便捷、安全、可靠的租房服务~



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
  * 其他hooks相关代码(比如自定义hooks);
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



## 项目预览

* **首页-大图展示：**

![](C:/Users/A-SHIYI/Desktop/Demo/yk-renting/README.assets/01.png)

* **首页-内容展示：**

![](C:/Users/A-SHIYI/Desktop/Demo/yk-renting/README.assets/02.png)

* **详情-更多内容：**

![](C:/Users/A-SHIYI/Desktop/Demo/yk-renting/README.assets/03.png)

* **详情-五图展示：**

![](C:/Users/A-SHIYI/Desktop/Demo/yk-renting/README.assets/04.png)

* **详情-图片查看：**

![](C:/Users/A-SHIYI/Desktop/Demo/yk-renting/README.assets/05.png)
