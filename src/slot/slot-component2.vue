<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: "slot-component1"
  }
</script>

<style scoped>

</style>