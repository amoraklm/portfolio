/* =========================================================
   ALI PORTFOLIO — PREMIUM INTERACTION SYSTEM
   Version: 3.0 (Fixed & Complete)
   Vanilla JavaScript
   ========================================================= */

'use strict';

/* =========================================================
   1. PROJECT DATA
   ========================================================= */
const projects = [
  {
    id: 1,
    title: "Resa Saffon",
    category: "Packing",
    image: "images/project1.jpg",
    alt: "Resa Saffon packaging design"
  },
  {
    id: 2,
    title: "Event Poster",
    category: "Poster",
    image: "images/project2.jpg",
    alt: "Event poster design"
  },
  {
    id: 3,
    title: "Bonaft",
    category: "Logo",
    image: "images/project3.jpg",
    alt: "Bonaft logo design"
  },
  {
    id: 4,
    title: "Raising Awareness",
    category: "Poster",
    image: "images/project4.jpg",
    alt: "Raising awareness poster design"
  },
  {
    id: 5,
    title: "Foolad-e-Zharf",
    category: "Packing",
    image: "images/project5.jpg",
    alt: "Foolad-e-Zharf packaging design"
  },
  {
    id: 6,
    title: "Kermana",
    category: "Logo",
    image: "images/project6.jpg",
    alt: "Kermana logo design"
  },
  {
    id: 7,
    title: "Naagok",
    category: "Poster",
    image: "images/project7.jpg",
    alt: "Naagok poster design"
  },
  {
    id: 8,
    title: "Advieh-Khaneh",
    category: "Packing",
    image: "images/project8.jpg",
    alt: "Advieh-Khaneh packaging design"
  },
  {
    id: 9,
    title: "Daya Foundation",
    category: "Logo",
    image: "images/project9.jpg",
    alt: "Daya Foundation logo design"
  },
  {
    id: 10,
    title: "Luminous Shadows",
    category: "Book Cover",
    image: "images/project10.jpg",
    alt: "Luminous Shadows book cover"
  },
  {
    id: 11,
    title: "City Campaign",
    category: "Poster",
    image: "images/project11.jpg",
    alt: "City campaign poster design"
  },
  {
    id: 12,
    title: "Shahpasand",
    category: "Packing",
    image: "images/project12.jpg",
    alt: "Shahpasand packaging design"
  }
];


/* =========================================================
   2. DOM REFERENCES
   ========================================================= */
const grid = document.getElementById('projectGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');


/* =========================================================
   3. GLOBAL STATE
   ========================================================= */
let currentFilter = 'all';
let currentProjectIndex = -1;
let projectObserver = null;
let revealObserver = null;
let skillsObserver = null;
let isLightboxOpen = false;
let lastFocusedElement = null;


/* =========================================================
   4. PROJECT RENDERING
   ========================================================= */
function renderProjects(filter = 'all') {
  if (!grid) return;
  currentFilter = filter;
  grid.innerHTML = '';

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter(project => project.category === filter);

  if (!filteredProjects.length) {
    grid.innerHTML = `
      <div class="projects-empty">
        <div class="projects-empty-icon">○</div>
        <h3>No projects found</h3>
        <p>There are no projects in this category yet.</p>
      </div>
    `;
    return;
  }

  filteredProjects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.projectId = project.id;
    card.style.transitionDelay = `${Math.min(index * 0.08, 0.5)}s`;

    card.innerHTML = `
      <div
        class="card-inner"
        tabindex="0"
        role="button"
        aria-label="View ${escapeHTML(project.title)} project"
      >
        <div class="card-img-wrapper">
          <img
            src="${project.image}"
            alt="${escapeHTML(project.alt)}"
            class="card-img"
            loading="${index < 3 ? 'eager' : 'lazy'}"
            decoding="async"
          />
          <div class="card-overlay">
            <div class="card-overlay-icon" aria-hidden="true">+</div>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${escapeHTML(project.title)}</h3>
          <p class="card-cat">${escapeHTML(project.category)}</p>
        </div>
      </div>
    `;

    const inner = card.querySelector('.card-inner');
    inner.addEventListener('click', () => {
      const realIndex = projects.findIndex(item => item.id === project.id);
      openLightbox(project.image, realIndex);
    });

    inner.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const realIndex = projects.findIndex(item => item.id === project.id);
        openLightbox(project.image, realIndex);
      }
    });

    grid.appendChild(card);
  });

  observeProjectCards();
}


