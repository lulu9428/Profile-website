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

Object.assign(window.PORTFOLIO_CONTENT.projects['spatial-study'],{"real":true,"title":"ACCOMODATE","summary":"淡色系與新古典線條，為一家四口構築自在的居所。","type":"室內製圖 / 空間設計","cover":"assets/accomodate/living-02.webp","tools":"CAD / SketchUp / V-Ray","gallery":[{"src":"assets/accomodate/living-02.webp","caption":"客廳 · 視角一"},{"src":"assets/accomodate/living-03.webp","caption":"客廳 · 視角二"},{"src":"assets/accomodate/master.webp","caption":"主臥"},{"src":"assets/accomodate/bedroom.webp","caption":"次臥"},{"src":"assets/accomodate/single.webp","caption":"單人間"},{"src":"assets/accomodate/balcony.webp","caption":"陽台"},{"src":"assets/accomodate/kitchen.webp","caption":"廚房"},{"src":"assets/accomodate/existing.webp","caption":"現況平面圖"},{"src":"assets/accomodate/plan.webp","caption":"平面配置圖"},{"src":"assets/accomodate/floor.webp","caption":"地板材質 · 淺木紋"},{"src":"assets/accomodate/marble.webp","caption":"大理石 · 白色石紋"},{"src":"assets/accomodate/balcony-material.webp","caption":"陽台材質"},{"src":"assets/accomodate/wall.webp","caption":"牆面材質"},{"src":"assets/accomodate/fabric.webp","caption":"布料 · 灰米色織物"}]});

window.PORTFOLIO_CONTENT.projects["hakka-cinema"]={"real": true, "title": "客映食光", "summary": "將客家文化、飲食與電影，轉化為跨世代共享的空間。", "type": "高三專題 / 空間設計", "period": "高中三年級", "cover": "assets/hakka-cinema/cover.webp"};

Object.assign(window.PORTFOLIO_CONTENT.projects['interactive-installation'],{real:true,title:'心有靈昔一點通',summary:'透過 MIDI 控制器，喚醒竹林、召喚神靈並與精靈共舞。',type:'互動投影 / 展出',period:'大一下',cover:'assets/spirit-wall/forest.webp'});

Object.assign(window.PORTFOLIO_CONTENT.projects['digital-experience'],{real:true,title:'緣分籤詩',summary:'以青花油紙傘連結提問、轉動與關係反思。',type:'手機網頁 / 互動介面',period:'大二',cover:'assets/fortune/umbrella-6.png'});

