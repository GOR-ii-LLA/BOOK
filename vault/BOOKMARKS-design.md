BOOKMARKS-design v.2026-04-06

Скил для управления дизайном приложения BOOKMARKS: цвета, шрифты, компоненты, адаптивность.

---

## Общее правило

Любое изменение — только после повторного подтверждения от пользователя.
Запрещено без подтверждения добавлять, менять или удалять информацию из любых пунктов скила. После подтверждения можно добавить, изменить или удалить информацию только в том пункте, где получено подтверждение.

При любом изменении в скиле повторное подтверждение: «Точно записать и обновить watcher?»

---

## Шрифты

| Назначение | Шрифт | Вес | CSS-переменная |
|---|---|---|---|
| Логотип, заголовки | Unbounded | 400, 500 | `--font-display` |
| Основной текст, кнопки, поля | Inter | 400, 500 | `--font-body` |

Подключение: Google Fonts (`display=swap`).

---

## Цвета — светлая тема

| Переменная | Значение | Назначение |
|---|---|---|
| `--accent` | `#1D9E75` | Основной акцент |
| `--accent-dark` | `#0F6E56` | Акцент тёмный |
| `--accent-light` | `#E1F5EE` | Акцент фон |
| `--accent-text` | `#0F6E56` | Акцент текст |
| `--claude` | `#D97757` | Claude-цвет |
| `--claude-light` | `#FAECE7` | Claude фон |
| `--claude-text` | `#993C1D` | Claude текст |
| `--bg` | `#f7f6f3` | Фон страницы |
| `--surface` | `#ffffff` | Поверхность (карточки) |
| `--border` | `rgba(0,0,0,.1)` | Границы |
| `--border-strong` | `rgba(0,0,0,.18)` | Границы усиленные |
| `--text` | `#1a1a18` | Основной текст |
| `--text-muted` | `#6b6a65` | Приглушённый текст |
| `--text-faint` | `#a09f9a` | Бледный текст |
| `--yt` | `#c33` | YouTube |
| `--yt-light` | `#fdeaea` | YouTube фон |
| `--yt-text` | `#a22` | YouTube текст |
| `--res` | `#5b7fb5` | Ресурсы |
| `--res-light` | `#eaf0f8` | Ресурсы фон |
| `--res-text` | `#3a5a8a` | Ресурсы текст |

---

## Цвета — тёмная тема (класс `.dark`)

| Переменная | Значение |
|---|---|
| `--bg` | `#141412` |
| `--surface` | `#1e1d1b` |
| `--border` | `rgba(255,255,255,.1)` |
| `--border-strong` | `rgba(255,255,255,.2)` |
| `--text` | `#f0ede8` |
| `--text-muted` | `#9b9890` |
| `--text-faint` | `#6b6a65` |
| `--accent-light` | `#0a3328` |
| `--accent-text` | `#5DCAA5` |
| `--claude-light` | `#2d1a12` |
| `--claude-text` | `#F0997B` |
| `--yt-light` | `#2d1515` |
| `--yt-text` | `#f08080` |
| `--res-light` | `#1a2230` |
| `--res-text` | `#8ab4e8` |

---

## Радиусы

| Переменная | Значение | Где используется |
|---|---|---|
| `--radius` | `10px` | Карточки, поиск, список записей |
| `--radius-sm` | `6px` | Кнопка темы |
| `999px` | круг | Пилюли тегов |

---

## Лейаут

- Контейнер: `max-width: 740px`, центрирован (`margin: 0 auto`), `padding: 0 1rem`
- Приложение: `min-height: 100vh`, `padding: 0 0 4rem`
- Мобильные (`≤480px`): контейнер `padding: 0 .75rem`

---

## Компоненты

### Хедер (`.header`)

- `display: flex`, `justify-content: space-between`, `align-items: center`
- `padding: 1.25rem 0 1rem`
- Мобильные: `padding: 1rem 0 .875rem`

### Логотип (`.logo`)

- Шрифт: `Unbounded`, `18px`, `font-weight: 500`, `letter-spacing: -.5px`
- Буква «O» (`.logo-o`): цвет `--accent`
- Мобильные: `16px`

### Кнопка темы (`.theme-btn`)

- `font-size: 12px`, `padding: 6px 12px`
- `border: 1px solid var(--border-strong)`, `border-radius: var(--radius-sm)`
- `background: var(--surface)`, `color: var(--text-muted)`
- Hover: `color: var(--text)`, `border-color: var(--text-muted)`

