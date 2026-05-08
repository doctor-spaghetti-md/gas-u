
const navToggle = document.querySelector('.nav-toggle');
const navlinks = document.querySelector('.navlinks');
if (navToggle && navlinks) {
  navToggle.addEventListener('click', () => navlinks.classList.toggle('open'));
}
document.querySelectorAll('.dropdown button').forEach(btn => {
  btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
});
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.14});
reveals.forEach(r => observer.observe(r));
const form = document.getElementById('interestForm');
const msg = document.getElementById('formMessage');
if (form && msg) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = new FormData(form).get('name') || 'Applicant';
    msg.textContent = `${name}, your request has been received by the Office of Apostolic Admissions.`;
    form.reset();
  });
}