/* =========================================================
   5. HTML ESCAPE
   ========================================================= */
function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


/* =========================================================
   6. PROJECT REVEAL ANIMATION
   ========================================================= */
function observeProjectCards() {
  if (!grid) return;
  if (projectObserver) projectObserver.disconnect();

  projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        projectObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.project-card').forEach(card => projectObserver.observe(card));
}


/* =========================================================
   7. FILTER SYSTEM
   ========================================================= */
function initializeFilters() {
  filterBtns.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      filterBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      renderProjects(filter);
    });
  });

  // Set initial aria-pressed state
  const activeBtn = document.querySelector('.filter-btn.active');
  if (activeBtn) activeBtn.setAttribute('aria-pressed', 'true');
}


/* =========================================================
   8. LIGHTBOX
   ========================================================= */
function openLightbox(src, projectIndex = -1) {
  if (!lightbox || !lightboxImg) return;
  
  // Store last focused element
  lastFocusedElement = document.activeElement;
  
  currentProjectIndex = projectIndex;
  lightboxImg.src = src;
  lightboxImg.alt = projectIndex >= 0 && projects[projectIndex] ? projects[projectIndex].alt : 'Project preview';
  lightboxImg.style.opacity = '1';
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  document.body.style.overflow = 'hidden';
  isLightboxOpen = true;
  updateLightboxNavigation();
  
  // Focus on close button for accessibility
  const closeBtn = lightbox.querySelector('.lightbox-close');
  if (closeBtn) {
    setTimeout(() => closeBtn.focus(), 100);
  }
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  document.body.style.overflow = '';
  isLightboxOpen = false;
  currentProjectIndex = -1;
  
  // Restore focus
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    setTimeout(() => lastFocusedElement.focus(), 100);
  }
}

function showNextProject() {
  if (!projects.length) return;
  let nextIndex = currentProjectIndex + 1;
  if (nextIndex >= projects.length) nextIndex = 0;
  currentProjectIndex = nextIndex;
  updateLightboxImage();
}

function showPreviousProject() {
  if (!projects.length) return;
  let previousIndex = currentProjectIndex - 1;
  if (previousIndex < 0) previousIndex = projects.length - 1;
  currentProjectIndex = previousIndex;
  updateLightboxImage();
}

function updateLightboxImage() {
  if (currentProjectIndex < 0 || !projects[currentProjectIndex]) return;
  const project = projects[currentProjectIndex];
  if (!lightboxImg) return;

  lightboxImg.style.opacity = '0';
  setTimeout(() => {
    lightboxImg.src = project.image;
    lightboxImg.alt = project.alt;
    requestAnimationFrame(() => {
      lightboxImg.style.opacity = '1';
    });
  }, 120);

  updateLightboxNavigation();
}

function updateLightboxNavigation() {
  if (!lightbox) return;
  const prevButton = lightbox.querySelector('.lightbox-prev');
  const nextButton = lightbox.querySelector('.lightbox-next');
  const disabled = projects.length <= 1;
  if (prevButton) prevButton.disabled = disabled;
  if (nextButton) nextButton.disabled = disabled;
}


/* =========================================================
   9. LIGHTBOX CONTROLS
   ========================================================= */
function initializeLightbox() {
  if (!lightbox) return;

  const closeButton = lightbox.querySelector('.lightbox-close');
  const backdrop = lightbox.querySelector('.lightbox-backdrop');
  const prevButton = lightbox.querySelector('.lightbox-prev');
  const nextButton = lightbox.querySelector('.lightbox-next');

  if (closeButton) closeButton.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (prevButton) prevButton.addEventListener('click', showPreviousProject);
  if (nextButton) nextButton.addEventListener('click', showNextProject);

  document.addEventListener('keydown', event => {
    if (!isLightboxOpen) return;
    
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      showNextProject();
    } else if (event.key === 'ArrowLeft') {
      showPreviousProject();
    } else if (event.key === 'Tab') {
      // Simple focus trap
      const focusableElements = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });
}


/* =========================================================
   10. SCROLL PROGRESS
   ========================================================= */
function initializeScrollProgress() {
  let progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}


/* =========================================================
   11. HEADER SCROLL STATE
   ========================================================= */
function initializeHeader() {
  if (!header) return;
  const updateHeader = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}


/* =========================================================
   12. ACTIVE NAVIGATION
   ========================================================= */
function initializeActiveNavigation() {
  if (!sections.length || !navLinks.length) return;

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isActive = href === `#${id}`;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, {
    rootMargin: '-35% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(section => sectionObserver.observe(section));
}


/* =========================================================
   13. GENERIC REVEAL SYSTEM
   ========================================================= */
function initializeRevealAnimations() {
  const elements = document.querySelectorAll('.reveal, .glass-card, .section-title, .skills-grid');
  if (!elements.length) return;
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(element => {
    if (!element.classList.contains('project-card')) {
      revealObserver.observe(element);
    }
  });
}


/* =========================================================
   14. SKILLS ANIMATION
   ========================================================= */
function initializeSkills() {
  const skillsSection = document.querySelector('.skills-section');
  const skillBars = document.querySelectorAll('.skill-fill');
  if (!skillsSection || !skillBars.length) return;

  skillsObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    
    skillBars.forEach(bar => {
      const width = bar.dataset.width || '0%';
      requestAnimationFrame(() => {
        bar.style.width = width;
      });
    });
    
    skillsObserver.unobserve(skillsSection);
  }, {
    threshold: 0.3
  });

  skillsObserver.observe(skillsSection);
}


/* =========================================================
   15. DARK MODE
   ========================================================= */
function setTheme(mode) {
  const root = document.documentElement;
  if (mode === 'dark') {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    if (themeToggle) {
      themeToggle.innerHTML = '☀️';
      themeToggle.setAttribute('aria-label', 'Switch to light theme');
    }
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    if (themeToggle) {
      themeToggle.innerHTML = '🌙';
      themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    }
  }
}

function initializeTheme() {
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}


/* =========================================================
   16. CUSTOM CURSOR (simplified, one dot only)
   ========================================================= */
function initializeCustomCursor() {
  const supportsFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  if (!supportsFinePointer) return;

  let cursor = document.querySelector('.custom-cursor');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);
  }

  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;
  let animationFrame = null;

  const updateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    animationFrame = requestAnimationFrame(updateCursor);
  };

  document.addEventListener('mousemove', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.classList.add('visible');
  }, { passive: true });

  const interactiveSelector = 'a, button, input, textarea, select, [role="button"], .card-inner';
  
  document.addEventListener('mouseover', event => {
    if (event.target.closest(interactiveSelector)) {
      cursor.classList.add('hover');
    }
  });
  
  document.addEventListener('mouseout', event => {
    if (event.target.closest(interactiveSelector) && !event.target.contains(event.relatedTarget)) {
      cursor.classList.remove('hover');
    }
  });
  
  document.addEventListener('mousedown', () => cursor.classList.add('click'));
  document.addEventListener('mouseup', () => cursor.classList.remove('click'));
  document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));

  updateCursor();
}


/* =========================================================
   17. MAGNETIC BUTTON EFFECT
   ========================================================= */
function initializeMagneticButtons() {
  const supportsFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  if (!supportsFinePointer) return;

  const elements = document.querySelectorAll('.cta-btn, .theme-btn, .filter-btn');
  elements.forEach(element => {
    element.addEventListener('mousemove', event => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      const strength = element.classList.contains('filter-btn') ? 0.08 : 0.15;
      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    element.addEventListener('mouseleave', () => {
      element.style.transform = '';
    });
  });
}


/* =========================================================
   18. SMOOTH ANCHOR SCROLL
   ========================================================= */
function initializeSmoothScroll() {
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    const headerHeight = header ? header.offsetHeight : 0;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 15;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  });
}


/* =========================================================
   19. SCROLL TO TOP BUTTON
   ========================================================= */
function initializeScrollTop() {
  let button = document.querySelector('.scroll-top-btn');
  if (!button) {
    button = document.createElement('button');
    button.className = 'scroll-top-btn';
    button.type = 'button';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(button);
  }

  const updateButton = () => {
    button.classList.toggle('visible', window.scrollY > 600);
  };

  window.addEventListener('scroll', updateButton, { passive: true });
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  updateButton();
}


/* =========================================================
   20. CONTACT FORM
   ========================================================= */
function initializeContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (formFeedback) {
      formFeedback.textContent = 'Sending...';
      formFeedback.removeAttribute('data-status');
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : '';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error('Form submission failed');

      if (formFeedback) {
        formFeedback.textContent = 'Message sent successfully.';
        formFeedback.dataset.status = 'success';
      }
      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      if (formFeedback) {
        formFeedback.textContent = 'Something went wrong. Please try again.';
        formFeedback.dataset.status = 'error';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
}


/* =========================================================
   21. IMAGE ERROR HANDLING
   ========================================================= */
function initializeImageFallbacks() {
  document.addEventListener('error', event => {
    const image = event.target;
    if (image && image.tagName === 'IMG') {
      image.classList.add('image-error');
    }
  }, true);
}


/* =========================================================
   22. PAGE LOAD ANIMATION
   ========================================================= */
function initializePageLoad() {
  document.body.classList.add('page-loading');
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      document.body.classList.remove('page-loading');
      document.body.classList.add('page-loaded');
    });
  });
}


/* =========================================================
   23. PARALLAX EFFECT
   ========================================================= */
function initializeParallax() {
  const shapes = document.querySelectorAll('.hero-bg-shapes .shape');
  if (!shapes.length) return;
  const supportsFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  if (!supportsFinePointer) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      shapes.forEach((shape, index) => {
        const speed = 0.03 + index * 0.015;
        shape.style.translate = `0 ${scrollY * speed}px`;
      });
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}


/* =========================================================
   24. CARD TILT EFFECT
   ========================================================= */
function initializeCardTilt() {
  const supportsFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  if (!supportsFinePointer) return;

  document.addEventListener('mousemove', event => {
    const card = event.target.closest('.card-inner');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  }, { passive: true });

  document.addEventListener('mouseout', event => {
    const card = event.target.closest('.card-inner');
    if (!card) return;
    if (event.relatedTarget && card.contains(event.relatedTarget)) return;
    card.style.transform = '';
  });
}


/* =========================================================
   25. KEYBOARD ACCESSIBILITY
   ========================================================= */
function initializeAccessibility() {
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      document.body.classList.add('keyboard-user');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-user');
  });
}


/* =========================================================
   26. DOCUMENT VISIBILITY
   ========================================================= */
function initializeVisibilityHandling() {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.body.classList.add('page-hidden');
    } else {
      document.body.classList.remove('page-hidden');
    }
  });
}


/* =========================================================
   27. RESIZE HANDLER
   ========================================================= */
function initializeResizeHandler() {
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Recalculate any layout-dependent features if needed
      if (isLightboxOpen) {
        updateLightboxNavigation();
      }
    }, 250);
  }, { passive: true });
}


/* =========================================================
   28. INITIALIZATION
   ========================================================= */
function initializePortfolio() {
  renderProjects('all');
  initializeFilters();
  initializeLightbox();
  initializeHeader();
  initializeActiveNavigation();
  initializeRevealAnimations();
  initializeSkills();
  initializeTheme();
  initializeCustomCursor();
  initializeMagneticButtons();
  initializeSmoothScroll();
  initializeScrollProgress();
  initializeScrollTop();
  initializeContactForm();
  initializeImageFallbacks();
  initializePageLoad();
  initializeParallax();
  initializeCardTilt();
  initializeAccessibility();
  initializeVisibilityHandling();
  initializeResizeHandler();
}


/* =========================================================
   29. START APPLICATION
   ========================================================= */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
  initializePortfolio();
}
