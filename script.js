// ===== DATA (همانند فایل JSON – برای افزودن پروژه جدید فقط یک آبجکت اضافه کنید) =====
const projects = [
  {
    id: 1,
    title: "Luxe Brand Identity",
    category: "Branding",
    image: "images/project1.jpg",
    alt: "برندینگ لوکس با پالت طلایی و سرمه‌ای"
  },
  {
    id: 2,
    title: "Organic Honey Packaging",
    category: "Packaging",
    image: "images/project2.jpg",
    alt: "طراحی بسته‌بندی عسل ارگانیک"
  },
  {
    id: 3,
    title: "Minimal Portfolio Interface",
    category: "Web Design",
    image: "images/project3.jpg",
    alt: "طراحی رابط کاربری مینیمال برای پورتفولیو"
  },
  {
    id: 4,
    title: "Fashion Editorial",
    category: "Branding",
    image: "images/project4.jpg",
    alt: "کمپین برندینگ مد"
  }
];

// ===== DOM Elements =====
const grid = document.getElementById('projectGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightboxBtn = document.querySelector('.lightbox-close');
const darkToggle = document.getElementById('darkModeToggle');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

// ===== Render Projects =====
function renderProjects(filter = 'all') {
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.category = project.category;
    card.innerHTML = `
      <div class="card-inner" tabindex="0" role="button" aria-label="View ${project.title}">
        <div class="card-image-wrapper">
          <img src="${project.image}" alt="${project.alt}" loading="lazy" />
        </div>
        <div class="card-text">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-category">${project.category}</p>
        </div>
      </div>
    `;
    // Lightbox trigger
    const inner = card.querySelector('.card-inner');
    inner.addEventListener('click', () => openLightbox(project.image));
    inner.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') openLightbox(project.image);
    });
    grid.appendChild(card);
  });

  // Re-trigger scroll reveal for new cards
  observeCards();
}

// ===== Scroll Reveal (Intersection Observer) =====
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
  }, { threshold: 0.2, rootMargin: "0px 0px -30px 0px" });

  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
}

// ===== Lightbox =====
function openLightbox(imgSrc) {
  lightboxImage.src = imgSrc;
  lightboxImage.alt = "Project preview";
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
closeLightboxBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
    closeLightbox();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

// ===== Filter =====
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filterValue = btn.dataset.filter;
    renderProjects(filterValue);
  });
});

// ===== Dark Mode =====
function setDarkMode(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    darkToggle.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    darkToggle.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
  }
}
darkToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setDarkMode(isDark ? 'light' : 'dark');
});
// Initial
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setDarkMode('dark');
} else {
  setDarkMode('light');
}

// ===== Contact Form (Formspree) =====
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  formFeedback.textContent = 'Sending...';
  formFeedback.style.color = 'var(--text)';
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      formFeedback.textContent = 'Thank you! Message sent.';
      formFeedback.style.color = 'green';
      form.reset();
    } else {
      throw new Error('Formspree error');
    }
  } catch (err) {
    formFeedback.textContent = 'Oops! Something went wrong.';
    formFeedback.style.color = 'red';
  }
});

// ===== Initial Render =====
renderProjects('all');
