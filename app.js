const content = window.parentHelpHubContent;

const categoryMap = new Map(content.categories.map((category) => [category.id, category]));
const pageMap = new Map(content.pages.map((page) => [page.slug, page]));
const app = document.getElementById("app");

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}\s/-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function routeFromHash() {
  const hash = window.location.hash || "#/";
  return hash.replace(/^#\/?/, "").replace(/\/+$/, "");
}

function pageUrl(slug) {
  return `#/${slug}`;
}

function categoryUrl(slug) {
  return `#/${slug}`;
}

function searchUrl(query) {
  return `#/search/${encodeURIComponent(query)}`;
}

function createButton(cta, variant = "button-primary") {
  if (!cta) {
    return "";
  }

  let href = "#/";
  let target = "";
  let rel = "";

  if (cta.type === "page") {
    href = pageUrl(cta.value);
  } else if (cta.type === "category") {
    href = categoryUrl(cta.value);
  } else if (cta.type === "contact") {
    href = "#/contact";
  } else if (cta.type === "external") {
    href = cta.value;
    target = ' target="_blank"';
    rel = ' rel="noreferrer"';
  }

  return `<a class="button ${variant}" href="${href}"${target}${rel}>${escapeHtml(cta.label)}</a>`;
}

function renderList(items) {
  return `<ul class="bullet-list">${items
    .map((item) => `<li><span>${escapeHtml(item)}</span></li>`)
    .join("")}</ul>`;
}

function renderSourceList(items) {
  return `<div class="source-list">${items
    .map((item) => `<span class="source-badge">${escapeHtml(item)}</span>`)
    .join("")}</div>`;
}

function renderCategoryCard(category) {
  const featured = category.featuredPages
    .map((slug) => pageMap.get(slug))
    .filter(Boolean)
    .slice(0, 2)
    .map((page) => page.shortTitle || page.title)
    .join(" — ");

  return `
    <a class="category-card" href="${categoryUrl(category.id)}">
      <div class="card-icon">${escapeHtml(category.icon)}</div>
      <h3 class="card-title">${escapeHtml(category.title)}</h3>
      <p class="card-copy">${escapeHtml(category.description)}</p>
      <span class="card-meta">${escapeHtml(featured)}</span>
    </a>
  `;
}

function renderQuestionCard(page) {
  return `
    <a class="question-card" href="${pageUrl(page.slug)}">
      <h3 class="card-title">${escapeHtml(page.title)}</h3>
      <p class="card-copy">${escapeHtml(page.answer)}</p>
      <span class="card-meta">Открыть сценарий</span>
    </a>
  `;
}

function renderBreadcrumbs(items) {
  const rendered = items
    .map((item, index) => {
      if (index === items.length - 1) {
        return `<span>${escapeHtml(item.label)}</span>`;
      }

      return `<a href="${item.href}">${escapeHtml(item.label)}</a><span>—</span>`;
    })
    .join("");

  return `<nav class="breadcrumbs">${rendered}</nav>`;
}

function renderHome() {
  const featuredPages = [
    "schedule/cancel-lesson",
    "schedule/makeup",
    "progress/homework-and-feedback",
    "tech/lesson-or-platform-issue",
  ]
    .map((slug) => pageMap.get(slug))
    .filter(Boolean);

  app.innerHTML = `
    <section class="hero">
      <div class="eyebrow">Для родителей — быстро, спокойно, по делу</div>
      <h1>Чем помочь прямо сейчас?</h1>
      <p class="hero-copy">
        Здесь не нужно читать длинный справочник. Выберите свою ситуацию — и получите короткий ответ, понятный следующий шаг и момент, когда уже стоит подключать человека.
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href="#/schedule">Перейти к расписанию</a>
      </div>
      <div class="search-panel">
        <form class="search-form" data-search-form>
          <input
            class="search-input"
            type="search"
            name="query"
            placeholder="Например: как отменить урок, где домашка, не открывается кабинет"
            aria-label="Поиск по вопросам"
          />
          <button class="button button-primary" type="submit">Найти ответ</button>
        </form>
        <div class="search-suggestions">
          ${content.quickSearches
            .map(
              (query) =>
                `<button class="tag-button" type="button" data-search-tag="${escapeHtml(query)}">${escapeHtml(query)}</button>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-header">
        <div>
          <h2 class="section-title">Сценарии по жизненным ситуациям</h2>
          <p class="section-copy">
            Вместо тем и регламентов — вход по тому, что действительно волнует родителя в моменте.
          </p>
        </div>
      </div>
      <div class="card-grid">
        ${content.categories.map(renderCategoryCard).join("")}
      </div>
    </section>

    <section class="section-block">
      <div class="section-header">
        <div>
          <h2 class="section-title">Чаще всего ищут</h2>
          <p class="section-copy">
            Это короткие сценарии для самых частых вопросов — без длинных правил и внутреннего жаргона.
          </p>
        </div>
      </div>
      <div class="card-grid">
        ${featuredPages.map(renderQuestionCard).join("")}
      </div>
    </section>

    <p class="footer-note">Если ответ не подошёл — внизу каждой страницы есть прямой выход в контакт.</p>
  `;
}

function renderCategory(category) {
  const pages = content.pages.filter((page) => page.category === category.id);

  app.innerHTML = `
    ${renderBreadcrumbs([
      { label: "Главная", href: "#/" },
      { label: category.title, href: categoryUrl(category.id) },
    ])}
    <section class="hero">
      <div class="eyebrow">${escapeHtml(category.title)}</div>
      <h1>${escapeHtml(category.title)}</h1>
      <p class="hero-copy">${escapeHtml(category.description)}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="#/contact">Написать нам</a>
        <a class="button button-secondary" href="#/">На главную</a>
      </div>
    </section>
    <section class="section-block">
      <div class="card-grid">
        ${pages.map(renderQuestionCard).join("")}
      </div>
    </section>
  `;
}

function renderArticle(page) {
  const category = categoryMap.get(page.category);
  const relatedPages = (page.relatedPages || [])
    .map((slug) => pageMap.get(slug))
    .filter(Boolean);

  app.innerHTML = `
    ${renderBreadcrumbs([
      { label: "Главная", href: "#/" },
      { label: category.title, href: categoryUrl(category.id) },
      { label: page.shortTitle || page.title, href: pageUrl(page.slug) },
    ])}
    <section class="article-hero">
      <div class="eyebrow">${escapeHtml(category.title)}</div>
      <h1 class="page-title">${escapeHtml(page.question)}</h1>
      <p class="article-answer">${escapeHtml(page.answer)}</p>
      <div class="article-actions">
        ${createButton(page.primaryCta, "button-primary")}
        ${createButton(page.secondaryCta, "button-secondary")}
      </div>
    </section>

    <section class="article-grid">
      <div class="article-main">
        <article class="article-section">
          <h2>Что произойдёт</h2>
          ${renderList(page.whatHappens)}
        </article>
        <article class="article-section">
          <h2>Что сделать сейчас</h2>
          ${renderList(page.whatToDoNow)}
        </article>
        <article class="article-section">
          <h2>Когда уже нужен человек</h2>
          ${renderList(page.whenToContactUs)}
        </article>
      </div>

      <aside class="article-side">
        <div class="article-section">
          <h2>Следующий шаг</h2>
          <div class="article-actions">
            ${createButton(page.primaryCta, "button-primary")}
            ${createButton(page.secondaryCta, "button-secondary")}
          </div>
        </div>
        ${
          relatedPages.length
            ? `
              <div class="article-section">
                <h2>Похожие вопросы</h2>
                <div class="card-grid">
                  ${relatedPages.map(renderQuestionCard).join("")}
                </div>
              </div>
            `
            : ""
        }
      </aside>
    </section>
  `;
}

function searchPages(rawQuery) {
  const query = normalize(rawQuery);

  if (!query) {
    return [];
  }

  return content.pages
    .map((page) => {
      const haystack = normalize(
        [
          page.title,
          page.question,
          page.answer,
          ...(page.searchAliases || []),
          ...(page.whatHappens || []),
          ...(page.whatToDoNow || []),
        ].join(" "),
      );

      let score = 0;

      if (normalize(page.title).includes(query)) {
        score += 6;
      }

      if (normalize(page.question).includes(query)) {
        score += 5;
      }

      if ((page.searchAliases || []).some((alias) => normalize(alias).includes(query))) {
        score += 4;
      }

      if (haystack.includes(query)) {
        score += 2;
      }

      return { page, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .map((entry) => entry.page);
}

function renderSearch(query) {
  const results = searchPages(query);

  app.innerHTML = `
    ${renderBreadcrumbs([
      { label: "Главная", href: "#/" },
      { label: "Поиск", href: searchUrl(query) },
    ])}
    <section class="hero">
      <div class="eyebrow">Поиск</div>
      <h1>Ищем ответ по вашему вопросу</h1>
      <p class="hero-copy">
        Запрос: “${escapeHtml(query)}”
      </p>
      <div class="search-panel">
        <form class="search-form" data-search-form>
          <input
            class="search-input"
            type="search"
            name="query"
            value="${escapeHtml(query)}"
            placeholder="Попробуйте другой вопрос"
            aria-label="Поиск по вопросам"
          />
          <button class="button button-primary" type="submit">Найти ещё</button>
        </form>
      </div>
      <div class="search-result-count">${results.length ? `Найдено ответов — ${results.length}` : "Пока ничего точного не нашлось"}</div>
    </section>
    <section class="section-block">
      ${
        results.length
          ? `<div class="card-grid">${results.map(renderQuestionCard).join("")}</div>`
          : `
            <div class="empty-state">
              <h2>Не нашли точный сценарий</h2>
              <p>
                Попробуйте сформулировать вопрос проще — например: “как отменить урок”, “где домашка”, “не открывается кабинет”. Если удобнее, можно сразу перейти в контакт и написать человеку.
              </p>
              <div class="empty-actions">
                <a class="button button-primary" href="#/contact">Написать нам</a>
                <a class="button button-secondary" href="#/">Вернуться на главную</a>
              </div>
            </div>
          `
      }
    </section>
  `;
}

function renderContact() {
  app.innerHTML = `
    ${renderBreadcrumbs([
      { label: "Главная", href: "#/" },
      { label: "Связаться", href: "#/contact" },
    ])}
    <section class="hero">
      <div class="eyebrow">Контакты</div>
      <h1>Если self-service не помог — пишите нам</h1>
      <p class="hero-copy">
        Если обращаетесь в новый для вас мессенджер, лучше сразу укажите телефон или email, который использовали при регистрации. Так команде будет проще быстрее найти вашу семью и помочь без лишних уточнений.
      </p>
    </section>
    <section class="section-block">
      <div class="card-grid">
        ${content.contacts
          .map(
            (contact) => `
              <article class="contact-card">
                <h3 class="card-title">${escapeHtml(contact.title)}</h3>
                <p class="card-copy">${escapeHtml(contact.description)}</p>
                <div class="article-actions">
                  <a class="button button-primary" href="${contact.href}" target="_blank" rel="noreferrer">${escapeHtml(contact.actionLabel)}</a>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderNotFound() {
  app.innerHTML = `
    <section class="hero">
      <div class="eyebrow">Ничего страшного</div>
      <h1>Такой страницы пока нет</h1>
      <p class="hero-copy">
        Вернитесь на главную и попробуйте поиск — или сразу напишите нам, если вопрос срочный.
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href="#/">На главную</a>
        <a class="button button-secondary" href="#/contact">Связаться</a>
      </div>
    </section>
  `;
}

function renderRoute() {
  const route = routeFromHash();

  if (!route || route === "/") {
    renderHome();
    bindSearch();
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  if (route === "contact") {
    renderContact();
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  if (route.startsWith("search/")) {
    const query = decodeURIComponent(route.replace(/^search\//, ""));
    renderSearch(query);
    bindSearch();
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  if (categoryMap.has(route)) {
    renderCategory(categoryMap.get(route));
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  if (pageMap.has(route)) {
    renderArticle(pageMap.get(route));
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  renderNotFound();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function bindSearch() {
  const form = document.querySelector("[data-search-form]");
  const tagButtons = [...document.querySelectorAll("[data-search-tag]")];

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const query = String(formData.get("query") || "").trim();

      if (!query) {
        return;
      }

      window.location.hash = searchUrl(query);
    });
  }

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const query = button.getAttribute("data-search-tag");

      if (query) {
        window.location.hash = searchUrl(query);
      }
    });
  });
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
