// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contact-form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
//             alert('Ваше сообщение успешно отправлено!');
//             contactForm.reset();
//         });
//     }

//     const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
//     const nav = document.querySelector('nav');
//     if (mobileMenuToggle && nav) {
//         mobileMenuToggle.addEventListener('click', function() {
//             nav.classList.toggle('show');
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Здесь вы бы отправили данные на сервер
        // Для демонстрации, мы просто покажем сообщение об успехе
        formStatus.textContent = 'Спасибо! Ваше сообщение отправлено.';
        formStatus.style.color = 'green';

        // Очистка формы
        form.reset();

        // Скрыть сообщение через 5 секунд
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    });
});