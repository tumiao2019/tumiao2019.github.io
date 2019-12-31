<template>
  <div class="recommend">
    <HomeTitle>推荐歌单</HomeTitle>
  <ul class="list">
    <SongListCard v-for="(item, index) in personalized" :key="index" :item="item" />
  </ul>
    <HomeTitle>最新音乐</HomeTitle>
    <ol>
      <SongListitem
        v-for="(item, index) in newsong"
        :key="index"
        :song-item="item"
        :is-show-quality="true"
        :index="index"
        @translate-currentid="$emit('translate-currentid', $event)"
      />
    </ol>
  </div>
</template>

<script>
import HomeTitle from "@/components/HomeTitle.vue";
import SongListCard from "@/components/SongListCard.vue";
import SongListitem from "@/components/SongListitem.vue";
export default {
  name:"HomeRecommend",
  components:{
    HomeTitle,
    SongListCard,
    SongListitem
  },
  data() {
    return {
      personalized:[],
      newsong:[]
    }
  },
  methods: {
    getP(){
      this.axios
        .get("http://musicapi.leanapp.cn/personalized?limit=6")
        .then(response => {
          ({ result: this.personalized } = response.data);
        })
    },
    getNewsong(){
      this.axios
        .get("http://musicapi.leanapp.cn/personalized/newsong")
        .then(response => {
          ({ result: this.newsong } = response.data);
        })
    },
  },
 
    
 
  created() {
    this.getP();
    this.getNewsong();
  },
}
</script>

<style lang="less">
ul.list {
  display: flex;
  flex-wrap: wrap;
  li.card {
    flex: 1 0 30%;
    &:nth-child(3n + 2) {
      margin: 0 5px;
    }
  }
}
</style>