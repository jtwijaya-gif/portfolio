console.log('IT’S ALIVE!');

function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let pages = [
    { url: '', title: 'Home' },
    { url: 'projects/', title: 'Projects' },
    { url: 'contact/', title: 'Contact' },
    { url: 'resume/', title: 'Resume' },
    { url: 'https://github.com/jtwijaya-gif', title: 'GitHub' }
];

const BASE_PATH = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? '/'
    : '/portfolio/';

let nav = document.createElement('nav');

document.body.prepend(nav);

for (let p of pages) {
    let a = document.createElement('a');
    a.href = p.url.startsWith('http') ? p.url : BASE_PATH + p.url;
    a.textContent = p.title;

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add('current');
    }

    if (a.host !== location.host) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
    }

    nav.append(a);
}