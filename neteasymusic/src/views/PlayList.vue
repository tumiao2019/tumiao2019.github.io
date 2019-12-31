<template>
  <div class="playlist">
    <div class="go" >
      <div class="go-back" @click="$router.go(-1)">⬅</div>
    </div>
    <ul class="songlist">
      <template v-if="playlist">
        <SongListitem
          v-for="(item, index) in playlist.tracks"
          :key="index"
          :song-item="item"
          :is-show-quality="false"
          @translate-currentid="$emit('translate-currentid',$event)"
        />
      </template>
    </ul>
  </div>
  
</template>

<script>
import SongListitem from '@/components/SongListitem.vue'
export default {
  components: {
    SongListitem
  },
  data() {
    return {
      playlist:null
    }
  },
  methods: {
    getSongDetail(id){
      this.axios.get(
        "http://musicapi.leanapp.cn/playlist/detail",{
          params:{
            id:id
          }
        }
      ).then(reponse => {
          //   window.console.log(reponse.data);
          ({ playlist: this.playlist } = reponse.data);
        });
    }
  },
    created() {
        
    },
    beforeRouteEnter(to, from, next) {
    // window.console.log(to);
    // 路由进入 当前组件实例化之前就 拿数据
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建
    next(vm => {
      vm.getSongDetail(to.query.id);
    });
  }
}
</script>

<style lang="less">
.go{
    background: transparent;
    height: 75px;

}
</style>