# Сайт Юлії Рапач — Nails & Beauty (LILYnails)

Односторінковий сайт-візитка майстра манікюру в Києві: послуги, прайс, галерея, відгуки, контакти та онлайн-запис.

- **Адреса:** вул. Ялтинська, 15, Київ
- **Телефон:** 063 154 55 50
- **Instagram:** [@lilynails.kiev](https://instagram.com/lilynails.kiev)

## Технології
Статичний сайт без бекенду: HTML, Tailwind CSS 3 (зібраний у файл), GSAP + ScrollTrigger (анімації). Шрифти — Google Fonts, карта — Google Maps, форма — Formspree.

## Структура
| Шлях | Призначення |
|---|---|
| `index.html` | уся сторінка (контент, мета-теги, schema.org) |
| `js/main.js` | анімації та відправка форми |
| `src/input.css` | вхідний CSS для Tailwind |
| `css/style.css` | зібраний CSS (комітиться, на сайті використовується саме він) |
| `tailwind.config.js` | кольори та шрифти |
| `img/` | оптимізовані зображення (webp) і `og.jpg` для соцмереж |
| `vendor/` | GSAP, ScrollTrigger (локальні копії) |
| `robots.txt`, `sitemap.xml` | для пошуковиків (домен у них треба узгодити з реальним) |
| `CHANGELOG.md` | що змінено та як повернути стару версію |

## Запуск локально
Потрібен лише браузер: відкрийте `index.html`, або запустіть простий сервер, наприклад `npx http-server .`.

## Зміна стилів
Якщо додаєте нові Tailwind-класи в `index.html` або `js/main.js`, перезберіть CSS:
```
npm install
npm run build
```
Після збірки закомітьте оновлений `css/style.css`.

## Як змінити контент
- **Прайс і послуги:** розділи `#services` і `#price` в `index.html`.
- **Фото:** покладіть файл у `img/` (бажано webp, ~900 px) і замініть `src` у `index.html`. Для галереї вказуйте опис у `alt`.
- **Телефон і адреса:** розділ `#booking`, а також блок `application/ld+json` у `<head>`.
- **Адреса сайту:** якщо домен зміниться, замініть `https://rozt1k.github.io/yuliia-beauty/` у `canonical`, `og:url`, `og:image` та schema.org.

## Форма запису
Заявки йдуть на Formspree (`https://formspree.io/f/xaqzvoao`) і надходять на пошту власника акаунта. Форма має honeypot-поле; reCAPTCHA вмикається в налаштуваннях Formspree. Якщо змінюєте endpoint, оновіть `action` форми та `connect-src` / `form-action` у Content-Security-Policy в `<head>`.

## Безпека
У `<head>` є Content-Security-Policy: дозволені лише власні скрипти, Google Fonts, Google Maps і Formspree. Якщо підключаєте новий зовнішній сервіс (аналітика, чат, віджет), додайте його домен у політику, інакше браузер його заблокує.

## Публікація
Сайт статичний: підходить GitHub Pages, Netlify або будь-який хостинг. Для GitHub Pages: Settings → Pages → Branch `main`, папка `/ (root)`.
