"use strict";

/* =========================================================
   ALI PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [
  {
    id: 1,
    title: "Resa Saffon",
    category: "Packaging",
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
    category: "Branding",
    image: "images/project3.jpg",
    alt: "Bonaft branding and logo design"
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
    category: "Packaging",
    image: "images/project5.jpg",
    alt: "Foolad-e-Zharf packaging design"
  },
  {
    id: 6,
    title: "Kermana",
    category: "Branding",
    image: "images/project6.jpg",
    alt: "Kermana logo and branding design"
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
    category: "Packaging",
    image: "images/project8.jpg",
    alt: "Advieh-Khaneh packaging design"
  },
  {
    id: 9,
    title: "Daya Foundation",
    category: "Branding",
    image: "images/project9.jpg",
    alt: "Daya Foundation branding and logo design"
  },
  {
    id: 10,
    title: "Luminous Shadows",
    category: "Digital",
    image: "images/project10.jpg",
    alt: "Luminous Shadows digital cover design"
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
    category: "Packaging",
    image: "images/project12.jpg",
    alt: "Shahpasand packaging design"
  }
];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const grid = document.getElementById("projectGrid");
const filterBtns = document.querySelectorAll(".filter-btn");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxBackdrop = document.querySelector(".lightbox-backdrop");

const themeToggle = document.getElementById("themeToggle");

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

const header = document.getElementById("header");

const navLinks = document.querySelectorAll(".nav-link");

const skillsSection = document.querySelector(".skills-section");
const skillBars = document.querySelectorAll(".skill-fill");


/* =========================================================
   PROJECT RENDERING
   ========================================================= */

function renderProjects(filter = "all") {

  if (!grid) return;

  grid.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(project => project.category === filter);

  if (filteredProjects.length === 0) {

    grid.innerHTML = `
      <div class="project-empty">
        <p>No projects found in this category.</p>
      </div>
    `;

    return;
  }


  filteredProjects.forEach((project, index) => {

    const card = document.createElement("article");

    card.className = "project-card";

    card.style.transitionDelay = `${index * 0.08}s`;

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
            loading="lazy"
          />

          <div class="card-overlay">
            <div
              class="card-overlay-icon"
              aria-hidden="true"
            >
              +
            </div>
          </div>

        </div>

        <div class="card-body">

          <h3 class="card-title">
            ${escapeHTML(project.title)}
          </h3>

          <p class="card-cat">
            ${escapeHTML(project.category)}
          </p>

        </div>

      </div>
    `;


    const cardInner = card.querySelector(".card-inner");


    cardInner.addEventListener("click", () => {
      openLightbox(
        project.image,
        project.title
      );
    });


    cardInner.addEventListener("keydown", event => {

      if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        openLightbox(
          project.image,
          project.title
        );

      }

    });


    grid.appendChild(card);

  });


  observeProjectCards();

}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   PROJECT SCROLL REVEAL
   ========================================================= */

let projectObserver = null;


function observeProjectCards() {

  if (projectObserver) {
    projectObserver.disconnect();
  }


  projectObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

          projectObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );


  document
    .querySelectorAll(".project-card")
    .forEach(card => {

      projectObserver.observe(card);

    });

}


/* =========================================================
   PROJECT FILTERS
   ========================================================= */

filterBtns.forEach(button => {

  button.addEventListener("click", () => {

    filterBtns.forEach(btn => {
      btn.classList.remove("active");
    });


    button.classList.add("active");


    const filter = button.dataset.filter || "all";


    renderProjects(filter);

  });

});


/* =========================================================
   LIGHTBOX
   ========================================================= */

let lastFocusedElement = null;


function openLightbox(src, title = "Project preview") {

  if (!lightbox || !lightboxImg) return;


  lastFocusedElement = document.activeElement;


  lightboxImg.src = src;
  lightboxImg.alt = `${title} preview`;


  lightbox.classList.add("active");


  document.body.style.overflow = "hidden";


  if (lightboxClose) {
    lightboxClose.focus();
  }

}


function closeLightbox() {

  if (!lightbox) return;


  lightbox.classList.remove("active");


  document.body.style.overflow = "";


  setTimeout(() => {

    if (lightboxImg) {
      lightboxImg.src = "";
      lightboxImg.alt = "";
    }

  }, 300);


  if (
    lastFocusedElement &&
    typeof lastFocusedElement.focus === "function"
  ) {

    lastFocusedElement.focus();

  }

}


if (lightboxClose) {
  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );
}


if (lightboxBackdrop) {
  lightboxBackdrop.addEventListener(
    "click",
    closeLightbox
  );
}


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeLightbox();
  }

});


/* =========================================================
   DARK MODE
   ========================================================= */

const THEME_KEY = "ali-portfolio-theme";


function setTheme(mode) {

  const isDark = mode === "dark";


  document.documentElement.classList.toggle(
    "dark",
    isDark
  );


  localStorage.setItem(
    THEME_KEY,
    isDark ? "dark" : "light"
  );


  if (themeToggle) {

    themeToggle.textContent =
      isDark ? "☀️" : "🌙";


    themeToggle.setAttribute(
      "aria-label",
      isDark
        ? "Switch to light theme"
        : "Switch to dark theme"
    );

  }

}


function getInitialTheme() {

  const savedTheme =
    localStorage.getItem(THEME_KEY);


  if (
    savedTheme === "dark" ||
    savedTheme === "light"
  ) {

    return savedTheme;

  }


  if (
    window.matchMedia &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
  ) {

    return "dark";

  }


  return "light";

}


if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    () => {

      const isDark =
        document.documentElement.classList.contains(
          "dark"
        );


      setTheme(
        isDark ? "light" : "dark"
      );

    }
  );

}


setTheme(getInitialTheme());


/* =========================================================
   SKILL BAR ANIMATION
   ========================================================= */

function animateSkillBars() {

  skillBars.forEach(bar => {

    const targetWidth =
      bar.dataset.width ||
      bar.style.width ||
      "0%";


    bar.style.width = "0%";


    requestAnimationFrame(() => {

      requestAnimationFrame(() => {

        bar.style.width = targetWidth;

      });

    });

  });

}


if (skillsSection && skillBars.length) {

  const skillsObserver =
    new IntersectionObserver(
      entries => {

        if (entries[0].isIntersecting) {

          animateSkillBars();

          skillsObserver.unobserve(
            skillsSection
          );

        }

      },
      {
        threshold: 0.25
      }
    );


  skillsObserver.observe(
    skillsSection
  );

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

function updateHeader() {

  if (!header) return;


  if (window.scrollY > 30) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);


updateHeader();


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll(
  "main section[id]"
);


function updateActiveNav() {

  if (!sections.length || !navLinks.length) {
    return;
  }


  const scrollPosition =
    window.scrollY + 140;


  let currentSection = "";


  sections.forEach(section => {

    const top = section.offsetTop;
    const height = section.offsetHeight;


    if (
      scrollPosition >= top &&
      scrollPosition < top + height
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navLinks.forEach(link => {

    const href =
      link.getAttribute("href");


    link.classList.toggle(
      "active",
      href === `#${currentSection}`
    );

  });

}


