<template>
  <div>
    <slot :userName="userName"></slot>
  </div>
</template>

<script>

  export default {
    name: 'UserWrapper',
    props: {
      action: [Function],
    },
    data () {
      return {
        userName:''
      }
    },
    methods: {
      async getUserName () {
        try {
          const { data } = await this.action()
          this.userName = data
        } catch (error) {
          console.log(error)
        }
      }
    },
    created () {
      this.getUserName()
    },
  }
</script>

<style scoped>

</style>