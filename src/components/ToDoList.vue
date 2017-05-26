<template lang="html">
  <div id="todo-list">
    <input type="text"
      placeholder="Please input your task"
      v-model="newTask"
      @keyup.enter="addTask">
    <ul id="todo" v-if="tasks.length > 0">
      <p>ToDo</p>
      <li v-for="task in tasks" @click="finishTask">{{ task }}</li>
    </ul>
    <hr v-show="isFinished">
    <ul id='finish' v-if="finishedTasks.length > 0">
      <p>Finished</p>
      <li v-for="finishedTask in finishedTasks">{{ finishedTask }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFinished: false,
      newTask: '',
      tasks: [],
      finishedTasks: []
    }
  },
  methods: {
    addTask: function () {
      this.tasks.push(this.newTask)
      this.newTask = ''
    },
    finishTask: function (event) {
      this.isFinished = true
      let startIndex = this.tasks.indexOf(event.target.innerHTML)
      this.finishedTasks.push(this.tasks.splice(startIndex, 1).toString())
    }
  }
}
</script>

<style lang="css">
  hr {
    width: 30%;
  }
  #todo,
  #finish {
    text-align: start;
    width: 200px;
    margin: 20px auto;
  }

  #todo li,
  #finish li {
    text-align: start;
    line-height: 1.6em;
    list-style-type: none;
    padding-bottom: .6em;
    padding-left: 2em;
    background-position: 0 0;
    background-size: 1.6em 1.6em;
    background-repeat: no-repeat;
  }

  #todo li:hover,
  #finish li:hover {
    cursor: pointer;
  }

  #todo li {
    background-image: url(../assets/success.svg);
  }
  #finish li {
    background-image: url(../assets/success_fill.svg);
  }
</style>
