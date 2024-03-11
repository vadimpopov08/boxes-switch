const links = document.querySelectorAll('a');
let menu = document.querySelector('.menu')
let tabs = document.querySelectorAll('.tab')

menu.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active')
        target.classList.add('active')

        tabs[i].classList.remove('active');

        if (links[i].classList.contains('active')) {
            tabs[i].classList.add('active');
        }
    }
})