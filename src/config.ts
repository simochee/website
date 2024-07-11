export const SITE = {
	TITLE: "よなよなコード",
	ORIGIN: "https://simochee.net",
	SITEMAP_PATHNAME: "/sitemap-index.xml",
	NICK_NAME: "simochee",
	FULL_NAME: "Ryoya Tamura",
	DESCRIPTION:
		"コードを書くのが好きなフロントエンドエンジニア。チームラボにてフロントエンド領域のテックリードとして複数の案件に携わっています。",
	NOW_WATCHING: {
		TITLE: "しかのこのこのここしたんたん",
		URL: "https://www.anime-shikanoko.jp/",
	},
};

export const SOCIAL = {
	TWITTER: {
		ID: "lollipop_onl",
		URL: "https://x.com/lollipop_onl",
	},
	GITHUB: {
		ID: "lollipop-onl",
		URL: "https://github.com/lollipop-onl",
	},
	ZENN: {
		ID: "lollipop_onl",
		URL: "https://zenn.dev/lollipop_onl",
	},
	QIITA: {
		ID: "simochee",
		URL: "https://qiita.com/simochee",
	},
} satisfies Record<string, { ID: string; URL: string }>;
