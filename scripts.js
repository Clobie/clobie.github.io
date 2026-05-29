const categories = window.siteCategories || [];

let currentCatIdx = 0, currentItemIdx = 0;
let expandedCategories = categories.map(cat=>cat.collapsed !== true);

function getItemBySlug(slug){
	for(let ci=0;ci<categories.length;ci++){
		const items = categories[ci].items || [];

		for(let ii=0;ii<items.length;ii++){
			if(items[ii].nav_slug === slug){
				return { ci, ii };
			}
		}
	}

	return null;
}

function updateNavParam(ci,ii){
	const slug = categories[ci].items[ii].nav_slug;
	const url = new URL(window.location);

	slug
		? url.searchParams.set('nav', slug)
		: url.searchParams.delete('nav');

	history.replaceState({}, '', url);
}

function getItemSource(item){
	if(item.folder){
		return `web_build/${item.folder}/index.html`;
	}

	return item.url || item.embedUrl || item.source || item.path || '';
}

function getItemDetails(item){
	return item.details || item.controls || [];
}

function buildSidebar(){
	document.getElementById('sidebarCategories').innerHTML =
		categories.map((cat,ci)=>`
			<div class="sidebar-card" data-category-type="${cat.type || ''}">
				${cat.ungrouped ? '' : `
					<button class="sidebar-label category-toggle"
						type="button"
						aria-expanded="${expandedCategories[ci]}"
						onclick="toggleCategory(${ci})">
						<span>${cat.label}</span>
						<span class="category-chevron">${expandedCategories[ci] ? '-' : '+'}</span>
					</button>
				`}

				<div class="category-items ${cat.ungrouped || expandedCategories[ci] ? '' : 'collapsed'}"
					id="list-${ci}">
					${(cat.items || []).map((item,ii)=>`
						<div class="entry-list-item ${ci===currentCatIdx&&ii===currentItemIdx?'active':''}"
							id="item-${ci}-${ii}"
							onclick="switchItem(${ci},${ii})">

							<div class="entry-icon">${item.icon || ''}</div>

							<div class="entry-list-meta">
								<div class="entry-list-name">${item.name}</div>
								<div class="entry-list-sub">${item.tag || cat.type || ''}</div>
							</div>

							${ci===currentCatIdx&&ii===currentItemIdx?'<span class="play-badge">active</span>':''}
						</div>
					`).join('')}
				</div>
			</div>
		`).join('');
}

function toggleCategory(ci){
	expandedCategories[ci] = !expandedCategories[ci];
	buildSidebar();

	const active = document.getElementById(`item-${currentCatIdx}-${currentItemIdx}`);

	if(active){
		active.classList.add('active');

		if(!active.querySelector('.play-badge')){
			active.insertAdjacentHTML('beforeend','<span class="play-badge">active</span>');
		}
	}
}

function renderDescriptionCard(item){
	const details = getItemDetails(item);

	document.getElementById('descriptionText').textContent =
		item.sidebar_desc || item.sidebarDesc || item.summary || item.desc || '';

	document.getElementById('detailsList').innerHTML =
		details.map(detail=>`
			<div class="detail-row">
				<span class="key">${detail.key}</span>
				<span class="detail-desc">${detail.desc}</span>
			</div>
		`).join('');

	document.getElementById('detailsList')
		.classList.toggle('hidden',details.length === 0);
}

function switchItem(ci,ii){
	const prev=document.getElementById(`item-${currentCatIdx}-${currentItemIdx}`);

	if(prev){
		prev.classList.remove('active');
		prev.querySelector('.play-badge')?.remove();
	}

	currentCatIdx=ci;
	currentItemIdx=ii;
	expandedCategories[ci] = true;

	updateNavParam(ci,ii);

	const item=categories[ci].items[ii];

	const el=document.getElementById(`item-${ci}-${ii}`);

	if(el){
		el.classList.add('active');
		el.insertAdjacentHTML('beforeend','<span class="play-badge">active</span>');
	}

	const src = getItemSource(item);

	item.newTab && src
		? window.open(src,'_blank')
		: document.getElementById('game-frame').src=src;

	document.getElementById('viewportTitle').textContent=src;
	document.getElementById('game-title').textContent=item.name;
	document.getElementById('game-desc').textContent=item.desc || '';
	document.getElementById('game-tag').textContent=item.tag || categories[ci].type || '';

	renderDescriptionCard(item);

	document.getElementById('clickHint')
		.classList.toggle('hidden',!!item.newTab);
}

if(categories.length > 0){
	buildSidebar();

	const navSlug = new URLSearchParams(window.location.search).get('nav');
	const item = getItemBySlug(navSlug);

	item
		? switchItem(item.ci,item.ii)
		: switchItem(0,0);
}

document.addEventListener('click',()=>{
	try{
		document.getElementById('game-frame').contentWindow.focus();
	}catch(e){}
});
