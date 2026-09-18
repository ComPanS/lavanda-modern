import { Link, Outlet } from 'react-router-dom'
import { site } from '../content/site'

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/">
          <img src={`${import.meta.env.BASE_URL}media/logo.jpg`} alt="" />
          <span>{site.shortName}</span>
        </Link>
        <nav aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#about">О салоне</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="header-phone" href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>Позвонить</a>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p>{site.name} · Тула</p>
        <a href={site.mapUrl}>Открыть в Яндекс Картах</a>
      </footer>
    </div>
  )
}
