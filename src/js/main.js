const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz-jPgM5b_hE-BhxeDGQ5whtPXseyPhvDTg0aOgLiQTNAkjjpTYBdAKfGhKEFglvRF3/exec';

const projects = [
  {
    id: 'cricket-league',
    number: '01',
    title: 'Cricket League Management',
    category: 'Database',
    year: '2025',
    summary: 'A normalized data system for teams, players, fixtures, and match statistics.',
    detail: 'Designed a relational model with clear entity relationships, optimized queries, professional documentation, and testing results.',
    tech: ['MySQL', 'Database Design', 'SQL', '3NF'],
    image:'./assets/project-taskmanager.jpg',
    featured: true,
  },
  {
    id: 'oasis-tree',
    number: '02',
    title: 'Oasis Tree Marketplace',
    category: 'Web',
    year: '2025',
    summary: 'A premium B2B lead-data marketplace shaped to create credibility from the first scroll.',
    detail: 'Built a responsive dark green and gold experience with direct WhatsApp, phone, LinkedIn, and EmailJS contact pathways.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'EmailJS'],
    image: './assets/project-ecommerce.jpg',
    featured: true,
  },
  {
    id: 'student-lms',
    number: '03',
    title: 'Student Learning System',
    category: 'Desktop App',
    year: '2024',
    summary: 'A focused desktop application for student data, enrolments, and academic records.',
    detail: 'Applied object-oriented programming to organize student information and course enrollment flows in a clear desktop interface.',
    tech: ['Java', 'JavaFX', 'OOP'],
    image: './assets/project-portfolio.jpg',
  },
  {
    id: 'inventory-management',
    number: '04',
    title: 'Inventory Management',
    category: 'Desktop App',
    year: '2024',
    summary: 'A logic-led system for tracking products, sales records, and inventory operations.',
    detail: 'Used file handling and practical data structures to create persistent, easy-to-follow inventory workflows.',
    tech: ['C++', 'File Handling', 'Data Structures'],
    image: './assets/project-blog.jpg',
  },
];

const skills = [
  { title: 'Web Interfaces', summary: 'Responsive, accessible interfaces that feel considered on every screen.', value: 88, tags: ['HTML5', 'CSS3', 'JavaScript'], color: 'blue', symbol: '⌘' },
  { title: 'App Development', summary: 'Structured desktop and app experiences with clean object-oriented foundations.', value: 80, tags: ['Java', 'JavaFX', 'OOP'], color: 'green', symbol: '◒' },
  { title: 'Database Systems', summary: 'Reliable schemas and thoughtful data flows built for real operations.', value: 84, tags: ['MySQL', 'PostgreSQL', '3NF'], color: 'yellow', symbol: '▦' },
  { title: 'Problem Solving', summary: 'Practical systems shaped with strong logic, clarity, and documentation.', value: 82, tags: ['C++', 'SQL', 'SDLC'], color: 'red', symbol: '</>' },
  { title: 'Product Structure', summary: 'From initial architecture to polished delivery, every detail has a purpose.', value: 78, tags: ['Git', 'VS Code', 'IntelliJ'], color: 'blue', symbol: '◫' },
  { title: 'Digital Visibility', summary: 'Fundamentals that help product pages become easier to find and trust.', value: 74, tags: ['SEO', 'Core Web Vitals', 'Analytics'], color: 'green', symbol: '◉' },
];

