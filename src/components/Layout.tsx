import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">
            <Link to="/">Genspark活用ガイド</Link>
          </h1>
          <nav className="main-nav">
            <Link 
              to="/office" 
              className={location.pathname === '/office' ? 'active' : ''}
            >
              事務職向け
            </Link>
            <Link 
              to="/study"
              className={location.pathname === '/study' ? 'active' : ''}
            >
              学生向け
            </Link>
            <Link 
              to="/other"
              className={location.pathname === '/other' ? 'active' : ''}
            >
              その他の活用法
            </Link>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2024 Genspark活用ガイド - AIエージェントで日常を効率化</p>
      </footer>
    </div>
  )
}

export default Layout