### Поиск (`.search`)

- `width: 100%`, `padding: 10px 14px`, `font-size: 15px`
- `border: 1px solid var(--border-strong)`, `border-radius: var(--radius)`
- `background: var(--surface)`, `color: var(--text)`
- Placeholder: `color: var(--text-faint)`
- Focus: `border-color: var(--accent)`
- `margin-bottom: 12px`
- Мобильные: `font-size: 16px`, `padding: 11px 13px`

### Вкладки категорий (`.cat-tabs-wrap`)

- Контейнер для двух строк вкладок
- `display: flex`, `flex-direction: column`
- `border-bottom: 1px solid var(--border)`

### Строка вкладок (`.cat-tabs`)

- `display: flex`, горизонтальный скролл, скроллбар скрыт
- Строка 1: Claude, Аптечка, Программы, Товары, Чердак
- Строка 2: Vibecode, кнопка #frontend

### Таб категории (`.cat-tab`)

- `font-size: 13px`, `padding: 10px 14px`, без фона
- `color: var(--text-muted)`, `border-bottom: 2px solid transparent`
- `white-space: nowrap`, `flex-shrink: 0`
- Hover: `color: var(--text)`
- Активный (`.active`): `color: var(--accent)`, `border-bottom-color: var(--accent)`, `font-weight: 500`

### Специальный таб (`.cat-tab--special`) — используется только для Claude

- `color: var(--claude)`, `background: var(--claude-light)`
- `padding: 6px 14px`, `margin: 2px 4px 2px 0`, без нижнего бордера
- Hover: `opacity: .85`
- Активный: `color: #fff`, `background: var(--claude)`, `font-weight: 500`

### Панель тегов (`.tag-bar`)

- `display: flex`, `flex-wrap: wrap`, `gap: 6px`
- `padding: 10px 0 12px`, `border-bottom: 1px solid var(--border)`, `margin-bottom: 14px`

### Пилюля тега (`.tag-pill`)

- `font-size: 12px`, `padding: 5px 11px`, `border-radius: 999px`
- `border: 1px solid var(--border-strong)`, `background: var(--surface)`, `color: var(--text-muted)`
- Hover: `border-color: var(--accent)`, `color: var(--accent)`
- Активная (`.active`): `background: var(--accent-light)`, `border-color: var(--accent)`, `color: var(--accent-text)`
- Мобильные: `padding: 6px 11px`

### Список записей (`.entry-list`)

- `border: 1px solid var(--border)`, `border-radius: var(--radius)`
- `overflow: hidden`, `background: var(--surface)`

### Строка записи (`.entry-row`)

- `display: flex`, `align-items: center`, `gap: 10px`
- `padding: 13px 14px`, `border-bottom: 1px solid var(--border)`
- `cursor: pointer`, переход `background .12s`
- Последний элемент: без нижнего бордера
- Hover / открытый (`.open`): `background: var(--bg)`
- Мобильные: `padding: 13px 12px`

### Мета записи (`.entry-meta`)

- `flex: 1`, `min-width: 0`, `display: flex`, `flex-direction: column`, `gap: 2px`

### Название записи (`.entry-name`)

- `font-size: 14px`, `font-weight: 500`, `color: var(--text)`
- Мобильные: `15px`

### Теги в строке (`.entry-tags`)

- `font-size: 11px`, `color: var(--text-faint)`

### Ссылка в строке (`.entry-link`)

- `font-size: 12px`, `color: var(--accent)`, `white-space: nowrap`, `flex-shrink: 0`
- `padding: 4px 0 4px 8px`
- Hover: `opacity: .75`

### Раскрытая запись (`.entry-expand`)

- `background: var(--bg)`, `border-bottom: 1px solid var(--border)`
- `padding: 12px 14px 14px`, `display: flex`, `flex-direction: column`, `gap: 6px`
- Мобильные: `padding: 12px 12px 14px`

### Сайт записи (`.entry-site`)

- `font-size: 13px`, `color: var(--text-muted)`
- Ссылка внутри: `color: var(--accent)`, hover `opacity: .75`

### Описание (`.entry-desc`)

- `font-size: 13px`, `color: var(--text-muted)`, `line-height: 1.6`
- `white-space: pre-line`

### GitHub-ссылка (`.entry-github`)

- `font-size: 13px`, `color: var(--accent)`, hover `opacity: .75`

### Бесплатная версия (`.entry-free`)

- `font-size: 13px`, `color: var(--text-muted)`