const certificates = [
  { title: 'Web Development', issuer: 'EWX Institute', description: 'Modern web foundations, responsive interfaces, and practical project delivery.', image: './assets/cert-webdev.jpg', accent: 'blue' },
  { title: 'App Development', issuer: 'NAVTTC', description: 'Application development concepts with an emphasis on structured software thinking.', image: './assets/MobileapplicationCertificate.jpeg', accent: 'green' },
  { title: 'Generative AI Application Developer ', issuer: 'Professional Learning', description: 'Exploring the capabilities of generative AI in application development.', image: './assets/Ai-development-course.png', accent: 'yellow' },
   { title: 'Sql', issuer: 'Professional Learning', description: 'Classical and modern database design principles.', image: './assets/SQl-course-Coursera.png', accent: 'red' },
   { title: 'AI for Writing and Communicating', issuer: 'Professional Learning', description: 'Creating compelling content with the help of AI.', image: './assets/Ai-for-Writting-Google-course.png', accent: 'red' },
   { title: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', description: 'Mastering foundational cloud concepts, core services, security, and architecture.', image: './assets/aws_certificate.png', accent: 'orange' }

];

function initDownloadCV() {
  const cvLink = document.getElementById('download-cv');
  if (!cvLink) return;

  cvLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default behavior
    const href = cvLink.getAttribute('href');
    if (href) {
      const link = document.createElement('a');
      link.href = href;
      link.download = ' Raja_Salman_CV.pdf'; // Change filename if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
}
function setTheme() {
  const savedTheme = localStorage.getItem('raja-theme') || 'dark';
  document.documentElement.dataset.theme = savedTheme;
  document.body.classList.toggle('is-light', savedTheme === 'light');

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = nextTheme;
      document.body.classList.toggle('is-light', nextTheme === 'light');
      localStorage.setItem('raja-theme', nextTheme);
    });
  });
}

function setupNavigation() {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.classList.toggle('is-active', link.dataset.nav === currentPage);
  });

  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('mobile-nav--open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      mobileNav.classList.remove('mobile-nav--open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }
}

function setupPageTransition() {
  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = link.getAttribute('href');
      if (!target || event.metaKey || event.ctrlKey || event.shiftKey || link.target === '_blank') return;
      event.preventDefault();
      document.body.classList.add('is-leaving');
      window.setTimeout(() => { window.location.href = target; }, 260);
    });
  });
}

function setupReveals() {
  const revealElements = [...document.querySelectorAll('.reveal')];
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length || !('IntersectionObserver' in window)) return;
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.count || 0);
      const start = performance.now();
      const duration = 900;
      const update = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        counter.textContent = String(Math.ceil(progress * target)).padStart(2, '0');
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      counterObserver.unobserve(counter);
    });
  }, { threshold: 0.6 });
  counters.forEach((counter) => counterObserver.observe(counter));
}

function projectCard(project, index) {
  const tags = project.tech.map((technology) => `<span>${technology}</span>`).join('');
  return `
    <article class="project-card ${project.featured ? 'project-card--featured' : ''} reveal" style="transition-delay:${index * 50}ms">
      <div class="project-card__media">
        <img src="${project.image}" alt="${project.title} project preview" loading="lazy" />
        <div class="project-card__veil"></div><span class="project-card__number">${project.number}</span><span class="project-card__year">${project.year}</span>
      </div>
      <div class="project-card__body">
        <div class="project-card__title-row"><div><p class="project-card__category">${project.category}</p><h3>${project.title}</h3></div><a href="https://github.com/raja-salman-hq" target="_blank" rel="noreferrer" aria-label="View ${project.title} on GitHub">gh</a></div>
        <p>${project.summary}</p><div class="tech-list">${tags}</div>
        <details><summary>Project context <span>↗</span></summary><p>${project.detail}</p></details>
      </div>
    </article>`;
}

function renderProjects() {
  const filtersContainer = document.querySelector('[data-project-filters]');
  const grid = document.querySelector('[data-project-grid]');
  if (!filtersContainer || !grid) return;
  const filters = ['All', 'Web', 'Database', 'Desktop App'];
  let activeFilter = 'All';

  const draw = () => {
    filtersContainer.innerHTML = filters.map((filter) => `<button type="button" class="${filter === activeFilter ? 'is-active' : ''}" data-filter="${filter}">${filter}</button>`).join('');
    const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);
    grid.innerHTML = visibleProjects.map(projectCard).join('');
    grid.querySelectorAll('.reveal').forEach((card) => requestAnimationFrame(() => card.classList.add('is-visible')));
  };

  filtersContainer.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    activeFilter = button.dataset.filter;
    draw();
  });
  draw();
}

