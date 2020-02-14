export default function WithGetListData (WrappedComponent) {
  return {
    render (h) {
      const slots = this.$slots
      const wrappedSlots = Object.keys(this.$slots).map((name)=>{
        //return self._t(name,null,{slot:name})
        return h('template', { slot: name }, slots[name])
      })

      return h(WrappedComponent, {
        on: this.$listeners,
        attrs: this.$attrs,
        props: {...WrappedComponent.props,listData:this.listData}
      }, wrappedSlots,) // 将 slots 作为 h 函数的第三个参数
    },
    data(){
      return {
        listData:[],
      }
    },

    props: {'action':[Function],
      ...WrappedComponent.props
    },
    methods:{
      async getListData () {
        try {
          const { data } = await this.action()
          this.listData = data
        } catch (error) {
          console.log(error)
        }
      }
    },
    created () {
      this.getListData()
    },
  }
}