window.addEventListener(
  "scroll",
  updateActiveNav,
  { passive: true }
);


updateActiveNav();


/* =========================================================
   GENERAL SCROLL REVEAL
   ========================================================= */

function setupGeneralReveal() {

  const elements = document.querySelectorAll(
    ".about-card, .skills-grid, .contact-card, .section-title, .section-subtitle"
  );


  if (!elements.length) return;


  elements.forEach(element => {

    element.classList.add("reveal");

  });


  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "revealed"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );


  elements.forEach(element => {

    revealObserver.observe(element);

  });

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      if (!formFeedback) return;


      const form = event.currentTarget;


      const submitButton =
        form.querySelector(
          'button[type="submit"]'
        );


      const formAction =
        form.getAttribute("action");


      if (
        !formAction ||
        formAction.includes("{YOUR_FORM_ID}")
      ) {

        formFeedback.textContent =
          "Contact form is not configured yet.";


        formFeedback.style.color =
          "var(--gold-dark)";


        return;

      }


      const formData =
        new FormData(form);


      formFeedback.textContent =
        "Sending...";


      formFeedback.style.color =
        "var(--text-secondary)";


      if (submitButton) {

        submitButton.disabled = true;

        submitButton.setAttribute(
          "aria-busy",
          "true"
        );

      }


      try {

        const response =
          await fetch(
            formAction,
            {
              method: "POST",
              body: formData,
              headers: {
                Accept:
                  "application/json"
              }
            }
          );


        if (!response.ok) {

          throw new Error(
            "Request failed"
          );

        }


        formFeedback.textContent =
          "Message sent successfully.";


        formFeedback.style.color =
          "green";


        form.reset();


      } catch (error) {

        console.error(
          "Contact form error:",
          error
        );


        formFeedback.textContent =
          "Something went wrong. Please try again.";


        formFeedback.style.color =
          "red";


      } finally {

        if (submitButton) {

          submitButton.disabled = false;

          submitButton.removeAttribute(
            "aria-busy"
          );

        }

      }

    }
  );

}


/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

document.addEventListener(
  "error",
  event => {

    const element =
      event.target;


    if (
      element &&
      element.tagName === "IMG"
    ) {

      element.classList.add(
        "image-error"
      );

    }

  },
  true
);


/* =========================================================
   SYSTEM THEME CHANGE
   ========================================================= */

if (
  window.matchMedia
) {

  const mediaQuery =
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    );


  mediaQuery.addEventListener(
    "change",
    event => {

      const savedTheme =
        localStorage.getItem(
          THEME_KEY
        );


      /*
       * Only follow the operating-system
       * theme if the user has not manually
       * selected a theme.
       */

      if (!savedTheme) {

        setTheme(
          event.matches
            ? "dark"
            : "light"
        );

      }

    }
  );

}


/* =========================================================
   SMOOTH ANCHOR SCROLL
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const link =
      event.target.closest(
        'a[href^="#"]'
      );


    if (!link) return;


    const targetId =
      link.getAttribute("href");


    if (
      !targetId ||
      targetId === "#"
    ) {

      return;

    }


    const target =
      document.querySelector(
        targetId
      );


    if (!target) return;


    event.preventDefault();


    const headerHeight =
      header
        ? header.offsetHeight
        : 0;


    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      20;


    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initPortfolio() {

  renderProjects("all");

  setupGeneralReveal();

  updateHeader();

  updateActiveNav();

}


if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initPortfolio
  );

} else {

  initPortfolio();

}
