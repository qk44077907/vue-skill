function install(Vue) {
  Vue.filter('readmore',function (value,length,suffix) {
    return value.slice(0,length) + suffix;
  })
}
export default install