<template>
  <div id="chat-menu">
    <div class="chat-message">
      <chat-box v-for="item in messages" :key="item.id" :id="item.id" :avatar="item.avatar" :poster="item.poster" :message="item.message"></chat-box>
    </div>
    <div class="chat-input">
      <textarea id="chat-input" v-model="inputValue" ref="inputElement"></textarea>
      <el-button type="primary" auto-insert-space @click="handlePostMessage">发送</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, unref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import Message from './../model/message'
import ChatBox from './ChatBox.vue'
import { ElMessage } from 'element-plus'

const inputValue = ref('')

const inputElement: Ref<HTMLTextAreaElement | null> = ref(null)

const messages: Ref<Message[]> = ref([])

const DEFAULT_MESSAGE_NUMBER = 2

// test
messages.value.push(new Message('user', 'test'))
messages.value.push(new Message('user', 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test '))
messages.value.push(new Message('robot', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
messages.value.push(new Message('robot', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
messages.value.push(new Message('robot', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
messages.value.push(new Message('user', 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test '))
messages.value.push(new Message('user', 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test '))
messages.value.push(new Message('user', 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test '))

onMounted(() => {
  inputElement.value?.focus()

  const times: number[] = JSON.parse(localStorage.getItem('timestamp') || '[]') || []
  for (let i = 0; i < Math.min(DEFAULT_MESSAGE_NUMBER, times.length); ++i) {
    messages.value.unshift(JSON.parse(localStorage.getItem(times[i]) || '{}') || {})
  }
})

async function handlePostMessage () {
  const input = unref(inputValue)
  const mes = new Message('user', input)

  if (input.length === 0) return

  messages.value.push(mes)

  try {
    const res = await axios.post('http://114.132.221.148/processText', input, {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    console.log(res)

    // todo    save message
    localStorage.setItem(mes.timestamp.toString(), JSON.stringify(mes))
    localStorage.setItem('timestamp', JSON.stringify((JSON.parse(localStorage.getItem('timestamp') || '[]') || []).unshift(mes.timestamp)))

    inputValue.value = ''
    ElMessage({
      type: 'success',
      message: '成功',
      showClose: true
    })
  } catch (err) {
    console.error(err)

    messages.value.pop()

    ElMessage({
      type: 'error',
      message: '网络异常',
      showClose: true
    })
  }
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

    overflow: hidden auto;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: #eee;
    }

    &::-webkit-scrollbar-track-piece {}

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #ccc;
    }

    &::-webkit-scrollbar-button {}

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
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
    }

    > button {
      position: absolute;
      bottom: 1em;
      right: 1em;
    }
  }
}
</style>
