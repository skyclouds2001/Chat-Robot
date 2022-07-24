<template>
  <div id="chat-menu">
    <div class="chat-message"></div>
    <div class="chat-input">
      <textarea id="chat-input" v-model="inputValue"></textarea>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>

<style lang="less" scoped>
#chat-menu {
  width: 685px;
  height: 650px;

  background-color: white;
  box-shadow: 0 0 5px #ddd;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 16px;

  .chat-message {
    flex: 3;
    width: 100%;
  }

  .chat-input {
    flex: 1;
    width: 100%;

    border-top: 1px solid #eee;

    #chat-input {
      resize: none;
      border: none;
      outline: none;

      width: 100%;
      height: 100%;
      margin: 0;
      padding: 2em 1em;

      font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    }
  }
}
</style>
