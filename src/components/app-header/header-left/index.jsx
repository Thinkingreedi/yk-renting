import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {

    const navgate = useNavigate()
    function logoClickHandle() {
        navgate('/home')
    }

    return (
        <LeftWrapper>
            <div className='logo' onClick={logoClickHandle}>
                <IconLogo />
            </div>
        </LeftWrapper>
    )
})

export default HeaderLeft