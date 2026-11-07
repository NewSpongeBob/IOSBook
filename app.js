(() => {
  const root = document.documentElement.dataset.root || '.';
  const page = document.documentElement.dataset.page || '';
  const url = (path) => (root === '.' ? './' + path : root + '/' + path);

  const flat = [];
  PARTS.forEach((part, partIndex) => {
    part.chapters.forEach((chapter, index) => {
      flat.push({ ...chapter, part, partIndex, index });
    });
  });

  const currentIndex = flat.findIndex((item) => item.file === page);

  /* ---------- 侧边栏 ---------- */
  const sidebar = document.getElementById('site-nav');
  if (sidebar) {
    const partsHtml = PARTS.map((part) => {
      const items = part.chapters
        .map((chapter) => {
          const active = chapter.file === page ? ' active' : '';
          return `<a class="item${active}" href="${url(chapter.file)}"><span class="num">${chapter.no}</span>${chapter.title}</a>`;
        })
        .join('');
      return `<a class="part" href="${url(part.file)}">${part.part}</a>${items}`;
    }).join('');

    sidebar.innerHTML = `
      <a class="brand" href="${url('index.html')}"><span class="brand-k">IOSBOOK</span><span class="brand-t">iOS 系统 · 运行时 · 逆向</span></a>
      <label class="search-wrap"><span class="visually-hidden">搜索目录</span><input id="q" type="search" placeholder="搜索章节…" autocomplete="off"></label>
      <nav class="toc" aria-label="全书目录">${partsHtml}</nav>
      <div class="side-foot">${flat.length} 讲 · 内容持续校订</div>`;
  }

  /* ---------- 目录搜索 ---------- */
  const search = document.getElementById('q');
  if (search) {
    search.addEventListener('input', () => {
      const query = search.value.trim().toLowerCase();
      document.querySelectorAll('.toc a.item').forEach((link) => {
        link.hidden = Boolean(query) && !link.textContent.toLowerCase().includes(query);
      });
    });
  }

  /* ---------- 移动端抽屉 ---------- */
  const toggle = document.getElementById('nav-toggle');
  document.querySelectorAll('.sidebar a').forEach((link) => {
    link.addEventListener('click', () => { if (toggle) toggle.checked = false; });
  });

  /* ---------- 面包屑 ---------- */
  const crumb = document.querySelector('[data-crumb]');
  if (crumb && currentIndex >= 0) {
    const item = flat[currentIndex];
    crumb.innerHTML = `<a href="${url('index.html')}">IOSBook</a><span>/</span><a href="${url(item.part.file)}">${item.part.part}</a><span>/</span><b>${item.no}</b>`;
  }

  /* ---------- 本讲目录 ---------- */
  const article = document.querySelector('article.hero');
  if (article && currentIndex >= 0) {
    const sections = Array.from(article.querySelectorAll('h2'));
    if (sections.length >= 4) {
      const nav = document.createElement('nav');
      nav.className = 'page-toc';
      nav.setAttribute('aria-label', '本讲目录');
      const label = document.createElement('b');
      label.textContent = '本讲目录';
      nav.appendChild(label);
      sections.forEach((heading, i) => {
        if (!heading.id) heading.id = 's' + (i + 1);
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        nav.appendChild(link);
      });
      const lead = article.querySelector('p.lead');
      if (lead) {
        // 导语后可能紧跟“场景”引用块，目录插在它们之后，避免打断叙事
        let anchor = lead;
        const next = lead.nextElementSibling;
        if (next && next.tagName === 'BLOCKQUOTE') anchor = next;
        anchor.after(nav);
      } else article.prepend(nav);
    }
  }


  /* ---------- 分步图：逐格高亮 ---------- */
  document.querySelectorAll('figure[data-steps]').forEach((fig) => {
    const img = fig.querySelector('img');
    if (!img) return;
    const labels = (fig.dataset.steps || '').split('|').filter(Boolean);
    const cols = parseInt(fig.dataset.cols || labels.length, 10) || labels.length;
    const rows = parseInt(fig.dataset.rows || '1', 10);
    if (!labels.length) return;

    const stage = document.createElement('div');
    stage.className = 'steps-stage';
    img.parentNode.insertBefore(stage, img);
    stage.appendChild(img);
    const mask = document.createElement('div');
    mask.className = 'steps-mask';
    stage.appendChild(mask);

    const bar = document.createElement('div');
    bar.className = 'steps-bar';
    const label = document.createElement('span');
    label.className = 'steps-label';

    let current = -1;
    const buttons = labels.map((text, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = String(i + 1);
      b.title = text;
      b.addEventListener('click', () => render(i));
      bar.appendChild(b);
      return b;
    });
    bar.appendChild(label);
    fig.appendChild(bar);

    const geo = (fig.dataset.geometry || '24,44,136,110,16,0').split(',').map(Number);

    function geometry(i) {
      const W = img.naturalWidth || 760, H = img.naturalHeight || 300;
      const padX = geo[0], padY = geo[1], w = geo[2], h = geo[3], gap = geo[4], rowGap = geo[5];
      const col = cols === 1 ? 0 : i % cols;
      const row = Math.floor(i / cols);
      const x = padX + col * (w + gap);
      const y = padY + row * (h + rowGap);
      return { left: x / W * 100, top: y / H * 100, width: w / W * 100, height: h / H * 100 };
    }

    function render(i) {
      current = (i + labels.length) % labels.length;
      const g = geometry(current);
      mask.style.left = g.left + '%';
      mask.style.top = g.top + '%';
      mask.style.width = g.width + '%';
      mask.style.height = g.height + '%';
      buttons.forEach((b, k) => b.classList.toggle('on', k === current));
      label.textContent = '第 ' + (current + 1) + ' / ' + labels.length + ' 步：' + labels[current];
    }

    stage.addEventListener('click', () => render(current + 1));
    fig.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') render(current + 1);
      if (e.key === 'ArrowLeft') render(current - 1);
    });
    fig.tabIndex = 0;
    if (img.complete) render(0); else img.addEventListener('load', () => render(0));
  });

  /* ---------- 上一章 / 下一章 ---------- */
  const pager = document.querySelector('[data-pager]');
  if (pager && currentIndex >= 0) {
    const prev = flat[currentIndex - 1];
    const next = flat[currentIndex + 1];
    const item = flat[currentIndex];
    const links = [
      prev ? `<a class="prev" href="${url(prev.file)}">← ${prev.no} ${prev.title}</a>` : '<span></span>',
      `<a class="dir" href="${url(item.part.file)}">${item.part.part}</a>`,
      next ? `<a class="next" href="${url(next.file)}">${next.no} ${next.title} →</a>` : '<span></span>'
    ];
    pager.innerHTML = links.join('');
  }

  /* ---------- 部级目录 ---------- */
  const list = document.querySelector('[data-chapters]');
  if (list) {
    const part = PARTS.find((item) => item.file === page);
    if (part) {
      list.innerHTML = part.chapters
        .map((chapter) => `<a class="card" href="${url(chapter.file)}"><span class="k blue">${chapter.no}</span><h3>${chapter.title}</h3></a>`)
        .join('');
    }
  }

  /* ---------- 代码一键复制 ---------- */
  document.querySelectorAll('.code').forEach((block) => {
    const button = block.querySelector('.copy');
    const code = block.querySelector('pre code') || block.querySelector('pre');
    if (!button || !code) return;
    button.addEventListener('click', async () => {
      const text = code.textContent;
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      button.textContent = '已复制';
      setTimeout(() => { button.textContent = '复制'; }, 1500);
    });
  });
})();
