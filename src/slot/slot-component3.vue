<template>
  <div>
    <slot :listData="listData"></slot>
  </div>
</template>

<script>

  export default {
    name: 'PageList',
    props: {
      action: [Function],
    },
    data () {
      return {
        listData: []
      }
    },
    methods: {
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
</script>

<style scoped>

</style>