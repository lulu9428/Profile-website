const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', initCanvas);
initCanvas();

// 水彩拖尾粒子
let points = [];
window.addEventListener('mousemove', (e) => {
    points.push({
        x: e.clientX,
        y: e.clientY,
        r: 10,
        maxR: 45 + Math.random() * 20,
        alpha: 0.18,
        color: { r: 180, g: 195, b: 210 },
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
    });
});

function drawWatercolor() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 使用 multiply 讓滑鼠劃過的地方與紙張紋理產生「加深」效果
    ctx.globalCompositeOperation = 'multiply';

    for (let i = 0; i < points.length; i++) {
        let p = points[i];
        ctx.beginPath();
        let grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`);
        grad.addColorStop(1, 'transparent');
        
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        
        // 慢速物理更新，增加延展性
        p.x += p.vx;
        p.y += p.vy;
        if (p.r < p.maxR) p.r += 0.3; 
        p.alpha -= 0.0025; // 降低消失速度

        if (p.alpha <= 0) {
            points.splice(i, 1);
            i--;
        }
    }
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(drawWatercolor);
}
drawWatercolor();

// 分類與內容邏輯
const works = {
    interior: [
        { type: 'video', src: 'your-video.mp4', title: '空間設計案 A | 2024' },
        { type: 'image', src: 'interior-1.jpg', title: '平面配置圖繪製' }
    ],
    traditional: [{ type: 'image', src: 'art-1.jpg', title: '水彩素描作品' }],
    interactive: [{ type: 'video', src: 'media-1.mp4', title: '互動裝置紀錄' }]
};

function showContent(mode) {
    const scroller = document.getElementById('gallery-scroller');
    const panel = document.getElementById('info-panel');
    const cats = document.getElementById('work-cats');

    if (mode === 'work') {
        scroller.style.display = 'flex';
        panel.style.display = 'none';
        cats.style.visibility = 'visible';
        const firstBtn = document.querySelector('.cat-btn');
        filterGallery('interior', firstBtn);
    } else {
        scroller.style.display = 'none';
        cats.style.visibility = 'hidden';
        panel.style.display = 'block';
        document.getElementById('info-title').innerText = mode.toUpperCase();
        document.getElementById('info-body').innerText = "這裡放置你的 " + mode + " 相關自傳或聯絡資訊假字內容。";
    }
}

function filterGallery(cat, el) {
    const container = document.getElementById('gallery-scroller');
    container.innerHTML = '';
    
    document.querySelectorAll('.cat-btn')
        .forEach(btn => btn.classList.remove('active'));

    if (el) {
        el.classList.add('active');
    }

    works[cat].forEach(item => {
        const card = document.createElement('div');
        card.className = 'work-card';
        const media = item.type === 'video' 
            ? `<video controls><source src="${item.src}" type="video/mp4"></video>`
            : `<img src="${item.src}">`;
        
        card.innerHTML = `
            <div class="media-box">${media}</div>
            <div class="card-info">${item.title}</div>
        `;
        container.appendChild(card);
    });
}

// 預設啟動
showContent('about');