import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TweetBox from '@/components/TweetBox'
import ToDoList from '@/components/ToDoList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tweetBox',
      name: 'TweetBox',
      component: TweetBox
    },
    {
      path: '/todoList',
      name: 'ToDoList',
      component: ToDoList
    }
  ]
})