const categories=[{id:'space',name:'Space',zh:'空間設計',desc:'室內設計、立體建模與實體模型。從尺度、結構到人的行動。'},{id:'visual',name:'Visual',zh:'平面與視覺',desc:'海報、編排、品牌與插畫。用構圖與視覺語言整理想法。'},{id:'screen',name:'Screen',zh:'數位與媒體',desc:'數位介面、網站、動畫與影片。探索螢幕上的溝通與體驗。'},{id:'experience',name:'Experience',zh:'互動與展演',desc:'互動裝置、遊戲與展覽。關注參與者的行動，以及設計如何回應。'}];
let assetReady=true;
const projects=[{id:'hakka-cinema',category:'space',large:true},{id:'interactive-installation',category:'experience',title:'互動裝置專題',summary:'預留觀眾操作、裝置回應與展出紀錄的位置。',type:'互動裝置 / 展演',large:true,media:true},{id:'digital-experience',category:'screen',title:'數位介面與媒體',summary:'預留介面設計、動態影像與操作展示的位置。',type:'數位介面 / 媒體',large:true,media:true},{id:'spatial-study',category:'space',title:'空間與模型研究',summary:'預留空間設計、模型照片與構造細節的位置。',type:'室內設計 / 模型',large:false},{id:'visual-study',category:'visual',title:'平面視覺系列',summary:'預留直式海報、編排與設計理念的位置。',type:'海報 / 視覺編排',large:false}];
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
    <div class="scene-modes" role="group" aria-label="拆解排列方式"><button data-layout="corners" aria-pressed="true">四角散開 ↗︎</button><button data-layout="orbit" aria-pressed="false">環形展示 ◎</button><span>拖動滑桿 · 點選物件</span></div>
    <div class="scene-caption"><span>四種媒材，一個持續變動的空間。</span><a class="scene-direct" href="#/works?category=space">查看空間與物件作品 ↗︎</a></div>
  </div>`;
}

function card(p){if(p.real)return `<a class="work-card real-card" href="#/works/${p.id}" data-cursor="查看"><div class="cover real-cover"><img src="${p.cover}" alt="${esc(p.title)} 封面" loading="lazy"></div><div class="work-meta"><span>${esc(p.type)}</span><span>${esc(p.period||"高中二年級")}</span></div><h3>${esc(p.title)}<span>↗︎</span></h3></a>`;return `<a class="work-card" href="#/works/${p.id}" data-cursor="查看"><div class="cover ${p.category}">${art(p.category)}<span class="badge">${p.media?'▷ 媒體版型':'圖集版型'} · 示例</span></div><div class="work-meta"><span>${p.type}</span><span>年份待補</span></div><h3>${p.title}<span>↗︎</span></h3><p>${p.summary}</p></a>`;}
function home(){return `<div class="wrap"><section class="hero"><div class="hero-copy"><div class="eyebrow">LULU / INTERACTION DESIGN</div><h1>From Space<br>to <em>Experience.</em></h1><p>從空間出發，探索設計與人的互動。<br>室內設計背景，現就讀互動設計系。</p><div class="hero-actions"><a class="pill" href="#/?section=selected">看精選作品 <span>↓︎</span></a><a class="text-link" href="#/?section=explore">探索四個領域 ↗︎</a></div></div>${scene('hero')}</section><section class="section" id="selected"><div class="section-heading"><h2>Selected works.<small>精選作品 / 01—03</small></h2><a class="text-link" href="#/works">全部作品 ↗︎</a></div><p class="sample-note">緣分籤詩、心有靈昔一點通、ACCOMODATE 與客映食光為實際作品；其餘標示「示例」的項目為待補作品版型。</p><div class="selected-grid">${projects.slice(0,3).map(card).join('')}</div></section><section class="section" id="explore"><div class="section-heading"><h2>One practice.<br>Four perspectives.<small>同一份探索，四種設計視角</small></h2></div><div class="explore-layout">${scene('explore')}<div><div class="category-list">${categories.map((c,i)=>`<button class="category-button" data-cat="${c.id}" aria-pressed="${i===0}"><span>0${i+1}</span><b>${c.name}</b><small>${c.zh}</small></button>`).join('')}</div><div class="category-description" aria-live="polite"><p>${categories[0].desc}</p><a class="text-link category-link" href="#/works?category=space">查看空間與物件作品 ↗︎</a></div></div></div></section><section class="section story"><div><div class="eyebrow">MY STARTING POINT</div><h2 style="margin-top:25px">It started<br>with space.</h2></div><div><p>高中就讀室內設計科，目前就讀互動設計系。這裡整理我在空間、平面、媒體與互動設計中的創作。</p><a class="text-link" href="#/about">認識我與我的設計背景 ↗︎</a></div></section><section class="section"><div class="section-heading"><h2>Along the way.<small>工作坊、展覽與學習經歷</small></h2><a class="text-link" href="#/journey">全部經歷 ↗︎</a></div>${journeyRows()}</section><section class="section contact-banner"><h2>Let’s create<br>something meaningful.</h2><a class="pill" href="#/about?section=contact">關於我與聯絡 <span>↗︎</span></a></section></div>`;}
function journeyRows(){return `<a class="journey-row" href="#/journey/workshop"><small>日期待補</small><div><h3>工作坊參與紀錄</h3><p>參與過程、協作與學習反思 · 示例</p></div><span>↗︎</span></a><a class="journey-row" href="#/journey/exhibition"><small>日期待補</small><div><h3>展覽與現場觀察</h3><p>佈展、觀眾互動與作品延伸 · 示例</p></div><span>↗︎</span></a>`;}
const experienceItems=[{id:'workshop',title:'工作坊參與紀錄',type:'工作坊',intro:'記錄參與過程中的嘗試、協作與學習。',related:null},{id:'exhibition',title:'展覽與現場觀察',type:'展覽',intro:'從佈展到觀眾參與，整理作品在現場的延伸。',related:'interactive-installation'}];
const content=window.PORTFOLIO_CONTENT||{};
projects.forEach(p=>Object.assign(p,content.projects?.[p.id]||{}));
projects.sort((a,b)=>Number(!!b.real)-Number(!!a.real)||(['interactive-installation','spatial-study','hakka-cinema'].indexOf(a.id)-['interactive-installation','spatial-study','hakka-cinema'].indexOf(b.id)));
function esc(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function safeURL(value){if(!value)return null;try{const u=new URL(value,location.origin);return ['https:','http:'].includes(u.protocol)?u.href:null;}catch{return null;}}
function works(){const chosen=routeURL().searchParams.get('category');const valid=categories.some(c=>c.id===chosen)?chosen:'all';const filtered=projects.filter(p=>valid==='all'||p.category===valid);return `<div class="wrap page-end"><section class="page-intro"><div class="eyebrow">PROJECT INDEX / 01—05</div><h1>Works.</h1><p>空間、視覺、數位與互動。<br>選擇一個領域，或從全部作品開始。</p></section><div class="filters" aria-label="作品分類">${[{id:'all',name:'All',zh:'全部'},...categories].map(c=>`<button data-filter="${c.id}" aria-pressed="${valid===c.id}">${c.name} / ${c.zh}</button>`).join('')}</div><p class="sample-note" aria-live="polite">${filtered.length} 個項目 · ${filtered.filter(p=>p.real).length} 件實際作品${filtered.some(p=>!p.real)?"，其餘為待補作品示例":""}</p><div class="works-grid">${filtered.map(card).join('')}</div></div>`;}
function mediaBlock(p){const video=safeURL(p.video);return `<section class="detail-block"><h2>Media <small>／ 影像紀錄</small></h2>${video?`<video controls playsinline preload="none" ${safeURL(p.poster)?`poster="${esc(safeURL(p.poster))}"`:''} aria-label="${esc(p.title)}影像"><source src="${esc(video)}"></video><p class="media-error" hidden>影片暫時無法載入。${safeURL(p.externalVideo)?`<a class="text-link" href="${esc(safeURL(p.externalVideo))}" target="_blank" rel="noopener">開啟外部影片 ↗︎</a>`:'請稍後再試，或先閱讀以下作品說明。'}</p>`:`<div class="video-placeholder"><span aria-hidden="true">▷</span><p>操作影片待補</p><p>此處將呈現作品示範與現場紀錄；提供影片後，可直接播放及全螢幕觀看。</p></div>`}</section>`;}
function detail(p){if(p.id==='digital-experience')return fortuneDetail(p);if(p.id==='interactive-installation')return spiritDetail(p);if(p.id==='hakka-cinema')return hakkaDetail(p);if(p.real)return residentialDetail(p);return `<div class="wrap page-end"><section class="page-intro"><a class="back-link" href="#/works" data-back-works>←︎ 返回作品總覽</a><div class="eyebrow">${p.category.toUpperCase()} / ${p.large?'CASE STUDY':'PROJECT'}</div><h1>${p.title}</h1><p>${p.summary}</p><p class="sample-note">作品版型示例 · 以下概念圖非實際作品</p></section><div class="detail-hero">${art(p.category)}</div><div class="detail-grid"><aside><dl class="facts"><dt>作品類型</dt><dd>${p.type}</dd><dt>年份</dt><dd>${esc(p.year||'待補')}</dd><dt>我的角色</dt><dd>${esc(p.role||'個人貢獻待補')}</dd><dt>合作與分工</dt><dd>${esc(p.team||'團隊資料待補')}</dd><dt>工具／媒材</dt><dd>${esc(p.tools||'待補')}</dd></dl></aside><div class="prose"><section class="detail-block"><h2>Overview ／ 作品概述</h2><p>${esc(p.overview||'待補：這件作品回應什麼問題、為誰設計，以及希望帶來什麼體驗。')}</p></section><section class="detail-block"><h2>Concept ／ 設計理念</h2><p>${esc(p.concept||'待補：核心概念、設計選擇與形成過程。這裡保留簡短文字，搭配作品細節說明。')}</p></section>${p.large?`<section class="detail-block"><h2>Interaction ／ 互動流程</h2><div class="flow"><div><small>01 / ACTION</small>觀眾做什麼？<br>參與動作待補</div><div><small>02 / RESPONSE</small>系統如何回應？<br>回饋方式待補</div><div><small>03 / EXPERIENCE</small>產生什麼體驗？<br>體驗目標待補</div></div><details style="margin-top:20px"><summary>技術補充</summary><p style="margin-top:15px">感測器、程式、系統架構或接線圖待補。</p></details></section>`:''}<section class="detail-block"><h2>Gallery ／ 作品圖集</h2><p class="sample-note">點擊可放大。示意圖用於檢查圖集操作。</p><div class="gallery-grid">${[0,1].map((n)=>`<button class="gallery-tile" data-gallery="${n}" data-project="${p.id}" aria-label="放大${p.title}圖集第 ${n+1} 張">${art(p.category)}<span class="badge">${n===0?'概念示意':'細節版位'} ＋</span></button>`).join('')}</div></section>${p.media?mediaBlock(p):''}${p.large?`<section class="detail-block"><h2>Try a response.<small> ／ 原型互動示例</small></h2><p class="demo-caption">以下為網站操作示例，並非作品的實際互動。按下啟動，再用按鈕或方向鍵改變回饋。</p><div class="demo" aria-live="polite"><span class="demo-feedback">等待啟動</span></div><div class="demo-controls"><button class="pill" data-demo-start>啟動示例</button><button class="pill" data-demo-shift disabled>切換回饋 →︎</button></div></section>`:''}${p.process?`<section class="detail-block"><h2>Process ／ 製作過程</h2><p>${esc(p.process)}</p></section>`:''}${p.testing?`<section class="detail-block"><h2>Testing ／ 測試與調整</h2><p>${esc(p.testing)}</p></section>`:''}${p.outcome?`<section class="detail-block"><h2>Outcome ／ 成果</h2><p>${esc(p.outcome)}</p></section>`:''}${p.reflection?`<section class="detail-block"><h2>Reflection ／ 反思</h2><p>${esc(p.reflection)}</p></section>`:''}<p class="sample-note">製作過程、測試、展出與反思區塊會在補入資料後顯示。</p></div></div><section class="section" style="margin-top:60px"><div class="section-heading"><h2>Keep exploring.<small>其他作品</small></h2><a href="#/works" class="text-link" data-back-works>返回作品 ↗︎</a></div><div class="works-grid">${projects.filter(x=>x.id!==p.id).slice(0,2).map(card).join('')}</div></section></div>`;}
function journey(){return `<div class="wrap page-end"><section class="page-intro"><div class="eyebrow">BEYOND THE PROJECTS</div><h1>Along the way.</h1><p>工作坊、展覽與合作中的學習。<br>把過程中值得留下的觀察，放在這裡。</p></section><p class="sample-note">經歷版型示例 · 日期、名稱與照片待補；實際紀錄依日期由新到舊排列。</p>${journeyRows()}</div>`;}
function journeyDetail(item){return `<div class="wrap page-end"><section class="page-intro"><a class="back-link" href="#/journey">←︎ 返回經歷</a><div class="eyebrow">JOURNEY / ${item.type}</div><h1>${item.title}</h1><p>${item.intro}</p><p class="sample-note">經歷版型示例 · 非已確認的參與紀錄</p></section><div class="detail-grid"><aside><dl class="facts"><dt>日期</dt><dd>待補</dd><dt>活動名稱</dt><dd>待補</dd><dt>參與角色</dt><dd>待補</dd><dt>地點／主辦單位</dt><dd>待補</dd></dl></aside><div class="prose"><div class="portrait-placeholder"><span>活動照片待補</span></div><section class="detail-block"><h2>Participation ／ 參與過程</h2><p>待補：活動內容、實際參與的任務與協作方式。</p></section><section class="detail-block"><h2>Learning ／ 學習與觀察</h2><p>待補：遇到的問題、嘗試的方法，以及對後續創作的影響。</p></section>${item.related?`<section class="detail-block"><h2>Related project ／ 相關作品</h2><p class="sample-note">以下為關聯示例，待確認實際展出作品。</p><a class="pill" href="#/works/${item.related}">查看作品詳情 ↗︎</a></section>`:''}</div></div></div>`;}
function about(){const cv=safeURL(content.cv);const email=typeof content.email==='string'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.email)?content.email:null;return `<div class="wrap"><section class="page-intro"><div class="eyebrow">ABOUT / LULU</div><h1>Hello, I’m Lulu.</h1><p>室內設計背景，現就讀互動設計系。</p></section><section class="about-layout page-end"><div class="portrait-placeholder"><b>L.</b><span>個人照片待補</span></div><div class="prose"><h2>From space,<br>towards interaction.</h2><p>高中就讀室內設計科，目前就讀互動設計系。我希望在這份作品集中，統整平面設計、互動設計、媒體設計，以及過往的室內設計、建模與模型製作。</p><p>作品以不同媒材呈現，也保留設計理念、製作過程與展覽紀錄的位置。</p></div></section><section class="section about-columns"><div><h3>Education ／ 學歷</h3><p>目前 · 互動設計系<br><small>學校與就讀年份待補</small></p><p>高中 · 室內設計科<br><small>學校與就讀年份待補</small></p></div><div><h3>Practice ／ 設計領域</h3><p>互動設計 · 平面設計 · 媒體設計<br>室內設計 · 建模 · 模型製作</p><h3>Tools ／ 工具</h3><p>熟悉的工具與使用經驗待補。</p></div></section><section class="section"><div class="section-heading"><h2>How I make.<small>設計方法摘要版位</small></h2></div><p class="sample-note">以下為方法架構示例，待依實際工作方式調整。</p><ol class="process-list"><li><span>01</span>Observe／觀察</li><li><span>02</span>Sketch／構想</li><li><span>03</span>Prototype／原型</li><li><span>04</span>Test／測試</li><li><span>05</span>Iterate／調整</li></ol></section><section class="section" id="resume"><div class="section-heading"><h2>Résumé.<small>履歷</small></h2></div>${cv?`<a class="pill" href="${esc(cv)}" download>下載履歷 PDF ↓︎</a>`:'<div class="pending">履歷 PDF 尚未提供，檔案補上後可由此下載。</div>'}</section><section class="section" id="contact"><div class="section-heading"><h2>Let’s get in touch.<small>聯絡方式</small></h2></div><p>歡迎交流設計、創作與合作機會。</p><div class="contact-links">${email?`<a class="pill" href="mailto:${esc(email)}">${esc(email)} ↗︎</a>`:'<span class="pending">Email 待補</span>'}${(content.socials||[]).filter(s=>safeURL(s.url)).map(s=>`<a class="pill" href="${esc(safeURL(s.url))}" target="_blank" rel="noopener">${esc(s.label)} ↗︎</a>`).join('')||'<span class="pending">社群連結待補</span>'}</div></section></div>`;}
function notFound(){return `<div class="wrap page-end"><section class="page-intro"><div class="eyebrow">404 / NOT FOUND</div><h1>Not here.</h1><p>這個頁面不存在。可以從作品總覽繼續探索。</p></section><a class="pill" href="#/works">查看作品 ↗︎</a></div>`;}
function render(){const path=routeURL().pathname.replace(/\/$/,'')||'/';let title='From Space to Experience';const intro=path==='/intro'||(path==='/'&&!location.hash);document.body.classList.toggle('is-opening',intro);if(intro)main.innerHTML=opening();else if(path==='/')main.innerHTML=home();else if(path==='/works'){main.innerHTML=works();title='作品';}else if(path.startsWith('/works/')){const p=projects.find(p=>path==='/works/'+p.id);main.innerHTML=p?detail(p):notFound();title=p?.title||'找不到頁面';}else if(path==='/journey'){main.innerHTML=journey();title='經歷';}else if(path.startsWith('/journey/')){const item=experienceItems.find(i=>path==='/journey/'+i.id);main.innerHTML=item?journeyDetail(item):notFound();title=item?.title||'找不到頁面';}else if(path==='/about'){main.innerHTML=about();title='關於我';}else{main.innerHTML=notFound();title='找不到頁面';}document.title=`${title} — LULU`;document.querySelectorAll('nav a').forEach(a=>{const active=new URL((a.getAttribute('href')||'#/').slice(1),'https://portfolio.local').pathname===path;if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});bind();bindPage();enhance();}
function bind(){document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>selectCategory(b.dataset.cat));}
function selectCategory(id){const c=categories.find(c=>c.id===id);document.querySelectorAll('.scene').forEach(s=>s.dataset.active=id);document.querySelectorAll('.scene-title').forEach(t=>t.textContent=c.name);document.querySelectorAll('.scene-direct').forEach(a=>{a.href='#/works?category='+id;a.textContent='查看'+c.zh+'作品 ↗︎';});document.querySelectorAll('[data-cat]').forEach(b=>{b.setAttribute('aria-pressed',b.dataset.cat===id);b.dataset.selected=b.dataset.cat===id;});const d=document.querySelector('.category-description');if(d)d.innerHTML=`<p>${c.desc}</p><a class="text-link" href="#/works?category=${id}">查看${c.zh}作品 ↗︎</a>`;}
document.querySelector('.menu-toggle').onclick=()=>{const open=document.querySelector('nav').classList.toggle('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded',open);};document.querySelector('.top-button').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
history.scrollRestoration='manual';
let pageKey=routeKey();
const positions=new Map();
let worksReturn=location.hash.includes('/works/interactive-installation')?'/works?category=experience':(/\/works\/(spatial-study|hakka-cinema)/.test(location.hash))?'/works?category=space':'/works';
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
function bindPage(){document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{const url=b.dataset.filter==='all'?'/works':'/works?category='+b.dataset.filter;const y=scrollY;navigate(url);requestAnimationFrame(()=>scrollTo(0,y));});document.querySelectorAll('[data-gallery]').forEach(b=>b.onclick=()=>{const p=projects.find(p=>p.id===b.dataset.project);gallery=p.gallery?.length?p.gallery.filter(g=>safeURL(g.src)).map(g=>({src:safeURL(g.src),caption:g.caption||p.title})):[{category:p.category,caption:'概念示意 · 非實際作品'},{category:p.category,caption:'細節版位 · 非實際作品'}];if(!gallery.length)return;galleryIndex=Number(b.dataset.gallery)%gallery.length;galleryOrigin=b;paintGallery();lightbox.showModal();});const start=document.querySelector('[data-demo-start]'),shift=document.querySelector('[data-demo-shift]');if(start&&shift){let step=0,active=false;const states=['Action →︎ Response','Observe →︎ Connect','Space →︎ Experience'];const update=()=>{document.querySelector('.demo-feedback').textContent=active?states[step]:'等待啟動';document.querySelector('.demo').classList.toggle('active',active);};start.onclick=()=>{active=!active;start.textContent=active?'停止示例':'啟動示例';shift.disabled=!active;update();};shift.onclick=()=>{step=(step+1)%states.length;update();};shift.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();step=(step+(e.key==='ArrowRight'?1:2))%states.length;update();}};}document.querySelectorAll('video').forEach(v=>{v.addEventListener('error',()=>{const message=v.parentElement.querySelector('.media-error');if(message)message.hidden=false;});v.querySelector('source')?.addEventListener('error',()=>{const message=v.parentElement.querySelector('.media-error');if(message)message.hidden=false;});});}
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
  setupLightField();setupOpening();setupSiteCaptionAlignment();setupSpiritPage();
  updateReadingProgress();
}
function setupScene(scene){
  const slider=scene.querySelector('input');
  const button=scene.querySelector('.scene-control');
  const output=scene.querySelector('output');
  const stage=scene.querySelector('.scene-stage');
  let layout=scene.dataset.layout||'corners';
  const pieces=[...scene.querySelectorAll('.scene-piece')];
  const initial=[[-86,45],[52,-68],[100,65],[-75,-89]];
  const targets={corners:[[.23,.75],[.77,.25],[.77,.75],[.23,.25]],orbit:[[.2,.5],[.5,.22],[.8,.5],[.5,.78]]};
  function update(value){
    const v=Math.max(0,Math.min(100,Number(value)));
    slider.value=v;output.textContent=Math.round(v)+'%';
    scene.style.setProperty('--explode',v/100);
    const w=stage.clientWidth,h=stage.clientHeight,t=v/100;
    const unit=parseFloat(getComputedStyle(scene).getPropertyValue('--unit'))||1;
    pieces.forEach((piece,i)=>{
      const [tx,ty]=targets[layout][i];
      const x=initial[i][0]*unit*(1-t)+(tx-.5)*w*t;
      const y=initial[i][1]*unit*(1-t)+(ty-.49)*h*t;
      const finalSize=Math.min(w*.39,h*(layout==='orbit'?.34:.43));
      const scale=1+(finalSize/Math.max(1,piece.offsetWidth)-1)*t;
      piece.style.transform=`translate(-50%,-50%) translate3d(${x}px,${y}px,0) rotate(${[-7,6,5,-6][i]*t}deg) scale(${scale})`;
    });
    scene.classList.toggle('exploded',v>50);
    button.setAttribute('aria-pressed',v>50);
    button.textContent=v>50?'組合空間 −':'拆解空間 ＋';
  }
  slider.oninput=()=>update(slider.value);
  button.onclick=()=>update(Number(slider.value)>50?0:100);
  scene.querySelectorAll('[data-layout]').forEach(b=>b.onclick=()=>{
    layout=b.dataset.layout;scene.dataset.layout=layout;
    scene.querySelectorAll('[data-layout]').forEach(n=>n.setAttribute('aria-pressed',n===b));
    update(100);
  });
  scene.querySelectorAll('.scene-piece').forEach((piece,index)=>{
    piece.onfocus=()=>{selectCategory(piece.dataset.cat);document.querySelectorAll('.scene-index').forEach(n=>n.textContent=index+1);};
    piece.onclick=()=>{selectCategory(piece.dataset.cat);document.querySelectorAll('.scene-index').forEach(n=>n.textContent=index+1);};
  });
  stage.onpointermove=e=>{
    if(e.pointerType!=='mouse'||isReduced())return;
    const r=stage.getBoundingClientRect();
    stage.style.setProperty('--view-x',((e.clientX-r.left)/r.width-.5)*9+'deg');
    stage.style.setProperty('--view-y',-((e.clientY-r.top)/r.height-.5)*7+'deg');
  };
  stage.onpointerleave=()=>{stage.style.setProperty('--view-x','0deg');stage.style.setProperty('--view-y','0deg');};
  const ro=new ResizeObserver(()=>update(slider.value));ro.observe(stage);
  motionCleanups.push(()=>ro.disconnect());
  update(slider.value);
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
  old.outerHTML=`<div class="light-field"><canvas tabindex="0" aria-label="互動光場。方向鍵移動光源，空白鍵產生波紋。"></canvas><div class="field-overlay"><span>MOVE / TOUCH / FEEL</span><strong>Every action<br><em>leaves a trace.</em></strong><button class="field-start">啟動光場 ↗︎</button></div><div class="field-readout" aria-hidden="true"><span>INPUT <b class="field-input">—</b></span><span>RESPONSE / RESONANCE</span></div></div><div class="field-controls"><label>回饋模式 <select class="field-mode"><option value="waves">流動波紋</option><option value="particles">微光星群</option><option value="orbit">環形共振</option></select></label><button class="pill field-pulse" disabled>產生波紋 ◎</button><button class="text-link field-stop" disabled>停止互動</button><span class="field-status" role="status">尚未啟動</span></div>`;
  const root=section.querySelector('.light-field'),canvas=root.querySelector('canvas'),ctx=canvas.getContext('2d');
  const start=root.querySelector('.field-start'),pulse=section.querySelector('.field-pulse'),stop=section.querySelector('.field-stop');
  let mode='waves';
  const modeSelect=section.querySelector('.field-mode');
  modeSelect.onchange=()=>{mode=modeSelect.value;draw(performance.now());status.textContent='已切換：'+modeSelect.selectedOptions[0].textContent;};
  let active=false,w=0,h=0,px=.5,py=.5,lastTime=0,ripples=[],visible=true;
  const status=section.querySelector('.field-status');
  function resize(){const r=root.getBoundingClientRect();w=r.width;h=r.height;const d=Math.min(devicePixelRatio||1,2);canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);draw(performance.now());}
  function draw(time){
    ctx.clearRect(0,0,w,h);ctx.fillStyle='#39332F';ctx.fillRect(0,0,w,h);
    const t=isReduced()?0:time*.00035;
    const focusX=px*w,focusY=py*h;
    const glow=ctx.createRadialGradient(focusX,focusY,0,focusX,focusY,Math.max(w,h)*.65);
    glow.addColorStop(0,'rgba(185,173,160,.25)');glow.addColorStop(1,'rgba(57,51,47,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    if(mode==='waves')for(let col=0;col<25;col++){
      ctx.beginPath();
      for(let row=0;row<35;row++){
        const x=col*w/24,y=row*h/34,dx=x-focusX,dy=y-focusY,dist=Math.hypot(dx,dy);
        const energy=active?Math.exp(-dist/(w*.28)):0.12;
        let bend=Math.sin(row*.23+t+col*.15)*6;
        if(active)bend+=Math.sin(dist*.025-t*4)*energy*30;
        for(const wave of ripples){const radius=(time-wave.time)*.23;bend+=Math.exp(-Math.pow((dist-radius)/28,2))*18;}
        row?ctx.lineTo(x+bend,y):ctx.moveTo(x+bend,y);
      }
      ctx.strokeStyle=['#f3f0eaaa','#b9ada0aa','#e5ded5aa','#998675aa'][col%4];ctx.lineWidth=col%3===0?1.1:.7;ctx.stroke();
    }
    if(mode==='particles')for(let i=0;i<90;i++){
      const ax=((i*137.5)%997)/997*w,ay=((i*83.7)%593)/593*h;
      const distance=Math.hypot(ax-focusX,ay-focusY),pull=active?Math.exp(-distance/(w*.35))*.25:0;
      const x=ax+(focusX-ax)*pull+Math.sin(t*2+i)*5,y=ay+(focusY-ay)*pull+Math.cos(t*2+i)*5;
      ctx.beginPath();ctx.arc(x,y,2+i%4,0,Math.PI*2);ctx.fillStyle=['#f3f0ea','#b9ada0','#e5ded5','#998675'][i%4];ctx.fill();
      if(active&&distance<100){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(focusX,focusY);ctx.strokeStyle='#e5ded52b';ctx.stroke();}
    }
    if(mode==='orbit')for(let i=0;i<16;i++){
      ctx.beginPath();ctx.ellipse(focusX,focusY,15+i*15,10+i*9,Math.sin(t)*.5+i*.12,0,Math.PI*2);
      ctx.strokeStyle=['#f3f0ea99','#b9ada099','#e5ded599','#99867599'][i%4];ctx.lineWidth=1.5;ctx.stroke();
    }
    if(mode!=='waves')for(const wave of ripples){ctx.beginPath();ctx.arc(focusX,focusY,(time-wave.time)*.16,0,Math.PI*2);ctx.strokeStyle='#ffffff55';ctx.stroke();}
    if(active){ctx.beginPath();ctx.arc(focusX,focusY,5,0,Math.PI*2);ctx.fillStyle='#f3f0ea';ctx.fill();ctx.beginPath();ctx.arc(focusX,focusY,18,0,Math.PI*2);ctx.strokeStyle='#b9ada0';ctx.stroke();}
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



function setupSiteCaptionAlignment(){
 const research=document.querySelector('.hakka-research');
 if(!research)return;
 const stack=research.querySelector('.hakka-site-stack');
 const concepts=research.querySelector('.hakka-concepts');
 const target=concepts?.querySelector(':scope > div:last-child figcaption');
 if(!stack||!target)return;
 let frame=0;
 const align=()=>{
  cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{
   if(!stack.isConnected)return;
   if(innerWidth<=600){stack.style.removeProperty('width');return;}
   const available=target.getBoundingClientRect().top-stack.getBoundingClientRect().top;
   const caption=stack.querySelector('figcaption').getBoundingClientRect().height;
   const gap=parseFloat(getComputedStyle(stack).rowGap)||0;
   const width=Math.max(100,Math.min(410,stack.parentElement.clientWidth,(available-caption-gap)*1.36/2));
   stack.style.width=width+'px';
  });
 };
 const observer=new ResizeObserver(align);
 observer.observe(concepts);observer.observe(research.querySelector('.hakka-copy'));
 research.querySelectorAll('img').forEach(img=>img.addEventListener('load',align));
 window.addEventListener('resize',align);document.fonts.ready.then(align);align();
 motionCleanups.push(()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('resize',align);research.querySelectorAll('img').forEach(img=>img.removeEventListener('load',align));});
}

function opening(){return `<section class="opening" aria-label="作品集開場"><div class="opening-sticky"><div class="opening-top"><span>LULU / PORTFOLIO</span><span>SPACE →︎ EXPERIENCE</span></div><div class="opening-art" aria-hidden="true">${categories.map((c,i)=>`<div class="opening-object" style="--i:${i}">${art(c.id)}</div>`).join('')}<div class="opening-frame"></div></div><div class="opening-copy"><p class="eyebrow">A SHIFT IN PERSPECTIVE</p><h1><span class="opening-line">From Space</span><span class="opening-line">to <em>Experience.</em></span></h1><p>從空間出發，讓每一次互動成為新的視角。</p></div><div class="opening-arrival"><span>SPACE / VISUAL / SCREEN / EXPERIENCE</span><h2>換個視角，<br>看見更多可能。</h2><p>我的設計探索，從這裡開始。</p></div><div class="opening-bottom"><span class="opening-cue">向下捲動，展開空間 ↓︎</span><a class="pill opening-enter" href="#/">進入作品集 ↗︎</a><span class="opening-progress" aria-hidden="true">00 / 100</span></div></div></section>`;}
function setupOpening(){
  const root=document.querySelector('.opening');if(!root)return;
  const objects=[...root.querySelectorAll('.opening-object')];let frame=0;
  function draw(){frame=0;const span=Math.max(1,root.offsetHeight-innerHeight),t=Math.max(0,Math.min(1,-root.getBoundingClientRect().top/span));
    const compact=innerWidth<700, reduced=isReduced(),p=reduced?0:t;
    const spread=Math.min(innerWidth*(compact?.31:.34),470),height=innerHeight;
    const starts=[[-55,35],[35,-55],[85,65],[-65,-65]],ends=[[-1,1],[1,-1],[1,1],[-1,-1]];
    objects.forEach((el,i)=>{const x=starts[i][0]*(1-p)+ends[i][0]*spread*p,y=starts[i][1]*(1-p)+ends[i][1]*height*.2*p-height*.12*p;el.style.transform=`translate(-50%,-50%) translate(${x}px,${y}px) rotate(${ends[i][0]*p*9}deg) scale(${.86-p*.16})`;});
    const copy=root.querySelector('.opening-copy');copy.style.transform=`translateY(${-p*height*.32}px) scale(${1-p*.12})`;copy.style.opacity=1-Math.max(0,p-.25)/.75;
    root.querySelectorAll('.opening-line').forEach((line,i)=>line.style.transform=`translateX(${(i?1:-1)*p*(compact?40:130)}px)`);
    const arrival=root.querySelector('.opening-arrival');arrival.style.transform=`translateY(${(1-p)*height*.35}px)`;arrival.style.opacity=reduced?0:Math.max(0,(p-.4)/.6);
    root.querySelector('.opening-frame').style.transform=`translateY(${-p*height*.15}px) rotate(${-12+p*24}deg) scale(${1+p*.7})`;
    root.style.setProperty('--opening-progress',t);root.querySelector('.opening-progress').textContent=String(Math.round(t*100)).padStart(2,'0')+' / 100';root.querySelector('.opening-cue').textContent=t>.9?'空間已展開 · 進入探索 ↗︎':'向下捲動，展開空間 ↓︎';
  }
  const update=()=>{if(!frame)frame=requestAnimationFrame(draw);};window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);draw();motionCleanups.push(()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',update);window.removeEventListener('resize',update);});
}




render();
requestAnimationFrame(()=>document.getElementById(routeURL().searchParams.get('section'))?.scrollIntoView());



function residentialDetail(p){
 const shot=(index,cls='')=>`<figure class="residential-shot ${cls}"><div class="static-image"><img src="${p.gallery[index].src}" alt="${esc(p.gallery[index].caption)}" loading="lazy"></div><figcaption>${esc(p.gallery[index].caption)}</figcaption></figure>`;
 return `<article class="wrap residential"><section class="page-intro"><a class="back-link" href="#/works?category=space" data-back-works>←︎ 返回作品總覽</a><div class="eyebrow">SPACE / RESIDENTIAL DESIGN</div><h1>ACCOMODATE</h1><div class="project-tags"><span>高中二年級 · 室內製圖</span><span>CAD / SketchUp / V-Ray</span></div></section><section class="residential-intro"><div><span class="eyebrow">01 / CONCEPT</span><h2>容納生活，<br>也容納自己。</h2></div><div><p>這件作品以建案公司提供的既有大樓平面圖為基礎，透過讀圖與改作，完成 CAD 重繪、SketchUp 建模及 V-Ray 渲染。原始建築配置來自建案圖面，我的製作重點是將平面資訊轉化為圖面與立體空間，並呈現室內材質與光線。</p><p>以一家四口的生活為情境，運用新古典線條與淡色系營造溫馨的居所，讓家成為能放鬆、與自己及家人和解的容身之地。</p></div></section><section class="section"><div class="section-heading"><h2>From plan to space.<small>參考圖面與 CAD 重繪</small></h2></div><figure class="residential-shot reference-plan"><div class="static-image"><img src="assets/accomodate/reference-plan.webp" alt="原始參考平面圖" loading="eager"></div><figcaption>原始參考平面圖 · 建案公司提供之圖面作為改作基礎</figcaption></figure><div class="residential-pair plans">${shot(7)}${shot(8)}</div></section><section class="section"><div class="section-heading"><h2>Living together.<small>公共空間 · 客廳、廚房與陽台</small></h2></div>${shot(0)}${shot(1)}<div class="residential-pair">${shot(6)}${shot(5)}</div></section><section class="section"><div class="section-heading"><h2>A room of one’s own.<small>私人空間 · 主臥、次臥與單人間</small></h2></div>${shot(2)}<div class="residential-pair">${shot(3)}${shot(4)}</div></section><section class="section"><div class="section-heading"><h2>A quiet material palette.<small>材質計畫</small></h2></div><p class="material-intro">淺木、白石與織物，營造柔和層次。</p><div class="material-grid">${p.gallery.slice(9).map((g,i)=>shot(i+9)).join('')}</div></section><section class="section contact-banner"><h2>繼續探索空間。</h2><a class="pill" href="#/works?category=space" data-back-works>返回作品總覽 ↗︎</a></section></article>`;
}

function hakkaDetail(p){
 const shot=(name,caption,cls='')=>`<figure class="residential-shot ${cls}"><div class="static-image"><img src="assets/hakka-cinema/${name}.webp" alt="${caption}" loading="lazy"></div><figcaption>${caption}</figcaption></figure>`;
 return `<article class="wrap residential hakka-project"><section class="page-intro"><a class="back-link" href="#/works?category=space" data-back-works>←︎ 返回作品總覽</a><div class="eyebrow">SPACE / GRADUATION PROJECT</div><h1>客映食光</h1><p>我參與企劃書、SketchUp 建模、Enscape 渲染與實體模型製作，將空間提案逐步轉成能被閱讀與觀看的成果。</p><div class="project-tags"><span>高中三年級 · 專題製作</span><span>團隊作品 · 空間設計</span><span>SketchUp / Enscape</span><span>生成式 AI 輔助：Vizcom</span></div></section>
 ${shot('cover','建築外觀 · 桐花曲面與竹構入口','hakka-cover')}
 <section class="section contribution-focus" aria-labelledby="hakka-my-work"><div class="eyebrow">MY CONTRIBUTION / 我的工作</div><h2 id="hakka-my-work">讓空間提案，<br>從文字走向立體。</h2><p class="contribution-lead">我的分工涵蓋企劃書製作、SketchUp 繪製、Enscape 空間渲染與模型製作。在團隊專題中，我參與從資料呈現到數位與實體表達的製作，累積以不同媒材說明同一個空間的能力。</p><div class="contribution-grid contribution-grid-four"><div><span class="eyebrow">01 / COMMUNICATION</span><h3>企劃書製作</h3><p>參與將團隊研究與設計內容整理成企劃書，讓基地背景、設計概念與成果有清楚的閱讀脈絡。</p><p class="ability-line">展現能力 · 資訊組織、提案表達</p></div><div><span class="eyebrow">02 / MODELING</span><h3>SketchUp 繪製</h3><p>參與三維模型繪製，以立體形式呈現空間配置與造型，銜接後續的渲染表現。</p><p class="ability-line">展現能力 · 三維建模、空間表達</p></div><div><span class="eyebrow">03 / VISUALIZATION</span><h3>Enscape 空間渲染</h3><p>參與空間渲染，讓模型中的材質、光線與空間氛圍能透過影像被理解。</p><p class="ability-line">展現能力 · 材質與光影表現、視覺呈現</p><a class="text-link" href="#/works/hakka-cinema?section=hakka-renders">查看渲染成果 ↓︎</a></div><div><span class="eyebrow">04 / MAKING</span><h3>實體模型製作</h3><p>參與實體模型製作，將數位空間轉成可近距離觀察的形體與細節，作為提案展示的一部分。</p><p class="ability-line">展現能力 · 實體製作、立體呈現</p><a class="text-link" href="#/works/hakka-cinema?section=hakka-models">查看模型成果 ↓︎</a></div></div><p class="contribution-caption">以下圖面、渲染與模型呈現團隊共同成果；我的參與聚焦上述四項製作。</p></section>
 <section class="residential-intro"><div><span class="eyebrow">01 / CONTEXT</span><h2>讓文化走進<br>日常的相聚。</h2></div><div><p>客映食光以客家土樓為出發點，結合客家飲食與電影文化，提出一座能用餐、休憩、觀影的複合空間。希望孩子、一般民眾、長者與旅客，都能在生活與娛樂中接近客家文化。</p><p>團隊透過文獻整理、基地探勘與訪談，從文化保存、世代交流及觀影需求發展設計，並以平面圖、空間渲染與實體模型呈現成果。</p><p class="hakka-ai-note">以 Enscape 完成空間渲染，部分渲染圖再使用 Vizcom 進行生成式 AI 潤飾。</p></div></section>
 <div class="hakka-research"><section class="section"><div class="section-heading"><h2>A place to gather.<small>基地與設計回應</small></h2></div><p class="hakka-copy">選址於桃園中壢、世界客家博覽會世界館東側空地。設計以餐飲、電影與休憩串連不同年齡的使用者，並規劃地下停車與影廳輪椅席位，回應到訪與使用需求。</p><div class="hakka-site-stack">${shot('site','基地環境 · 周邊空地','site-left')}${shot('site','基地環境 · 場館周邊','site-right')}</div></section>
 <section class="section"><div class="section-heading"><h2>From culture to form.<small>文化元素的概念轉換</small></h2></div><div class="hakka-concepts"><div>${shot('concept-flower','桐花 →︎ 花瓣曲面 →︎ 建築外殼')}<p>以花瓣形成起伏的屋頂，讓外觀帶有掀起帷幕的意象。</p></div><div>${shot('concept-bamboo','油紙傘骨架 →︎ 竹構 →︎ 入口立面')}<p>取用傘骨的結構節奏，轉化為入口的垂直線條。</p></div><div>${shot('concept-tulou','土樓 →︎ 圓形聚合 →︎ 室內空間')}<p>以圓形向心的配置，延伸土樓共同生活與交流的概念。</p></div></div></section>
 </div><section class="section"><div class="section-heading"><h2>Reading the plan.<small>彩色平面配置</small></h2></div><p class="hakka-copy">從地下停車、一樓餐飲，到二樓售票、休憩與影廳，以及三樓臥式影廳與小包廂，逐層展開公共交流與不同尺度的觀影空間。</p><div class="hakka-plan-grid">${shot('plans-lower','B1 / 1F · 地下停車與餐飲空間','hakka-plan plan-lower')}${shot('plans-upper','2F / 3F · 影廳、休憩與包廂配置','hakka-plan plan-upper')}</div></section>
 <section class="section" id="hakka-renders"><div class="section-heading"><h2>Inside the experience.<small>空間渲染</small></h2></div><div class="hakka-render-grid">${shot('render-5','1F · 大廳入口')}${shot('render-1','2F · 售票區')}${shot('render-2','2F · 展示與休憩區')}${shot('render-3','2F · 沙發休憩區')}</div><p class="hakka-copy">二樓以暗藍色呼應客家藍染，在售票、展示與休息空間之間延續一致的色彩。影廳保留輪椅觀影位置，讓不同使用者都能參與。</p><div class="hakka-render-grid cinema-grid">${shot('render-4','2F · 影廳與輪椅席位')}${shot('render-6','3F · 臥式影廳')}${shot('render-7','3F · 小包廂影院')}</div></section>
 <section class="section" id="hakka-models"><div class="section-heading"><h2>Built in miniature.<small>實體模型與展出</small></h2></div><div class="hakka-model-overview">${shot('model','實體模型 · 整體外觀')}${shot('exhibition','作品與展板 · 展出現場')}</div><div class="hakka-model-grid">${shot('model-1','模型細節 · 座椅與家具')}${shot('model-2','模型細節 · 曲線座席')}${shot('model-3','模型細節 · 室內配置')}${shot('model-5','模型細節 · 樓層與光線')}${shot('model-6','模型細節 · 入口空間')}${shot('model-7','模型細節 · 竹構立面')}</div><p class="hakka-copy">透過實體模型呈現建築曲面、內部配置與家具細節，並以展板搭配模型展示完整的空間提案。</p></section>
 <section class="section contact-banner"><h2>繼續探索空間。</h2><a class="pill" href="#/works/spatial-study">ACCOMODATE ↗︎</a><a class="text-link" href="#/works?category=space" data-back-works>返回作品總覽 ↗︎</a></section></article>`;
}

function spiritDetail(p){
 const photo=(name,caption)=>`<figure class="wall-photo"><img src="assets/spirit-wall/${name}.webp" alt="${caption}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;
 const video=(name,title,desc)=>`<figure class="wall-video"><video controls playsinline preload="metadata" poster="assets/spirit-wall/${name}-poster.jpg" aria-label="${title}"><source src="assets/spirit-wall/${name}.mp4" type="video/mp4">你的瀏覽器不支援影片播放。</video><div class="wall-seek"><input type="range" min="0" max="100" step="0.1" value="0" aria-label="${title}：影片進度"><output>0:00</output></div><p class="wall-video-status" role="status" aria-live="polite"></p><figcaption><strong>${title}</strong><p>${desc}</p></figcaption></figure>`;
 return `<article class="wrap spirit-project"><section class="page-intro"><a class="back-link" href="#/works?category=experience" data-back-works>←︎ 返回互動作品</a><div class="eyebrow">EXPERIENCE / INTERACTIVE PROJECTION</div><h1>心有靈昔一點通</h1><p>我負責植物動畫、角色與符號繪製，以及煙火結尾，讓互動的回應有了可見的形象。</p><div class="project-tags"><span>大一下 · 團隊作品</span><span>互動投影 / 已展出</span><span>Unity / MIDI Controller</span></div></section>
 <figure class="wall-cover"><img src="assets/spirit-wall/forest.webp" alt="竹林甦醒場景，溪流、螢火蟲與小精靈" fetchpriority="high"><figcaption>竹林甦醒 · 團隊場景成果</figcaption></figure>
 <section class="section contribution-focus" aria-labelledby="wall-my-work"><div class="eyebrow">MY CONTRIBUTION / 我的工作</div><h2 id="wall-my-work">從繪製素材，<br>到讓場景動起來。</h2><p class="contribution-lead">在這件團隊作品中，我的工作橫跨動態製作、視覺繪製與影像收尾，也參與劇情討論。我將植物、角色與自然元素製作成視覺內容，與團隊的程式及互動整合共同構成觀眾看到的回應。</p><div class="contribution-grid"><div><span class="eyebrow">01 / ANIMATION</span><h3>竹林與藤蔓動畫</h3><p>我製作竹林搖動與藤蔓生長的動畫，讓環境變化成為互動過程的一部分。</p><p class="ability-line">展現能力 · 動態製作、環境敘事</p><a class="text-link" href="#/works/interactive-installation?section=wall-process">查看場景示範 ↓︎</a></div><div><span class="eyebrow">02 / ILLUSTRATION</span><h3>小精靈與水符繪製</h3><p>我繪製小精靈與水元素符號，將抽象的自然元素轉成可辨識的角色與圖像。</p><p class="ability-line">展現能力 · 角色繪製、視覺符號表達</p><a class="text-link" href="#/works/interactive-installation?section=wall-scenes">查看場景中的素材 ↓︎</a></div><div><span class="eyebrow">03 / MOVING IMAGE</span><h3>煙火動畫與後製剪輯</h3><p>我製作最後的煙火動畫，並參與後製剪輯，以角色與作品標題完成體驗的收尾。</p><p class="ability-line">展現能力 · 影像剪輯、動畫敘事與節奏</p><a class="text-link" href="#/works/interactive-installation?section=wall-ending">觀看我的煙火動畫 ↓︎</a></div></div></section>
 <section class="section wall-overview"><div><div class="eyebrow">PROJECT / 作品背景</div><h2>讓自然，<br>回應你的動作。</h2></div><div><p>以「萬物皆有靈，山川河水亦如是」為起點，作品邀請觀眾走進竹林、召喚神靈，再與精靈共舞。透過投影與 MIDI 控制器的滑軌、滾輪及按鈕，將手部操作轉化為光影、植物與角色的變化，重新感受人與自然的連結。</p><dl class="wall-facts"><div><dt>我的分工 · 張煒茹</dt><dd>劇情討論、竹林動畫、藤蔓動畫、小精靈與水符繪製、後製剪輯、煙火動畫。</dd></div><div><dt>團隊協作</dt><dd>同學 A：整合、景深鏡頭、拉霸機與音效；同學 B：主要美術與過場動畫；同學 C：美術、霧粒子、2D 光效與跳舞動畫；同學 D：程式撰寫。劇情由團隊共同討論。</dd></div></dl></div></section>
 <section class="section"><div class="section-heading"><h2>In the exhibition.<small>先看觀眾如何參與</small></h2></div>${video('exhibition','展出紀錄 · 1 分 14 秒','現場觀眾操作控制器、觀看投影的紀錄剪輯。')}<div class="wall-photo-grid">${photo('exhibition-a','觀眾操作 MIDI 控制器與投影互動')}${photo('exhibition-c','與靈共舞 · 展出現場')}</div></section>
 <section class="section" id="wall-scenes"><div class="section-heading"><h2>A journey in four acts.<small>從操作到回應的體驗流程</small></h2></div><p class="wall-note">選擇場景查看操作說明。前三幕以找回的 Unity 專案素材呈現效果啟用示意；互動敘事依展出製作說明整理，部分效果與找回版本不同。</p><div class="wall-stage-buttons" role="group" aria-label="互動場景"><button data-wall-stage="0" aria-pressed="true">01 竹林甦醒</button><button data-wall-stage="1" aria-pressed="false">02 召喚神靈</button><button data-wall-stage="2" aria-pressed="false">03 與靈共舞</button><button data-wall-stage="3" aria-pressed="false">04 煙火結尾</button></div><div class="wall-stage" aria-live="polite">${spiritStage(0)}</div></section>
 <section class="section" id="wall-process"><div class="section-heading"><h2>My work in motion.<small>從團隊場景，看見我的製作</small></h2></div><p class="wall-note">原型與竹林示範呈現團隊整合結果，可觀察我參與製作的植物動畫；煙火影片則是我製作的獨立結尾素材。</p><div class="wall-video-grid">${video('prototype','控制器原型 · 約 55 秒','團隊原型紀錄：呈現視覺內容如何與 MIDI 操作結合。')}${video('scene-a','竹林場景示範 · 約 47 秒','團隊整合示範：我負責其中的竹林動畫；霧與控制器整合由團隊協作完成。')}<div id="wall-ending">${video('ending','我的煙火動畫 · 約 9 秒','我的製作成果：以煙火、角色與標題完成作品收尾。')}</div></div></section>
 <section class="section"><div class="section-heading"><h2>Beyond the projection.<small>三折頁與明信片</small></h2></div><p class="wall-note">團隊以印刷品延伸角色與場景，讓觀眾將作品的記憶帶離展場。</p><div class="wall-photo-grid">${photo('brochure','三折頁 · 角色與作品識別')}${photo('print-display','現場印刷品展示')}</div><div class="wall-postcards">${photo('postcard-5','明信片 · 竹林甦醒')}${photo('postcard-3','明信片 · 召喚神靈')}${photo('postcard-1','明信片 · 與靈共舞')}</div></section>
 <section class="section wall-archive"><h3>關於作品紀錄</h3><p>本頁以現存原型、場景片段、動畫素材及展出紀錄呈現作品。已找回一份可串接主要場景的 Unity 專案；因部分效果及結尾素材與展出說明不同，尚未確認為展出最終版。此頁保留原始展出紀錄與獨立煙火素材，場景圖則標示為找回版本的效果示意。</p></section><section class="section contact-banner"><h2>繼續探索作品。</h2><a class="pill" href="#/works?category=experience" data-back-works>返回互動作品 ↗︎</a></section></article>`;
}
function spiritStage(index){
 const stages=[
 {image:'forest-active.webp',title:'竹林甦醒',action:'轉動滾輪、調整滑軌，探索竹林。',response:'滾輪轉到底時，隱藏的角色出現；調整滑軌可改變螢火蟲數量、霧的濃度與竹林搖動速度。',experience:'觀眾從細微環境變化開始，發現自己的動作能喚醒場域。'},
 {image:'altar-active.webp',title:'召喚神靈',action:'操作拉霸機，觸發不同元素組合。',response:'三個水元素讓兩側水紋動畫顯現；草元素讓藤蔓爬上樹枝；火元素點亮燭火，另有讓底部小精靈顯現的組合。',experience:'當所有條件觸發，體驗進入最後的祭典場景。'},
 {image:'festival-active.webp',title:'與靈共舞',action:'在祭典中切換小精靈的舞蹈。',response:'小精靈隨操作切換跳舞表現，與其他角色共同形成祭典氛圍。',experience:'從探索與召喚，轉向與自然一起慶祝。'},
 {image:'ending-poster.jpg',title:'煙火結尾',action:'完成祭典後，進入結尾動畫。',response:'煙火、角色與作品標準字在動畫中依序出現。',experience:'以一段煙火影片為整段互動旅程收尾。'}];
 const s=stages[index];return `<figure class="wall-stage-figure"><img src="assets/spirit-wall/${s.image}" alt="${s.title}效果示意"><figcaption>${index===3?"煙火結尾素材 · 標題顯現畫面":"找回的 Unity 版本 · 效果啟用示意"}</figcaption></figure><div><span class="eyebrow">0${index+1} / SCENE</span><h3>${s.title}</h3><dl><dt>觀眾做什麼</dt><dd>${s.action}</dd><dt>場景如何回應</dt><dd>${s.response}</dd><dt>帶來的體驗</dt><dd>${s.experience}</dd></dl></div>`;
}
function setupSpiritPage(){
 setupWallVideos();
 const buttons=[...document.querySelectorAll('[data-wall-stage]')];
 buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelector('.wall-stage').innerHTML=spiritStage(Number(button.dataset.wallStage));}));
}

