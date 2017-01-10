export const formatDate = (str) => {
  if (!str) {
    return
  }
  const oldDate = new Date(str)
  const nowDate = new Date()
  const timeDiff = nowDate - oldDate

  const timeObj = {
    s: 1000,
    m: 1000 * 60,
    h: 1000 * 60 * 60,
    d: 1000 * 60 * 60 * 24,
    M: 1000 * 60 * 60 * 24 * 31,
    Y: 1000 * 60 * 60 * 24 * 31 * 12
  }

  if (timeDiff < 0) {
    return
  } else if (timeDiff < timeObj.m) {
    return '刚刚'
  } else if (timeDiff < timeObj.h) {
    return parseInt(timeDiff / timeObj.m) + '分钟前'
  } else if (timeDiff < timeObj.d) {
    return parseInt(timeDiff / timeObj.h) + '小时前'
  } else if (timeDiff < timeObj.M) {
    return parseInt(timeDiff / timeObj.d) + '天前'
  } else if (timeDiff < timeObj.Y) {
    return parseInt(timeDiff / timeObj.M) + '月前'
  } else {
    return parseInt(timeDiff / timeObj.Y) + '年前'
  }
}
