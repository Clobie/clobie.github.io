window.siteCategories = [
	{
		label: 'Home',
		type: 'home',
		ungrouped: true,
		items: [
			{
				name: 'Home',
				nav_slug: '',
				desc: 'Welcome.',
				sidebar_desc: 'Site landing page.',
				tag: 'home',
				icon: '&#x1F3E0;',
				url: 'home/index.html',
			}
		]
	},
	{
		label: 'Game Demos',
		type: 'games',
		items: [
			{
				folder: 'boomer-strike',
				nav_slug: 'boomer-strike',
				name: 'Boomer Strike',
				desc: 'Old-school boomer shooter action.',
				sidebar_desc: 'Retro FPS prototype in the style of classic boomer shooters.',
				tag: 'fps',
				icon: '&#x1F52B;',
			},
			{
				folder: 'steve',
				nav_slug: 'steve',
				name: 'Steve is dreaming',
				desc: 'His name is steve.',
				sidebar_desc: 'Tiny platformer test build.',
				tag: 'platformer',
				icon: '&#x1F419;',
				details: [
					{ key: 'W', desc: 'Wall Hold' },
					{ key: 'A', desc: 'Move Left' },
					{ key: 'D', desc: 'Move Right' },
					{ key: 'SPC', desc: 'Jump' },
				]
			}
		]
	},
	{
		label: 'Game Scratchpad',
		type: 'games',
		items: [
			{
				folder: 'orb',
				nav_slug: 'orb',
				name: 'Orb',
				desc: 'Put orb in thing. Fight boss.',
				sidebar_desc: 'Orb physics, boss fight, and movement prototype.',
				tag: 'platformer',
				icon: '&#x1F52E;',
				details: [
					{ key: 'W', desc: 'Wall Hold' },
					{ key: 'S', desc: 'Wall Slide (while wall holding)' },
					{ key: 'A', desc: 'Move Left' },
					{ key: 'D', desc: 'Move Right' },
					{ key: 'SPC', desc: 'Jump / Double Jump' },
					{ key: 'LMB', desc: 'Shoot &mdash; kills enemies, pushes orbs' },
					{ key: 'RMB', desc: 'Gravity Gun &mdash; pulls orbs' },
				]
			},
			{
				folder: 'boom-boom-game',
				nav_slug: 'boom-boom-game',
				name: 'Scrap War',
				desc: 'Boom boom.',
				sidebar_desc: 'A new game prototype.',
				tag: 'game',
				icon: '&#x1F4A5;',
			},
			{
				folder: 'space',
				nav_slug: 'space',
				name: 'Space Game',
				desc: 'All you can do is fly around lol',
				sidebar_desc: 'Top-down flight experiment.',
				tag: 'topdown-shooter',
				icon: '&#x1F680;',
				details: [
					{ key: 'LMB', desc: 'Thrust' },
					{ key: 'RMB', desc: 'Laser' },
				]
			}
		]
	},
	{
		label: 'Tools',
		type: 'tools',
		items: [
			{
				folder: 'light-texture-generator',
				nav_slug: 'light-texture-generator',
				name: 'LiTexture',
				desc: 'Generate tileable light and texture maps.',
				sidebar_desc: 'Procedural texture generation tool.',
				tag: 'tool',
				icon: '&#x1F3A8;',
			}
		]
	},
	{
		label: 'Other',
		type: 'websites',
		items: [
			{
				name: 'Console',
				nav_slug: 'console',
				desc: 'clobie_os. extremely basic terminal emulator. browse',
				sidebar_desc: 'Terminal-inspired portfolio site.',
				tag: 'portfolio project',
				icon: '&#x1F3E0;',
				url: 'https://www.clobie.net',
				details: [
					{ key: 'ls', desc: 'List directory contents' },
					{ key: 'cd', desc: 'Change the current directory' },
					{ key: 'cat', desc: 'Read and display file contents' },
					{ key: 'clear', desc: 'Clear the terminal screen' },
					{ key: 'pwd', desc: 'Print working directory' }
				]
			}
		]
	},
];
