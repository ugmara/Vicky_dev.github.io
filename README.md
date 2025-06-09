# ugmara.github.io
My personal portfolio site
<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Victor | Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <style>
    body { font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth; }
    .hero { padding: 80px 0; background: var(--bs-dark); color: var(--bs-light); text-align: center; }
    .section { padding: 60px 0; }
    .skills span, .services li { font-size: 1.2rem; margin: 10px; display: inline-block; }
    .project-card, .blog-post { border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
    footer { background: var(--bs-dark); color: #ccc; text-align: center; padding: 20px 0; }
    .nav-link { cursor: pointer; }
    .theme-toggle { cursor: pointer; }
  </style>
</head>
<body>

<!-- NAVIGATION -->
<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#">Victor</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>
        <li class="nav-item"><a class="nav-link" href="#certifications">Certifications</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
      </ul>
      <button class="btn btn-outline-dark theme-toggle">🌞</button>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <h1>Hi, I'm Victor 👋</h1>
  <p>A passionate full-stack developer</p>
  <a href="#contact" class="btn btn-primary mt-3">Hire Me</a>
</section>

<!-- ABOUT -->
<section class="section container" id="about">
  <h2>About Me</h2>
  <p>I’m a developer skilled in HTML, CSS, JavaScript, PHP, React, and Bootstrap. I love building clean, responsive websites and web apps that solve real-world problems.</p>
</section>

<!-- SKILLS -->
<section class="section bg-light" id="skills">
  <div class="container">
    <h2 class="text-center">Skills</h2>
    <div class="d-flex justify-content-center flex-wrap skills">
      <span>💻 HTML</span>
      <span>🎨 CSS</span>
      <span>⚙️ JavaScript</span>
      <span>🧠 PHP</span>
      <span>⚛️ React</span>
      <span>📦 Bootstrap</span>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section class="section container" id="projects">
  <h2 class="text-center">Projects</h2>
  <div class="row mt-4">
    <div class="col-md-6">
      <div class="project-card">
        <h4>Task Manager App</h4>
        <p>Responsive to-do list app using React and Bootstrap.</p>
        <a href="#">View Project</a>
      </div>
    </div>
    <div class="col-md-6">
      <div class="project-card">
        <h4>PHP Blog System</h4>
        <p>Dynamic blog built with PHP & MySQL, user auth included.</p>
        <a href="#">View Project</a>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="section bg-light" id="services">
  <div class="container">
    <h2 class="text-center">Services</h2>
    <ul class="text-center list-unstyled">
      <li>✅ Website Development (Business, Portfolio, Landing Pages)</li>
      <li>✅ Bug Fixing (HTML, CSS, JS, PHP, React)</li>
      <li>✅ Responsive Design & Optimization</li>
      <li>✅ Custom Web Apps (Login, Forms, Dashboards)</li>
    </ul>
  </div>
</section>

<!-- BLOG -->
<section class="section container" id="blog">
  <h2 class="text-center">Blog</h2>
  <div class="blog-post">
    <h4>How I Built My First Web App</h4>
    <p>A walkthrough of my journey building a to-do app with React + Bootstrap...</p>
    <a href="#">Read more</a>
  </div>
  <div class="blog-post">
    <h4>Tips for Learning Web Dev in 2025</h4>
    <p>Struggling to stay consistent? Here's what worked for me as a self-taught dev.</p>
    <a href="#">Read more</a>
  </div>
</section>

<!-- CERTIFICATIONS -->
<section class="section bg-light" id="certifications">
  <div class="container">
    <h2 class="text-center">Certifications & Awards</h2>
    <ul>
      <li>Responsive Web Design – freeCodeCamp</li>
      <li>PHP Developer Certificate – SoloLearn</li>
      <li>React Fundamentals – Coursera</li>
    </ul>
  </div>
</section>

<!-- CONTACT -->
<section class="section container" id="contact">
  <h2>Contact Me</h2>
  <p>Email: <a href="mailto:ugmara63@gmail.com">ugmara63@gmail.com</a></p>
  <p>GitHub: <a href="https://github.com/ugmara" target="_blank">github.com/ugmara</a></p>
</section>

<!-- FOOTER -->
<footer>
  <p>&copy; 2025 Victor. All rights reserved.</p>
</footer>

<!-- BOOTSTRAP + DARK MODE SCRIPT -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
  const toggleBtn = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  toggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-bs-theme', newTheme);
    toggleBtn.textContent = newTheme === 'light' ? '🌞' : '🌙';
  });
</script>
</body>
</html>
