document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("prevent-transition");

  const quoteWrapper = document.querySelector("#quote-wrapper");
  const quoteContainer = document.querySelector("#quote-container");
  const quoteAuthorContainer = document.querySelector("#quote-author");
  const quoteInterval = setInterval(() => renderQuote(), 12000);
  const RANDOMS = "1,4,2,5,3,4,6,2,1,6,4,3,2,5,".repeat(100);
  const IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


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