function setupWallVideos(){
 document.querySelectorAll('.wall-video video').forEach(video=>{
  const box=video.parentElement,status=box.querySelector('.wall-video-status'),range=box.querySelector('.wall-seek input'),time=box.querySelector('.wall-seek output');
  const controller=new AbortController(),options={signal:controller.signal};
  const originalSource=video.querySelector('source').src;
  let ready=location.protocol==='file:',pending=false,objectURL=null,target=0,resume=false;
  const format=n=>Math.floor(n/60)+':'+String(Math.floor(n%60)).padStart(2,'0');
  const update=()=>{if(Number.isFinite(video.duration)){range.value=video.currentTime/video.duration*100;time.textContent=format(video.currentTime)+' / '+format(video.duration);}};
  const prepare=async(position,play)=>{
   target=position;resume=play;
   if(ready){video.currentTime=target;if(play)video.play().catch(()=>{});return;}
   if(pending)return;
   pending=true;video.pause();status.textContent='正在準備影片，完成後即可拖曳進度…';
   const source=originalSource;
   try{
    const response=await fetch(source,{signal:controller.signal});
    if(!response.ok)throw new Error('Video unavailable');
    const blob=await response.blob();
    if(controller.signal.aborted)return;
    objectURL=URL.createObjectURL(new Blob([blob],{type:'video/mp4'}));
    ready=true;
    video.addEventListener('loadedmetadata',()=>{
     if(controller.signal.aborted)return;
     video.currentTime=Math.min(target,video.duration||target);update();
     status.textContent='';if(resume)video.play().catch(()=>{status.textContent='影片已準備好，請按播放。';});
    },{once:true,signal:controller.signal});
    video.src=objectURL;video.load();
   }catch(error){
    if(controller.signal.aborted)return;
    ready=true;status.textContent='目前使用一般播放；若無法拖曳，請重新整理頁面後再試。';
    video.currentTime=target;if(resume)video.play().catch(()=>{});
   }finally{pending=false;}
  };
  video.addEventListener('play',()=>{if(!ready)prepare(video.currentTime,true);},options);
  range.addEventListener('input',()=>{const duration=video.duration;if(Number.isFinite(duration))prepare(Number(range.value)*duration/100,!video.paused);},options);
  video.addEventListener('timeupdate',update,options);video.addEventListener('loadedmetadata',update,options);update();
  motionCleanups.push(()=>{controller.abort();video.pause();if(objectURL){if(video.isConnected){video.src=originalSource;video.load();}URL.revokeObjectURL(objectURL);}});
 });
}