### Теги в раскрытой записи (`.entry-expand-tags .tag-pill`)

- `font-size: 11px`, `padding: 3px 9px`
- `background: var(--accent-light)`, `border-color: var(--accent)`, `color: var(--accent-text)`
- Hover: `opacity: .85`

### Даты (`.entry-dates`)

- `display: flex`, `flex-direction: column`, `gap: 1px`, `margin-top: 4px`
- `font-size: 11px`, `color: var(--text-faint)`

### Медиа-блок (`.entry-media-block`)

- `display: flex`, `flex-direction: column`, `gap: 3px`, `margin-top: 4px`

### Заголовок медиа (`.entry-media-title`)

- `font-size: 12px`, `font-weight: 500`, `color: var(--text-faint)`
- `text-transform: uppercase`, `letter-spacing: .3px`, `margin-bottom: 1px`

### Ссылки медиа (`.entry-media-link`)

- `font-size: 13px`, `line-height: 1.5`, hover `opacity: .75`
- YouTube (`.entry-media-link--yt`): `color: var(--yt-text)`
- Ресурсы (`.entry-media-link--res`): `color: var(--res-text)`

### Пустое состояние (`.empty`)

- `padding: 2.5rem`, `text-align: center`, `color: var(--text-faint)`, `font-size: 14px`

---

## Скроллбар

- Ширина / высота: `4px`
- Track: прозрачный
- Thumb: `var(--border-strong)`, `border-radius: 2px`

---

## Переходы

| Элемент | Свойство | Длительность |
|---|---|---|
| Body (фон, цвет) | `background`, `color` | `0.2s` |
| Кнопки, ссылки | `color`, `border-color`, `opacity` | `0.15s` |
| Строки записей | `background` | `0.12s` |
| Теги | `color`, `border-color`, `background` | `0.15s` |

---

## Адаптивность (≤480px)

| Элемент | Изменение |
|---|---|
| Контейнер | `padding: 0 .75rem` |
| Хедер | `padding: 1rem 0 .875rem` |
| Логотип | `font-size: 16px` |
| Поиск | `font-size: 16px`, `padding: 11px 13px` |
| Табы категорий | `font-size: 13px`, `padding: 10px 12px` |
| Пилюли тегов | `padding: 6px 11px` |
| Строка записи | `padding: 13px 12px` |
| Название записи | `font-size: 15px` |
| Раскрытая запись | `padding: 12px 12px 14px` |

---

## Общие правила стилей

- `box-sizing: border-box` на всех элементах
- Сброс margin и padding через `*`
- Ссылки без подчёркивания (`text-decoration: none`)
- `-webkit-tap-highlight-color: transparent` на интерактивных элементах
- Горизонтальный скролл категорий: `scrollbar-width: none`, `-webkit-overflow-scrolling: touch`

---

## Исходный код

### CSS (index.css)

