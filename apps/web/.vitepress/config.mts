import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "AI-Lint",
	description:
		"AI-Lint bridges the gap between AI capabilities and human documentation standards. Instead of adapting to how AI writes, define your rules and watch AI conform to your standards.",
	head: [
		['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
		['meta', { name: 'theme-color', content: '#646cff' }],
		['meta', { name: 'og:type', content: 'website' }],
		['meta', { name: 'og:title', content: 'AI-Lint' }],
		['meta', { name: 'og:image', content: '/logo.svg' }],
		['meta', { name: 'og:description', content: 'Teach AI Your Documentation Standards, Not the Other Way Around' }],
	],
	lastUpdated: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/logo.svg',
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Guide", link: "/guide" },
			{ text: "API", link: "/api-examples" },
			{
				text: "Resources",
				items: [
					{ text: "Rule Examples", link: "/guide" },
					{ text: "API Reference", link: "/api-examples" },
				]
			},
		],

		sidebar: [
			{
				text: "Introduction",
				items: [
					{ text: "What is AI-Lint?", link: "/" },
					{ text: "Getting Started", link: "/guide" },
				],
			},
			{
				text: "Guide",
				items: [
					{ text: "Markdown Examples", link: "/guide" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/ToyB0x/ai-lint" },
			{ icon: "twitter", link: "https://twitter.com" },
			{ icon: "discord", link: "https://discord.com" },
		],
		
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2025 AI-Lint Contributors'
		},
		
		search: {
			provider: 'local'
		},
		
		outline: {
			level: 'deep',
			label: 'On this page'
		},
		
		carbonAds: {
			code: 'your-carbon-code',
			placement: 'your-carbon-placement'
		}
	},
});
