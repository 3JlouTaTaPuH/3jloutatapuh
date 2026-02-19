const texts = document.querySelectorAll('.scroll-text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 }); // срабатывает когда элемент на 30% в видимой зоне

texts.forEach(text => observer.observe(text));
