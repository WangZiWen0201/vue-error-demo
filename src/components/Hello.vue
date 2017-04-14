<template>
  <div class="hello">
    <div class="footer">
      <ul>
        <li @click="linkToPath('part-one')">jump2one</li>
        <li @click="linkToPath('part-two')">jump2two</li>
        <li @click="linkToPath('part-three')">jump2three</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    linkToPath (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">
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
.footer{
  position: fixed;
  bottom: 0;
  display: flex;
  ul{
    display: flex;
    justify-content: space-around;
  }
}
</style>
