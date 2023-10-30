// styled-components 是一个流行的 CSS-in-JS 库，用于在 React 项目中编写组件样式。它允许你使用 JavaScript 编写 CSS 样式，并将其直接应用于组件。
/*
    header布局思路
    左侧flex: 1
    中间宽度自适应
    右侧flex: 1且flex-end
*/
import styled from "styled-components"

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #eee;
`