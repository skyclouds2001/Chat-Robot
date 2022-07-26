<template>
  <div id="chat-menu">
    <div class="chat-message"></div>
    <div class="chat-input">
      <textarea id="chat-input" v-model="inputValue" ref="inputElement"></textarea>
      <el-button type="primary" auto-insert-space @click="handlePostMessage">发送</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import Message from './../model/message'

const inputValue = ref('')

const inputElement: Ref<HTMLTextAreaElement | null> = ref(null)

const message: Ref<Message[]> = ref([])

onMounted(() => {
  inputElement.value?.focus()
})

function handlePostMessage () {
  console.log(inputValue.value)
}
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

    position: relative;

    #chat-input {
      resize: none;
      border: none;
      outline: none;
      background-color: #fcfcfc;

      width: 100%;
      height: 100%;
      margin: 0;
      padding: 1em;

      font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;

      &:focus {
        outline: 1px solid lightskyblue;
      }
    }

    > button {
      position: absolute;
      bottom: 1em;
      right: 1em;
    }
  }
}
</style>
