// ===== DATA =====
const projects = [
  { id:1, title:"Resa Saffon", category:"Packing", image:"images/project1.jpg", alt:"Packing project" },
];

// ===== DOM =====
const grid = document.getElementById('projectGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

// Render Projects
function renderProjects(filter = 'all') {
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.transitionDelay = `${i * 0.1}s`; // progressive reveal
    card.innerHTML = `
      <div class="card-inner" tabindex="0" role="button" aria-label="View ${p.title}">
        <img src="${p.image}" alt="${p.alt}" class="card-img" loading="lazy" />
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-cat">${p.category}</p>
        </div>
      </div>
    `;
    card.querySelector('.card-inner').addEventListener('click', () => openLightbox(p.image));
    grid.appendChild(card);
  });
  observeCards();
}

// Scroll Reveal
let observer;
function observeCards() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });
  document.querySelectorAll('.project-card').forEach(c => observer.observe(c));
}

// Lightbox
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key==='Escape') closeLightbox(); });

// Filters
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// Skills animation on scroll
const skillBars = document.querySelectorAll('.skill-fill');
const skillsSection = document.querySelector('.skills-section');
const skillsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    skillBars.forEach(bar => { bar.style.width = bar.style.width || bar.dataset.width || bar.style.width; });
    skillsObserver.unobserve(skillsSection);
  }
}, { threshold: 0.3 });
skillsObserver.observe(skillsSection);

// Dark Mode
function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    themeToggle.innerHTML = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    themeToggle.innerHTML = '🌙';
  }
}
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});
const savedTheme = localStorage.theme;
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setTheme('dark');
} else {
  setTheme('light');
}

// Contact Form
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  formFeedback.textContent = 'Sending...';
  formFeedback.style.color = 'var(--text)';
  try {
    const res = await fetch(form.action, { method:'POST', body:data, headers:{'Accept':'application/json'} });
    if (res.ok) {
      formFeedback.textContent = 'Message sent successfully!';
      formFeedback.style.color = 'green';
      form.reset();
    } else throw new Error();
  } catch {
    formFeedback.textContent = 'Error. Please try again.';
    formFeedback.style.color = 'red';
  }
});

// Initial render
renderProjects('all');
