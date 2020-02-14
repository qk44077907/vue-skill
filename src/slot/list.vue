<template>
  <ul>

    <li v-for="value in listData">
      {{value}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "list",
    props:['listData',"userName"],

  }
</script>

<style scoped>

</style>