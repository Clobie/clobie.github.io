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
		label: 'Game Scratchboard',
		type: 'games',
		items: [
			{
				folder: 'boom-boom-game',
				nav_slug: 'boom-boom-game',
				name: 'Boom Boom Game',
				desc: 'Boom boom.',
				sidebar_desc: 'A new game prototype.',
				tag: 'game',
				icon: '&#x1F4A5;',
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
			},
			{
				folder: 'orb',
				nav_slug: 'orb',
				name: 'Orb Puzzle Thing',
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
				folder: 'space',
				nav_slug: 'space',
				name: 'Space Game Thing',
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
		label: 'Websites',
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
