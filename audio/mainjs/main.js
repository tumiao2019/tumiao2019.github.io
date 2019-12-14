var m = 0;
var s = 0;
var t = '00';
var y = '00';

$(".audio-player .time .time-before").text(y+":"+t);

setInterval(function () {


m = Math.floor(audio.currentTime / 60);
s = Math.floor(audio.currentTime % 60);
t = s < 10 ? '0' + s : s + '';
y = m < 10 ? '0' + m : m + '';
$(".audio-player .time .time-before").text(y+":"+t);


  
}, 1);

$(".volume .fa-volume-off").hide();

$(".jindutiao input[type=range]").on("input", function(e) {
	/* e.preventDefault(); */
	console.log($(this).val());
    $(".jindutiao .progress").css("width", $(this).val() + "%");
    audio.currentTime = $(this).val() / 100 *audio.duration
    
});
$(".volume input[type=range]").on("input", function(e) {
	/* e.preventDefault(); */
	console.log($(this).val());
    $(".volume .progress").css("width", $(this).val() + "%");
    audio.volume=$(this).val() / 100 ;
    if ($(this).val() == 0) {
      $(".volume .fa-volume-up").hide();
      $(".volume .fa-volume-off").show();
    }
    else{
      $(".volume .fa-volume-up").show();
      $(".volume .fa-volume-off").hide();
    }
    /* audio.currentTime = $(this).val() / 100 *audio.duration */
    
});


var playlist = [
  {
    file: "./Studio ＂Syrup Comfiture＂ - R.I.N.mp3",
    picture:"./Blossom（同人专辑）封面.jpg",
    time:"07:26",
    name:"R.I.N",
    singer:"綾倉盟"
  },
  {
    file: "./Studio ＂Syrup Comfiture＂ - Close to you (and me).mp3",
    picture:"./Blossom（同人专辑）封面.jpg",
    time:"05:01",
    name:"Close to you (and me)",
    singer:"綾倉盟"
  },
  {
    file: "./坂上なち - Snowlight.mp3",
    picture:"./POP｜CULTURE_2封面.jpg",
    time:"04:36",
    name:"Snowlight",
    singer:"坂上なち"
  },
  {
    file: "./Studio ＂Syrup Comfiture＂,綾倉盟 - Rapture - Taishi Remix.mp3",
    picture:"./Poptrick封面.jpg",
    time:"10:07",
    name:"Rapture - Taishi Remix",
    singer:"市松椿"
  },
  {
    file: "./綾倉盟 - Sol Et Luna.mp3",
    picture:"./SOL_ET_LUNA封面.jpg",
    time:"05:17",
    name:"Sol Et Luna",
    singer:"綾倉盟"
  },
  {
    file: "./葉月ゆら - 永遠の水面.mp3",
    picture:"./Sprout_Intention封面.jpg",
    time:"03:06",
    name:"永遠の水面",
    singer:"葉月ゆら"
  },
  {
    file: "./Masayoshi Minoshima,mican＊ - Peaceful Romancer.mp3",
    picture:"./POP｜CULTURE_3封面.jpg",
    time:"05:11",
    name:"Peaceful Romancer",
    singer:"mican*"
  },
  {
    file: "./綾倉盟,Syrufit - comouflage.mp3",
    picture:"./White_clear封面.jpg",
    time:"05:46",
    name:"comouflage",
    singer:"綾倉盟"
  },
  {
    file: "./綾倉盟 - Dithering Train.mp3",
    picture:"./STRUCTURED_DANCEHALL封面.jpg",
    time:"04:30",
    name:"Dithering Train",
    singer:"綾倉盟"
  },
  {
    file: "./市松椿 - SUPER MOON.mp3",
    picture:"./Adrastea封面.jpg",
    time:"08:40",
    name:"SUPER MOON",
    singer:"市松椿"
  },
  {
    file: "./綾倉盟 - トランジスタンス.mp3",
    picture:"./RE：code封面.png",
    time:"05:01",
    name:"トランジスタンス",
    singer:"綾倉盟"
  }
];

//进度条




var current = 0;
var audio =$("audio")[0]




function playmusic() {
  $(".playlist-item")
    .eq(current)
    .addClass("play")
    .siblings()
    .removeClass("play");
    $("playlist-item .play").removeClass("paused");
    
}

$(".playlist-item").eq(0).addClass("play");
//下一首
$(".controls .next").click(function () { 
    if(current>=playlist.length-1){
    current=-1
    }
    current++;
    $("audio").attr("src",playlist[current].file);
    playmusic();
    $(".audio-ui>img").attr("src",playlist[current].picture)
    $(".time-after").text(playlist[current].time);
    $(".details span").eq(0).text(playlist[current].name)
    $(".details span").eq(1).text(playlist[current].singer)
    
 })

 //上一首
 $(".controls .prew").click(function () { 
    if(current==0){
        current=playlist.length
    }
    current--;
    $("audio").attr("src",playlist[current].file);
    $(".audio-ui>img").attr("src",playlist[current].picture);
    $(".time-after").text(playlist[current].time);
    $(".details span").eq(0).text(playlist[current].name)
    $(".details span").eq(1).text(playlist[current].singer)
    playmusic();
    
 })
 //暂停
$(".controls .fa-pause")
	.click(function() {
		audio.pause();
		$(".play-list .play").addClass("paused");
		$(this).fadeOut();
		$(".controls .fa-play").fadeIn();
    });
    //播放
 $(".controls .fa-play").click(function() {
	
    playmusic();
    audio.play();
    $(".play-list .play").removeClass("paused");
    $(this).fadeOut();
    $(".controls .fa-pause").fadeIn();
}).fadeOut();

// 点击歌单
$(".play-list .playlist-item").click(function() {
	current = $(this).index();
    $("audio").attr("src", playlist[current].file);
    $(".audio-ui>img").attr("src",playlist[current].picture);
  playmusic();
  $(".details span").eq(0).text(playlist[current].name)
  $(".details span").eq(1).text(playlist[current].singer);
  $(".time-after").text(playlist[current].time);
  $(".controls .fa-pause").show();
  $(".controls .fa-play").hide();
  
});
	

audio.onended = function () {
  //  自动下一曲
  if (current>=playlist.length-1) {
    current=-1
  }
  current++;
  $("audio").attr("src", playlist[current].file);
  $(".audio-ui>img").attr("src",playlist[current].picture);
playmusic();
$(".details span").eq(0).text(playlist[current].name)
  $(".details span").eq(1).text(playlist[current].singer);
$(".time-after").text(playlist[current].time);
}

audio.ontimeupdate= function () {
  /* console.log(audio.currentTime/ audio.duration * 100 + '%'); */
  $(".jindutiao .progress").css("width", audio.currentTime/ audio.duration * 100 + '%');
}



 


//$("audio controls")
//调节音量
/* audio.onvolumechange= function () {
  console.log(audio.currentTime/ audio.duration * 100 + '%');
  $(".volume .progress").css("width", audio.currentTime/ audio.duration * 100 + '%');
} */