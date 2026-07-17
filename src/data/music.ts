import { musicPlayerConfig } from "@/config/musicConfig";
import musicData from "./music.json";

export interface MusicItem {
	title: string;
	artist: string;
	cover: string;
	url: string;
	lrc?: string;
	duration?: string;
	category?: string;
}

/**
 * 音乐数据来源：
 * - mode="local"：从 musicConfig.local.playlist 读取本地歌曲，自动构建分类
 * - mode="meting"：从 music.json (pnpm prefetch:music 生成) 读取在线歌曲
 */

function buildLocalPlaylist(): MusicItem[] {
	const playlist = musicPlayerConfig.local?.playlist || [];
	return playlist.map((song) => ({
		title: song.name,
		artist: song.artist,
		cover: song.cover || "",
		url: song.url,
		lrc: song.lrc,
		category: song.category || "未分类",
	}));
}

function buildFromJson(): MusicItem[] {
	const raw: any = musicData;
	return Array.isArray(raw) ? raw : raw.songs || [];
}

const isLocal = musicPlayerConfig.mode === "local";
const musicList: MusicItem[] = isLocal ? buildLocalPlaylist() : buildFromJson();

export { musicList };

// 构建分类统计和分类歌曲
function buildLocalCategories(): {
	counts: Record<string, number>;
	songs: Record<string, MusicItem[]>;
} {
	const counts: Record<string, number> = {};
	const songs: Record<string, MusicItem[]> = {};

	for (const item of musicList) {
		const cat = item.category || "未分类";
		counts[cat] = (counts[cat] || 0) + 1;
		if (!songs[cat]) songs[cat] = [];
		songs[cat].push(item);
	}

	return { counts, songs };
}

function buildJsonCategories(): {
	counts: Record<string, number>;
	songs: Record<string, MusicItem[]>;
} {
	const raw: any = musicData;
	if (Array.isArray(raw)) {
		return { counts: { all: musicList.length }, songs: { all: musicList } };
	}
	return {
		counts: raw.playlistCounts || { all: musicList.length },
		songs: raw.playlistSongs || { all: musicList },
	};
}

const categories = isLocal ? buildLocalCategories() : buildJsonCategories();

export const playlistCounts: Record<string, number> = {
	...categories.counts,
	all: musicList.length,
};

export const playlistSongs: Record<string, MusicItem[]> = {
	...categories.songs,
	all: musicList,
};
