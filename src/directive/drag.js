let mousedownHandler, mousemoveHandler, mouseupHandler
function install(Vue) {
  Vue.directive('drag', {
    bind(el) {
      let flag = false
      let mouseX
      let mouseY
      let left
      let top
      el.addEventListener('mousedown', mousedownHandler = function (e) {
        flag = true
        console.log(el.offsetLeft, e.pageX);
        console.log((el.style.left));
        mouseX = e.pageX
        mouseY = e.pageY
        left = el.offsetLeft
        top = el.offsetTop
        el.dataset.oldUserSelect = el.style.userSelect
        el.style.userSelect = 'none'
      })
      el.addEventListener('mousemove', mousemoveHandler = function (e) {
        if (!flag) {
          return
        }

        let curMouseX = e.pageX
        let curMouseY = e.pageY
        let deltaX = curMouseX - mouseX
        let deltaY = curMouseY - mouseY
        el.style.left = left + deltaX + 'px'
        el.style.top = top + deltaY + 'px'

      })
      el.addEventListener('mouseup', mouseupHandler = function () {
        flag = false
        el.style.userSelect = el.dataset.oldUserSelect
      })
    },
    unbind(el) {
      el.removeEventListener('mousedown', mousedownHandler)
      el.removeEventListener('mousemove', mousemoveHandler)
      el.removeEventListener('mouseup', mouseupHandler)
      mousedownHandler = null
      mousemoveHandler = null
      mouseupHandler = null
    }
  })
}

export default install




