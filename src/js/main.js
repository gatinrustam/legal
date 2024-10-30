const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('click', () => {
        services
            .forEach(item => {
            const description = item.querySelector('.service__description');
            description.classList.remove('service__description--active');
        });

        const description = service.querySelector('.service__description');
        description.classList.toggle('service__description--active');
    });
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 24,

    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });