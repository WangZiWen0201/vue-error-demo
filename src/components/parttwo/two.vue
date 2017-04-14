<template>
  <div class="hello">
    part two
    {{this.msg}}
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from '../Hello.vue'
export default {
  name: 'two',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Hello: Hello
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
