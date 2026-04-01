# Parent Help Hub

Статический MVP микросайта для родителей ITGenio.

## Что внутри

- `index.html` — оболочка сайта
- `styles.css` — стили
- `content.js` — сценарии, категории и контакты
- `app.js` — маршрутизация, рендер и поиск

## Как открыть локально

```bash
cd parent_help_hub
python3 -m http.server 4173
```

После этого сайт будет доступен по адресу:

```text
http://localhost:4173
```

## Как редактировать контент

Основной контент хранится в `content.js`.

Для каждой страницы задаются:

- `slug`
- `category`
- `title`
- `question`
- `answer`
- `whatHappens`
- `whatToDoNow`
- `whenToContactUs`
- `primaryCta`
- `secondaryCta`
- `searchAliases`
- `sourceOfTruth`

## Как устроены маршруты

- `#/` — главная
- `#/schedule` — раздел
- `#/schedule/cancel-lesson` — сценарная страница
- `#/search/как%20отменить%20урок` — результаты поиска
- `#/contact` — контакты
