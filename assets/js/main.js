// 부자들의 경제철학 — Main JS

document.addEventListener('DOMContentLoaded', () => {

  // Scroll fade-in animation
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  }

  // Rotating quotes
  const quotes = [
    { text: "부자들은 돈을 위해 일하지 않는다. <span>돈이 그들을 위해 일하게</span> 만든다.", author: "— 로버트 기요사키" },
    { text: "당신의 수입은 당신이 가장 많이 시간을 보내는 <span>5명의 평균</span>이다.", author: "— 짐 론" },
    { text: "부는 <span>마인드셋의 결과</span>이며, 가난도 마찬가지다.", author: "— T. 하브 에커" },
    { text: "기회는 준비된 자에게만 <span>보인다</span>.", author: "— 워런 버핏" },
    { text: "복리는 세계 <span>8번째 불가사의</span>이다. 이해하는 자는 벌고, 이해 못하는 자는 낸다.", author: "— 알버트 아인슈타인" },
  ];

  const quoteTextEl = document.querySelector('.quote-text');
  const quoteAuthorEl = document.querySelector('.quote-author');
  if (quoteTextEl && quoteAuthorEl) {
    let currentQuote = 0;
    setInterval(() => {
      currentQuote = (currentQuote + 1) % quotes.length;
      quoteTextEl.style.opacity = '0';
      quoteAuthorEl.style.opacity = '0';
      setTimeout(() => {
        quoteTextEl.innerHTML = quotes[currentQuote].text;
        quoteAuthorEl.textContent = quotes[currentQuote].author;
        quoteTextEl.style.opacity = '1';
        quoteAuthorEl.style.opacity = '1';
      }, 500);
    }, 5000);
    quoteTextEl.style.transition = 'opacity 0.5s ease';
    quoteAuthorEl.style.transition = 'opacity 0.5s ease';
  }

  // Active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.style.color = 'var(--gold-light)';
    }
  });
});
