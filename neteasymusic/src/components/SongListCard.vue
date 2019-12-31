<template>
  <li class="card" @click="handlerCardClick(item.id)">
      <div class="pic">
          <img :src="item.picUrl" alt="">
          <span>{{translatePlayCount(item.playCount)}}</span>
      </div>
      <div class="name">{{item.name}}</div>
  </li>
</template>

<script>
export default {
    props:{
        item:Object
    },
    methods: {
    translatePlayCount(n) {
      if (n > 99999999) {
        return (n / 100000000).toFixed(2) + "亿";
      }
      if (n > 9999) {
        return (n / 10000).toFixed(1) + "万";
      }
    },
    handlerCardClick(param) {
      // window.console.log(param)
      this.$router.push({ path: "playlist", query: { id: param } });
    }
    
  }
}
</script>

<style lang="less">
.pic {
  position: relative;
  img {
    vertical-align: middle;
  }
  span {
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    font-size: 10px;
  }
}
.name {
    font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 5px 10px 5px;
}
</style>