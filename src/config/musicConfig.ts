import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: false,

	// 是否显示迷你播放器
	showMiniPlayer: false,

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
	// Meting API 配置true
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
				url: "/assets/music/mp3/BINGBIAN - BinLiMax.mp3",
				cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5f/bb/e7/5fbbe7e4-04f9-ebe4-29e1-d985db27c5a9/bingbian.jpg/1200x1200bf-60.jpg",
				lrc: "/assets/music/lrc/BINGBIAN - BinLiMax.lrc",
			},
			{
				name: "愛唄",
				artist: "高橋李依",
				url: "/assets/music/mp3/愛唄 - 高橋李依.mp3",
				cover: "https://ts1.tc.mm.bing.net/th/id/R-C.14e4a3273a694e75fc274c9dbc650bef?rik=sTz9TMP3cx1q7g&riu=http%3a%2f%2fimg.52desk.com%2ftp%2f213051ojBau.jpg&ehk=4KwAkkseEYA7lnbR6YNh%2bMbO7ggZuBuzPplNimBTIxk%3d&risl=&pid=ImgRaw&r=0",
				lrc: "/assets/music/lrc/愛唄 - 高橋李依.lrc",
			},
			{
				name: "传奇",
				artist: "一壶酒馆(格桑花版)",
				url: "/assets/music/mp3/传奇 (格桑花版) - 一壶酒馆.mp3",
				cover: "https://pic1.zhimg.com/v2-81869b6169a218cec76f56f77eb64911_r.jpg?source=1940ef5c",
				lrc: "/assets/music/lrc/传奇 (格桑花版) - 一壶酒馆.lrc",
			},
			{
				name: "春泥",
				artist: "沈梦溪",
				url: "/assets/music/mp3/春泥 - 沈梦溪.mp3",
				cover: "https://img.58tg.com/up/allimg/4k/s/03/2304040Z34MH3-0-lp.jpg",
				lrc: "/assets/music/lrc/春泥 - 沈梦溪.lrc",
			},
			{
				name: "枫林残忆",
				artist: "伍华、俞文靖",
				url: "/assets/music/mp3/枫林残忆 - 伍华、俞文靖.mp3",
				cover: "https://pic2.zhimg.com/v2-9429d784e703f8e01e50d41271582486_r.jpg?source=1940ef5c",
				lrc: "/assets/music/lrc/枫林残忆 - 伍华、俞文靖.lrc",
			},
			{
				name: "后继者",
				artist: "任然",
				url: "/assets/music/mp3/后继者 - 任然.mp3",
				cover: "https://ts2.tc.mm.bing.net/th/id/OIP-C.wopbF1urpyk_qrmh4bj0VgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
				lrc: "/assets/music/lrc/后继者 - 任然.lrc",
			},
			{
				name: "九万字",
				artist: "黄诗扶",
				url: "/assets/music/mp3/九万字 - 黄诗扶.mp3",
				cover: "https://ts1.tc.mm.bing.net/th/id/R-C.c444c56534904c4126556e5b2fce77b7?rik=i7E3nOvPS%2bVc6g&riu=http%3a%2f%2fimg.52desk.com%2ftp%2f235634qdTvd.jpg&ehk=zc0t%2bQXe3etp9Chm7SJI2%2fdtD435%2bgsOVHo2EBxY%2foI%3d&risl=&pid=ImgRaw&r=0",
				lrc: "/assets/music/lrc/九万字 - 黄诗扶.lrc",
			},
			{
				name: "迷人的危险",
				artist: "Dance Flow",
				url: "/assets/music/mp3/迷人的危险 - Dance Flow.mp3",
				cover: "https://pic4.zhimg.com/v2-24d195b1c73fb40ef0df7526a31097e8_r.jpg?source=1940ef5c",
				lrc: "/assets/music/lrc/迷人的危险 - Dance Flow.lrc",
			},
			{
				name: "暖かな時間",
				artist: "松本文紀",
				url: "/assets/music/mp3/暖かな時間 - 松本文紀.mp3",
				cover: "https://pic3.zhimg.com/v2-5523ed93593ee4c7fd97b972d0af92d3_r.jpg",
				lrc: "/assets/music/lrc/暖かな時間 - 松本文紀.lrc",
			},
			{
				name: "琵琶行",
				artist: "奇然、沈谧仁",
				url: "/assets/music/mp3/琵琶行 - 奇然、沈谧仁.mp3",
				cover: "https://cdn.svipaigc.com/bizi/2023/11/173301-16994359815d6e.jpg",
				lrc: "/assets/music/lrc/琵琶行 - 奇然、沈谧仁.lrc",
			},
			{
				name: "起风了",
				artist: "买辣椒也用券",
				url: "/assets/music/mp3/起风了 - 买辣椒也用券.mp3",
				cover: "https://cdn.svipaigc.com/bizi/2024/10/926579f.jpg",
				lrc: "/assets/music/lrc/起风了 - 买辣椒也用券.lrc",
			},
			{
				name: "晴天",
				artist: "周杰伦",
				url: "/assets/music/mp3/晴天 - 周杰伦.mp3",
				cover: "https://ts1.tc.mm.bing.net/th/id/R-C.2b75c93072b564c87fe3df24310046c7?rik=GzkTDO2KIpFzJw&riu=http%3a%2f%2fimg.52desk.com%2ftp%2f001309dUCAV.jpg&ehk=4aDJUjSYRI4DtlpPPmSXxZG3TlfxXRiSazuXGhgHCJI%3d&risl=&pid=ImgRaw&r=0",
				lrc: "/assets/music/lrc/晴天 - 周杰伦.lrc",
			},
			{
				name: "親愛なる日々へ",
				artist: "松本文紀",
				url: "/assets/music/mp3/親愛なるあの日々へ - 松本文紀.mp3",
				cover: "https://ts1.tc.mm.bing.net/th/id/R-C.2cceaf89e3005f606b0d25d2c7c914a9?rik=YETyN5F48oEyFA&riu=http%3a%2f%2fimg.52desk.com%2ftp%2f235121Sa0pV.jpg&ehk=VRLNuqSKb6ty9oZt%2bqL6FTTjxH7JCN2%2fBF8KqXzFBAE%3d&risl=&pid=ImgRaw&r=0",
				lrc: "/assets/music/lrc/親愛なるあの日々へ - 松本文紀.lrc",
			},
			{
				name: "去年夏天",
				artist: "王大毛",
				url: "/assets/music/mp3/去年夏天 - 王大毛.mp3",
				cover: "https://pic1.zhimg.com/v2-f1660e77d5fcc49bdfdbffb249572835_r.jpg?source=1940ef5c",
				lrc: "/assets/music/lrc/去年夏天 - 王大毛.lrc",
			},
			{
				name: "如果可以",
				artist: "韦礼安",
				url: "/assets/music/mp3/如果可以 - 韦礼安.mp3",
				cover: "https://ts1.tc.mm.bing.net/th/id/R-C.82e749cb17737c9ae9d8d6f1481de587?rik=h%2fDYDQQqRampDA&riu=http%3a%2f%2fimg.52desk.com%2ftp%2f214758dVddM.jpg&ehk=3vA8Uj%2f6dvyTLLbtK8n399Y%2bok9rJkL9llUk7SiB0hU%3d&risl=&pid=ImgRaw&r=0",
				lrc: "/assets/music/lrc/如果可以 - 韦礼安.lrc",
			},
			{
				name: "希望有羽毛和翅膀",
				artist: "知更鸟、HOYO-MiX、Chevy",
				url: "/assets/music/mp3/希望有羽毛和翅膀 - 知更鸟、HOYO-MiX、Chevy.mp3",
				cover: "https://ts3.tc.mm.bing.net/th/id/OIP-C.WgX3rZWNtam8gyDD0c4c5wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
				lrc: "/assets/music/lrc/希望有羽毛和翅膀 - 知更鸟、HOYO-MiX、Chevy.lrc",
			},
			{
				name: "子供たちのひととき",
				artist: "松本文紀",
				url: "/assets/music/mp3/子供たちのひととき - 松本文紀.mp3",
				cover: "https://ts4.tc.mm.bing.net/th/id/OIP-C.n-pB_YCXpDnf7qpialkm4QHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
				lrc: "/assets/music/lrc/子供たちのひととき - 松本文紀.lrc",
			},
		],
	},
};