```css
@import "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500&family=Inter:wght@400;500&display=swap";

:root {
  --accent: #1D9E75;
  --accent-dark: #0F6E56;
  --accent-light: #E1F5EE;
  --accent-text: #0F6E56;
  --claude: #D97757;
  --claude-light: #FAECE7;
  --claude-text: #993C1D;
  --bg: #f7f6f3;
  --surface: #ffffff;
  --border: rgba(0,0,0,.1);
  --border-strong: rgba(0,0,0,.18);
  --text: #1a1a18;
  --text-muted: #6b6a65;
  --text-faint: #a09f9a;
  --radius: 10px;
  --radius-sm: 6px;
  --font-display: "Unbounded", sans-serif;
  --font-body: "Inter", sans-serif;
  --yt: #c33;
  --yt-light: #fdeaea;
  --yt-text: #a22;
  --res: #5b7fb5;
  --res-light: #eaf0f8;
  --res-text: #3a5a8a;
}

.dark {
  --bg: #141412;
  --surface: #1e1d1b;
  --border: rgba(255,255,255,.1);
  --border-strong: rgba(255,255,255,.2);
  --text: #f0ede8;
  --text-muted: #9b9890;
  --text-faint: #6b6a65;
  --accent-light: #0a3328;
  --accent-text: #5DCAA5;
  --claude-light: #2d1a12;
  --claude-text: #F0997B;
  --yt-light: #2d1515;
  --yt-text: #f08080;
  --res-light: #1a2230;
  --res-text: #8ab4e8;
}

*, *:before, *:after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--bg);
  font-family: var(--font-body);
  color: var(--text);
  transition: background .2s, color .2s;
}

button { cursor: pointer; font-family: var(--font-body); }
a { text-decoration: none; }

.app { min-height: 100vh; padding: 0 0 4rem; }
.container { max-width: 740px; margin: 0 auto; padding: 0 1rem; }

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0 1rem;
}

.logo {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
  letter-spacing: -.5px;
}

.logo-o { color: var(--accent); }

.theme-btn {
  font-size: 12px;
  padding: 6px 12px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text-muted);
  transition: color .15s, border-color .15s;
}

.theme-btn:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

.search {
  width: 100%;
  padding: 10px 14px;
  font-size: 15px;
  font-family: var(--font-body);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--text);
  outline: none;
  margin-bottom: 12px;
  transition: border-color .15s;
}

.search::placeholder { color: var(--text-faint); }
.search:focus { border-color: var(--accent); }

.cat-tabs-wrap {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--border);
}

.cat-tabs {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.cat-tabs::-webkit-scrollbar { display: none; }

.cat-tab {
  font-size: 13px;
  font-family: var(--font-body);
  padding: 10px 14px;
  border: none;
  background: none;
  color: var(--text-muted);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  white-space: nowrap;
  transition: color .15s;
  flex-shrink: 0;
}

.cat-tab:hover:not(.active) { color: var(--text); }

.cat-tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
  font-weight: 500;
}

.cat-tab--special {
  color: var(--claude);
  background: var(--claude-light);
  padding: 6px 14px;
  margin: 2px 4px 2px 0;
  border-bottom: none;
}

.cat-tab--special:hover:not(.active) {
  color: var(--claude);
  opacity: .85;
}

.cat-tab--special.active {
  color: #fff;
  background: var(--claude);
  border-bottom: none;
  font-weight: 500;
}

.tag-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 0 12px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 14px;
}

.tag-pill {
  font-size: 12px;
  font-family: var(--font-body);
  padding: 5px 11px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  color: var(--text-muted);
  transition: color .15s, border-color .15s, background .15s;
  -webkit-tap-highlight-color: transparent;
}

.tag-pill:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.tag-pill.active {
  background: var(--accent-light);
  border-color: var(--accent);
  color: var(--accent-text);
}

.tag-page-title {
  font-size: 17px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 12px;
}

.entry-list {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface);
}

.entry-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 14px;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: background .12s;
  -webkit-tap-highlight-color: transparent;
}

.entry-row:last-child { border-bottom: none; }
.entry-row:hover, .entry-row.open { background: var(--bg); }

.entry-meta {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.entry-name { font-size: 14px; font-weight: 500; color: var(--text); }
.entry-tags { font-size: 11px; color: var(--text-faint); }

.entry-link {
  font-size: 12px;
  color: var(--accent);
  white-space: nowrap;
  flex-shrink: 0;
  transition: opacity .15s;
  padding: 4px 0 4px 8px;
}

.entry-link:hover { opacity: .75; }

.entry-expand {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 12px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.entry-site { font-size: 13px; color: var(--text-muted); }
.entry-site a { color: var(--accent); transition: opacity .15s; }
.entry-site a:hover { opacity: .75; }
.entry-field-label { color: var(--text-faint); }

.entry-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
  white-space: pre-line;
}

.entry-github { font-size: 13px; color: var(--accent); transition: opacity .15s; }
.entry-github:hover { opacity: .75; }
.entry-free { font-size: 13px; color: var(--text-muted); }

.entry-expand-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 4px; }

.entry-expand-tags .tag-pill {
  font-size: 11px;
  padding: 3px 9px;
  background: var(--accent-light);
  border-color: var(--accent);
  color: var(--accent-text);
}

.entry-expand-tags .tag-pill:hover { opacity: .85; }

.entry-dates { display: flex; flex-direction: column; gap: 1px; margin-top: 4px; }
.entry-dates span { font-size: 11px; color: var(--text-faint); }

.entry-media-block { display: flex; flex-direction: column; gap: 3px; margin-top: 4px; }

.entry-media-title {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: .3px;
  margin-bottom: 1px;
}

.entry-media-link { font-size: 13px; line-height: 1.5; transition: opacity .15s; }
.entry-media-link:hover { opacity: .75; }
.entry-media-link--yt { color: var(--yt-text); }
.entry-media-link--res { color: var(--res-text); }

.empty { padding: 2.5rem; text-align: center; color: var(--text-faint); font-size: 14px; }

::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 2px; }

@media (max-width: 480px) {
  .container { padding: 0 .75rem; }
  .header { padding: 1rem 0 .875rem; }
  .logo { font-size: 16px; }
  .search { font-size: 16px; padding: 11px 13px; }
  .cat-tab { font-size: 13px; padding: 10px 12px; }
  .tag-pill { font-size: 12px; padding: 6px 11px; }
  .entry-row { padding: 13px 12px; }
  .entry-name { font-size: 15px; }
  .entry-expand { padding: 12px 12px 14px; }
}
```

