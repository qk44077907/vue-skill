export default {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  methods:{
    foo() {
      console.log('foo')
    },
    conflicting() {
      console.log('from mixin')
    }
  },
  created() {
    console.log('混入对象的钩子被调用')
  }
}
