import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './header-left'
import HeaderCenter from './header-center'
import HeaderRight from './header-right'

const AppHeader = memo(() => {
    return (
        <HeaderWrapper>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </HeaderWrapper>
    )
})

export default AppHeader