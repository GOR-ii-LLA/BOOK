export const entries = [
  {
    "category": "программы",
    "name": "Tabula",
    "link": "tabula.technology",
    "github": "github.com/tabulapdf/tabula",
    "desc": "Tabula — бесплатная программа, которая вытаскивает таблицы из PDF-файлов и сохраняет их в формате CSV или Excel, чтобы с данными можно было нормально работать.
Например, если тебе прислали банковскую выписку или отчёт в PDF с кучей цифр в таблицах — вместо того чтобы перепечатывать всё руками, ты просто загружаешь файл в Tabula, выделяешь мышкой нужную таблицу и получаешь готовую таблицу для Excel.
Программа работает прямо на твоём компьютере через браузер (localhost), данные никуда не уходят в интернет — это важно, если в PDF конфиденциальная информация вроде зарплат или медицинских данных.
Есть также версии для Python (tabula-py) и R (tabulapdf), что удобно для автоматизации — например, если нужно регулярно вытаскивать таблицы из одинаковых отчётов.
Важный недостаток: Tabula работает только с текстовыми PDF (где текст можно выделить мышкой), а со сканами документов — нет; также десктопное приложение давно не обновлялось (последний релиз — версия 1.2.1), хотя библиотека tabula-java по-прежнему поддерживается.",
    "youtube": [],
    "resources": [],
    "free": "Полностью бесплатная программа с открытым исходным кодом (лицензия MIT). Нужна установленная Java.",
    "tags": [
      "#таблицы",
      "#pdf",
      "#free"
    ],
    "created": "2026-04-03",
    "updated": "2026-04-03"
  }
];

export const CATEGORIES = [
  { id: 'Claude',     label: 'Claude',     special: true },
  { id: 'аптечка',    label: 'Аптечка'    },
  { id: 'программы',  label: 'Программы'  },
  { id: 'товары',     label: 'Товары'     },
  { id: 'чердак',     label: 'Чердак'     },
];

export function getActiveCategories() {
  return CATEGORIES;
}

export function getEntriesForCategory(catId) {
  if (catId === 'Claude') {
    return entries.filter(e => e.category === 'Claude').sort((a, b) => a.name.localeCompare(b.name, 'ru'));
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
