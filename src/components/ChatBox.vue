<template>
  <div class="message-box">
    <div class="message-avatar">
      <img :src="props.avatar" alt="" decoding="async" loading="lazy">
    </div>
    <div :class="['message-message', type]">{{ props.message }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps<{
  id: number,
  avatar: string,
  poster: string,
  message: string,
}>()

const type = computed(() => props.poster === 'user' ? 'message-user' : 'message-robot')

</script>

<style lang="less" scoped>
.message-box {
  max-width: 500px;
  min-height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 25px 0;

  .message-avatar {
    flex: 1;
    align-self: self-start;

    min-height: 70px;

    > img {
      width: 50px;
      height: 50px;

      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      box-shadow: 2.5px 2.5px 5px #eee;
    }
  }

  .message-message {
    flex: 4;

    margin: 0 20px;
    padding: 10px;

    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2.5px 2.5px 5px #eee;

    text-align: left;
    font-size: 15px;

    line-height: 1.25em;
    word-wrap: break-word;
    text-overflow: ellipsis;

    &::selection {
      background-color: white;
      color: black;
    }
  }

  .message-user {
    color: white;
    background-color: rgb(30, 110, 255);
  }
  .message-robot {
    color: black;
    background-color: rgb(250, 250, 250);
  }

}
</style>
