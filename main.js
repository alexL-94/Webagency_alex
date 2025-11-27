/*  Första scroll animation på index.html för div1 och div2 */

document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.div1, .div2');


    /*  Skapar en intersectionObserver som lyssnar på när elementet blir synligt i webbläsaren */
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

    /*  triggar så fort elementet blir synligt lite */
    divs.forEach(div => observer.observe(div))
});

/*  Andra scroll för about.html gäller office & work */
document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.office1, .office2, .work-with1, .work-with2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });

        /*  triggar när 10% syns av elementet */
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});