function fortuneDetail(p){return `<article class="wrap page-end fortune-project"><section class="page-intro"><a class="back-link" href="#/works?category=screen" data-back-works>←︎ 返回作品總覽</a><div class="eyebrow">SCREEN / MOBILE WEB EXPERIENCE</div><h1>緣分籤詩</h1><p>以傘問心，以紋善緣。<br>將油紙傘的轉動，化為一次關於關係的自我提問。</p><div class="project-tags"><span>大二 · 團隊作品</span><span>手機網頁 / 互動介面</span><span>圖像：GPT 生成</span></div></section><div class="fortune-cover"><img src="assets/fortune/umbrella-6.png" alt="並行：雙魚環繞的傘面設計"><div><span class="eyebrow">CULTURE × INTERACTION</span><h2>一把傘，<br>六種關係的風景。</h2><p>從傳統工藝的形與紋，走向手機上的提問、轉動與反思。</p></div></div><section class="section contribution-focus"><div class="eyebrow">MY CONTRIBUTION / 我的工作</div><h2>把文化意象，<br>變成可以操作的介面。</h2><p class="contribution-lead">我與同學 A 共同完成介面設計、網頁設計，以及使用 GPT 生成網頁圖像。我的參與連結了視覺呈現與網頁體驗，讓青花、油紙傘與籤詩在手機畫面中形成一致的操作情境。</p><div class="contribution-grid"><div><span class="eyebrow">01 / INTERFACE</span><h3>介面設計</h3><p>與同學 A 共同設計起始、提問、轉傘與結果頁，將文字輸入、關係選擇與結果閱讀串成連續流程。</p><p class="ability-line">展現能力 · 介面編排、操作流程設計</p></div><div><span class="eyebrow">02 / WEB DESIGN</span><h3>網頁設計</h3><p>與同學 A 共同製作手機網頁，讓轉傘求籤的概念成為可實際開啟、操作與閱讀的體驗。</p><p class="ability-line">展現能力 · 網頁設計、互動體驗呈現</p></div><div><span class="eyebrow">03 / AI VISUALS</span><h3>GPT 圖像生成</h3><p>網頁內所有圖片皆使用 GPT 生成，由我與同學 A 共同進行生圖，應用於傘面、背景與介面視覺。</p><p class="ability-line">展現能力 · AI 圖像應用、視覺整合</p></div></div><p class="contribution-caption">團隊分工：我與同學 A 共同負責上述設計與生圖；其餘組員負責概念整理、簡報等後製。本頁呈現團隊共同成果。</p></section><section class="section"><div class="section-heading"><h2>A moment to reflect.<small>讓問籤成為整理心情的片刻</small></h2></div><p class="fortune-copy">作品以油紙傘與陶瓷紋樣為起點，結合青花、山水與人際關係的提問。傘面的旋轉與停止，讓等待結果的時間成為沉澱心情的過程；籤詩提供溫柔的反思方向，邀請使用者重新看待一段關係。</p><div class="contribution-grid contribution-grid-four"><div><h3>油紙傘 · 聚合與守護</h3><p>以圓滿的傘面承接緣分意象，把傳統物件轉化成手指可以轉動的介面。</p></div><div><h3>瓷器紋樣 · 關係與轉折</h3><p>以花紋、裂痕與留白表達不同的關係狀態，讓抽象的心情有可以閱讀的視覺線索。</p></div></div></section><section class="section"><div class="section-heading"><h2>Why an umbrella?<small>從設計思考到互動選擇</small></h2></div><div class="fortune-thinking"><div><span class="eyebrow">01 / STARTING POINT</span><h3>為傳統工藝找新的容器</h3><p>團隊從「文化」進行發散思考，聚焦陶瓷與油紙傘。油紙傘的圓滿與守護，連結人與人的相遇；瓷器的釉色、冰裂紋則對應關係中的流動、時間與轉折。</p></div><div><span class="eyebrow">02 / PEOPLE & CONTEXT</span><h3>讓輕鬆的提問發生在日常</h3><p>以喜愛文創、拍照與心理測驗的青年為使用情境，想像朋友在文創園區、博物館或老街中開啟網頁，針對愛情、友情、家庭與人際關係提出問題。</p></div><div><span class="eyebrow">03 / INTERACTION</span><h3>把等待設計成沉澱的過程</h3><p>「定心問緣、旋轉起舞、裂痕定格、取得緣籤」構成設計流程。轉傘讓手部動作參與等待，停下後再閱讀結果，以文化意象引導情感反思。</p></div><div><span class="eyebrow">04 / PLATFORM</span><h3>打開瀏覽器就能參與</h3><p>選擇手機網頁，降低下載與安裝的門檻。透過觸控與裝置感應連結動作和傘面，並以瀏覽器本地儲存保留週記，讓同一裝置與瀏覽器中的紀錄能延續。</p></div></div></section><section class="section"><div class="section-heading"><h2>From question to meaning.<small>四個畫面，一段完整的操作</small></h2></div><div class="fortune-screens">${['開始體驗','寫下問題','轉動油紙傘','閱讀結果'].map((t,i)=>`<figure><div class="fortune-screen"><img src="assets/fortune/screen-${i+1}.jpg" alt="${t}介面" loading="lazy"></div><figcaption>0${i+1} / ${t}</figcaption></figure>`).join('')}</div><p class="fortune-copy">寫下心中的問題，選擇關係類型，再拖動油紙傘或晃動手機。轉動結束後閱讀籤詩，回顧自己的想法。歷史紀錄保存在同一裝置、同一瀏覽器中。</p></section><section class="section fortune-demo" id="fortune-demo"><div><div class="eyebrow">TRY THE WORK / 實際體驗</div><h2>Turn the umbrella.</h2><p>在手機比例的視窗中操作原作品。電腦可用滑鼠拖動油紙傘，手機可使用觸控。</p><p class="fortune-copy">晃動功能需裝置與瀏覽器支援；如需使用感應功能，可用手機直接開啟原網站。</p><button class="pill" data-fortune-start>載入互動作品 ↗︎</button><p class="fortune-mobile-link"><a class="text-link" href="https://yazimo0319.github.io/-/" target="_blank" rel="noopener">在手機開啟原網站 ↗︎</a></p><p class="fortune-copy">若體驗無法載入，可先閱讀上方完整介面與下方傘面設計。</p></div><div class="fortune-phone" id="fortune-player"><img src="assets/fortune/screen-1.jpg" alt="緣分籤詩手機網頁預覽"><span class="fortune-preview-label">點選「載入互動作品」開始</span></div></section><section class="section"><div class="section-heading"><h2>Six ways to connect.<small>六種傘面，六種關係的提醒</small></h2></div><p class="fortune-copy">傘紋將抽象的關係狀態轉為可觀看的意象。每次轉動後，以一段簡短文字陪伴使用者理解當下的心情。以下圖像均由我與同學 A 使用 GPT 共同生成。</p><div class="fortune-umbrellas"><figure><img src="assets/fortune/umbrella-1.png" alt="共傘傘面圖樣" loading="lazy"><figcaption><span class="eyebrow">01</span><h3>共傘</h3><p>有人願意與你同行，關係溫暖，彼此支持。</p></figcaption></figure><figure><img src="assets/fortune/umbrella-2.png" alt="微裂傘面圖樣" loading="lazy"><figcaption><span class="eyebrow">02</span><h3>微裂</h3><p>關係中有細小裂痕，需要修補與理解。</p></figcaption></figure><figure><img src="assets/fortune/umbrella-3.png" alt="雨停傘面圖樣" loading="lazy"><figcaption><span class="eyebrow">03</span><h3>雨停</h3><p>低潮終會過去，是整理心情的時刻。</p></figcaption></figure><figure><img src="assets/fortune/umbrella-4.png" alt="回風傘面圖樣" loading="lazy"><figcaption><span class="eyebrow">04</span><h3>回風</h3><p>過去的人事物，可能再度吹回心中。</p></figcaption></figure><figure><img src="assets/fortune/umbrella-5.png" alt="留白傘面圖樣" loading="lazy"><figcaption><span class="eyebrow">05</span><h3>留白</h3><p>現在不必急著決定，給自己一些空白。</p></figcaption></figure><figure><img src="assets/fortune/umbrella-6.png" alt="並行傘面圖樣" loading="lazy"><figcaption><span class="eyebrow">06</span><h3>並行</h3><p>關係正在靠近，不必催促，真誠就好。</p></figcaption></figure></div></section><a class="text-link" href="#/works?category=screen">返回數位與媒體作品 ↗︎</a></article>`;}
document.addEventListener('click',e=>{const b=e.target.closest('[data-fortune-start]');if(!b)return;const host=document.getElementById('fortune-player');const frame=document.createElement('iframe');frame.src='https://yazimo0319.github.io/-/';frame.title='緣分籤詩手機網頁互動體驗';host.replaceChildren(frame);b.textContent='重新載入作品 ↻';});
