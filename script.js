// Put confirmed portfolio information here. Null fields remain visibly pending.
window.PORTFOLIO_CONTENT={
  email:null,
  cv:null,
  socials:[],
  projects:{
    'interactive-installation':{year:null,role:null,team:null,tools:null,overview:null,concept:null,video:null,poster:null,externalVideo:null,gallery:[],process:null,testing:null,outcome:null,reflection:null},
    'digital-experience':{year:null,role:null,team:null,tools:null,overview:null,concept:null,video:null,poster:null,externalVideo:null,gallery:[],process:null,testing:null,outcome:null,reflection:null},
    'spatial-study':{year:null,role:null,team:null,tools:null,overview:null,concept:null,gallery:[],process:null},
    'visual-study':{year:null,role:null,team:null,tools:null,overview:null,concept:null,gallery:[],process:null}
  }
};

const categories=[{id:'space',name:'Space',zh:'空間與物件',desc:'室內設計、立體建模與實體模型。從尺度、結構到人的行動。'},{id:'visual',name:'Visual',zh:'平面與視覺',desc:'海報、編排、品牌與插畫。用構圖與視覺語言整理想法。'},{id:'screen',name:'Screen',zh:'數位與媒體',desc:'數位介面、網站、動畫與影片。探索螢幕上的溝通與體驗。'},{id:'experience',name:'Experience',zh:'互動與展演',desc:'互動裝置、遊戲與展覽。關注參與者的行動，以及設計如何回應。'}];
let assetReady=true;
const projects=[{id:'interactive-installation',category:'experience',title:'互動裝置專題',summary:'預留觀眾操作、裝置回應與展出紀錄的位置。',type:'互動裝置 / 展演',large:true,media:true},{id:'digital-experience',category:'screen',title:'數位介面與媒體',summary:'預留介面設計、動態影像與操作展示的位置。',type:'數位介面 / 媒體',large:true,media:true},{id:'spatial-study',category:'space',title:'空間與模型研究',summary:'預留空間設計、模型照片與構造細節的位置。',type:'室內設計 / 模型',large:false},{id:'visual-study',category:'visual',title:'平面視覺系列',summary:'預留直式海報、編排與設計理念的位置。',type:'海報 / 視覺編排',large:false}];
const main=document.querySelector('main');
function art(category, extra=''){return assetReady?`<span class="sprite ${category} ${extra}"><img src="assets/spatial-atlas.png" alt="${categories.find(c=>c.id===category).zh}概念示意，非實際作品" loading="lazy" width="1254" height="1254"></span>`:`<span class="placeholder ${extra}"><strong>${categories.find(c=>c.id===category).name}</strong><small>概念素材準備中</small></span>`;}
function scene(id){
  return `<div class="scene" data-scene="${id}" data-active="space">
    <div class="scene-topline"><span>INTERACTIVE EXHIBIT / 0<span class="scene-index">1</span></span><button class="scene-control" aria-pressed="false">拆解空間 ＋</button></div>
    <div class="scene-stage">
      <div class="scene-floor" aria-hidden="true"></div>
      <div class="scene-orbit" aria-hidden="true"></div>
      ${categories.map((c,i)=>`<button class="scene-piece" data-cat="${c.id}" data-selected="${i===0}" aria-label="探索${c.zh}" aria-pressed="${i===0}" style="--order:${i}">${art(c.id)}<span class="object-label">0${i+1} / ${c.name}</span></button>`).join('')}
      <span class="scene-title" aria-hidden="true">Space</span>
    </div>
    <div class="scene-bottom"><label for="explode-${id}">組合</label><input id="explode-${id}" type="range" min="0" max="100" value="0" aria-label="空間拆解程度"><span>拆解</span><output for="explode-${id}">0%</output></div>
    <div class="scene-caption"><span>拖動滑桿，探索空間的另一面</span><a class="scene-direct" href="#/works?category=space">查看空間與物件作品 ↗</a></div>
  </div>`;
}

