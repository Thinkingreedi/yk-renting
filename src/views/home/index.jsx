import React, { memo, useEffect } from 'react'
import myRequest from '@/services'
import { useState } from 'react'

const Home = memo(() => {
  //定义状态
  const [highScore, setHighScore] = useState({})

  // 发起请求
  useEffect(() => {
    myRequest.get({ url: "/home/highScore" }).then(res => {
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h2>{highScore.subtitle}</h2>
      <ul>
        {
          highScore.list && highScore.list.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.name}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
})

export default Home
