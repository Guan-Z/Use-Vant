<template>
  <div class="content_box">
    <div class="my-swipe">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <template v-for="item of colorList" :key="item">
          <!-- class和style在使用v-bind时特殊,是个对象；所以是{}，这表示对象，不是什么特殊的数据绑定 -->
          <!-- 技巧：v-for中使用:style绑定for的item！！！ -->
          <van-swipe-item :style="{'backgroundColor':item.colorRGBName}">
            <span>{{item.colorName}}</span>
            <p>{{item.colorRGBName}}</p>
            <div class="chooseColorBtn" @click="chooseColor(item.colorRGBName)">选择该主题颜色</div>
          </van-swipe-item>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseTheme',
  props: {
    msg: String
  },
  data(){
    return{
      colorList: [
        {colorName: "草莓红", colorRGBName: "#E42D44"},
        {colorName: "奶油白", colorRGBName: "#FAEFDE"},
        {colorName: "猕猴桃绿", colorRGBName: "#7BAD5F"},
        {colorName: "小麦黄", colorRGBName: "#E5D7AD"},
        {colorName: "板栗灰", colorRGBName: "#614F4D"},
        {colorName: "柠檬黄", colorRGBName: "#FFD800"},
        {colorName: "葡萄紫", colorRGBName: "#5B3663"},
        {colorName: "青豆绿", colorRGBName: "#BCCF90"},
        {colorName: "水蜜桃粉", colorRGBName: "#F6A09A"},
      ]
    }
  },
  methods: {
    chooseColor(color) {
      console.log(color);
    }
  }
}
</script>

<style scoped>
.van-swipe-item {
  color: #ffffff;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.chooseColorBtn{
  border: 1px solid white;
  padding: 0.7em;
  border-radius: 1.2em;
}
</style>
