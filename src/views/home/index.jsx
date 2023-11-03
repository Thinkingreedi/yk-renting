import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import { isEmptyO } from '@/utils'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo,
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
          {/** 判断数据是否有值再渲染，防止数据更新二次渲染时不生效 */}
          {/** 折扣房源 */}
          {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
          {/** 值得推荐 */}
          {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
          {/** 可能想去 */}
          {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
          {/** 高性价比 */}
          {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
          {/** 高分好评 */}
          {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
          {/** 房源plus */}
          {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home
