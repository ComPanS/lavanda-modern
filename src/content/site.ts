export type Service = {
  slug: string
  title: string
  summary: string
  price?: string
}

export const site = {
  name: 'Лаванда',
  shortName: 'Лаванда',
  locale: 'ru',
  tagline: 'Салон красоты в Туле',
  description: 'Волосы, ногти, ресницы и солярий в одном месте на Одоевском шоссе.',
  contact: {
    phone: '+7 (4872) 39-04-82',
    address: 'Одоевское ш., 98, Тула',
    hours: 'Ежедневно до 20:00',
  },
  rating: '4,9',
  reviews: '373 оценки',
  bookingUrl: 'https://dikidi.ru/980334',
  mapUrl: 'https://yandex.ru/maps/org/lavanda/1101284357/',
}

export const services: Service[] = [
  { slug: 'lashes', title: 'Ламинирование ресниц', summary: 'Комплекс с окрашиванием', price: 'от 1 500 ₽' },
  { slug: 'brows', title: 'Ламинирование бровей', summary: 'Комплекс с окрашиванием', price: 'от 1 400 ₽' },
  { slug: 'brows-shape', title: 'Коррекция бровей', summary: 'Пинцет, воск и окрашивание', price: 'от 1 000 ₽' },
  { slug: 'haircut', title: 'Стрижка', summary: 'Женская 600–1 200 ₽ · мужская 400–750 ₽' },
  { slug: 'hair-color', title: 'Окрашивание волос', summary: 'Окрашивание, тонирование, колорирование и мелирование' },
  { slug: 'nails', title: 'Маникюр и педикюр', summary: 'Уход за натуральными ногтями и покрытие' },
]

export const proofPoints = [
  ['4,9', 'рейтинг в Яндекс Картах'],
  ['373', 'оценки гостей'],
  ['до 20:00', 'работаем ежедневно'],
]
