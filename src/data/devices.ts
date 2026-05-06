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
			name: "iPhone 17 Pro",
			image: "/images/device/iPhone 17 Pro.webp",
			specs: "深蓝色 / 12G + 256G",
			description:
				"创新设计，打造巅峰性能和超长续航",
			link: "https://www.apple.com.cn/iphone-17-pro/",
			price:"8999元"
		},
		{
			name: "XiaoMi 10 Pro",
			image: "/images/device/MI 10Pro.webp",
			specs: "珍珠白/12G+256G",
			description:
				"小米十周年梦幻之作",
			link: "https://3.cn/-2N1n5yb",
			price:"4783元"
		},
		{
			name: "XiaoMi 6",
			image: "/images/device/XiaoMi 6.webp",
			specs: "黑色 / 6G + 64G",
			description:
				"变焦双摄，拍人更美",
			link: "https://3.cn/-2N1n5yb",
			price:"2499元"
		},
	],
	运动相机:[
		{
			name: "影石Insta360 Ace Pro 2",
			image: "/images/device/Insta360 Ace Pro 2.webp",
			specs: "极夜黑 / 街拍银灰",
			description:
				"AI双芯，旗舰影像",
			link: "https://store.insta360.com/cn/product/ace-pro-2?c=3611&from=nav_product",
			price:"2359元"
		},
	],
	路由器: [
		{
			name: "RG-X30E",
			image: "/images/device/RG-X30E.webp",
			specs: "1000Mbps / 2.5G",
			description:
				"锐捷雪豹电竞WiFi 6 路由器",
			link: "https://item.jd.com/100084856711.html",
			price:"109元"
		},
	],
};
