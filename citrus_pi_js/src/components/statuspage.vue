<template>
  <div class="statuspage">

    <h1 :class=sizeclass v-on:click="clickonlemon()">{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'status_page',
  data () {
    return {
      info: 'hello',
      msg: '🍋 CitrusPi',
      sizeclass: 'small'
    }
  },
  methods: {
    clickonlemon: function () {
      if (this.sizeclass === 'small') {
        this.sizeclass = 'big'
        console.log(this.sizeclass)
      } else if (this.sizeclass === 'big') {
        this.sizeclass = 'small'
        console.log(this.sizeclass)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  font-weight: normal;
  text-align: left;
  height: 20%;
  width: 100%;
  display: block;
  border: none;
  background: rgb(243, 255, 81);
}
.small {
  font-weight: normal;
  height: 10%;
  width: 100%;
  font-size: auto;
}
.big {
  font-weight: normal;
  height: 10%;
  width: 100%;
  font-size: 100px;
}

</style>