function renderFeaturedProjects() {
  const container = document.querySelector('[data-featured-projects]');
  if (!container) return;
  container.innerHTML = projects.slice(0, 2).map((project) => `
    <a class="featured-work-card reveal" href="./projects.html">
      <span class="featured-work-card__number">${project.number}</span>
      <div><p>${project.category} · ${project.year}</p><h3>${project.title}</h3></div>
      <p class="featured-work-card__summary">${project.summary}</p><span class="featured-work-card__arrow">↗</span>
    </a>`).join('');
}

function renderSkills() {
  const grid = document.querySelector('[data-skill-grid]');
  if (!grid) return;
  grid.innerHTML = skills.map((skill, index) => `
    <article class="skill-card skill-card--${skill.color} reveal" style="transition-delay:${(index % 3) * 70}ms">
      <div class="skill-card__top"><i>${skill.symbol}</i><span>${skill.value}%</span></div>
      <h3>${skill.title}</h3><p>${skill.summary}</p><div class="skill-bar"><span style="width:${skill.value}%"></span></div>
      <div class="tech-list">${skill.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
    </article>`).join('');
}

function renderCertificates() {
  const certificateGrid = document.querySelector('[data-certificate-grid]');
  if (certificateGrid) {
    certificateGrid.innerHTML = certificates.map((certificate, index) => `
      <article class="certificate-card certificate-card--${certificate.accent} reveal" style="transition-delay:${(index % 2) * 80}ms">
        <div class="certificate-card__image"><img src="${certificate.image}" alt="${certificate.title} certificate" loading="lazy" /></div>
        <div class="certificate-card__copy"><p>${certificate.issuer}</p><h3>${certificate.title}</h3><span>${certificate.description}</span><i>↗</i></div>
      </article>`).join('');
  }

  const credentials = document.querySelector('[data-credential-list]');
  if (credentials) {
    credentials.innerHTML = certificates.slice(0, 3).map((certificate, index) => `<div class="credential-row reveal"><span>0${index + 1}</span><h3>${certificate.title}</h3><p>${certificate.issuer}</p><i>↗</i></div>`).join('');
  }
}

