<template>
  <div id="container">
    <header id="navbar">
      <span>喜欢答非所问的聊天机器人</span>
    </header>
    <main id="content">
      <ChatMenu />
      <SideBar />
    </main>
    <footer id="foot-bar">
      <h6>学习交流</h6>
      <ul>
        <li>
          <label>QQ</label>
          <span>798586304</span>
        </li>
        <li>
          <label>微信</label>
          <span>lzy628599475</span>
        </li>
        <li>
          <label>知乎</label>
          <span>zyliang</span>
        </li>
      </ul>
    </footer>
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

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;

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
      user-select: none;

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
      padding: 70px 0 30px;

      min-height: 100vh;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    #foot-bar {
      position: fixed;
      bottom: 0;
      left: 0;

      width: 100vw;
      height: 1.25em;

      background-color: white;
      box-shadow: 0 0 5px #ccc;
      min-width: 1000px;
      user-select: none;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;
      line-height: 1.25em;
      text-align: center;

      h6 {
        width: 10%;
        height: 100%;

        color: #555;
      }

      ul {
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: space-around;
        align-items: center;

        color: #999;

        list-style-type: none;

        li {
          flex: 1;
          font-size: 14px;

          display: flex;
          justify-content: center;
          align-items: center;

          label {
            flex: 1;
          }

          span {
            flex: 3;
          }
        }
      }
    }
  }
}
</style>
