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

document.body.insertAdjacentHTML(
    'afterbegin',
    `
      <label class="color-scheme">
        Theme:
        <select>
          <option value="light dark">Automatic</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    `
);
  
let select = document.querySelector('.color-scheme select');

select.addEventListener('input', function (event) {
    document.documentElement.style.setProperty('color-scheme', event.target.value);
    localStorage.colorScheme = event.target.value;
});

if ('colorScheme' in localStorage) {
    document.documentElement.style.setProperty('color-scheme', localStorage.colorScheme);
    select.value = localStorage.colorScheme;
}

let form = document.querySelector('form');

form?.addEventListener('submit', function (event) {
    event.preventDefault();

    let data = new FormData(form);
    let url = form.action + '?';

    for (let [name, value] of data) {
        url += `${name}=${encodeURIComponent(value)}&`;
    }

    location.href = url;
});