import { services, site, proofPoints } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="eyebrow">Лаванда · Тула</p>
          <h1>Красота,<br /><em>которая</em><br />вам идет.</h1>
          <p className="lede">{site.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.bookingUrl}>Записаться онлайн <span>↗</span></a>
            <a className="text-link" href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>{site.contact.phone}</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={`${import.meta.env.BASE_URL}media/salon-01.jpg`} alt="Интерьер салона Лаванда" />
          <div className="hero-stamp"><strong>{site.rating}</strong><span>рейтинг<br />в Картах</span></div>
        </div>
      </section>
      <section className="proof section">
        {proofPoints.map(([value, label]) => <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>
      <section className="section services-section" id="services">
        <div className="section-heading"><p className="eyebrow">Выберите свое</p><h2>Все для образа<br /><em>в одном месте</em></h2><p>От аккуратной стрижки до маникюра, ламинирования ресниц и солярия.</p></div>
        <div className="service-list">{services.map((service, index) => <article className="service-item" key={service.slug}><span className="service-number">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.summary}</p></div>{service.price && <strong className="service-price">{service.price}</strong>}</article>)}</div>
      </section>
      <section className="experience section">
        <div className="experience-image"><img src={`${import.meta.env.BASE_URL}media/salon-01.jpg`} alt="Зона ожидания в салоне" /></div>
        <div className="experience-copy"><p className="eyebrow">Повод заглянуть</p><h2>Ухоженность<br /><em>начинается здесь</em></h2><p>В Лаванде можно закрыть сразу несколько задач: обновить стрижку и цвет, привести в порядок ногти и брови, подготовиться к событию или просто выделить время для себя.</p><a className="text-link" href={site.bookingUrl}>Посмотреть свободное время <span>↗</span></a></div>
      </section>
      <section className="section contacts-section" id="contacts">
        <div><p className="eyebrow">Ждем вас</p><h2>До встречи<br /><em>в Лаванде</em></h2></div>
        <div className="contact-details"><div><span>Адрес</span><strong>{site.contact.address}</strong><a href={site.mapUrl}>Построить маршрут ↗</a></div><div><span>Телефон</span><a className="contact-phone" href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>{site.contact.phone}</a></div><div><span>График</span><strong>{site.contact.hours}</strong></div></div>
      </section>
    </>
  )
}