### Компоненты (App.jsx)

#### Данные

```js
// entries.js — массив записей, импортируется как entries
// Структура каждой записи — см. раздел «Структура entries.js» в BOOKMARKS-content

export const CATEGORIES = [
  { id: 'Claude',     label: 'Claude',     special: true, row: 1 },
  { id: 'аптечка',    label: 'Аптечка',    row: 1 },
  { id: 'программы',  label: 'Программы',  row: 1 },
  { id: 'товары',     label: 'Товары',     row: 1 },
  { id: 'чердак',     label: 'Чердак',     row: 1 },
  { id: 'Vibecode',   label: 'Vibecode',   row: 2 },
];
```

#### Вспомогательные функции

```js
// Сортировка тегов: кириллица первой, латиница после
function sortTags(tags) {
  const cyr = tags.filter(t => /^#[а-яё]/i.test(t)).sort((a, b) => a.localeCompare(b, 'ru'));
  const lat = tags.filter(t => !/^#[а-яё]/i.test(t)).sort();
  return [...cyr, ...lat];
}

// Получить все категории
function getActiveCategories() {
  return CATEGORIES;
}

// Получить все записи (для главной)
function getAllEntries() {
  return [...entries].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

// Получить записи по категории (все сортируются по алфавиту)
function getEntriesForCategory(catId) {
  return entries.filter(e => e.category === catId).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

// Получить записи по тегу
function getEntriesForTag(tag) {
  return entries
    .filter(e => e.tags.includes(tag))
    .sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

// Получить все уникальные теги (кириллица первой)
function getAllTags() {
  const set = new Set();
  entries.forEach(e => e.tags.forEach(t => set.add(t)));
  const all = Array.from(set);
  const cyr = all.filter(t => /^#[а-яё]/i.test(t)).sort((a, b) => a.localeCompare(b, 'ru'));
  const lat = all.filter(t => !/^#[а-яё]/i.test(t)).sort();
  return [...cyr, ...lat];
}
```

#### Иконка special-таба (SparkleIcon)

```jsx
function SparkleIcon({ size = 13, color = '#D97757' }) {
  const c = size / 2;
  const r = size * 0.46;
  const d = size * 0.326;
  const w = size * 0.22;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
         xmlns="http://www.w3.org/2000/svg"
         style={{ display: 'inline-block', verticalAlign: 'middle',
                  marginRight: 6, flexShrink: 0, marginTop: -1 }}>
      <line x1={c} y1={c-r} x2={c} y2={c+r} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <line x1={c-r} y1={c} x2={c+r} y2={c} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <line x1={c-d} y1={c-d} x2={c+d} y2={c+d} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <line x1={c+d} y1={c-d} x2={c-d} y2={c+d} stroke={color} strokeWidth={w} strokeLinecap="round" />
    </svg>
  );
}
```

#### Компонент записи (EntryRow)

