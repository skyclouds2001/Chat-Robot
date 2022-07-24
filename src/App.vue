<template>
  <div id="container">
    <header id="navbar">
      <span>喜欢答非所问的聊天机器人</span>
    </header>
    <main id="content">
      <ChatMenu />
      <SideBar />
    </main>
    <footer id="foot-bar"></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatMenu from '@/components/ChatMenu.vue'
import SideBar from '@/components/SideBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    ChatMenu,
    SideBar
  }
})
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #container {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;

    background-color: #f6f6f6;

    #navbar {
      position: fixed;
      top: 0;
      left: 0;

      width: 100vw;
      height: 50px;

      background-color: white;
      box-shadow: 0 0 5px #ccc;
      min-width: 1000px;

      font-size: 30px;
      line-height: 50px;
      letter-spacing: 2px;
      font-weight: 500;
      text-align: center;
    }

    #content {
      width: 1000px;
      height: auto;
      margin: 0 auto;
      padding: 70px 0 0;

      min-height: 100vh;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
}
</style>
