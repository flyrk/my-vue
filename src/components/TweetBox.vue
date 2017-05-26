<template>
  <div class="tweet-box">
      <p v-if="showOverWord" class="error-hint">Oops, the input words is out of range: ...<span>{{ beforeWords }}</span><strong>{{ afterWords }}</strong></p>
      <textarea name="tweetBox" rows="8" cols="80" v-model="message"></textarea>
      <span class="left-hint">{{ leftWords }}</span>
      <button class="btn pull-right">tweet</button>
  </div>
</template>

<script>
export default {
  name: 'tweetBox',
  data () {
    return {
      message: '',
      showOverWord: false
    }
  },
  computed: {
    leftWords: function () {
      return this.message ? 140 - this.message.length : 140
    },
    beforeWords: function () {
      return this.message.length > 140 ? this.message.substring(140 - 10, 141) : ''
    },
    afterWords: function () {
      return this.message.length > 140 ? this.message.substring(141, this.message.length) : ''
    }
  },
  watch: {
    message: function (msg) {
      this.showOverWord = msg.length > 140
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tweet-box {
    position: relative;
}

textarea {
    overflow: auto;
}

.error-hint {
  border: 1px solid #e20e3a;
  color: rgb(209, 58, 98);
  font-size: .6em;
  width: 660px;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #e9dc2d;
  overflow: auto;
  text-align: start;
}
.left-hint {
    position: absolute;
    left: 600px;
    bottom: -20px;
}

.btn {
    display: block;
    background-color: #1b94c8;
    width: 50px;
    height: 30px;
    color: #ffffff;
    border-radius: 5px 5px 5px 5px;
}

.pull-right {
    position: absolute;
    right: 590px;
}

</style>
