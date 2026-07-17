// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
	price?: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机: [
		{
			name: "荣耀100 Pro",
			image: "/images/device/honor-100-pro.webp",
			specs: "莫奈紫 / 16G + 512G",
			description: "骁龙8 Gen2，单反级写真相机",
			link: "https://www.honor.com/cn/shop/product/100pro",
			price: "3399元",
		},
	],
	电脑: [
		{
			name: "联想拯救者 R9000P",
			image: "/images/device/lenovo-r9000p.webp",
			specs: "R9-7945HX / RTX 4060 / 16G + 1TB",
			description: "专业电竞本，满血性能释放",
			link: "https://item.lenovo.com.cn/product/r9000p",
			price: "8499元",
		},
	],
	穿戴: [
		{
			name: "荣耀手环9 NFC版",
			image: "/images/device/honor-band-9.webp",
			specs: "曜石黑 / NFC版",
			description: "1.57英寸AMOLED屏，14天超长续航",
			link: "https://www.honor.com/cn/shop/product/honor-band-9",
			price: "249元",
		},
	],
	耳机: [
		{
			name: "荣耀亲选耳机 X5S",
			image: "/images/device/honor-earbuds-x5s.webp",
			specs: "冰岛白",
			description: "Hi-Res金标认证，主动降噪",
			link: "https://www.honor.com/cn/shop/product/earbuds-x5s",
			price: "199元",
		},
	],
};
