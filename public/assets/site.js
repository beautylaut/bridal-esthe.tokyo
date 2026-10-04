const toggle = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  });
  navigation.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') === location.pathname.replace(/\/$/, '') || (location.pathname === '/' && link.getAttribute('href') === '/')) link.setAttribute('aria-current', 'page');
  });
}