function card(p){return `<a class="work-card" href="#/works/${p.id}" data-cursor="查看"><div class="cover ${p.category}">${art(p.category)}<span class="badge">${p.media?'▷ 媒體版型':'圖集版型'} · 示例</span></div><div class="work-meta"><span>${p.type}</span><span>年份待補</span></div><h3>${p.title}<span>↗</span></h3><p>${p.summary}</p></a>`;}
function home(){return `<div class="wrap"><section class="hero"><div class="hero-copy"><div class="eyebrow">LULU / INTERACTION DESIGN</div><h1>From Space<br>to <em>Experience.</em></h1><p>從空間出發，探索設計與人的互動。<br>室內設計背景，現就讀互動設計系。</p><div class="hero-actions"><a class="pill" href="#/?section=selected">看精選作品 <span>↓</span></a><a class="text-link" href="#/?section=explore">探索四個領域 ↗</a></div></div>${scene('hero')}</section><section class="section" id="selected"><div class="section-heading"><h2>Selected works.<small>精選作品 / 01—03</small></h2><a class="text-link" href="#/works">全部作品 ↗</a></div><p class="sample-note">以下為可操作的作品版型，名稱與圖像皆為示例，待置入實際作品。</p><div class="selected-grid">${projects.slice(0,3).map(card).join('')}</div></section><section class="section" id="explore"><div class="section-heading"><h2>One practice.<br>Four perspectives.<small>同一份探索，四種設計視角</small></h2></div><div class="explore-layout">${scene('explore')}<div><div class="category-list">${categories.map((c,i)=>`<button class="category-button" data-cat="${c.id}" aria-pressed="${i===0}"><span>0${i+1}</span><b>${c.name}</b><small>${c.zh}</small></button>`).join('')}</div><div class="category-description" aria-live="polite"><p>${categories[0].desc}</p><a class="text-link category-link" href="#/works?category=space">查看空間與物件作品 ↗</a></div></div></div></section><section class="section story"><div><div class="eyebrow">MY STARTING POINT</div><h2 style="margin-top:25px">It started<br>with space.</h2></div><div><p>高中就讀室內設計科，目前就讀互動設計系。這裡整理我在空間、平面、媒體與互動設計中的創作。</p><a class="text-link" href="#/about">認識我與我的設計背景 ↗</a></div></section><section class="section"><div class="section-heading"><h2>Along the way.<small>工作坊、展覽與學習經歷</small></h2><a class="text-link" href="#/journey">全部經歷 ↗</a></div>${journeyRows()}</section><section class="section contact-banner"><h2>Let’s create<br>something meaningful.</h2><a class="pill" href="#/about?section=contact">關於我與聯絡 <span>↗</span></a></section></div>`;}
function journeyRows(){return `<a class="journey-row" href="#/journey/workshop"><small>日期待補</small><div><h3>工作坊參與紀錄</h3><p>參與過程、協作與學習反思 · 示例</p></div><span>↗</span></a><a class="journey-row" href="#/journey/exhibition"><small>日期待補</small><div><h3>展覽與現場觀察</h3><p>佈展、觀眾互動與作品延伸 · 示例</p></div><span>↗</span></a>`;}
const experienceItems=[{id:'workshop',title:'工作坊參與紀錄',type:'工作坊',intro:'記錄參與過程中的嘗試、協作與學習。',related:null},{id:'exhibition',title:'展覽與現場觀察',type:'展覽',intro:'從佈展到觀眾參與，整理作品在現場的延伸。',related:'interactive-installation'}];
const content=window.PORTFOLIO_CONTENT||{};
projects.forEach(p=>Object.assign(p,content.projects?.[p.id]||{}));
function esc(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function safeURL(value){if(!value)return null;try{const u=new URL(value,document.baseURI);return ['https:','http:'].includes(u.protocol)||(location.protocol==='file:'&&u.protocol==='file:')?u.href:null;}catch{return null;}}
function works(){const chosen=routeURL().searchParams.get('category');const valid=categories.some(c=>c.id===chosen)?chosen:'all';const filtered=projects.filter(p=>valid==='all'||p.category===valid);return `<div class="wrap page-end"><section class="page-intro"><div class="eyebrow">PROJECT INDEX / 01—04</div><h1>Works.</h1><p>空間、視覺、數位與互動。<br>選擇一個領域，或從全部作品開始。</p></section><div class="filters" aria-label="作品分類">${[{id:'all',name:'All',zh:'全部'},...categories].map(c=>`<button data-filter="${c.id}" aria-pressed="${valid===c.id}">${c.name} / ${c.zh}</button>`).join('')}</div><p class="sample-note" aria-live="polite">${filtered.length} 件作品版型 · 示例內容，待置入實際作品</p><div class="works-grid">${filtered.map(card).join('')}</div></div>`;}
function mediaBlock(p){const video=safeURL(p.video);return `<section class="detail-block"><h2>Media <small>／ 影像紀錄</small></h2>${video?`<video controls playsinline preload="none" ${safeURL(p.poster)?`poster="${esc(safeURL(p.poster))}"`:''} aria-label="${esc(p.title)}影像"><source src="${esc(video)}"></video><p class="media-error" hidden>影片暫時無法載入。${safeURL(p.externalVideo)?`<a class="text-link" href="${esc(safeURL(p.externalVideo))}" target="_blank" rel="noopener">開啟外部影片 ↗</a>`:'請稍後再試，或先閱讀以下作品說明。'}</p>`:`<div class="video-placeholder"><span aria-hidden="true">▷</span><p>操作影片待補</p><p>此處將呈現作品示範與現場紀錄；提供影片後，可直接播放及全螢幕觀看。</p></div>`}</section>`;}
function detail(p){return `<div class="wrap page-end"><section class="page-intro"><a class="back-link" href="#/works" data-back-works>← 返回作品總覽</a><div class="eyebrow">${p.category.toUpperCase()} / ${p.large?'CASE STUDY':'PROJECT'}</div><h1>${p.title}</h1><p>${p.summary}</p><p class="sample-note">作品版型示例 · 以下概念圖非實際作品</p></section><div class="detail-hero">${art(p.category)}</div><div class="detail-grid"><aside><dl class="facts"><dt>作品類型</dt><dd>${p.type}</dd><dt>年份</dt><dd>${esc(p.year||'待補')}</dd><dt>我的角色</dt><dd>${esc(p.role||'個人貢獻待補')}</dd><dt>合作與分工</dt><dd>${esc(p.team||'團隊資料待補')}</dd><dt>工具／媒材</dt><dd>${esc(p.tools||'待補')}</dd></dl></aside><div class="prose"><section class="detail-block"><h2>Overview ／ 作品概述</h2><p>${esc(p.overview||'待補：這件作品回應什麼問題、為誰設計，以及希望帶來什麼體驗。')}</p></section><section class="detail-block"><h2>Concept ／ 設計理念</h2><p>${esc(p.concept||'待補：核心概念、設計選擇與形成過程。這裡保留簡短文字，搭配作品細節說明。')}</p></section>${p.large?`<section class="detail-block"><h2>Interaction ／ 互動流程</h2><div class="flow"><div><small>01 / ACTION</small>觀眾做什麼？<br>參與動作待補</div><div><small>02 / RESPONSE</small>系統如何回應？<br>回饋方式待補</div><div><small>03 / EXPERIENCE</small>產生什麼體驗？<br>體驗目標待補</div></div><details style="margin-top:20px"><summary>技術補充</summary><p style="margin-top:15px">感測器、程式、系統架構或接線圖待補。</p></details></section>`:''}<section class="detail-block"><h2>Gallery ／ 作品圖集</h2><p class="sample-note">點擊可放大。示意圖用於檢查圖集操作。</p><div class="gallery-grid">${[0,1].map((n)=>`<button class="gallery-tile" data-gallery="${n}" data-project="${p.id}" aria-label="放大${p.title}圖集第 ${n+1} 張">${art(p.category)}<span class="badge">${n===0?'概念示意':'細節版位'} ＋</span></button>`).join('')}</div></section>${p.media?mediaBlock(p):''}${p.large?`<section class="detail-block"><h2>Try a response.<small> ／ 原型互動示例</small></h2><p class="demo-caption">以下為網站操作示例，並非作品的實際互動。按下啟動，再用按鈕或方向鍵改變回饋。</p><div class="demo" aria-live="polite"><span class="demo-feedback">等待啟動</span></div><div class="demo-controls"><button class="pill" data-demo-start>啟動示例</button><button class="pill" data-demo-shift disabled>切換回饋 →</button></div></section>`:''}${p.process?`<section class="detail-block"><h2>Process ／ 製作過程</h2><p>${esc(p.process)}</p></section>`:''}${p.testing?`<section class="detail-block"><h2>Testing ／ 測試與調整</h2><p>${esc(p.testing)}</p></section>`:''}${p.outcome?`<section class="detail-block"><h2>Outcome ／ 成果</h2><p>${esc(p.outcome)}</p></section>`:''}${p.reflection?`<section class="detail-block"><h2>Reflection ／ 反思</h2><p>${esc(p.reflection)}</p></section>`:''}<p class="sample-note">製作過程、測試、展出與反思區塊會在補入資料後顯示。</p></div></div><section class="section" style="margin-top:60px"><div class="section-heading"><h2>Keep exploring.<small>其他作品</small></h2><a href="#/works" class="text-link" data-back-works>返回作品 ↗</a></div><div class="works-grid">${projects.filter(x=>x.id!==p.id).slice(0,2).map(card).join('')}</div></section></div>`;}
function journey(){return `<div class="wrap page-end"><section class="page-intro"><div class="eyebrow">BEYOND THE PROJECTS</div><h1>Along the way.</h1><p>工作坊、展覽與合作中的學習。<br>把過程中值得留下的觀察，放在這裡。</p></section><p class="sample-note">經歷版型示例 · 日期、名稱與照片待補；實際紀錄依日期由新到舊排列。</p>${journeyRows()}</div>`;}
function journeyDetail(item){return `<div class="wrap page-end"><section class="page-intro"><a class="back-link" href="#/journey">← 返回經歷</a><div class="eyebrow">JOURNEY / ${item.type}</div><h1>${item.title}</h1><p>${item.intro}</p><p class="sample-note">經歷版型示例 · 非已確認的參與紀錄</p></section><div class="detail-grid"><aside><dl class="facts"><dt>日期</dt><dd>待補</dd><dt>活動名稱</dt><dd>待補</dd><dt>參與角色</dt><dd>待補</dd><dt>地點／主辦單位</dt><dd>待補</dd></dl></aside><div class="prose"><div class="portrait-placeholder"><span>活動照片待補</span></div><section class="detail-block"><h2>Participation ／ 參與過程</h2><p>待補：活動內容、實際參與的任務與協作方式。</p></section><section class="detail-block"><h2>Learning ／ 學習與觀察</h2><p>待補：遇到的問題、嘗試的方法，以及對後續創作的影響。</p></section>${item.related?`<section class="detail-block"><h2>Related project ／ 相關作品</h2><p class="sample-note">以下為關聯示例，待確認實際展出作品。</p><a class="pill" href="#/works/${item.related}">查看作品詳情 ↗</a></section>`:''}</div></div></div>`;}
function about(){const cv=safeURL(content.cv);const email=typeof content.email==='string'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.email)?content.email:null;return `<div class="wrap"><section class="page-intro"><div class="eyebrow">ABOUT / LULU</div><h1>Hello, I’m Lulu.</h1><p>室內設計背景，現就讀互動設計系。</p></section><section class="about-layout page-end"><div class="portrait-placeholder"><b>L.</b><span>個人照片待補</span></div><div class="prose"><h2>From space,<br>towards interaction.</h2><p>高中就讀室內設計科，目前就讀互動設計系。我希望在這份作品集中，統整平面設計、互動設計、媒體設計，以及過往的室內設計、建模與模型製作。</p><p>作品以不同媒材呈現，也保留設計理念、製作過程與展覽紀錄的位置。</p></div></section><section class="section about-columns"><div><h3>Education ／ 學歷</h3><p>目前 · 互動設計系<br><small>學校與就讀年份待補</small></p><p>高中 · 室內設計科<br><small>學校與就讀年份待補</small></p></div><div><h3>Practice ／ 設計領域</h3><p>互動設計 · 平面設計 · 媒體設計<br>室內設計 · 建模 · 模型製作</p><h3>Tools ／ 工具</h3><p>熟悉的工具與使用經驗待補。</p></div></section><section class="section"><div class="section-heading"><h2>How I make.<small>設計方法摘要版位</small></h2></div><p class="sample-note">以下為方法架構示例，待依實際工作方式調整。</p><ol class="process-list"><li><span>01</span>Observe／觀察</li><li><span>02</span>Sketch／構想</li><li><span>03</span>Prototype／原型</li><li><span>04</span>Test／測試</li><li><span>05</span>Iterate／調整</li></ol></section><section class="section" id="resume"><div class="section-heading"><h2>Résumé.<small>履歷</small></h2></div>${cv?`<a class="pill" href="${esc(cv)}" download>下載履歷 PDF ↓</a>`:'<div class="pending">履歷 PDF 尚未提供，檔案補上後可由此下載。</div>'}</section><section class="section" id="contact"><div class="section-heading"><h2>Let’s get in touch.<small>聯絡方式</small></h2></div><p>歡迎交流設計、創作與合作機會。</p><div class="contact-links">${email?`<a class="pill" href="mailto:${esc(email)}">${esc(email)} ↗</a>`:'<span class="pending">Email 待補</span>'}${(content.socials||[]).filter(s=>safeURL(s.url)).map(s=>`<a class="pill" href="${esc(safeURL(s.url))}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join('')||'<span class="pending">社群連結待補</span>'}</div></section></div>`;}
function notFound(){return `<div class="wrap page-end"><section class="page-intro"><div class="eyebrow">404 / NOT FOUND</div><h1>Not here.</h1><p>這個頁面不存在。可以從作品總覽繼續探索。</p></section><a class="pill" href="#/works">查看作品 ↗</a></div>`;}
function render(){const path=routeURL().pathname.replace(/\/$/,'')||'/';let title='From Space to Experience';if(path==='/')main.innerHTML=home();else if(path==='/works'){main.innerHTML=works();title='作品';}else if(path.startsWith('/works/')){const p=projects.find(p=>path==='/works/'+p.id);main.innerHTML=p?detail(p):notFound();title=p?.title||'找不到頁面';}else if(path==='/journey'){main.innerHTML=journey();title='經歷';}else if(path.startsWith('/journey/')){const item=experienceItems.find(i=>path==='/journey/'+i.id);main.innerHTML=item?journeyDetail(item):notFound();title=item?.title||'找不到頁面';}else if(path==='/about'){main.innerHTML=about();title='關於我';}else{main.innerHTML=notFound();title='找不到頁面';}document.title=`${title} — LULU`;document.querySelectorAll('nav a').forEach(a=>{const active=new URL((a.getAttribute('href')||'#/').slice(1),'https://portfolio.local').pathname===path;if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});bind();bindPage();enhance();}
function bind(){document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>selectCategory(b.dataset.cat));}
function selectCategory(id){const c=categories.find(c=>c.id===id);document.querySelectorAll('.scene').forEach(s=>s.dataset.active=id);document.querySelectorAll('.scene-title').forEach(t=>t.textContent=c.name);document.querySelectorAll('.scene-direct').forEach(a=>{a.href='#/works?category='+id;a.textContent='查看'+c.zh+'作品 ↗';});document.querySelectorAll('[data-cat]').forEach(b=>{b.setAttribute('aria-pressed',b.dataset.cat===id);b.dataset.selected=b.dataset.cat===id;});const d=document.querySelector('.category-description');if(d)d.innerHTML=`<p>${c.desc}</p><a class="text-link" href="#/works?category=${id}">查看${c.zh}作品 ↗</a>`;}
document.querySelector('.menu-toggle').onclick=()=>{const open=document.querySelector('nav').classList.toggle('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded',open);};document.querySelector('.top-button').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
history.scrollRestoration='manual';
let pageKey=routeKey();
const positions=new Map();
let worksReturn='/works';
function routeURL(){return new URL(location.hash.startsWith('#/')?location.hash.slice(1):'/', 'https://portfolio.local');}
function routeKey(){const u=routeURL();return u.pathname+u.search;}
function navigate(url,{pop=false,restore=false}={}){
  positions.set(pageKey,scrollY);
  if(!pop)history.pushState({},'', '#'+url.replace(/^#/,''));
  pageKey=routeKey();
  document.querySelector('nav').classList.remove('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
  document.querySelector('#cursor').style.display='none';
  render();
  requestAnimationFrame(()=>{
    const anchor=document.getElementById(routeURL().searchParams.get('section'));
    if(anchor)anchor.scrollIntoView({behavior:'instant'});
    else window.scrollTo({top:restore?(positions.get(pageKey)||0):0,behavior:'instant'});
    main.focus({preventScroll:true});
  });
}
document.addEventListener('click',e=>{
  const a=e.target.closest('a');
  if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target||a.hasAttribute('download'))return;
  const href=a.getAttribute('href');
  if(a.classList.contains('skip')){e.preventDefault();main.focus({preventScroll:true});main.scrollIntoView({behavior:'instant'});return;}
  if(!href?.startsWith('#/'))return;
  if(routeURL().pathname==='/works')worksReturn=routeKey();
  const restore=a.hasAttribute('data-back-works');
  e.preventDefault();navigate(restore?worksReturn:href.slice(1),{restore});
});
window.addEventListener('popstate',()=>navigate(routeKey(),{pop:true,restore:true}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.querySelector('nav').classList.contains('open')){document.querySelector('nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');document.querySelector('.menu-toggle').focus();}});
let gallery=[],galleryIndex=0,galleryOrigin=null;
const lightbox=document.querySelector('#lightbox');
function paintGallery(){const item=gallery[galleryIndex];document.querySelector('#gallery-view').innerHTML=item.src?`<img class="gallery-image" src="${esc(item.src)}" alt="${esc(item.caption)}">`:art(item.category);document.querySelector('#gallery-caption').textContent=item.caption;document.querySelector('#gallery-counter').textContent=`${galleryIndex+1} / ${gallery.length}`;document.querySelector('#gallery-prev').disabled=gallery.length<2;document.querySelector('#gallery-next').disabled=gallery.length<2;}
function moveGallery(delta){galleryIndex=(galleryIndex+delta+gallery.length)%gallery.length;paintGallery();}
document.querySelector('#gallery-close').onclick=()=>lightbox.close();document.querySelector('#gallery-prev').onclick=()=>moveGallery(-1);document.querySelector('#gallery-next').onclick=()=>moveGallery(1);lightbox.addEventListener('close',()=>galleryOrigin?.focus());lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();moveGallery(1)}if(e.key==='ArrowLeft'){e.preventDefault();moveGallery(-1)}});let touchStart=null;lightbox.addEventListener('touchstart',e=>touchStart=e.changedTouches[0].clientX,{passive:true});lightbox.addEventListener('touchend',e=>{if(touchStart!==null){const dx=e.changedTouches[0].clientX-touchStart;if(Math.abs(dx)>50)moveGallery(dx<0?1:-1);touchStart=null;}},{passive:true});
function bindPage(){document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{const url=b.dataset.filter==='all'?'/works':'/works?category='+b.dataset.filter;const y=scrollY;navigate(url);requestAnimationFrame(()=>scrollTo(0,y));});document.querySelectorAll('[data-gallery]').forEach(b=>b.onclick=()=>{const p=projects.find(p=>p.id===b.dataset.project);gallery=p.gallery?.length?p.gallery.filter(g=>safeURL(g.src)).map(g=>({src:safeURL(g.src),caption:g.caption||p.title})):[{category:p.category,caption:'概念示意 · 非實際作品'},{category:p.category,caption:'細節版位 · 非實際作品'}];if(!gallery.length)return;galleryIndex=Number(b.dataset.gallery)%gallery.length;galleryOrigin=b;paintGallery();lightbox.showModal();});const start=document.querySelector('[data-demo-start]'),shift=document.querySelector('[data-demo-shift]');if(start&&shift){let step=0,active=false;const states=['Action → Response','Observe → Connect','Space → Experience'];const update=()=>{document.querySelector('.demo-feedback').textContent=active?states[step]:'等待啟動';document.querySelector('.demo').classList.toggle('active',active);};start.onclick=()=>{active=!active;start.textContent=active?'停止示例':'啟動示例';shift.disabled=!active;update();};shift.onclick=()=>{step=(step+1)%states.length;update();};shift.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();step=(step+(e.key==='ArrowRight'?1:2))%states.length;update();}};}document.querySelectorAll('video').forEach(v=>{v.addEventListener('error',()=>{const message=v.parentElement.querySelector('.media-error');if(message)message.hidden=false;});v.querySelector('source')?.addEventListener('error',()=>{const message=v.parentElement.querySelector('.media-error');if(message)message.hidden=false;});});}
const cursor=document.querySelector('#cursor');document.addEventListener('pointermove',e=>{const target=e.target.closest('[data-cursor]');if(e.pointerType==='mouse'&&target&&!matchMedia('(prefers-reduced-motion: reduce)').matches){cursor.style.display='flex';cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';cursor.textContent=target.dataset.cursor;}else cursor.style.display='none';});document.addEventListener('pointerleave',()=>cursor.style.display='none');
document.addEventListener('error',e=>{if(e.target instanceof HTMLImageElement){const holder=e.target.parentElement;holder.classList.add('main-image-failed');e.target.hidden=true;if(!holder.querySelector('.image-fallback')){const notice=document.createElement('span');notice.className='image-fallback';notice.textContent='圖片暫時無法載入';holder.append(notice);}}},true);
// All animation is optional; navigation and content never depend on it.
const reducedMedia=matchMedia('(prefers-reduced-motion: reduce)');
let userReduced=false;
try{userReduced=localStorage.getItem('lulu-reduced-motion')==='true';}catch{}
let motionCleanups=[];
let revealObserver=null;
let canvasFrame=0;
function isReduced(){return userReduced||reducedMedia.matches;}
function syncMotion(){
  document.body.classList.toggle('reduce-motion',isReduced());
  const button=document.querySelector('.motion-toggle');
  button.setAttribute('aria-pressed',isReduced());
  button.textContent=isReduced()?'動態效果：已減少':'減少動態';
}
document.querySelector('.motion-toggle').onclick=()=>{
  userReduced=!userReduced;
  try{localStorage.setItem('lulu-reduced-motion',String(userReduced));}catch{}
  syncMotion();enhance();
};
reducedMedia.addEventListener('change',()=>{syncMotion();enhance();});
syncMotion();
function enhance(){
  motionCleanups.forEach(fn=>fn());motionCleanups=[];
  revealObserver?.disconnect();cancelAnimationFrame(canvasFrame);
  document.querySelectorAll('.scene').forEach(setupScene);
  document.querySelectorAll('.work-card').forEach(setupCard);
  const revealTargets=document.querySelectorAll('.section-heading,.work-card,.story,.journey-row,.detail-block,.about-layout');
  if(!isReduced()){
    revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('arrived');revealObserver.unobserve(entry.target);}
    }),{threshold:0.08});
    revealTargets.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',(i%2)*80+'ms');revealObserver.observe(el);});
  }else revealTargets.forEach(el=>el.classList.add('arrived'));
  document.querySelectorAll('.hero-copy h1,.page-intro h1').forEach(el=>el.classList.add('title-enter'));
  setupLightField();
  updateReadingProgress();
}
function setupScene(scene){
  const slider=scene.querySelector('input');
  const button=scene.querySelector('.scene-control');
  const output=scene.querySelector('output');
  const stage=scene.querySelector('.scene-stage');
  function update(value){
    const v=Math.max(0,Math.min(100,Number(value)));
    slider.value=v;output.textContent=Math.round(v)+'%';
    scene.style.setProperty('--explode',v/100);
    scene.classList.toggle('exploded',v>50);
    button.setAttribute('aria-pressed',v>50);
    button.textContent=v>50?'組合空間 −':'拆解空間 ＋';
  }
  slider.oninput=()=>update(slider.value);
  button.onclick=()=>update(Number(slider.value)>50?0:100);
  scene.querySelectorAll('.scene-piece').forEach((piece,index)=>{
    piece.addEventListener('focus',()=>{selectCategory(piece.dataset.cat);document.querySelectorAll('.scene-index').forEach(n=>n.textContent=index+1);});
    piece.addEventListener('click',()=>document.querySelectorAll('.scene-index').forEach(n=>n.textContent=index+1));
  });
  stage.onpointermove=e=>{
    if(e.pointerType!=='mouse'||isReduced())return;
    const r=stage.getBoundingClientRect();
    stage.style.setProperty('--view-x',((e.clientX-r.left)/r.width-.5)*9+'deg');
    stage.style.setProperty('--view-y',-((e.clientY-r.top)/r.height-.5)*7+'deg');
  };
  stage.onpointerleave=()=>{stage.style.setProperty('--view-x','0deg');stage.style.setProperty('--view-y','0deg');};
  update(0);
}
function setupCard(card){
  const cover=card.querySelector('.cover');
  card.onpointermove=e=>{
    if(e.pointerType!=='mouse'||isReduced())return;
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    cover.style.setProperty('--tilt-x',(0.5-y)*5+'deg');cover.style.setProperty('--tilt-y',(x-.5)*7+'deg');
    cover.style.setProperty('--shine-x',x*100+'%');cover.style.setProperty('--shine-y',y*100+'%');
  };
  card.onpointerleave=()=>{cover.style.setProperty('--tilt-x','0deg');cover.style.setProperty('--tilt-y','0deg');};
}
let readingFrame=0;
function updateReadingProgress(){
  const max=document.documentElement.scrollHeight-innerHeight;
  document.querySelector('.reading-progress').style.transform=`scaleX(${max>0?Math.min(1,scrollY/max):0})`;
}
window.addEventListener('scroll',()=>{if(readingFrame)return;readingFrame=requestAnimationFrame(()=>{updateReadingProgress();readingFrame=0;});},{passive:true});
// A canvas interaction study: movement, touch and keyboard all influence a field.
function setupLightField(){
  const old=document.querySelector('.demo,.light-field');
  if(!old)return;
  const section=old.closest('section');
  section.querySelector('h2').innerHTML='A space that responds.<small> ／ 光場互動研究</small>';
  section.querySelector('.demo-caption').textContent='網站互動示例，非實際作品。啟動後移動游標、在畫面上拖動，或使用方向鍵；按下空白鍵可發出波紋。';
  section.querySelector('.demo-controls')?.remove();section.querySelector('.field-controls')?.remove();
  old.outerHTML=`<div class="light-field"><canvas tabindex="0" aria-label="互動光場。方向鍵移動光源，空白鍵產生波紋。"></canvas><div class="field-overlay"><span>MOVE / TOUCH / FEEL</span><strong>Every action<br><em>leaves a trace.</em></strong><button class="field-start">啟動光場 ↗</button></div><div class="field-readout" aria-hidden="true"><span>INPUT <b class="field-input">—</b></span><span>RESPONSE / RESONANCE</span></div></div><div class="field-controls"><button class="pill field-pulse" disabled>產生波紋 ◎</button><button class="text-link field-stop" disabled>停止互動</button><span class="field-status" role="status">尚未啟動</span></div>`;
  const root=section.querySelector('.light-field'),canvas=root.querySelector('canvas'),ctx=canvas.getContext('2d');
  const start=root.querySelector('.field-start'),pulse=section.querySelector('.field-pulse'),stop=section.querySelector('.field-stop');
  let active=false,w=0,h=0,px=.5,py=.5,lastTime=0,ripples=[],visible=true;
  const status=section.querySelector('.field-status');
  function resize(){const r=root.getBoundingClientRect();w=r.width;h=r.height;const d=Math.min(devicePixelRatio||1,2);canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);draw(performance.now());}
  function draw(time){
    ctx.clearRect(0,0,w,h);ctx.fillStyle='#202d29';ctx.fillRect(0,0,w,h);
    const t=isReduced()?0:time*.00035;
    const focusX=px*w,focusY=py*h;
    const glow=ctx.createRadialGradient(focusX,focusY,0,focusX,focusY,Math.max(w,h)*.65);
    glow.addColorStop(0,'rgba(166,185,153,.15)');glow.addColorStop(1,'rgba(32,45,41,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    for(let col=0;col<25;col++){
      ctx.beginPath();
      for(let row=0;row<35;row++){
        const x=col*w/24,y=row*h/34,dx=x-focusX,dy=y-focusY,dist=Math.hypot(dx,dy);
        const energy=active?Math.exp(-dist/(w*.28)):0.12;
        let bend=Math.sin(row*.23+t+col*.15)*6;
        if(active)bend+=Math.sin(dist*.025-t*4)*energy*30;
        for(const wave of ripples){const radius=(time-wave.time)*.23;bend+=Math.exp(-Math.pow((dist-radius)/28,2))*18;}
        row?ctx.lineTo(x+bend,y):ctx.moveTo(x+bend,y);
      }
      ctx.strokeStyle=col%3===0?'rgba(214,226,194,.52)':'rgba(154,184,158,.22)';ctx.lineWidth=col%3===0?1.1:.7;ctx.stroke();
    }
    if(active){ctx.beginPath();ctx.arc(focusX,focusY,5,0,Math.PI*2);ctx.fillStyle='#e7e8cd';ctx.fill();ctx.beginPath();ctx.arc(focusX,focusY,18,0,Math.PI*2);ctx.strokeStyle='#b3c4a4';ctx.stroke();}
    ripples=ripples.filter(r=>time-r.time<2500);
  }
  function loop(time){if(active&&visible&&!document.hidden&&!isReduced()&&time-lastTime>25){draw(time);lastTime=time;}if(active&&!isReduced())canvasFrame=requestAnimationFrame(loop);}
  function startField(){active=true;root.classList.add('running');pulse.disabled=false;stop.disabled=false;status.textContent='已啟動 · 可拖動或使用方向鍵';canvas.focus({preventScroll:true});draw(performance.now());cancelAnimationFrame(canvasFrame);if(!isReduced())canvasFrame=requestAnimationFrame(loop);}
  function stopField(){active=false;root.classList.remove('running');pulse.disabled=true;stop.disabled=true;cancelAnimationFrame(canvasFrame);status.textContent='互動已停止';ripples=[];draw(performance.now());start.focus({preventScroll:true});}
  function emit(){if(!active)return;ripples.push({time:performance.now()});if(isReduced()){px=1-px;draw(performance.now());}status.textContent=isReduced()?'已更新靜態光場':'波紋已產生';}
  function move(e){if(!active)return;const r=canvas.getBoundingClientRect();px=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));py=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));root.querySelector('.field-input').textContent=e.pointerType==='touch'?'TOUCH':'POINTER';if(isReduced())draw(performance.now());}
  canvas.onpointerdown=e=>{if(!active)return;canvas.setPointerCapture(e.pointerId);move(e);emit();};
  canvas.onpointermove=move;
  canvas.onkeydown=e=>{if(!active)return;const keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '];if(!keys.includes(e.key))return;e.preventDefault();if(e.key===' '){emit();return;}px=Math.max(.05,Math.min(.95,px+(e.key==='ArrowLeft'?-.06:e.key==='ArrowRight'?.06:0)));py=Math.max(.05,Math.min(.95,py+(e.key==='ArrowUp'?-.06:e.key==='ArrowDown'?.06:0)));root.querySelector('.field-input').textContent='KEYBOARD';if(isReduced())draw(performance.now());};
  start.onclick=startField;pulse.onclick=emit;stop.onclick=stopField;
  const ro=new ResizeObserver(resize);ro.observe(root);
  const io=new IntersectionObserver(entries=>visible=entries[0].isIntersecting);io.observe(root);
  motionCleanups.push(()=>{active=false;cancelAnimationFrame(canvasFrame);ro.disconnect();io.disconnect();});
}

render();
requestAnimationFrame(()=>document.getElementById(routeURL().searchParams.get('section'))?.scrollIntoView());
