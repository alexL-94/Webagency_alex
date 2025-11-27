document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.div1, .div2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
    });

    divs.forEach(div => observer.observe(div))
});


document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.office1, .office2, .work-with1, .work-with2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});