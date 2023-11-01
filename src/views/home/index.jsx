import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  /** 派发异步的事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("***"))
  }, [dispatch])

  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className='content'>
          <div className="good-price">
            <SectionHeader title={goodPriceInfo.title}></SectionHeader>
            <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home
