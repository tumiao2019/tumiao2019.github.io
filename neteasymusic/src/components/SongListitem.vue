<template>
  <li class="song" @click="setCurrentSongId(songItem.id)">
    <div class="left" v-if="index !== undefined">{{index+1}}</div>
    <dl class="center">
      <dt>{{songItem.name}}</dt>
      <dd v-if="songItem.song">
        <span v-if="(songItem.song.hMusic) && isShowQuality">SQ</span>
        {{songItem.song.artists[0].name}}-{{songItem.song.album.name}}
      </dd>
      <dd v-else>
        <span v-if="(songItem.h) && isShowQuality">SQ</span>
        {{songItem.ar[0].name}}-{{songItem.al.name}}
      </dd>
    </dl>
    <div class="right">▶</div>
    <!-- <div>{{songItem}}</div> -->
  </li>
</template>

<script>
export default {
  props: ["songItem", "isShowQuality", "index"],
  methods: {
    setCurrentSongId(id) {
      this.$emit("translate-currentid", id);
    }
  }
};
</script>

<style lang="less">
li.song {
  display: flex;
  dl.center {
    flex: 1;
    dt {
      line-height: 30px;
    }
    dd {
      line-height: 20px;
      font-size: 12px;
    }
  }
  .left,
  .right {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>