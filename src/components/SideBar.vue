<template>
  <div id="side-bar">
    <div class="side-bar-item">
      <div class="side-bar-item-title">
        项目简介
      </div>
      <div class="side-bar-item-content">
        这是一个基于Seq2seq模型实现的喜欢答非所问的聊天机器人（你也可以直接叫它“奔奔驼”），作者使用了少部分经过调整的小黄鸡语料库及自创语料作为训练语料，在CPU的训练时长约为8个小时。因为使用的模型较为基础、训练的时间还不够长等原因，当前的小机器人尚不够智能，关于这点还请大家抱着图一乐的心态予以谅解。
      </div>
    </div>
    <div class="side-bar-item">
      <div class="side-bar-item-title">
        操作指南
      </div>
      <div class="side-bar-item-content">
        在电脑上新建一个txt文件，写入你想要对奔奔驼说的话，保存后点击网页的 选择文件 按钮，再点击 提交文件 按钮，你应该就能收到回复啦。
      </div>
    </div>
    <div class="side-bar-item">
      <div class="side-bar-item-title">
        注意事项
      </div>
      <div class="side-bar-item-content">
        <p>一、这里的聊天指的是单轮聊天，"培养感情"的过程在模型训练时就已经完成了。</p>
        <p>二、为提升识别的准确率，输入的话最好不要带有标点符号（无论是句中还是句末）。</p>
        <p>三、若回复的结果不够理想，可将一些少见的词语用空格分隔，再重新输入。</p>
        <p>四、输入的话不要多于30字，且最好避免生僻字，即选择在 《现代汉语常用字表》 中的汉字（emm因为奔奔驼的词汇量还比较小）。</p>
        <p>五、每次上传文件后，需同时按下F5与Shift键进行刷新，方可再次上传文件。</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
#side-bar {
  width: 300px;
  height: auto;
  margin: 0;
  padding: 0;

  border-radius: 5px;

  .side-bar-item {
    margin: 5px 0;
    padding: 10px 20px;

    background-color: white;
    box-shadow: 0 0 5px #ddd;
    border-radius: 5px;
    user-select: none;

    &:first-child, &:last-child {
      margin: 0;
    }

    .side-bar-item-title {
      font-size: 17px;
      font-weight: 600;
      text-align: left;
      line-height: 1.5em;
      letter-spacing: 1px;
    }

    .side-bar-item-content {
      font-size: 15px;

      p {
        margin: 0;
      }
    }
  }
}
</style>
