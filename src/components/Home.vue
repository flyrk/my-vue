<template lang="html">
  <div id="home">
    <h1>Welcome to my Vue project</h1>
    <p>
      There are some simple vue project for me to learn vue:
      <ul id="project-list">
        <li>
          <router-link to="/tweetBox">TweetBox</router-link>
        </li>
        <li>
          <router-link to="/todoList">ToDoList</router-link>
        </li>
      </ul>

    </p>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
  #project-list {
    list-style-type: none;
  }
</style>
