const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

const track = document.getElementById('projectTrack');
const step = () => Math.min(398, track.clientWidth * .82);
document.querySelector('.next').addEventListener('click', () => track.scrollBy({left: step(), behavior:'smooth'}));
document.querySelector('.prev').addEventListener('click', () => track.scrollBy({left: -step(), behavior:'smooth'}));

document.getElementById('year').textContent = new Date().getFullYear();