function initOrbitCanvas(canvas) {
  const context = canvas.getContext('2d');
  if (!context) return;
  const variant = canvas.dataset.orbit || 'hero';
  const themes = {
    hero: { main: '#4285f4', second: '#34a853', labels: ['WEB', 'JAVA', 'SQL', 'UI'] },
    about: { main: '#34a853', second: '#fbbc05', labels: ['BUILD', 'LEARN', 'SOLVE', 'SHIP'] },
    contact: { main: '#ea4335', second: '#4285f4', labels: ['HELLO', 'IDEAS', 'CONNECT', 'CREATE'] },
  };
  const theme = themes[variant] || themes.hero;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let pointer = { x: 0, y: 0 };
  let frame = 0;
  const stars = Array.from({ length: 56 }, (_, index) => ({ angle: (Math.PI * 2 * index) / 56, radius: 1.35 + Math.random() * 1.45, speed: .001 + Math.random() * .0012, size: 1 + Math.random() * 1.8 }));

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = bounds.width;
    height = bounds.height;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (time) => {
    const centerX = width / 2 + pointer.x * 18;
    const centerY = height / 2 + pointer.y * 14;
    const size = Math.min(width, height);
    const coreRadius = size * .19;
    context.clearRect(0, 0, width, height);

    const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, size * .52);
    glow.addColorStop(0, `${theme.main}52`);
    glow.addColorStop(.45, `${theme.second}1c`);
    glow.addColorStop(1, 'transparent');
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    [1.45, 1.93, 2.42].forEach((multiplier, index) => {
      context.beginPath();
      context.ellipse(centerX, centerY, coreRadius * multiplier, coreRadius * multiplier * (.52 + index * .08), .32 + index * .28, 0, Math.PI * 2);
      context.strokeStyle = index === 1 ? `${theme.second}72` : `${theme.main}52`;
      context.lineWidth = index === 1 ? 1.4 : 1;
      context.stroke();
    });

    const gradient = context.createRadialGradient(centerX - coreRadius * .28, centerY - coreRadius * .32, coreRadius * .12, centerX, centerY, coreRadius * 1.2);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(.08, theme.second);
    gradient.addColorStop(.5, theme.main);
    gradient.addColorStop(1, '#12141b');
    context.beginPath();
    context.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = `${theme.second}d0`;
    context.lineWidth = 1;
    context.stroke();

    stars.forEach((star, index) => {
      const angle = star.angle + time * star.speed * (index % 2 ? 1 : -1);
      const orbitX = Math.cos(angle) * coreRadius * star.radius;
      const orbitY = Math.sin(angle) * coreRadius * star.radius * .62;
      const x = centerX + orbitX;
      const y = centerY + orbitY;
      context.beginPath();
      context.arc(x, y, star.size, 0, Math.PI * 2);
      context.fillStyle = index % 3 === 0 ? theme.second : theme.main;
      context.fill();
      if (index % 14 === 0) {
        const label = theme.labels[(index / 14) % theme.labels.length];
        context.fillStyle = 'rgba(255,255,255,.92)';
        context.font = '500 9px "DM Mono", monospace';
        context.fillText(label, x + 7, y - 7);
      }
    });

    context.globalAlpha = .28;
    context.strokeStyle = theme.second;
    context.beginPath();
    for (let index = 0; index <= 26; index += 1) {
      const angle = (Math.PI * 2 * index) / 26 + time * .0004;
      const radius = coreRadius * (1 + Math.sin(angle * 3 + time * .001) * .13);
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      if (index === 0) context.moveTo(x, y); else context.lineTo(x, y);
    }
    context.closePath();
    context.stroke();
    context.globalAlpha = 1;

    if (!reducedMotion) frame = requestAnimationFrame(draw);
  };

  canvas.addEventListener('pointermove', (event) => {
    const bounds = canvas.getBoundingClientRect();
    pointer = { x: (event.clientX - bounds.left) / bounds.width - .5, y: (event.clientY - bounds.top) / bounds.height - .5 };
  });
  canvas.addEventListener('pointerleave', () => { pointer = { x: 0, y: 0 }; });
  window.addEventListener('resize', resize, { passive: true });
  resize();
  draw(0);
  if (reducedMotion && frame) cancelAnimationFrame(frame);
}

function setupContactForm() {
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  if (!form || !status) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.submittedAt = new Date().toISOString();

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
      const subject = encodeURIComponent(String(payload.subject));
      const body = encodeURIComponent(`Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`);
      window.location.href = `mailto:rajasalman.dev@gmail.com?subject=${subject}&body=${body}`;
      status.className = 'form-status form-status--success';
      status.textContent = 'Opening your email app. Add the Apps Script URL for direct form delivery.';
      return;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending... <span>◌</span>';
    status.textContent = '';
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      status.className = 'form-status form-status--success';
      status.textContent = 'Message received. Raja will get back to you soon.';
    } catch (error) {
      status.className = 'form-status form-status--error';
      status.textContent = 'The form could not send right now. Please use WhatsApp or email instead.';
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send message <span>↗</span>';
    }
  });
}

function init() {
  setTheme();
  setupNavigation();
  setupPageTransition();
  renderFeaturedProjects();
  renderProjects();
  renderSkills();
  renderCertificates();
  setupReveals();
  animateCounters();
  initDownloadCV();
  document.querySelectorAll('.orbit-canvas').forEach(initOrbitCanvas);
  setupContactForm();
  document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
  window.requestAnimationFrame(() => document.body.classList.add('is-ready'));
}

document.addEventListener('DOMContentLoaded', init);
