<template>
  <div class="content_box">
    <!-- 使用sticky粘性布局做头部；搜索按钮也需要吸顶所以也放在这里 -->
    <!-- 项目：基于Vue2，PC端使用ElementUI，移动端使用VantUI框架，实现
    
     -->
    <van-sticky>
      <van-nav-bar
        title="混管管理"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="but-block">
        <van-button type="info" round size="small" block @click="show = true">
          搜索
        </van-button>
      </div>
    </van-sticky>
  </div>
</template>

<script>
export default {
  name: 'VantPaging',
  props: {
    msg: String
  },
  data(){
    return{
      
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
