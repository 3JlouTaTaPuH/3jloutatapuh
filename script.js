// Простая имитация отправки формы
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Спасибо! Ваша заявка отправлена.');
    this.reset();
});