```jsx
function EntryRow({ entry, onTagClick }) {
  const [open, setOpen] = useState(false);
  const sortedTags = useMemo(() => sortTags(entry.tags), [entry.tags]);

  return (
    <>
      <div className={`entry-row ${open ? 'open' : ''}`} onClick={() => setOpen(v => !v)}>
        <div className="entry-meta">
          <span className="entry-name">{entry.name}</span>
          <span className="entry-tags">{sortedTags.join(' · ')}</span>
        </div>
        <a className="entry-link" href={`https://${entry.link}`}
           target="_blank" rel="noopener noreferrer"
           onClick={e => e.stopPropagation()}>
          {entry.link} →
        </a>
      </div>

      {open && (
        <div className="entry-expand">
          {entry.link && (
            <p className="entry-site">
              <span className="entry-field-label">Официальная страница: </span>
              <a href={`https://${entry.link}`} target="_blank" rel="noopener noreferrer"
                 onClick={e => e.stopPropagation()}>{entry.link}</a>
            </p>
          )}
          {entry.github && (
            <p className="entry-site">
              <span className="entry-field-label">GitHub: </span>
              <a href={`https://${entry.github}`} target="_blank" rel="noopener noreferrer"
                 onClick={e => e.stopPropagation()}>{entry.github}</a>
            </p>
          )}
          <p className="entry-desc">{entry.desc}</p>
          {entry.free && <p className="entry-free">{entry.free}</p>}

          {entry.youtube?.length > 0 && (
            <div className="entry-media-block">
              <span className="entry-media-title">Youtube:</span>
              {entry.youtube.map((v, i) => (
                <a key={i} className="entry-media-link entry-media-link--yt"
                   href={v.url} target="_blank" rel="noopener noreferrer"
                   onClick={e => e.stopPropagation()}>{v.name}</a>
              ))}
            </div>
          )}

          {entry.resources?.length > 0 && (
            <div className="entry-media-block">
              <span className="entry-media-title">Ресурсы:</span>
              {entry.resources.map((v, i) => (
                <a key={i} className="entry-media-link entry-media-link--res"
                   href={v.url} target="_blank" rel="noopener noreferrer"
                   onClick={e => e.stopPropagation()}>{v.name}</a>
              ))}
            </div>
          )}

          <div className="entry-expand-tags">
            {sortedTags.map(tag => (
              <button key={tag} className="tag-pill"
                      onClick={e => { e.stopPropagation(); onTagClick(tag); }}>
                {tag}
              </button>
            ))}
          </div>

          <div className="entry-dates">
            <span>Дата создания: {entry.created}</span>
          </div>
        </div>
      )}
    </>
  );
}
```

#### Главный компонент (App)

```jsx
function App() {
  const [dark, setDark] = useState(false);
  const [cat, setCat] = useState(null);
  const [activeTag, setActiveTag] = useState(null);
  const [search, setSearch] = useState('');

  const allTags = useMemo(() => getAllTags(), []);
  const cats = getActiveCategories();
  const row1 = cats.filter(c => c.row === 1);
  const row2 = cats.filter(c => c.row === 2);

  const filtered = useMemo(() => {
    if (activeTag) return getEntriesForTag(activeTag);
    const list = cat ? getEntriesForCategory(cat) : getAllEntries();
    if (!search.trim()) return list;
    const q = search.toLowerCase();
    return list.filter(e =>
      e.name.toLowerCase().includes(q) ||
      e.tags.some(t => t.toLowerCase().includes(q)) ||
      e.desc.toLowerCase().includes(q)
    );
  }, [cat, activeTag, search]);

  function selectCat(id) { setCat(id); setActiveTag(null); setSearch(''); }
  function selectTag(tag) { setActiveTag(tag); setCat(null); setSearch(''); }

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <div className="container">
        <header className="header">
          <div className="logo">B<span className="logo-o">OO</span>KMARKS</div>
          <button className="theme-btn" onClick={() => setDark(v => !v)}>
            {dark ? '☀ светлая' : '◑ тёмная'}
          </button>
        </header>

        <input className="search" type="text" placeholder="Поиск..."
               value={search} onChange={e => setSearch(e.target.value)} />

        <div className="cat-tabs-wrap">
          <div className="cat-tabs">
            {row1.map(c => (
              <button key={c.id}
                className={`cat-tab ${c.special ? 'cat-tab--special' : ''} ${cat === c.id && !activeTag ? 'active' : ''}`}
                onClick={() => selectCat(c.id)}>
                {c.special ? <SparkleIcon size={13} color={cat === c.id && !activeTag ? '#fff' : '#D97757'} /> : ''}
                {c.label}
              </button>
            ))}
          </div>
          <div className="cat-tabs">
            {row2.map(c => (
              <button key={c.id}
                className={`cat-tab ${cat === c.id && !activeTag ? 'active' : ''}`}
                onClick={() => selectCat(c.id)}>
                {c.label}
              </button>
            ))}
            <button
              className={`cat-tab ${activeTag === '#frontend' ? 'active' : ''}`}
              onClick={() => selectTag('#frontend')}>
              #frontend
            </button>
          </div>
        </div>

        <div className="tag-bar">
          {allTags.map(t => (
            <button key={t} className={`tag-pill ${activeTag === t ? 'active' : ''}`}
                    onClick={() => selectTag(t)}>{t}</button>
          ))}
        </div>

        {activeTag && <div className="tag-page-title">{activeTag}</div>}

        <div className="entry-list">
          {filtered.length === 0
            ? <div className="empty">Пока пусто</div>
            : filtered.map(e => <EntryRow key={e.name} entry={e} onTagClick={selectTag} />)
          }
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
);
```
