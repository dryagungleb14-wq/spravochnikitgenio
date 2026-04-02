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
        "Что быстро проверить самим перед уроком и в какой момент уже лучше сразу идти в поддержку.",
      icon: "🛠️",
      featuredPages: ["tech/lesson-or-platform-issue", "tech/lesson-requirements"],
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
      description: "Главная точка входа для занятий, домашних заданий и части самостоятельных действий.",
      actionLabel: "Открыть кабинет",
      href: "https://portal.itgen.io/",
      type: "external",
    },
    {
      title: "WhatsApp",
      description: "Подходит для быстрых обращений по текущим вопросам.",
      actionLabel: "Написать в WhatsApp",
      href: "https://wa.me/375291816012",
      type: "external",
    },
    {
      title: "Telegram",
      description: "Удобный резервный канал — можно обратиться через бота школы.",
      actionLabel: "Открыть Telegram",
      href: "https://t.me/itgenio_bot",
      type: "external",
    },
    {
      title: "Email",
      description: "Подходит для документов, подтверждений и длинных описаний ситуации.",
      actionLabel: "Написать на email",
      href: "mailto:itgenik@itgen.io",
      type: "external",
    },
    {
      title: "Телефон",
      description: "Если нужен звонок — для RU доступен отдельный номер школы.",
      actionLabel: "Позвонить",
      href: "tel:88007772059",
      type: "external",
    },
  ],
  quickSearches: [
    "как отменить урок",
    "сгорит ли занятие",
    "где домашка",
    "не открывается кабинет",
    "как оплатить",
    "как работает отработка",
    "самостоятельное управление расписанием",
    "как войти в кабинет родителя",
    "как войти в кабинет ученика",
    "как восстановить пароль",
    "как записаться на занятия",
    "как добавить еще одного ученика",
    "как подготовиться к первому занятию",
  ],
  pages: [
    {
      slug: "schedule/cancel-lesson",
      category: "schedule",
      title: "Как отменить урок",
      shortTitle: "Отмена урока",
      question: "Как отменить урок",
      answer:
        "Отменить урок можно через личный кабинет или через чат с администратором. Самое важное — сделать это заранее, потому что дальше уже вступают правила по сроку до урока.",
      whatHappens: [
        "Если до урока больше 8 часов — занятие не списывается.",
        "Если до урока меньше 8 часов — дальше уже действуют правила пропуска и отработки.",
      ],
      whatToDoNow: [
        "Откройте личный кабинет и найдите нужный урок.",
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
        "Вход в кабинет родителя идёт через портал ITGenio. Логин — ваша почта, пароль вы создаёте сами при активации кабинета.",
      whatHappens: [
        "После заявки на бесплатный урок вы можете создать кабинет для себя и ребёнка.",
        "Если регистрация шла через администратора, ссылку для входа могут прислать в мессенджер или на email.",
        "После заполнения данных ученика открывается личный кабинет родителя.",
      ],
      whatToDoNow: [
        "Откройте портал ITGenio.",
        "Введите свою почту как логин.",
        "Введите пароль, который создавали при активации.",
      ],
      whenToContactUs: [
        "Если не помните, проходили ли активацию.",
        "Если ссылка на активацию не пришла.",
        "Если не понимаете, в каком кабинете сейчас находитесь.",
      ],
      primaryCta: {
        label: "Открыть кабинет родителя",
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
        "Вход в кабинет ученика тоже идёт через портал ITGenio, но под отдельным логином и паролем ученика. Эти данные родитель задаёт в кабинете родителя и может передать ребёнку перед занятием.",
      whatHappens: [
        "После записи на урок лучше сразу поменять логин и пароль ученика на удобные и запоминающиеся.",
        "Из кабинета родителя можно добавить аккаунт ученика и открыть его настройки.",
        "С данными ученика ребёнок сможет самостоятельно войти в свой кабинет перед занятием.",
      ],
      whatToDoNow: [
        "Зайдите в кабинет родителя.",
        "Откройте профиль или настройки ученика и проверьте логин и пароль.",
        "Передайте ребёнку данные для входа и попросите зайти через портал до начала урока.",
      ],
      whenToContactUs: [
        "Если не получается найти настройки ученика.",
        "Если не уверены, какие логин и пароль сейчас установлены.",
        "Если ребёнок не может войти даже с актуальными данными.",
      ],
      primaryCta: {
        label: "Открыть страницу входа",
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
        "Пароль для обоих кабинетов задаётся самостоятельно, но восстанавливается по-разному. Для кабинета родителя есть кнопка «Забыли пароль», а пароль ученика меняется через кабинет родителя.",
      whatHappens: [
        "Для кабинета родителя новый пароль можно задать прямо на странице входа.",
        "Для кабинета ученика новый логин и пароль выставляются в настройках ученика внутри кабинета родителя.",
      ],
      whatToDoNow: [
        "Если забыли пароль родителя — откройте вход и нажмите «Забыли пароль».",
        "Если забыли пароль ученика — зайдите в кабинет родителя и откройте настройки ученика.",
        "Установите новый пароль и при необходимости обновите логин ученика.",
      ],
      whenToContactUs: [
        "Если не приходит восстановление.",
        "Если не получается войти в кабинет родителя и из-за этого нельзя поменять доступ ученику.",
      ],
      primaryCta: {
        label: "Открыть вход в портал",
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
        "Записаться на занятия можно через родительский кабинет. Для этого рядом с именем ученика нужно открыть «Запись или отмена» и выбрать постоянное расписание или разовый урок.",
      whatHappens: [
        "На странице записи вы выбираете день недели, время, тип занятия, направление, формат, длительность, дату старта и тренера.",
        "Постоянное расписание продлевается автоматически, пока вы его не отмените.",
        "Разовые занятия можно использовать как дополнение к постоянному расписанию.",
      ],
      whatToDoNow: [
        "Откройте родительский кабинет и нажмите «Запись или отмена» рядом с именем ученика.",
        "Выставите максимально удобные рамки по дням и времени.",
        "На следующем шаге выберите подходящий вариант или расширьте фильтр поиска.",
      ],
      whenToContactUs: [
        "Если подходящих вариантов нет.",
        "Если не уверены, какой формат или длительность выбрать.",
      ],
      primaryCta: {
        label: "Открыть кабинет родителя",
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
        "Нового ученика можно добавить прямо в родительском кабинете. После этого он появится в семье, и для него можно будет записать пробное занятие и настроить доступ в кабинет ученика.",
      whatHappens: [
        "На главной странице родительского кабинета есть кнопка «Добавить еще одного ученика».",
        "После заполнения данных новый ученик появится в списке семьи.",
        "Дальше для него нужно записать пробное занятие и установить логин и пароль кабинета ученика.",
      ],
      whatToDoNow: [
        "Откройте главную страницу родительского кабинета.",
        "Нажмите «Добавить еще одного ученика» и заполните данные.",
        "После добавления запишите ученика на пробное занятие и задайте ему логин и пароль.",
      ],
      whenToContactUs: [
        "Если кнопки добавления нет.",
        "Если ученик не появляется в списке после заполнения данных.",
      ],
      primaryCta: {
        label: "Открыть кабинет родителя",
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
        "Если отмена происходит менее чем за 8 часов до урока, занятие списывается с баланса. Дальше возможность отработки зависит от формата занятий.",
      whatHappens: [
        "ИГФ — можно отработать пропуск.",
        "ИФ — отработка доступна 1 раз в месяц.",
        "ГФ — правила зависят от конкретной активности.",
      ],
      whatToDoNow: [
        "Проверьте свой формат занятий.",
        "Перейдите к сценарию про отработку, если урок уже попадает под позднюю отмену.",
        "Если кейс нестандартный — сразу напишите администратору.",
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
        label: "Написать администратору",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["schedule/skip-and-continue", "formats/igf-vs-if"],
      searchAliases: [
        "меньше 8 часов",
        "поздняя отмена",
        "сгорит ли урок",
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
        "Если не нашли слот — напишите администратору и укажите удобные дни и интервалы.",
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
        label: "Написать администратору",
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
        "Перенос можно оформить через личный кабинет или через администратора. Правила по срокам такие же, как и для отмены: если до урока больше 8 часов, перенос проходит без списания.",
      whatHappens: [
        "Больше 8 часов — перенос бесплатный.",
        "Меньше 8 часов — урок списывается, дальше действуют правила отработки.",
      ],
      whatToDoNow: [
        "Посмотрите доступные варианты времени.",
        "Если удобного окна нет — напишите администратору и перечислите желаемые интервалы.",
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
        label: "Написать администратору",
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
        "Если свободного слота не видно, следующий шаг — написать администратору и указать желаемые дни и интервалы времени. Это быстрее, чем ждать случайного окна.",
      whatHappens: [
        "Часть направлений можно подобрать самостоятельно.",
        "Если слотов нет, подбор делает администратор.",
      ],
      whatToDoNow: [
        "Подготовьте удобные дни и временные интервалы.",
        "Отправьте их одним сообщением, чтобы не растягивать диалог.",
      ],
      whenToContactUs: ["Сразу, если в кабинете нет подходящего варианта."],
      primaryCta: {
        label: "Написать администратору",
        type: "contact",
        value: "contact",
      },
      secondaryCta: {
        label: "Вернуться к расписанию",
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
        "Проверять текущую информацию по занятиям и связанным действиям лучше через личный кабинет. Если вопрос касается документов, возвратов или самого процесса оплаты, этим занимается отдельная команда оплат.",
      whatHappens: [
        "Простые действия родитель делает через кабинет.",
        "Денежные и документальные вопросы уводятся в профильную команду.",
      ],
      whatToDoNow: [
        "Зайдите в личный кабинет.",
        "Если вопрос там не решается — переходите в профильный канал по оплате.",
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
        label: "Открыть личный кабинет",
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
        "Вопросами оплаты, возвратов и документов занимается отдел оплат. Если проблема связана именно с платежом или справками, лучше сразу писать туда, а не в общий чат.",
      whatHappens: [
        "Запрос попадает в профильную команду.",
        "Не нужно объяснять вопрос несколько раз разным людям.",
      ],
      whatToDoNow: [
        "Подготовьте краткое описание проблемы.",
        "Сразу укажите телефон или email, который использовали при регистрации.",
      ],
      whenToContactUs: [
        "Если вопрос касается возврата.",
        "Если нужны документы.",
        "Если платёж не проходит.",
      ],
      primaryCta: {
        label: "Открыть контакты",
        type: "contact",
        value: "contact",
      },
      secondaryCta: {
        label: "Вернуться к оплате",
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
        "Домашние задания, дополнительные материалы и комментарии по занятию доступны в личном кабинете ученика. Это главное место, где родитель может видеть, что происходит между уроками.",
      whatHappens: [
        "Домашка доступна в кабинете.",
        "Комментарий после урока оставляет тренер.",
        "Дополнительные материалы тоже лежат в кабинете.",
      ],
      whatToDoNow: [
        "Зайдите в кабинет ученика.",
        "Откройте последнее занятие или раздел с заданиями.",
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
        label: "Открыть личный кабинет",
        type: "external",
        value: "https://portal.itgen.io/",
      },
      relatedPages: ["progress/where-to-see-results"],
      searchAliases: [
        "домашка",
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
        "Сначала стоит пройти короткую базовую проверку: интернет, браузер, кеш и вход в кабинет. Если после 2–3 шагов проблема не ушла, уже нужна техподдержка.",
      whatHappens: [
        "Часть проблем решается без ожидания.",
        "Если не помогло — вопрос надо быстро передать в техподдержку.",
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
        label: "Написать в техподдержку",
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
        "В текущем родительском слое главный ориентир — комментарии после занятий, домашние задания, материалы и сохранённые проекты в профиле ученика. Именно по ним родитель может видеть движение ребёнка между уроками.",
      whatHappens: [
        "Результат не сводится к одному индикатору.",
        "Смотреть его лучше в нескольких понятных местах кабинета.",
      ],
      whatToDoNow: [
        "Откройте последние комментарии после занятий.",
        "Посмотрите домашние задания и материалы.",
        "Откройте проекты ученика в профиле.",
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
      slug: "tech/lesson-or-platform-issue",
      category: "tech",
      title: "Не работает урок или платформа",
      shortTitle: "Не работает урок",
      question: "Не работает урок или платформа",
      answer:
        "Большинство базовых проблем можно проверить за пару минут: интернет, браузер, звук, разрешения и перезагрузка страницы. Если это не помогло — не нужно тратить время дальше, лучше сразу писать в техподдержку.",
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
      whenToContactUs: [
        "Если не работает демонстрация экрана.",
        "Если урок не открывается.",
        "Если постоянные лаги и обрывы.",
        "Если проблема осталась после 2–3 шагов.",
      ],
      primaryCta: {
        label: "Написать в техподдержку",
        type: "contact",
        value: "contact",
      },
      secondaryCta: {
        label: "Что нужно для занятия",
        type: "page",
        value: "tech/lesson-requirements",
      },
      relatedPages: ["progress/access-issue", "tech/lesson-requirements"],
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
        "Перед первым занятием важно не только войти в кабинет ученика, но и заранее проверить технику. Для урока нужен компьютер или ноутбук, наушники с микрофоном, подходящий браузер и рабочая связь.",
      whatHappens: [
        "После записи на урок лучше сразу установить понятные логин и пароль для кабинета ученика.",
        "До урока стоит проверить звук и видео, чтобы не тратить на это время в начале занятия.",
        "Для занятий подходят компьютер или ноутбук с мышкой, а телефон или планшет не подойдут.",
        "Для видеочата лучше использовать браузер на основе Chromium.",
      ],
      whatToDoNow: [
        "Проверьте, что у ребёнка есть доступ в кабинет ученика.",
        "Подготовьте компьютер или ноутбук, мышку, наушники и микрофон.",
        "Заранее откройте страницу проверки связи и убедитесь, что всё работает.",
      ],
      whenToContactUs: [
        "Если не получается войти в кабинет ученика.",
        "Если проверка связи показывает проблему.",
        "Если не уверены, подходит ли устройство для занятий.",
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
      relatedPages: ["schedule/student-login", "tech/lesson-requirements", "tech/lesson-or-platform-issue"],
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
        "Для обычного урока обязательно нужен микрофон и стабильный интернет. Камера желательна, а для большинства направлений лучше заниматься с компьютера или ноутбука, а не с телефона.",
      whatHappens: [
        "Телефон для занятий не подходит.",
        "Микрофон обязателен.",
        "Камера желательна.",
        "Для части направлений нужны отдельные программы.",
      ],
      whatToDoNow: [
        "Проверьте устройство заранее.",
        "Проверьте микрофон и звук.",
        "Зайдите заранее и нажмите проверку связи в кабинете.",
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
        label: "Написать в техподдержку",
        type: "contact",
        value: "contact",
      },
      relatedPages: ["formats/lesson-duration"],
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
        label: "Перейти к расписанию",
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
        "120 минут — для продвинутых и сложных тем.",
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
