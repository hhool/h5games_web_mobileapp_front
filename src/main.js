import './styles.css'

const root = document.getElementById('app')

root.innerHTML = `
  <header class="site-header">
    <h1>mobileapp.poki2.online</h1>
    <p>轻量前端示例 — 游戏聚合</p>
  </header>
  <main>
    <section id="games-list">
      <p>正在加载游戏列表…</p>
    </section>
  </main>
  <footer>部署到 Cloudflare Pages 后，将从 Games JSON 加载数据。</footer>
`

async function loadGames(){
  const listEl = document.getElementById('games-list')
  try{
    // 默认从站点相对路径请求 games.json，部署时请确保路径正确
    const resp = await fetch('/games.json')
    if(!resp.ok) throw new Error('fetch failed')
    const games = await resp.json()
    if(!Array.isArray(games)) throw new Error('invalid json')
    listEl.innerHTML = games.map(g => `
      <article class="game-card">
        <img src="${g.imgSrc}" alt="${g.title}" loading="lazy" />
        <div class="meta">
          <a href="${g.link}" target="_blank">${g.title}</a>
        </div>
      </article>
    `).join('\n')
  }catch(e){
    listEl.innerHTML = `<p>无法加载 games.json：${e.message}</p>`
  }
}

loadGames()
