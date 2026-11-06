* { box-sizing: border-box; }
:root {
  --bg: #0f172a;
  --panel: #111827;
  --panel-2: #1f2937;
  --line: rgba(148, 163, 184, 0.22);
  --text: #e5e7eb;
  --muted: #a7b0c3;
  --accent: #38bdf8;
  --accent-2: #7c3aed;
  --good: #34d399;
  --shadow: rgba(15, 23, 42, 0.45);
}
html, body {
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #0b1120, #111827 28%, #0f172a 100%);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
body {
  min-height: 100vh;
}
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  padding: 18px 16px 16px;
  background: rgba(15, 23, 42, 0.92);
  border-right: 1px solid var(--line);
  overflow-y: auto;
  backdrop-filter: blur(8px);
}
.brand {
  padding: 8px 8px 16px;
  border-bottom: 1px solid var(--line);
}
.brand a {
  color: var(--text);
  text-decoration: none;
}
.brand-k {
  display: block;
  font-size: 1.4rem;
  letter-spacing: 0.18em;
  font-weight: 800;
  color: var(--accent);
}
.brand-t {
  display: block;
  margin-top: 8px;
  line-height: 1.5;
  color: var(--muted);
}
.search-wrap {
  margin: 14px 0 10px;
}
.search-wrap input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.8);
  color: var(--text);
}
.toc {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 4px;
}
.toc a {
  color: var(--text);
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}
.toc a:hover {
  background: rgba(148, 163, 184, 0.08);
  border-color: var(--line);
}
.part {
  font-weight: 700;
  color: #dbeafe !important;
  padding-top: 12px !important;
  margin-top: 10px;
  border-top: 1px solid var(--line) !important;
}
.item {
  padding-left: 18px !important;
  color: var(--muted) !important;
}
.num {
  display: inline-block;
  width: 38px;
  color: var(--accent);
  font-weight: 700;
}
.side-foot {
  margin-top: 16px;
  padding: 8px 10px 0;
  color: var(--muted);
  font-size: 0.82rem;
}
.content {
  margin-left: 300px;
  padding: 40px 28px;
}
.hero {
  max-width: 980px;
  margin: 0 auto;
  background: rgba(15, 23, 42, 0.68);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 18px 40px var(--shadow);
  padding: 32px 28px 40px;
}
.hero h1 {
  margin: 0 0 10px;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
}
.sub {
  font-size: 1.1rem;
  color: #dbeafe;
  margin-bottom: 22px;
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 16px;
  margin: 26px 0 32px;
}
.stat {
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 16px;
}
.stat b {
  display: block;
  font-size: 2rem;
  color: var(--good);
}
.stat span {
  color: var(--muted);
  font-size: 0.92rem;
}
.hero h2 {
  margin-top: 28px;
  font-size: 1.7rem;
}
.hero p, .hero li {
  color: #dfe7f5;
  line-height: 1.8;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 18px 0 24px;
}
.card {
  text-decoration: none;
  color: var(--text);
  display: block;
  padding: 18px 18px 14px;
  border-radius: 16px;
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid var(--line);
}
.k {
  display: inline-block;
  color: white;
  font-size: 0.7rem;
  padding: 6px 10px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.card h3 {
  margin: 0 0 8px;
  font-size: 1.12rem;
}
.card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}
blockquote {
  margin: 26px 0 0;
  padding: 14px 18px;
  border-left: 4px solid var(--accent);
  background: rgba(56, 189, 248, 0.08);
  border-radius: 10px;
  color: #dbeafe;
}
.nav-btn {
  display: none;
}
@media (max-width: 900px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.25s ease;
    z-index: 9;
  }
  .content {
    margin-left: 0;
    padding: 22px 16px 30px;
  }
  .nav-btn {
    display: block;
    position: fixed;
    top: 14px;
    left: 14px;
    z-index: 10;
    font-size: 1.8rem;
    background: rgba(15, 23, 42, 0.9);
    color: #fff;
    border-radius: 10px;
    padding: 6px 10px;
  }
  #nav-toggle:checked ~ .sidebar {
    transform: translateX(0);
  }
}
