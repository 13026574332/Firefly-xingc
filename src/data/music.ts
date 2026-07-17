import { musicPlayerConfig } from "@/config/musicConfig";
import musicData from "./music.json";

export interface MusicItem {
	title: string;
	artist: string;
	cover: string;
	url: string;
	lrc?: string;
	duration?: string;
}

/**
 * 音乐数据来源：
 * - mode="local"：从 musicConfig.local.playlist 读取本地歌曲
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
	}));
}

function buildFromJson(): MusicItem[] {
	const raw: any = musicData;
	return Array.isArray(raw) ? raw : raw.songs || [];
}

const isLocal = musicPlayerConfig.mode === "local";
const musicList: MusicItem[] = isLocal ? buildLocalPlaylist() : buildFromJson();

export { musicList };

export const playlistCounts: Record<string, number> = isLocal
	? { all: musicList.length }
	: (() => {
			const raw: any = musicData;
			return Array.isArray(raw) ? { all: musicList.length } : raw.playlistCounts || {};
		})();

export const playlistSongs: Record<string, MusicItem[]> = isLocal
	? { all: musicList }
	: (() => {
			const raw: any = musicData;
			return Array.isArray(raw)
				? { all: musicList }
				: raw.playlistSongs || {};
		})();
