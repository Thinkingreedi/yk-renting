// 获取页面滚动位置
import { useEffect, useState } from "react";
import { throttle } from "underscore"

export default function useScrollPosition() {
  // 状态来记录位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window滚动，使用underscore的throttle函数节流，每100ms执行一次
  useEffect(() => {
    const handleScroll = throttle(function () {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)

    window.addEventListener("scroll", handleScroll)
    // 在组件卸载时移除监听，避免内存泄漏
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}