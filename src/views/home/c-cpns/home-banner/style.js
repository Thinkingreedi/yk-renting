import styled from "styled-components";
// import coverImg from "@/assets/img/cover_01.jpeg"
// import是ES6引入模块的语法，可以在编译时加载模块，因此它的路径必须是一个字符串常量
// require是CommonJS引入模块的语法，可以在运行时加载模块，因此它的路径可以是一个字符串表达式

export const BannerWrapper = styled.div`
  height: 529px;
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`
