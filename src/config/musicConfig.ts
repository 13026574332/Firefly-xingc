import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否显示迷你播放器
	showMiniPlayer: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "random",

	// 是否显启用歌词
	showLyrics: true,

	// 是否同步全局播放器（当进入 /music 页面时）
	// 设置为 true：侧边栏播放器完全同步 /music 页面的播放列表
	// 设置为 false：侧边栏使用独立的本地/Meting 配置（默认）
	syncWithGlobalPlayer: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "search",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "2611226295",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
  playlist: [
    {
      name: "BINGBIAN",
      artist: "BinLiMax",
      url: "/assets/music/BINGBIAN - BinLiMax.mp3",
      cover: "",
      lrc: "/assets/music/lrc/BINGBIAN.lrc"
    },
    {
      name: "愛唄",
      artist: "高桥李依",
      url: "/assets/music/愛唄 - 高桥李依.mp3",
      cover: "",
      lrc: "/assets/music/lrc/愛唄.lrc"
    },
    {
      name: "传奇",
      artist: "一壶酒馆(格桑花版)",
      url: "/assets/music/传奇 (格桑花版) - 一壶酒馆.mp3",
      cover: "",
      lrc: "/assets/music/lrc/传奇.lrc"
    },
    {
      name: "春泥",
      artist: "沈梦溪",
      url: "/assets/music/春泥 - 沈梦溪.mp3",
      cover: "",
      lrc: "/assets/music/lrc/春泥.lrc"
    },
    {
      name: "枫林残忆",
      artist: "伍华、俞文靖",
      url: "/assets/music/枫林残忆 - 伍华、俞文靖.mp3",
      cover: "",
      lrc: "/assets/music/lrc/枫林残忆.lrc"
    },
    {
      name: "后继者",
      artist: "任然",
      url: "/assets/music/后继者 - 任然.mp3",
      cover: "",
      lrc: "/assets/music/lrc/后继者.lrc"
    },
    {
      name: "九万字",
      artist: "黄诗扶",
      url: "/assets/music/九万字 - 黄诗扶.mp3",
      cover: "",
      lrc: "/assets/music/lrc/九万字.lrc"
    },
    {
      name: "迷人的危险",
      artist: "Dance Flow",
      url: "/assets/music/迷人的危险 - Dance Flow.mp3",
      cover: "",
      lrc: "/assets/music/lrc/迷人的危险.lrc"
    },
    {
      name: "迷途羔羊",
      artist: "张震岳/大渊(顽童MJ116)",
      url: "/assets/music/迷途羔羊.mp3",
      cover: "http://p1.music.126.net/b1eSBbx2Yia0k89ocfOnjQ==/18677404023325159.jpg?param=130y130",
      lrc: "/assets/music/lrc/迷途羔羊.lrc"
    },
    {
      name: "暖かな時間",
      artist: "松本文紀",
      url: "/assets/music/暖かな時間 - 松本文紀.mp3",
      cover: "",
      lrc: "/assets/music/lrc/暖かな時間.lrc"
    },
    {
      name: "琵琶行",
      artist: "奇然、沈谧仁",
      url: "/assets/music/琵琶行 - 奇然、沈谧仁.mp3",
      cover: "",
      lrc: "/assets/music/lrc/琵琶行.lrc"
    },
    {
      name: "起风了",
      artist: "买辣椒也用券",
      url: "/assets/music/起风了 - 买辣椒也用券.mp3",
      cover: "",
      lrc: "/assets/music/lrc/起风了.lrc"
    },
    {
      name: "晴天",
      artist: "周杰伦",
      url: "/assets/music/晴天 - 周杰伦.mp3",
      cover: "",
      lrc: "/assets/music/lrc/晴天.lrc"
    },
    {
      name: "親愛なる日々へ",
      artist: "松本文紀",
      url: "/assets/music/親愛なる日々へ - 松本文紀.mp3",
      cover: "",
      lrc: "/assets/music/lrc/親愛なる日々へ.lrc"
    },
    {
      name: "去年夏天",
      artist: "王大毛",
      url: "/assets/music/去年夏天 - 王大毛.mp3",
      cover: "",
      lrc: "/assets/music/lrc/去年夏天.lrc"
    },
    {
      name: "如果可以",
      artist: "韦礼安",
      url: "/assets/music/如果可以 - 韦礼安.mp3",
      cover: "",
      lrc: "/assets/music/lrc/如果可以.lrc"
    },
    {
      name: "希望有羽毛和翅膀",
      artist: "知更鸟、HOYO-MiX、Ch...",
      url: "/assets/music/希望有羽毛和翅膀 - 知更鸟、HOYO-MiX、Ch....mp3",
      cover: "",
      lrc: "/assets/music/lrc/希望有羽毛和翅膀.lrc"
    },
    {
      name: "子供たちのひととき",
      artist: "松本文紀",
      url: "/assets/music/子供たちのひととき - 松本文紀.mp3",
      cover: "",
      lrc: "/assets/music/lrc/子供たちのひととき.lrc"
    }
  ]
}
}
