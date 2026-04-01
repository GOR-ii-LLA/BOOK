export const entries = [
  {
    "name": "Notion",
    "category": "claude",
    "icon": "✦",
    "link": "notion.com",
    "tags": [
      "#продуктивность",
      "#mcp",
      "#база-знаний",
      "#заметки",
      "#задачи",
      "#ai-агенты"
    ],
    "desc": "Notion — рабочее пространство «всё в одном»: заметки, задачи, базы данных, вики и даже почта с календарём живут в одном приложении вместо десятка разных. С Claude интегрируется через официальный MCP-сервер (mcp.notion.com) — Claude получает доступ к страницам и базам данных, может искать, читать и редактировать контент прямо из чата или Claude Code. Например, можно попросить Claude найти нужный документ в Notion, создать страницу с техспеком или заполнить базу данных — всё без копирования текста вручную. В 2026 году Notion добавил автономных AI-агентов, которые выполняют сложные задачи в фоне (исследования, заполнение баз, создание документов), а также режим презентаций, дашборды и Workers — возможность писать код для кастомных инструментов агента. Полный AI-функционал (агенты, Ask Notion, транскрипция встреч) доступен только на плане Business ($20/мес за пользователя) — на бесплатном и Plus AI ограничен пробной версией.",
    "extra": "Бесплатно: безлимитные страницы и блоки для личного использования, до 10 гостей, файлы до 5 МБ, Notion Calendar и Mail бесплатно, пробный доступ к AI",
    "note": "Альтернативы: Obsidian, Coda, Confluence",
    "id": 1
  },
  {
    "name": "Tavily",
    "category": "claude",
    "icon": "✦",
    "link": "tavily.com",
    "tags": [
      "#api",
      "#поиск",
      "#ai-агенты",
      "#rag",
      "#llm",
      "#разработка",
      "#веб-поиск"
    ],
    "desc": "Tavily — поисковый API, созданный специально для AI-агентов и RAG-систем (Retrieval-Augmented Generation). Возвращает структурированные, очищенные результаты поиска в реальном времени — готовые к подаче в языковую модель без постобработки. Используется разработчиками для подключения LLM-приложений, чат-ботов и AI-агентов к актуальным данным из интернета. Поддерживает поиск, извлечение контента, краулинг сайтов и глубокое исследование; нативно интегрируется с LangChain, LlamaIndex, MCP. В феврале 2026 года Tavily была приобретена компанией Nebius, что вызвало у части разработчиков вопросы о стабильности цен и дальнейшем развитии продукта.",
    "extra": "",
    "note": "Альтернативы: Exa.ai, Perplexity Sonar API, Brave Search API",
    "id": 2
  }
];

export const CATEGORIES = [
  { id: 'claude',      label: 'Claude',     icon: null, special: true },
  { id: 'аптечка',     label: 'Аптечка',    icon: '💊' },
  { id: 'программы',   label: 'Программы',  icon: '💻' },
  { id: 'товары',      label: 'Товары',     icon: '📦' },
  { id: 'чердак',      label: 'Чердак',     icon: '📥' },
];

export function getActiveCategories() {
  const usedCats = new Set(entries.map(e => e.category));
  return CATEGORIES.filter(c => c.special || usedCats.has(c.id));
}

export function getEntriesForCategory(catId) {
  if (catId === 'claude') {
    return entries.filter(e => e.category === 'claude').sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  }
  return entries.filter(e => e.category === catId).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

export function getEntriesForTag(tag) {
  return entries.filter(e => e.tags.includes(tag)).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

export function getAllTags() {
  const tagSet = new Set();
  entries.forEach(e => e.tags.forEach(t => tagSet.add(t)));
  const tags = Array.from(tagSet);
  const ru = tags.filter(t => /^#[а-яё]/i.test(t)).sort((a, b) => a.localeCompare(b, 'ru'));
  const en = tags.filter(t => !/^#[а-яё]/i.test(t)).sort();
  return [...ru, ...en];
}
