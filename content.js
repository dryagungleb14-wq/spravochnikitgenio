window.parentHelpHubContent = {
  categories: [
    {
      id: "schedule",
      title: "Расписание",
      description:
        "Отмена, перенос, отработка, пропуск урока и поиск удобного времени — всё, что связано с движением по расписанию.",
      icon: "⏰",
      featuredPages: [
        "schedule/cancel-lesson",
        "schedule/late-cancel",
        "schedule/makeup",
        "schedule/skip-and-continue",
      ],
    },
    {
      id: "payment",
      title: "Оплата",
      description:
        "Баланс, платежи, документы и возвраты — быстрый вход в нужный канал без лишней переписки.",
      icon: "💳",
      featuredPages: ["payment/balance-and-payments", "payment/how-to-pay"],
    },
    {
      id: "directions",
      title: "Направления",
      description:
        "Короткие описания популярных направлений — чтобы быстро понять, что подойдёт ребёнку по интересу, возрасту и формату занятий.",
      icon: "🧭",
      featuredPages: [
        "directions/python",
        "directions/roblox",
        "directions/minecraft",
        "directions/scratch",
      ],
    },
    {
      id: "progress",
      title: "Прогресс и домашка",
      description:
        "Где искать задания, комментарии, материалы и по каким точкам вообще смотреть результат обучения ребёнка.",
      icon: "📚",
      featuredPages: [
        "progress/homework-and-feedback",
        "progress/access-issue",
        "progress/where-to-see-results",
      ],
    },
    {
      id: "tech",
      title: "Техническая помощь",
      description:
        "Сначала выберите, что именно не работает — звук, подключение, демонстрация экрана или устройство. Так ответ находится быстрее, чем через общий список правил.",
      icon: "🛠️",
      featuredPages: [
        "tech/audio-video-issue",
        "tech/connection-issue",
        "tech/screen-share-issue",
        "tech/phone-or-tablet",
      ],
      primaryCta: {
        label: "Проверить звук и видео",
        type: "external",
        value: "https://portal.itgen.io/vc-settings",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      shortcutTitle: "Что именно не работает",
      shortcutCopy:
        "Это самые частые техпроблемы. Откройте самый похожий сценарий — и сразу увидите, что проверить самим и когда уже стоит писать нам.",
      shortcutPages: [
        "tech/audio-video-issue",
        "tech/connection-issue",
        "tech/screen-share-issue",
        "tech/phone-or-tablet",
      ],
    },
    {
      id: "formats",
      title: "Форматы занятий",
      description:
        "Короткие объяснения по ИГФ, ИФ и длительности уроков без внутренних терминов и длинных регламентов.",
      icon: "🎯",
      featuredPages: ["formats/igf-vs-if", "formats/lesson-duration"],
    },
  ],
  contacts: [
    {
      title: "Личный кабинет",
      description: "Сюда стоит идти в первую очередь — за расписанием, домашкой и входом в урок.",
      actionLabel: "Открыть кабинет",
      href: "https://portal.itgen.io/",
      type: "external",
    },
    {
      title: "WhatsApp",
      description: "Самый быстрый канал для коротких вопросов по текущей ситуации.",
      actionLabel: "Написать в WhatsApp",
      href: "https://wa.me/375291816012",
      type: "external",
    },
    {
      title: "Telegram",
      description: "Удобный запасной вариант, если вам привычнее общаться там.",
      actionLabel: "Открыть Telegram",
      href: "https://t.me/itgenio_bot",
      type: "external",
    },
    {
      title: "Email",
      description: "Лучше всего подходит для документов и длинных описаний ситуации.",
      actionLabel: "Написать на email",
      href: "mailto:itgenik@itgen.io",
      type: "external",
    },
  ],
  quickSearches: [
    { label: "как отменить урок", page: "schedule/cancel-lesson" },
    { label: "сгорит ли занятие", page: "schedule/late-cancel" },
    { label: "где домашка", page: "progress/homework-and-feedback" },
    { label: "не открывается кабинет", page: "progress/access-issue" },
    { label: "как оплатить", page: "payment/how-to-pay" },
    { label: "как работает отработка", page: "schedule/makeup" },
  ],
  pages: [
    {
      slug: "directions/python",
      category: "directions",
      title: "Python",
      shortTitle: "Python",
      question: "Что за направление Python",
      answer:
        "Python — это первое серьёзное программирование для детей, которым уже хочется не только играть, но и писать настоящий код. Направление хорошо подходит тем, кто любит логику, задачи и хочет перейти от простых проектов к более взрослой разработке.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Обычно подходит детям от 10 лет.",
        "Можно стартовать без опыта в программировании.",
        "Особенно хорошо заходит тем, кому нравятся задачи, алгоритмы и создание своих программ.",
      ],
      whatToDoNow: [
        "Пишет первые программы на реальном языке программирования.",
        "Делает игры, интерфейсы и небольшие полезные проекты.",
        "Учится мыслить как программист — через условия, циклы, функции и структуру кода.",
      ],
      whenToContactUs: [
        "После Python можно идти в веб-разработку, Pygame или нейросети.",
        "Это хороший путь для ребёнка, который хочет расти в сторону более взрослого программирования.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/scratch", "directions/unity", "schedule/book-lesson"],
      searchAliases: [
        "python",
        "питон",
        "направление python",
        "курс python",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/python.md",
      ],
    },
    {
      slug: "directions/roblox",
      category: "directions",
      title: "Roblox",
      shortTitle: "Roblox",
      question: "Что за направление Roblox",
      answer:
        "Roblox — это направление для детей, которым нравится не просто играть, а создавать свои 3D-миры, карты и игровые механики. Оно хорошо работает как вход в геймдев через знакомую и очень мотивирующую среду.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Обычно подходит детям от 8 лет.",
        "Можно начинать без опыта в программировании.",
        "Особенно хорошо подходит тем, кто любит игры, творчество и хочет делать свои проекты в Roblox.",
      ],
      whatToDoNow: [
        "Создаёт карты и игровые миры в Roblox Studio.",
        "Осваивает игровую логику и первые скрипты на Lua.",
        "Собирает свои механики, мини-игры и публикует готовые проекты.",
      ],
      whenToContactUs: [
        "После Roblox можно расти в Unity, Unreal Engine или Python + Pygame.",
        "Это сильный старт для ребёнка, которому ближе геймдев и проектное обучение.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/minecraft", "directions/unity", "schedule/book-lesson"],
      searchAliases: [
        "roblox",
        "роблокс",
        "направление roblox",
        "курс roblox",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/roblox.md",
      ],
    },
    {
      slug: "directions/minecraft",
      category: "directions",
      title: "Minecraft",
      shortTitle: "Minecraft",
      question: "Что за направление Minecraft",
      answer:
        "Minecraft — это вход в программирование через знакомую игровую среду, где ребёнок учится управлять действиями в мире игры с помощью алгоритмов и команд. Направление хорошо подходит тем, кому важна быстрая визуальная отдача и интересный игровой контекст.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Обычно подходит детям от 9 лет, иногда можно стартовать с 8 по согласованию.",
        "Не требует опыта в программировании.",
        "Особенно хорошо подходит тем, кто любит Minecraft и хочет перейти от игры к созданию логики внутри неё.",
      ],
      whatToDoNow: [
        "Работает с командными блоками и простыми алгоритмами.",
        "Управляет роботами и автоматизирует постройки внутри Minecraft Education Edition.",
        "Создаёт большие миры и интерактивные проекты с помощью кода.",
      ],
      whenToContactUs: [
        "После Minecraft можно идти в Roblox, GameMaker или блочный Python.",
        "Это хороший мягкий старт в логику и алгоритмическое мышление для ребёнка, которому важен игровой формат.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/roblox", "directions/scratch", "schedule/book-lesson"],
      searchAliases: [
        "minecraft",
        "майнкрафт",
        "программирование в minecraft",
        "курс minecraft",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/minecraft.md",
      ],
    },
    {
      slug: "directions/scratch",
      category: "directions",
      title: "Scratch",
      shortTitle: "Scratch",
      question: "Что за направление Scratch",
      answer:
        "Scratch — это мягкий и понятный старт в программирование для младших детей. Здесь ребёнок собирает логику из визуальных блоков и довольно быстро начинает делать свои игры, анимации и интерактивные истории.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Обычно подходит детям 7–12 лет.",
        "Не требует никакого опыта и хорошо подходит для самого первого старта.",
        "Особенно полезен тем, кому важно войти в программирование спокойно, без сложного синтаксиса.",
      ],
      whatToDoNow: [
        "Собирает игры, анимации и истории из визуальных блоков.",
        "Осваивает логику, последовательности, условия и переменные.",
        "Делает десятки собственных проектов и постепенно готовится к переходу в более взрослый код.",
      ],
      whenToContactUs: [
        "После Scratch можно переходить в Python, Roblox, Minecraft или GameMaker.",
        "Это один из лучших первых шагов, если ребёнок ещё только присматривается к программированию.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/python", "directions/minecraft", "schedule/book-lesson"],
      searchAliases: [
        "scratch",
        "скретч",
        "направление scratch",
        "курс scratch",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/scratch.md",
      ],
    },
    {
      slug: "directions/unity",
      category: "directions",
      title: "Unity",
      shortTitle: "Unity",
      question: "Что за направление Unity",
      answer:
        "Unity — это уже более взрослый вход в геймдев, где ребёнок создаёт свои 2D и 3D-игры в профессиональной среде. Направление подходит тем, кто хочет не просто пробовать, а глубже зайти в разработку игр и начать писать код на C#.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Обычно подходит детям от 10 лет.",
        "Можно стартовать без опыта, но интерес к играм и проектной работе очень помогает.",
        "Важно, чтобы для занятий был достаточно мощный компьютер.",
      ],
      whatToDoNow: [
        "Создаёт свои 2D и 3D-игры в Unity.",
        "Изучает основы C# и связывает код с игровой механикой.",
        "Делает мини-игры, уровни, анимации и в итоге собирает полноценный игровой проект.",
      ],
      whenToContactUs: [
        "После Unity ребёнок уже может идти в более серьёзные собственные игровые проекты и глубже в C#.",
        "Это хорошее направление для тех, кто хочет попробовать себя в настоящей разработке игр, а не только в игровых песочницах.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/roblox", "directions/python", "schedule/book-lesson"],
      searchAliases: [
        "unity",
        "юнити",
        "направление unity",
        "курс unity",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/unity.md",
      ],
    },
    {
      slug: "directions/web-design",
      category: "directions",
      title: "Веб-дизайн",
      shortTitle: "Веб-дизайн",
      question: "Что за направление Веб-дизайн",
      answer:
        "Веб-дизайн — это направление для подростков, которым ближе визуальное творчество, интерфейсы и работа в Figma. Здесь ребёнок не программирует сайты, а учится придумывать, собирать и оформлять понятные цифровые продукты.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Обычно подходит детям от 11 лет.",
        "Можно начинать с нуля, без опыта в дизайне.",
        "Особенно хорошо подходит тем, кому интересны интерфейсы, визуал, композиция и работа с идеями.",
      ],
      whatToDoNow: [
        "Осваивает Figma и основы визуального дизайна.",
        "Собирает баннеры, карточки, макеты сайтов и интерфейсы приложений.",
        "Учится работать с композицией, цветом, типографикой и делает своё портфолио.",
      ],
      whenToContactUs: [
        "После веб-дизайна можно идти в графический дизайн, motion design или веб-разработку.",
        "Это хороший путь для ребёнка, которому ближе креативная digital-сфера, а не программирование как первое направление.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/python", "directions/scratch", "schedule/book-lesson"],
      searchAliases: [
        "веб дизайн",
        "веб-дизайн",
        "web design",
        "figma",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/web_dizayn.md",
      ],
    },
    {
      slug: "directions/html-css",
      category: "directions",
      title: "HTML + CSS",
      shortTitle: "HTML + CSS",
      question: "Что за направление HTML + CSS",
      answer:
        "HTML + CSS — это понятный старт в веб-разработку, где ребёнок учится собирать настоящие страницы сайтов и управлять их внешним видом.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Подходит тем, кому интересно создавать сайты и интерфейсы.",
        "Можно стартовать без опыта в программировании.",
        "Хороший выбор для перехода от визуальных конструкторов к реальной верстке.",
      ],
      whatToDoNow: [
        "Собирает структуру страниц на HTML.",
        "Оформляет сайты с помощью CSS: цвета, сетки, блоки, адаптивность.",
        "Делает свои мини-проекты и лендинги, которые можно показать как портфолио.",
      ],
      whenToContactUs: [
        "После HTML + CSS можно переходить в JavaScript и дальше в полноценный фронтенд.",
        "Это хороший путь для ребёнка, который хочет понимать, как сайты устроены изнутри.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/javascript", "directions/web-design", "schedule/book-lesson"],
      searchAliases: ["html", "css", "верстка", "html css", "курс html"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/html+css.md",
      ],
    },
    {
      slug: "directions/javascript",
      category: "directions",
      title: "JavaScript",
      shortTitle: "JavaScript",
      question: "Что за направление JavaScript",
      answer:
        "JavaScript — это язык, который добавляет сайтам интерактивность и логику. На этом направлении ребёнок переходит от статичных страниц к живым веб-проектам.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Подходит тем, кому уже интересны сайты и программирование.",
        "Лучше всего заходить после базы по HTML + CSS или уверенного старта в Python.",
        "Особенно полезно детям, которым нравится логика и видимый результат в браузере.",
      ],
      whatToDoNow: [
        "Пишет скрипты для интерфейсов и форм.",
        "Осваивает условия, массивы, функции и работу с событиями.",
        "Делает интерактивные мини-приложения и динамические страницы.",
      ],
      whenToContactUs: [
        "После JavaScript можно идти в более взрослый фронтенд и fullstack-направления.",
        "Это сильный шаг для ребёнка, который хочет делать современные веб-продукты.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/html-css", "directions/python", "schedule/book-lesson"],
      searchAliases: ["javascript", "js", "джаваскрипт", "курс javascript"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/javascript.md",
      ],
    },
    {
      slug: "directions/java",
      category: "directions",
      title: "Java",
      shortTitle: "Java",
      question: "Что за направление Java",
      answer:
        "Java — это классическое направление в программировании, где ребёнок учится писать структурный код и решать более серьёзные задачи.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Подходит детям, которые хотят идти глубже в разработку.",
        "Обычно выбирают, когда уже есть интерес к алгоритмам и системному мышлению.",
        "Хорошо заходит тем, кто хочет более строгий и взрослый стиль программирования.",
      ],
      whatToDoNow: [
        "Осваивает синтаксис Java и работу с классами.",
        "Решает алгоритмические задачи и учится проектировать код.",
        "Собирает учебные проекты, где важны структура и стабильность.",
      ],
      whenToContactUs: [
        "После Java можно расти в backend, олимпиадные задачи и более сложные инженерные треки.",
        "Это хорошее направление для ребёнка, который хочет основательную базу в программировании.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/python", "directions/cpp", "schedule/book-lesson"],
      searchAliases: ["java", "джава", "курс java", "программирование java"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/java.md",
      ],
    },
    {
      slug: "directions/cpp",
      category: "directions",
      title: "C++",
      shortTitle: "C++",
      question: "Что за направление C++",
      answer:
        "C++ — это продвинутое направление для детей, которым интересны алгоритмы, скорость и глубокое понимание, как работает код.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Подходит тем, кто готов к более сложным задачам и дисциплине в коде.",
        "Обычно выбирают после базового опыта в программировании.",
        "Хороший вариант для ребёнка с сильным интересом к технической стороне разработки.",
      ],
      whatToDoNow: [
        "Изучает синтаксис C++ и типовые структуры данных.",
        "Решает задачи на алгоритмы и оптимизацию.",
        "Тренирует аккуратное и системное мышление в коде.",
      ],
      whenToContactUs: [
        "После C++ ребёнку проще входить в олимпиадные и инженерные направления.",
        "Это трек для тех, кто хочет высокий уровень сложности и уверенную техническую базу.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/java", "directions/python", "schedule/book-lesson"],
      searchAliases: ["c++", "си плюс плюс", "курс c++", "программирование c++"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/c++.md",
      ],
    },
    {
      slug: "directions/blender-3d",
      category: "directions",
      title: "3D-моделирование в Blender",
      shortTitle: "Blender 3D",
      question: "Что за направление 3D-моделирование в Blender",
      answer:
        "3D-моделирование в Blender — это направление для детей, которым интересно создавать объекты, сцены и персонажей в объёмной графике.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Подходит детям, которым ближе визуальное творчество и моделирование.",
        "Можно стартовать с нуля, если есть интерес к 3D-графике.",
        "Хорошо сочетается с игровыми направлениями и дизайном.",
      ],
      whatToDoNow: [
        "Осваивает интерфейс Blender и базовые инструменты моделирования.",
        "Создаёт 3D-объекты и сцены, работает с формой, светом и материалами.",
        "Собирает собственные работы в портфолио.",
      ],
      whenToContactUs: [
        "После Blender можно расти в геймдев, 3D-дизайн и проектные курсы по графике.",
        "Это хороший трек для ребёнка, который хочет видеть осязаемый визуальный результат.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/unity", "directions/web-design", "schedule/book-lesson"],
      searchAliases: ["blender", "3d", "3d моделирование", "курс blender"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/3d_modelirovanie_blender.md",
      ],
    },
    {
      slug: "directions/photoshop",
      category: "directions",
      title: "Photoshop",
      shortTitle: "Photoshop",
      question: "Что за направление Photoshop",
      answer:
        "Photoshop — это направление по цифровой графике, где ребёнок учится создавать и редактировать изображения, постеры и визуальные материалы.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Подходит тем, кому нравится визуал, рисунок и работа с изображениями.",
        "Можно стартовать с нуля, без опыта в графических редакторах.",
        "Хороший вариант для креативных детей, которым важен творческий формат.",
      ],
      whatToDoNow: [
        "Осваивает базовые и продвинутые инструменты Photoshop.",
        "Делает коллажи, баннеры, обложки и иллюстративные работы.",
        "Учится композиции, цвету и чистой визуальной подаче.",
      ],
      whenToContactUs: [
        "После Photoshop можно переходить в Illustrator, веб-дизайн и motion-направления.",
        "Это хороший трек для ребёнка, который хочет развивать digital-креативность.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/illustrator", "directions/web-design", "schedule/book-lesson"],
      searchAliases: ["photoshop", "фотошоп", "графика", "курс photoshop"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/photoshop.md",
      ],
    },
    {
      slug: "directions/illustrator",
      category: "directions",
      title: "Illustrator",
      shortTitle: "Illustrator",
      question: "Что за направление Illustrator",
      answer:
        "Illustrator — это направление по векторной графике, где ребёнок учится создавать логотипы, иконки, стикеры и аккуратные макеты для digital и печати.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Подходит детям, которым нравится дизайн и точная графика.",
        "Можно начинать с нуля, даже если раньше ребёнок не работал с вектором.",
        "Хорошо комбинируется с Photoshop и веб-дизайном.",
      ],
      whatToDoNow: [
        "Осваивает инструменты векторного рисования в Illustrator.",
        "Создаёт логотипы, иконки, наборы стикеров и фирменные элементы.",
        "Учится чистой форме, композиции и работе с цветом.",
      ],
      whenToContactUs: [
        "После Illustrator можно углубляться в бренд-дизайн, веб-дизайн и проектные визуальные курсы.",
        "Это хороший трек для ребёнка, который хочет сильную базу именно в графическом дизайне.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/photoshop", "directions/web-design", "schedule/book-lesson"],
      searchAliases: ["illustrator", "иллюстратор", "векторная графика", "курс illustrator"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/illustrator.md",
      ],
    },
    {
      slug: "directions/neural-networks",
      category: "directions",
      title: "Нейросети",
      shortTitle: "Нейросети",
      question: "Что за направление Нейросети",
      answer:
        "Нейросети — это направление, где ребёнок учится использовать ИИ-инструменты осознанно: для учёбы, творчества и проектной работы, а не только ради эффекта.",
      whatHappensTitle: "Кому подходит",
      whatToDoNowTitle: "Что делает ребёнок",
      whenToContactUsTitle: "Что будет дальше",
      whatHappens: [
        "Подходит детям и подросткам, которым интересны современные технологии и ИИ.",
        "Можно стартовать без глубокой технической базы, если есть интерес к проектам.",
        "Особенно полезно тем, кто хочет научиться работать с ИИ инструментально и безопасно.",
      ],
      whatToDoNow: [
        "Учится формулировать задачи и писать понятные промпты.",
        "Использует нейросети для текста, идей, визуала и учебных задач.",
        "Собирает практические проекты, где ИИ помогает решать конкретные задачи.",
      ],
      whenToContactUs: [
        "После этого направления можно углубляться в Python, data-направления и прикладные AI-проекты.",
        "Это хороший трек для ребёнка, который хочет быть уверенным пользователем современных ИИ-технологий.",
      ],
      primaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["directions/python", "directions/javascript", "schedule/book-lesson"],
      searchAliases: ["нейросети", "ai", "ии", "искусственный интеллект"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/course_cards/neyroseti.md",
      ],
    },
    {
      slug: "schedule/cancel-lesson",
      category: "schedule",
      title: "Как отменить урок",
      shortTitle: "Отмена урока",
      question: "Как отменить урок",
      answer:
        "Отменить урок можно через личный кабинет. Рядом с именем ученика откройте «Запись или отмена» и выберите нужный урок. Если не получается — можно написать нам.",
      whatHappens: [
        "Если до урока больше 8 часов — занятие не списывается.",
        "Если до урока меньше 8 часов — дальше уже действуют правила пропуска и отработки.",
      ],
      whatToDoNow: [
        "Откройте кабинет родителя.",
        "Нажмите «Запись или отмена» рядом с именем ученика.",
        "Найдите нужный урок и отмените его.",
        "Если через кабинет не получается — напишите в чат и сразу укажите дату и время урока.",
      ],
      whenToContactUs: [
        "Если не можете войти в кабинет.",
        "Если не уверены, какой именно урок нужно отменить.",
      ],
      primaryCta: {
        label: "Что будет, если до урока меньше 8 часов",
        type: "page",
        value: "schedule/late-cancel",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["schedule/makeup", "schedule/reschedule"],
      searchAliases: [
        "отменить урок",
        "отмена занятия",
        "как отменить занятие",
        "отказаться от урока",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/schedule_policy.md",
      ],
    },
    {
      slug: "schedule/parent-login",
      category: "schedule",
      title: "Как войти в кабинет родителя",
      shortTitle: "Вход в кабинет родителя",
      question: "Как войти в кабинет родителя",
      answer:
        "В кабинет родителя вы входите через портал ITGenio. Обычно логин — это ваша почта, а пароль вы задаёте сами при первой активации.",
      whatHappens: [
        "После заявки на бесплатный урок для семьи создаётся доступ в кабинеты.",
        "Если доступ оформляли не вы сами, ссылку на вход могут прислать в мессенджер или на email.",
        "Когда данные ученика заполнены, открывается кабинет родителя.",
      ],
      whatToDoNow: [
        "Откройте портал ITGenio.",
        "Введите свою почту.",
        "Введите пароль, который задавали при активации.",
      ],
      whenToContactUs: [
        "Если не помните, активировали ли кабинет раньше.",
        "Если ссылка на вход так и не пришла.",
        "Если зашли, но не понимаете, это кабинет родителя или ученика.",
      ],
      primaryCta: {
        label: "Открыть кабинет",
        type: "external",
        value: "https://portal.itgen.io/",
      },
      secondaryCta: {
        label: "Как восстановить пароль",
        type: "page",
        value: "schedule/reset-password",
      },
      relatedPages: ["schedule/student-login", "schedule/reset-password"],
      searchAliases: [
        "вход в кабинет родителя",
        "кабинет родителя",
        "логин родителя",
        "как зайти родителю",
      ],
      sourceOfTruth: ["https://itgen.io/help-ru#pa_activation"],
    },
    {
      slug: "schedule/student-login",
      category: "schedule",
      title: "Как войти в кабинет ученика",
      shortTitle: "Вход в кабинет ученика",
      question: "Как войти в кабинет ученика",
      answer:
        "У ученика свой отдельный вход в портал ITGenio. Логин и пароль для него родитель задаёт в кабинете родителя: нажмите на имя ученика и откройте раздел «Настройки».",
      whatHappens: [
        "После записи на урок лучше сразу поставить понятные логин и пароль ученика.",
        "Эти данные меняются после клика на имя ученика в разделе «Настройки».",
        "С ними ребёнок сможет сам зайти в кабинет перед занятием.",
      ],
      whatToDoNow: [
        "Зайдите в кабинет родителя.",
        "Нажмите на имя нужного ученика.",
        "Откройте раздел «Настройки» и проверьте его логин и пароль.",
        "Отправьте ребёнку данные заранее и попросите зайти до начала урока.",
      ],
      whenToContactUs: [
        "Если не можете найти настройки ученика.",
        "Если не уверены, какие данные сейчас активны.",
        "Если ребёнок не входит даже с актуальным логином и паролем.",
      ],
      primaryCta: {
        label: "Открыть вход в кабинет",
        type: "external",
        value: "https://portal.itgen.io/login",
      },
      secondaryCta: {
        label: "Как восстановить пароль",
        type: "page",
        value: "schedule/reset-password",
      },
      relatedPages: [
        "schedule/parent-login",
        "schedule/student-self-management",
        "schedule/reset-password",
      ],
      searchAliases: [
        "вход в кабинет ученика",
        "кабинет ученика",
        "логин ученика",
        "как зайти ученику",
      ],
      sourceOfTruth: ["https://itgen.io/help-ru#sa_activation"],
    },
    {
      slug: "schedule/reset-password",
      category: "schedule",
      title: "Как восстановить пароль",
      shortTitle: "Восстановить пароль",
      question: "Как восстановить пароль",
      answer:
        "У кабинета родителя и кабинета ученика восстановление устроено по-разному. Пароль родителя можно сбросить на входе, а пароль ученика меняется через кабинет родителя — после клика на имя ученика в разделе «Настройки».",
      whatHappens: [
        "Для кабинета родителя новый пароль задаётся прямо на странице входа.",
        "Для кабинета ученика логин и пароль меняются после клика на имя ученика в разделе «Настройки».",
      ],
      whatToDoNow: [
        "Если забыли пароль родителя — откройте вход и нажмите «Забыли пароль».",
        "Если забыли пароль ученика — зайдите в кабинет родителя, нажмите на имя ученика и откройте раздел «Настройки».",
        "Поставьте новый пароль, а если нужно — сразу обновите и логин ученика.",
      ],
      whenToContactUs: [
        "Если письмо или ссылка на восстановление не приходят.",
        "Если не получается зайти в кабинет родителя и из-за этого нельзя поменять доступ ученику.",
      ],
      primaryCta: {
        label: "Открыть вход в кабинет",
        type: "external",
        value: "https://portal.itgen.io/login",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["schedule/parent-login", "schedule/student-login"],
      searchAliases: [
        "восстановить пароль",
        "забыли пароль",
        "сменить пароль",
        "пароль кабинета ученика",
        "пароль кабинета родителя",
      ],
      sourceOfTruth: ["https://itgen.io/help-ru#password"],
    },
    {
      slug: "schedule/book-lesson",
      category: "schedule",
      title: "Как записаться на занятия",
      shortTitle: "Запись на занятия",
      question: "Как записаться на занятия",
      answer:
        "Запись делается через кабинет родителя. Рядом с именем ученика откройте «Запись или отмена» и выберите, что вам нужно — постоянное расписание или разовый урок.",
      whatHappens: [
        "Сначала вы задаёте рамки поиска — день, время, формат, длительность, дату старта и тренера.",
        "Постоянное расписание потом продлевается автоматически, пока вы его не отмените.",
        "Разовые уроки можно добавлять отдельно, например на каникулы или в свободные дни.",
      ],
      whatToDoNow: [
        "Откройте кабинет родителя и нажмите «Запись или отмена» рядом с именем ученика.",
        "Выставите удобные дни и время, а не один слишком узкий вариант.",
        "На следующем шаге выберите подходящий слот или расширьте фильтр поиска.",
      ],
      whenToContactUs: [
        "Если подходящих вариантов вообще не видно.",
        "Если сомневаетесь, какой формат или длительность лучше выбрать.",
      ],
      primaryCta: {
        label: "Открыть кабинет",
        type: "external",
        value: "https://portal.itgen.io/",
      },
      secondaryCta: {
        label: "Не нашли удобное время",
        type: "page",
        value: "schedule/no-slot",
      },
      relatedPages: ["schedule/no-slot", "formats/igf-vs-if", "formats/lesson-duration"],
      searchAliases: [
        "записаться на занятия",
        "запись на занятие",
        "выбрать расписание",
        "разовый урок",
        "постоянное расписание",
      ],
      sourceOfTruth: ["https://itgen.io/help-ru#manage_schedule"],
    },
    {
      slug: "schedule/add-student",
      category: "schedule",
      title: "Как добавить ещё одного ученика",
      shortTitle: "Добавить ученика",
      question: "Как добавить ещё одного ученика",
      answer:
        "Ещё одного ученика можно добавить прямо в кабинете родителя. После этого он появится в семье, и для него можно будет отдельно выбрать удобное занятие и настроить вход в кабинет ученика.",
      whatHappens: [
        "На главной странице кабинета родителя есть кнопка «Добавить еще одного ученика».",
        "После заполнения данных новый ученик появится в списке семьи.",
        "Дальше его нужно записать на занятие и задать логин и пароль для кабинета ученика.",
      ],
      whatToDoNow: [
        "Откройте главную страницу кабинета родителя.",
        "Нажмите «Добавить еще одного ученика» и заполните данные.",
        "После этого сразу запишите ученика на занятие и настройте ему вход.",
      ],
      whenToContactUs: [
        "Если кнопки добавления нет на главной странице.",
        "Если после заполнения данных ученик не появился в списке семьи.",
      ],
      primaryCta: {
        label: "Открыть кабинет",
        type: "external",
        value: "https://portal.itgen.io/",
      },
      secondaryCta: {
        label: "Как записаться на занятия",
        type: "page",
        value: "schedule/book-lesson",
      },
      relatedPages: ["schedule/book-lesson", "schedule/student-login"],
      searchAliases: [
        "добавить ученика",
        "еще одного ученика",
        "добавить ребенка",
        "новый ученик в семье",
      ],
      sourceOfTruth: ["https://itgen.io/help-ru#add_another_student"],
    },
    {
      slug: "schedule/late-cancel",
      category: "schedule",
      title: "Что будет, если отменить урок менее чем за 8 часов",
      shortTitle: "Отмена менее чем за 8 часов",
      question: "Что будет, если отменить урок менее чем за 8 часов",
      answer:
        "Если отмена происходит менее чем за 8 часов до урока, занятие списывается с баланса. Дальше всё зависит от формата занятий и правил по отработке.",
      whatHappens: [
        "ИГФ — можно отработать пропуск.",
        "ИФ — отработка доступна 1 раз в месяц.",
        "ГФ — правила зависят от конкретной активности.",
      ],
      whatToDoNow: [
        "Проверьте свой формат занятий.",
        "Перейдите к сценарию про отработку, если урок уже попадает под позднюю отмену.",
        "Если ситуация нестандартная — сразу напишите нам.",
      ],
      whenToContactUs: [
        "Если не понимаете свой формат.",
        "Если речь идёт о групповой активности.",
        "Если ситуация спорная и нужен человек.",
      ],
      primaryCta: {
        label: "Как работает отработка",
        type: "page",
        value: "schedule/makeup",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["schedule/skip-and-continue", "formats/igf-vs-if"],
      searchAliases: [
        "меньше 8 часов",
        "поздняя отмена",
        "сгорит ли урок",
        "сгорит ли занятие",
        "спишется ли занятие",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/schedule_policy.md",
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/lessons_formats.md",
      ],
    },
    {
      slug: "schedule/makeup",
      category: "schedule",
      title: "Как работает отработка",
      shortTitle: "Отработка",
      question: "Как работает отработка",
      answer:
        "Отработка доступна не во всех форматах и зависит от правил пропуска. Важно записаться вовремя и не путать отработку с обычным уроком по расписанию.",
      whatHappens: [
        "ИГФ — отработки доступны без ограничения в течение курса.",
        "ИФ — отработка доступна 1 раз в месяц.",
        "Срок для записи и прохождения — в течение 7 дней с момента пропуска.",
        "Отработка проходит вне постоянного расписания.",
      ],
      whatToDoNow: [
        "Попробуйте выбрать удобное время в личном кабинете.",
        "Если не нашли слот — напишите нам и укажите удобные дни и интервалы.",
      ],
      visualGuide: [
        {
          src: "assets/help-media/makeup-filters-ru.png",
          alt: "Фильтры выбора отработки",
          caption: "При записи на отработку можно отфильтровать варианты по тренеру и другим параметрам, чтобы быстрее найти подходящий слот.",
        },
      ],
      whenToContactUs: [
        "Если не видите доступные варианты.",
        "Если не понимаете, доступна ли отработка именно вам.",
      ],
      primaryCta: {
        label: "Не нашли удобное время",
        type: "page",
        value: "schedule/no-slot",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["schedule/late-cancel", "schedule/skip-and-continue"],
      searchAliases: [
        "отработка",
        "как отработать",
        "пропустили урок",
        "записаться на отработку",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/schedule_policy.md",
      ],
    },
    {
      slug: "schedule/skip-and-continue",
      category: "schedule",
      title: "Можно ли просто пропустить урок и продолжить по обычному расписанию",
      shortTitle: "Пропустить и продолжить",
      question: "Можно ли просто пропустить урок и продолжить по обычному расписанию",
      answer:
        "Да, но только если отмена сделана более чем за 8 часов до начала. Если меньше — урок уже списывается и нужно смотреть правила отработки.",
      whatHappens: [
        "Больше 8 часов — занятие остаётся на балансе.",
        "Меньше 8 часов — просто пропустить и продолжить без дополнительных действий нельзя.",
        "Если отработка уже назначена — обычным уроком её заменить нельзя.",
      ],
      whatToDoNow: [
        "Проверьте, сколько времени осталось до урока.",
        "Если срок уже меньше 8 часов — переходите к сценарию про отработку.",
      ],
      whenToContactUs: [
        "Если не понимаете текущий статус урока.",
        "Если уже есть назначенная отработка и нужно понять следующий шаг.",
      ],
      primaryCta: {
        label: "Как работает отработка",
        type: "page",
        value: "schedule/makeup",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["schedule/late-cancel", "schedule/cancel-lesson"],
      searchAliases: [
        "пропустить урок",
        "продолжить на следующей неделе",
        "не ходить и продолжить",
        "перенести на следующую неделю",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/schedule_policy.md",
      ],
    },
    {
      slug: "schedule/reschedule",
      category: "schedule",
      title: "Как перенести урок",
      shortTitle: "Перенос урока",
      question: "Как перенести урок",
      answer:
        "Перенос можно оформить через личный кабинет. Если удобный вариант не находится, можно написать нам. Правила по срокам здесь такие же, как и для отмены: если до урока больше 8 часов, перенос проходит без списания.",
      whatHappens: [
        "Больше 8 часов — перенос бесплатный.",
        "Меньше 8 часов — урок списывается, дальше действуют правила отработки.",
      ],
      whatToDoNow: [
        "Посмотрите доступные варианты времени.",
        "Если удобного окна нет — напишите нам и перечислите желаемые интервалы.",
      ],
      whenToContactUs: [
        "Если слот не находится.",
        "Если нужен перенос в нестандартной ситуации.",
      ],
      primaryCta: {
        label: "Не нашли удобное время",
        type: "page",
        value: "schedule/no-slot",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["schedule/no-slot", "schedule/cancel-lesson"],
      searchAliases: [
        "перенести урок",
        "перенести занятие",
        "поменять время урока",
        "другое время",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/schedule_policy.md",
      ],
    },
    {
      slug: "schedule/no-slot",
      category: "schedule",
      title: "Что делать, если не нашли удобное время",
      shortTitle: "Нет удобного времени",
      question: "Что делать, если не нашли удобное время",
      answer:
        "Если свободного слота не видно, следующий шаг — написать нам и сразу указать желаемые дни и интервалы времени. Это быстрее, чем ждать случайного окна.",
      whatHappens: [
        "Часть направлений можно подобрать самостоятельно.",
        "Если слотов нет, дальше помогаем мы.",
      ],
      whatToDoNow: [
        "Подготовьте удобные дни и временные интервалы.",
        "Отправьте их одним сообщением, чтобы не растягивать диалог.",
      ],
      whenToContactUs: ["Сразу, если в кабинете нет подходящего варианта."],
      primaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      secondaryCta: {
        label: "Открыть раздел Расписание",
        type: "category",
        value: "schedule",
      },
      relatedPages: ["schedule/reschedule", "schedule/makeup"],
      searchAliases: ["нет времени", "нет слотов", "не нашли урок", "нет вариантов записи"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/schedule_policy.md",
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/lessons_formats.md",
      ],
    },
    {
      slug: "schedule/student-self-management",
      category: "schedule",
      title: "Как включить самостоятельное управление расписанием у ученика",
      shortTitle: "Самостоятельное управление",
      question: "Как включить самостоятельное управление расписанием у ученика",
      answer:
        "По умолчанию в кабинете ученика управление расписанием выключено. Чтобы ученик мог сам записываться, отменять и переносить занятия, эту опцию нужно включить в родительском кабинете или попросить Айтигеника помочь.",
      whatHappens: [
        "После включения ученик сможет сам записываться на занятия.",
        "Станут доступны отмена, перенос и запись на отработку.",
        "Также в кабинете ученика появятся добавление расписания в календарь, работа с бронью и просмотр профиля тренера.",
      ],
      whatToDoNow: [
        "Откройте настройки родительского кабинета.",
        "Включите переключатель «Самостоятельное управление расписанием».",
        "Если удобнее — напишите Айтигенику и попросите включить эту опцию.",
      ],
      whenToContactUs: [
        "Если не видите нужный переключатель в кабинете.",
        "Если не уверены, стоит ли включать самостоятельное управление именно вашему ребёнку.",
      ],
      primaryCta: {
        label: "Открыть настройки родительского кабинета",
        type: "external",
        value: "https://portal.itgen.io/familyProfileSettings?tab=parentAccount",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["schedule/reschedule", "schedule/cancel-lesson", "schedule/makeup"],
      searchAliases: [
        "самостоятельное управление расписанием",
        "ученик сам управляет расписанием",
        "включить управление расписанием у ученика",
        "кабинет ученика расписание",
      ],
      sourceOfTruth: ["https://itgen.io/help-ru#independent_management"],
    },
    {
      slug: "payment/balance-and-payments",
      category: "payment",
      title: "Где посмотреть баланс и оплаты",
      shortTitle: "Баланс и оплаты",
      question: "Где посмотреть баланс и оплаты",
      answer:
        "Если вам нужно быстро проверить баланс или оплатить занятия, зайдите в кабинет родителя и на главной странице найдите блок «Баланс». Если вопрос уже про документы, возврат или спорный платёж, лучше сразу идти в канал по оплате.",
      whatHappens: [
        "Баланс семьи и простая оплата доступны прямо в кабинете родителя.",
        "Всё, что связано с возвратом, документами и спорными платежами, уходит в профильную команду.",
      ],
      whatToDoNow: [
        "Откройте кабинет родителя и на главной странице найдите блок «Баланс».",
        "Если хотите оплатить занятия — нажмите «Пополнить».",
        "Если ответа там нет — переходите в отдельный канал по оплате.",
      ],
      whenToContactUs: [
        "Если нужны документы.",
        "Если нужен возврат.",
        "Если не проходит оплата.",
      ],
      primaryCta: {
        label: "Куда писать по оплате",
        type: "page",
        value: "payment/how-to-pay",
      },
      secondaryCta: {
        label: "Открыть кабинет",
        type: "external",
        value: "https://portal.itgen.io/",
      },
      relatedPages: ["payment/how-to-pay"],
      searchAliases: ["баланс", "оплаты", "где деньги", "где посмотреть оплату"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/client_communications.md",
      ],
    },
    {
      slug: "payment/how-to-pay",
      category: "payment",
      title: "Куда писать по оплате, возврату и документам",
      shortTitle: "Куда писать по оплате",
      question: "Куда писать по оплате, возврату и документам",
      answer:
        "Если вопрос именно про оплату, возврат или документы, лучше сразу писать в профильную команду. Так вопрос не будет ходить по кругу между разными чатами.",
      whatHappens: [
        "Сообщение сразу попадёт тем, кто занимается платежами и документами.",
        "Вам не придётся заново пересказывать ситуацию в нескольких чатах.",
      ],
      whatToDoNow: [
        "Коротко опишите проблему.",
        "Сразу укажите телефон или email, который использовали при регистрации.",
      ],
      whenToContactUs: [
        "Если вопрос касается возврата.",
        "Если нужны документы.",
        "Если платёж не проходит.",
      ],
      primaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      secondaryCta: {
        label: "Открыть раздел Оплата",
        type: "category",
        value: "payment",
      },
      relatedPages: ["payment/balance-and-payments"],
      searchAliases: [
        "возврат",
        "документы",
        "акт",
        "справка об обучении",
        "не проходит оплата",
        "как оплатить",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/client_communications.md",
      ],
    },
    {
      slug: "progress/homework-and-feedback",
      category: "progress",
      title: "Где смотреть домашку и комментарий после урока",
      shortTitle: "Домашка и комментарий",
      question: "Где смотреть домашку и комментарий после урока",
      answer:
        "Домашние задания, материалы и комментарии по занятию ищите в кабинете ученика. Главные ориентиры — блок «Домашнее задание и проекты» на главной странице и блок «История» после занятий.",
      whatHappens: [
        "Домашка и проекты лежат на главной странице в блоке «Домашнее задание и проекты».",
        "По кнопке «Посмотреть все» можно открыть весь список материалов.",
        "Комментарий тренера и детали по занятию появляются в блоке «История» после урока.",
      ],
      whatToDoNow: [
        "Зайдите в кабинет ученика.",
        "На главной странице найдите блок «Домашнее задание и проекты».",
        "Нажмите «Посмотреть все» или откройте последнее занятие в блоке «История».",
      ],
      whenToContactUs: [
        "Если задание не открывается.",
        "Если не получается войти.",
        "Если информация в кабинете выглядит неполной.",
      ],
      primaryCta: {
        label: "Не открывается кабинет или домашка",
        type: "page",
        value: "progress/access-issue",
      },
      secondaryCta: {
        label: "Открыть кабинет",
        type: "external",
        value: "https://portal.itgen.io/",
      },
      relatedPages: ["progress/where-to-see-results"],
      searchAliases: [
        "домашка",
        "где домашка",
        "домашнее задание",
        "комментарий после урока",
        "что было на занятии",
        "материалы урока",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/lessons_formats.md",
      ],
    },
    {
      slug: "progress/access-issue",
      category: "progress",
      title: "Не открывается кабинет, урок или домашнее задание",
      shortTitle: "Не открывается кабинет",
      question: "Не открывается кабинет, урок или домашнее задание",
      answer:
        "Сначала стоит пройти короткую базовую проверку: интернет, браузер, кеш и вход в кабинет. Если после 2–3 шагов проблема не ушла, уже нужен человек.",
      whatHappens: [
        "Часть проблем решается без ожидания.",
        "Если не помогло — вопрос надо быстро передать нам.",
      ],
      whatToDoNow: [
        "Проверьте интернет.",
        "Откройте кабинет через Google Chrome.",
        "Очистите кеш и cookies.",
        "Попробуйте снова зайти в кабинет.",
      ],
      whenToContactUs: [
        "Если не приходит пароль.",
        "Если кабинет не открывается.",
        "Если урок не запускается после базовых проверок.",
      ],
      primaryCta: {
        label: "Не работает урок или платформа",
        type: "page",
        value: "tech/lesson-or-platform-issue",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["progress/homework-and-feedback", "tech/lesson-or-platform-issue"],
      searchAliases: [
        "не открывается домашка",
        "не открывается кабинет",
        "не заходит в личный кабинет",
        "не открывается урок",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/system_requirements.md",
      ],
    },
    {
      slug: "progress/where-to-see-results",
      category: "progress",
      title: "Где смотреть результат обучения",
      shortTitle: "Где смотреть результат",
      question: "Где смотреть результат обучения",
      answer:
        "Лучше всего результат виден в трёх местах: в блоке «История занятий» у нужного ученика в кабинете родителя, в блоке «Домашнее задание и проекты» в кабинете ученика и в сохранённых проектах ученика.",
      whatHappens: [
        "Результат не сводится к одному индикатору.",
        "Смотреть его лучше в нескольких понятных местах кабинета.",
      ],
      whatToDoNow: [
        "В кабинете родителя на главной странице откройте «История занятий» у нужного ученика.",
        "В кабинете ученика найдите блок «Домашнее задание и проекты» и при необходимости нажмите «Посмотреть все».",
        "Чтобы посмотреть прошлые проекты, откройте профиль ученика через меню слева сверху.",
      ],
      whenToContactUs: [
        "Если хотите уточнить прогресс по ребёнку глубже.",
        "Если в кабинете не видно понятной картины.",
      ],
      primaryCta: {
        label: "Где смотреть домашку и комментарий",
        type: "page",
        value: "progress/homework-and-feedback",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["progress/homework-and-feedback"],
      searchAliases: ["прогресс", "результат", "как понять результат", "чему научился ребёнок"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/lessons_formats.md",
        "analysis_final_v3_2026-03-10.md",
      ],
    },
    {
      slug: "tech/audio-video-issue",
      category: "tech",
      title: "Не работает звук, микрофон или камера",
      shortTitle: "Звук, микрофон или камера",
      question: "Что делать, если не работает звук, микрофон или камера",
      answer:
        "Чаще всего проблема решается на странице проверки связи — там сразу видно, какой микрофон, динамики и камера выбраны и дал ли браузер доступ к устройствам.",
      whatHappens: [
        "Звук и видео чаще всего ломаются из-за неправильного устройства в настройках или из-за запрета в браузере.",
        "Если проверить это до урока, проблему обычно можно убрать за пару минут.",
        "Если устройство не определяется совсем, дальше уже лучше не тратить время и сразу писать нам.",
      ],
      whatToDoNow: [
        "Откройте проверку связи и проверьте, что выбраны нужные микрофон, динамики и камера.",
        "Если браузер просит доступ к микрофону или камере, разрешите его.",
        "Закройте лишние вкладки и программы, которые могут держать камеру или микрофон занятыми.",
        "После этого перезагрузите страницу урока и зайдите снова.",
      ],
      visualGuide: [
        {
          src: "assets/help-media/chat-settings-ru.png",
          alt: "Проверка звука и видео в кабинете",
          caption: "На странице проверки связи можно сразу проверить микрофон, динамики, камеру и разрешения браузера.",
        },
      ],
      whenToContactUs: [
        "Если в настройках не появляется нужное устройство.",
        "Если микрофон, камера или звук не работают даже после проверки связи.",
        "Если до урока осталось мало времени и проблема не уходит сразу.",
      ],
      primaryCta: {
        label: "Проверить звук и видео",
        type: "external",
        value: "https://portal.itgen.io/vc-settings",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["tech/connection-issue", "tech/screen-share-issue", "tech/lesson-or-platform-issue"],
      searchAliases: [
        "не работает микрофон",
        "не работает камера",
        "нет звука",
        "не слышно",
        "не работает видео",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/system_requirements.md",
        "https://itgen.io/help-ru#connection_check",
      ],
    },
    {
      slug: "tech/connection-issue",
      category: "tech",
      title: "Не получается подключиться к уроку",
      shortTitle: "Не получается подключиться",
      question: "Что делать, если не получается подключиться к уроку",
      answer:
        "Сначала проверьте самый короткий путь: зайдите в урок из расписания, откройте его в нормальном браузере и выключите VPN, если он включён. Это закрывает большую часть проблем с подключением.",
      whatHappens: [
        "Проблема с подключением часто связана не с самим уроком, а с браузером, VPN или способом входа.",
        "Если зайти в урок из расписания и пройти базовую проверку, часто всё начинает работать сразу.",
        "Если подключение всё равно не идёт, лучше быстро позвать тренера или написать нам.",
      ],
      whatToDoNow: [
        "Откройте расписание в кабинете ученика или родителя и нажмите «Подключиться» у нужного занятия.",
        "Проверьте, что урок открыт в Google Chrome или другом браузере на базе Chromium.",
        "Если у вас включён VPN, отключите его и попробуйте подключиться снова.",
        "Обновите страницу и ещё раз зайдите в урок из расписания.",
      ],
      visualGuide: [
        {
          src: "assets/help-media/join-chat-from-schedule-ru.png",
          alt: "Подключение к занятию из расписания",
          caption: "Самый надёжный путь в урок — открыть расписание и нажать «Подключиться» у нужного занятия.",
        },
        {
          src: "assets/help-media/call-trainer-ru.png",
          alt: "Кнопка позвать тренера в уроке",
          caption: "Если урок уже открыт, но что-то пошло не так, можно быстро нажать «Позвать тренера».",
        },
      ],
      whenToContactUs: [
        "Если урок не открывается даже после повторного входа из расписания.",
        "Если после отключения VPN и обновления страницы проблема осталась.",
        "Если до урока осталось мало времени и подключение не работает.",
      ],
      primaryCta: {
        label: "Открыть кабинет",
        type: "external",
        value: "https://portal.itgen.io/",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["tech/audio-video-issue", "tech/lesson-or-platform-issue", "progress/access-issue"],
      searchAliases: [
        "не получается подключиться",
        "не подключается урок",
        "не заходит в урок",
        "vpn",
        "проблемы со связью",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/system_requirements.md",
      ],
    },
    {
      slug: "tech/screen-share-issue",
      category: "tech",
      title: "Не работает демонстрация экрана",
      shortTitle: "Не работает демонстрация",
      question: "Что делать, если не работает демонстрация экрана",
      answer:
        "Обычно проблема в разрешении браузера или в том, что открыто слишком много вкладок. Сначала проверьте именно это — чаще всего дальше ничего сложного не нужно.",
      whatHappens: [
        "Без разрешения браузера демонстрация экрана не включится.",
        "Иногда мешают лишние вкладки или повторно открытый урок.",
        "Если браузер не даёт показать экран даже после повторной попытки, уже нужен человек.",
      ],
      whatToDoNow: [
        "Оставьте открытым только один урок и закройте лишние вкладки браузера.",
        "При включении демонстрации разрешите браузеру показ экрана, если он этого просит.",
        "Попробуйте ещё раз выбрать вкладку, окно или весь экран для показа.",
        "Если не помогло, обновите урок и повторите попытку.",
      ],
      visualGuide: [
        {
          src: "assets/help-media/chat-settings-ru.png",
          alt: "Проверка браузера и доступа в видеочате",
          caption: "В настройках видеочата можно быстро понять, не мешает ли браузер и все ли разрешения открыты.",
        },
      ],
      whenToContactUs: [
        "Если браузер вообще не предлагает включить демонстрацию экрана.",
        "Если после обновления урока и повторной попытки показ экрана не включается.",
        "Если демонстрация нужна срочно для текущего урока, а время уже идёт.",
      ],
      primaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      secondaryCta: {
        label: "Проверить звук и видео",
        type: "external",
        value: "https://portal.itgen.io/vc-settings",
      },
      relatedPages: ["tech/connection-issue", "tech/audio-video-issue", "tech/lesson-or-platform-issue"],
      searchAliases: [
        "не работает демонстрация экрана",
        "не показывает экран",
        "не могу включить демонстрацию",
        "не шарится экран",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/system_requirements.md",
      ],
    },
    {
      slug: "tech/phone-or-tablet",
      category: "tech",
      title: "Почему не подходит телефон или планшет",
      shortTitle: "Телефон или планшет",
      question: "Почему для урока не подходят телефон или планшет",
      answer:
        "Для обычного урока нужен компьютер или ноутбук. На телефоне и планшете чаще всего ломаются важные вещи — вход в урок, работа с проектами, демонстрация экрана и нормальная навигация по кабинету.",
      whatHappens: [
        "На телефоне и планшете часть урока может просто не открываться как надо.",
        "Даже если войти получается, дальше обычно возникают проблемы с проектами, файлами и интерфейсом урока.",
        "Поэтому лучше сразу пересесть на компьютер или ноутбук, а не пытаться чинить всё на мобильном устройстве.",
      ],
      whatToDoNow: [
        "Откройте кабинет с компьютера или ноутбука.",
        "Подготовьте мышку, наушники и микрофон до урока.",
        "После входа сразу откройте проверку связи и убедитесь, что всё работает.",
      ],
      whenToContactUs: [
        "Если у вас сейчас нет доступа к компьютеру или ноутбуку.",
        "Если не понимаете, подойдёт ли ваше устройство для конкретного направления.",
      ],
      primaryCta: {
        label: "Как подготовиться к первому занятию",
        type: "page",
        value: "tech/first-lesson-prep",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["tech/lesson-requirements", "tech/first-lesson-prep", "tech/connection-issue"],
      searchAliases: [
        "планшет",
        "телефон",
        "можно ли с телефона",
        "можно ли с планшета",
        "не подходит устройство",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/system_requirements.md",
        "https://itgen.io/help-ru#for_lessons_you_need",
      ],
    },
    {
      slug: "tech/lesson-or-platform-issue",
      category: "tech",
      title: "Не работает урок или платформа",
      shortTitle: "Не работает урок",
      question: "Не работает урок или платформа",
      answer:
        "Большинство базовых проблем можно проверить за пару минут: интернет, браузер, звук, разрешения и перезагрузка страницы. Если это не помогло, не тратьте время дальше — лучше сразу написать нам.",
      whatHappens: [
        "Часть проблем решается базовой проверкой.",
        "Сложные кейсы нужно эскалировать быстро.",
      ],
      whatToDoNow: [
        "Проверьте интернет.",
        "Перезагрузите страницу.",
        "Откройте урок через Google Chrome.",
        "Проверьте звук, микрофон, камеру и разрешения браузера.",
      ],
      visualGuide: [
        {
          src: "assets/help-media/chat-settings-ru.png",
          alt: "Проверка звука и видео",
          caption: "Сначала проверьте настройки видеочата — особенно микрофон, динамики, камеру и разрешения браузера.",
        },
        {
          src: "assets/help-media/call-trainer-ru.png",
          alt: "Кнопка позвать тренера",
          caption: "Если урок уже открыт, но нужна помощь — нажмите «Позвать тренера».",
        },
        {
          src: "assets/help-media/chats-ru.png",
          alt: "Чат с тренером",
          caption: "Если проблема не уходит — откройте чат и напишите тренеру прямо во время занятия.",
        },
      ],
      whenToContactUs: [
        "Если не работает демонстрация экрана.",
        "Если урок не открывается.",
        "Если постоянные лаги и обрывы.",
        "Если проблема осталась после 2–3 шагов.",
      ],
      primaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      secondaryCta: {
        label: "Что нужно для занятия",
        type: "page",
        value: "tech/lesson-requirements",
      },
      relatedPages: ["tech/audio-video-issue", "tech/connection-issue", "tech/screen-share-issue"],
      searchAliases: [
        "не работает урок",
        "не заходит на урок",
        "не работает платформа",
        "нет звука",
        "не работает камера",
        "не работает экран",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/system_requirements.md",
      ],
    },
    {
      slug: "tech/first-lesson-prep",
      category: "tech",
      title: "Как подготовиться к первому занятию",
      shortTitle: "Первое занятие",
      question: "Как подготовиться к первому занятию",
      answer:
        "Чтобы первое занятие прошло спокойно, лучше заранее проверить и вход в кабинет ученика, и технику. Для урока нужен компьютер или ноутбук, наушники с микрофоном, нормальный браузер и рабочая связь.",
      focusBanner: {
        eyebrow: "Частая проблема",
        title: "Проверьте звук и видео перед уроком",
        copy: "Лучше сделать это заранее — тогда первое занятие не уйдёт в настройку микрофона, камеры и браузера.",
        primaryCta: {
          label: "Проверить звук и видео",
          type: "external",
          value: "https://portal.itgen.io/vc-settings",
        },
      },
      whatHappens: [
        "После записи на урок лучше сразу поставить понятные логин и пароль для кабинета ученика.",
        "Если проверить звук и видео заранее, урок не начнётся с технической суеты.",
        "Для занятий подходят компьютер или ноутбук с мышкой — телефон или планшет не подойдут.",
        "Для видеочата лучше открыть один из браузеров на базе Chromium.",
      ],
      whatToDoNow: [
        "Проверьте, что ребёнок может войти в кабинет ученика.",
        "Подготовьте компьютер или ноутбук, мышку, наушники и микрофон.",
        "Заранее откройте проверку связи и убедитесь, что звук и видео работают.",
      ],
      visualGuide: [
        {
          src: "assets/help-media/join-chat-from-schedule-ru.png",
          alt: "Подключение к занятию из расписания",
          caption: "Сначала откройте расписание и нажмите «Подключиться» у нужного занятия.",
        },
        {
          src: "assets/help-media/chat-settings-ru.png",
          alt: "Проверка звука и видео в кабинете",
          caption: "Перед первым уроком проверьте звук, динамики, камеру и браузер в окне проверки связи.",
        },
      ],
      whenToContactUs: [
        "Если ребёнок не может войти в кабинет ученика.",
        "Если проверка связи показывает проблему и вы не можете её убрать.",
        "Если сомневаетесь, подходит ли устройство для занятий.",
      ],
      primaryCta: {
        label: "Проверить связь",
        type: "external",
        value: "https://portal.itgen.io/vc-settings",
      },
      secondaryCta: {
        label: "Как войти в кабинет ученика",
        type: "page",
        value: "schedule/student-login",
      },
      relatedPages: ["tech/audio-video-issue", "tech/connection-issue", "tech/lesson-requirements"],
      searchAliases: [
        "первое занятие",
        "подготовка к первому занятию",
        "что нужно для первого урока",
        "проверка связи",
      ],
      sourceOfTruth: [
        "https://itgen.io/pervoe-zanyatie",
        "https://itgen.io/help-ru#for_lessons_you_need",
        "https://itgen.io/help-ru#connection_check",
      ],
    },
    {
      slug: "tech/lesson-requirements",
      category: "tech",
      title: "Что нужно для занятия",
      shortTitle: "Что нужно для урока",
      question: "Что нужно для занятия",
      answer:
        "Для обычного урока главное — стабильный интернет, рабочий микрофон и нормальное устройство. Почти всегда лучше заниматься с компьютера или ноутбука, а не с телефона.",
      whatHappens: [
        "Телефон или планшет для занятий не подойдут.",
        "Микрофон нужен обязательно.",
        "Камера желательна, потому что так тренеру проще вести урок.",
        "Для некоторых направлений могут понадобиться отдельные программы.",
      ],
      whatToDoNow: [
        "Проверьте устройство заранее.",
        "Проверьте микрофон, наушники и звук.",
        "До урока откройте кабинет и запустите проверку связи.",
      ],
      whenToContactUs: [
        "Если не понимаете, подходит ли устройство для курса.",
        "Если не устанавливается нужная программа.",
      ],
      primaryCta: {
        label: "Не работает урок или платформа",
        type: "page",
        value: "tech/lesson-or-platform-issue",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["tech/phone-or-tablet", "tech/first-lesson-prep", "tech/audio-video-issue"],
      searchAliases: [
        "что нужно для урока",
        "техника для занятий",
        "микрофон",
        "камера",
        "требования к компьютеру",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/system_requirements.md",
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/lessons_formats.md",
      ],
    },
    {
      slug: "formats/igf-vs-if",
      category: "formats",
      title: "Чем отличается ИГФ от ИФ",
      shortTitle: "ИГФ и ИФ",
      question: "Чем отличается ИГФ от ИФ",
      answer:
        "ИГФ — это формат, где тренер ведёт до 6 учеников одновременно, но каждый идёт по своей программе. ИФ — это один на один с преподавателем, где всё внимание тренера достаётся одному ребёнку.",
      whatHappens: [
        "ИГФ обычно экономичнее.",
        "ИФ даёт максимум персонального внимания.",
        "Правила отработки у форматов различаются.",
      ],
      whatToDoNow: [
        "Проверьте, какой формат сейчас у ребёнка.",
        "Если вопрос связан с пропуском — переходите к правилам расписания.",
      ],
      whenToContactUs: ["Если не понимаете, какой формат у ребёнка сейчас."],
      primaryCta: {
        label: "Открыть раздел Расписание",
        type: "category",
        value: "schedule",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["formats/lesson-duration", "schedule/late-cancel"],
      searchAliases: ["игф", "иф", "формат занятий", "чем отличаются форматы"],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/lessons_formats.md",
      ],
    },
    {
      slug: "formats/lesson-duration",
      category: "formats",
      title: "Почему урок может быть 30, 60 или 120 минут",
      shortTitle: "Длительность урока",
      question: "Почему урок может быть 30, 60 или 120 минут",
      answer:
        "Длительность зависит от формата, возраста ребёнка и направления. Для большинства занятий базовый формат — 60 минут, но есть получасовые и двухчасовые варианты.",
      whatHappens: [
        "30 минут — обычно для малышей и отдельных направлений в ИФ.",
        "60 минут — основной стандарт.",
        "120 минут — только для ИГФ, обычно для продвинутых и сложных тем.",
      ],
      whatToDoNow: [
        "Проверьте текущий формат занятий ребёнка.",
        "Если нужна помощь с выбором — напишите нам.",
      ],
      whenToContactUs: ["Если длительность занятия кажется неподходящей."],
      primaryCta: {
        label: "Чем отличается ИГФ от ИФ",
        type: "page",
        value: "formats/igf-vs-if",
      },
      secondaryCta: {
        label: "Написать нам",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["tech/lesson-requirements"],
      searchAliases: [
        "30 минут",
        "60 минут",
        "120 минут",
        "сколько длится урок",
        "длительность занятия",
      ],
      sourceOfTruth: [
        "adminAI/adminai/adminai/core/pipelines/rag/indexer/resources/general/lessons_formats.md",
      ],
    },
  ],
};
