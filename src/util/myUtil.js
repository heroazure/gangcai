/**
 * Created by xuwei on 2017/5/3.
 */
let util={}
util.setTitle=function (t) {
  document.title = t
  let i = document.createElement('iframe')
  i.src = '//m.baidu.com/favicon.ico'
  i.style.display = 'none'
  i.onload = function () {
    setTimeout(function () {
      i.remove()
    }, 0)
  }
  document.body.appendChild(i)
}

export default util
