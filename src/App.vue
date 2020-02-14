<template>
  <div id="app">
    <div v-drag class="target">123</div>
    <div>{{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis modi nihil praesentium ullam. Accusantium dolorem eius facere harum, iste itaque laboriosam, libero maiores nulla, pariatur possimus repellat repellendus saepe temporibus?' | readmore(15,'打开更多')}}</div>

  <user-wrapper :action="getUserName" #default="{userName}">
    <list-wrapper :action="getListData" #default="{listData}">
      <list :list-data="listData" :user-name="userName"></list>
    </list-wrapper>
  </user-wrapper>
    <with-listdata :action="getListData"></with-listdata>
  </div>
</template>

<script>
import ListWrapper from './slot/slot-component3'
import UserWrapper from './slot/slot-component4'
import list from './slot/list'
import WithListData from './hoc/WithListData'

export default {
  name: 'App',
  components: {
    ListWrapper,
    UserWrapper,
    list,
    'WithListData':WithListData(list)
  },
  methods:{
    getListData(){
      return Promise.resolve({data:[1,2,3]})
    },
    getUserName(){
      return Promise.resolve({data:'zs'})
    }
  }

}
</script>

<style lang="less">
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
html,body{
  width: 100%;
  height: 100%;
}
/*  .target{
    position: absolute;
    width: 100px;
    height: 100px;
    background: red;
   top:0;
    right:0;
  }*/
</style>
