// 将字符串转为对象形式
function styleStrToObject(styleStr) {
  // 代码片段基于Stack Overflow修改
  const obj = {}
  // 将-连接符转为驼峰，使用正则去除末尾分号和可能存在的空格，使用spilt方法将样式字符串分割成属性值对数组
  const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  }).replace(/;\s?$/g, "").split(/:|;/g)
  // 循环遍历属性值对数组，将属性名和属性值添加到对象中，通过正则去除空格
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "")
  }

  return obj
}

export default styleStrToObject
