import React, { memo } from 'react'
import { DetailWrapper } from './style'
import { useSelector } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'

const Detail = memo(() => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }))
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail
