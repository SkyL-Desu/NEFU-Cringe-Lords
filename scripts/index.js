document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("prevent-transition");

  const quoteWrapper = document.querySelector("#quote-wrapper");
  const quoteContainer = document.querySelector("#quote-container");
  const quoteAuthorContainer = document.querySelector("#quote-author");
  const quoteInterval = setInterval(() => renderQuote(), 12000);
  const QUOTES = [
    "Не тот Керри кто крипов добивал, а тот кто трон не просрал.",
    "Не тот волк кто люканом называется, а тот кто из леса не выбирается.",
    "100 раз засейви — забудут, 1 раз застиль — запомнят.",
    "Рапиру трудно найти, легко потерять, и невозможно разбить.",
    "Не так важно, как тебя ударили, — важно, как ты байбекнулся и ответил.",
    "Смерть, байбек и опять смерть — это не физика, это — характер.",
    "1 000 друзей у тебя в стиме, 100 — в Доте, 5 — когда нужно пати, 2 — с тобой в замесе, и ты один в таверне.",
    "Муть всех, репорть немногих, руинь сам, брат...",
    "Брат — не тот, кто помогает ммр поднимать, а тот, кто помогает лп отмывать.",
    "У денди на шторме 5 нулей: 1 в инвентаре и 4 в команде.",
    "Сколько ама не корми — он все равно в лес смотрит.",
    "Время — не вода, вода — это морф, а время — между циферками, обозначающими счет.",
    "Лучший Бейн не тот, кто сон давал, а кто в амулете врага поджидал.",
    "Работа не волк, волк — Ликан, a работа это ворк.",
    "Мне не важно прав он или нет, он мой брат, и я за него байбекнусь.",
    "Ликан слабее Мк и Марса, но на арене не выступает.",
    "Лучше перо под ребро, чем тиммейт MieRo.",
    "Время не лечит, мека лечит, а время — оно между циферками, обозначающими счет.",
    "Не гоняйте на Баре пацаны, вы матерям еще нужны!",
    "Каждый может добить крипа, но не каждый может добить за крипа.",
    "Сердце Пуджа не способно любить, цель его жизни — хукнуть и убить.",
    "Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда купил варлоку Мидас и выиграл.",
    "Если фармить, то лес, если вардить, то мид, если гангать, то с огнём в сердце.",
    "Если драться, то только до рампаги. Если фармить, то только до 6 слотов. Если умирать, то только под фонтаном. Если саппортить, то только с мидасом. Если Пудж, то только с момом.",
    "Упрекай Дахака наедине, хвали — публично.",
    "Не важно что ты обосрался на линии, важно как ты при этом насрал в войсчат своей команды.",
    "Лучше с пацанами под фонтан, чем с чертями в трон.",
    "Счастье — это когда в Доте нет больных, в таверне нет родных, среди тиммейтов нет гнилых."
  ];
  const AUTHORS = ["artur_matix", "CornFY", "o1dst3ve", "Rochersha", "fothr1s", "pchel0w0d", "tirexdxd", "boy_abstract", "blooming_c0rpse", "andreyhed", "chpopik", "gundrik", "yana_ciist", "seconduniQuee", "katyaxoxo", "katyaxexe", "katyaxixi"];
  const RANDOMS = "1,4,2,5,3,4,6,2,1,6,4,3,2,5,".repeat(100);
  const IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  let currentQuote = QUOTES[0];
  let currentAuthor = AUTHORS[0];

  if (IS_SAFARI) {
    document.body.innerHTML = "I'm too lazy, use Chrome to access this shitty website :)"
    return;
  }

  renderQuote(false);

  function renderQuote(shouldSetTimeout = true) {
    let quote = getRandomItem(QUOTES, currentQuote);
    let author = getRandomItem(AUTHORS, currentAuthor);
    let quoteHtml = quote
      .split(" ")
      .map((q, i) => `<span class="word word-${+RANDOMS.split(",")[i]} animate-${+RANDOMS.split(",")[i]}">${q}</span>`)
      .join(" ");

    quoteContainer.classList.remove("animate");

    if (!shouldSetTimeout) {
      quoteAuthorContainer.textContent = author;
      quoteWrapper.innerHTML = quoteHtml;
      currentQuote = quote;
      currentAuthor = author;
      quoteContainer.classList.add("animate");

      return;
    }

    setTimeout(() => {
      quoteAuthorContainer.textContent = author;
      quoteWrapper.innerHTML = quoteHtml;
      currentQuote = quote;
      currentAuthor = author;
      
      setTimeout(() => {
        quoteContainer.classList.add("animate");
      }, 100);
    }, 3000);
  }

  function getRandomItem(array, currentItem) {
    const min = 0;
    const max = array.length - 1;
    const getRandomIndex = getRandomNumber.bind(this, min, max);

    let randomIndex = getRandomIndex();

    while (randomIndex === array.indexOf(currentItem)) {
      randomIndex = getRandomIndex();
    }

    return array[randomIndex];
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});