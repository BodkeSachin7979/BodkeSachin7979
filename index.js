// Custom Cursor
function initCustomCursor() {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  if (!cursorDot || !cursorOutline) return;

  // Check if device supports hover (not touch device)
  if (!window.matchMedia("(hover: hover)").matches) {
    cursorDot.style.display = "none";
    cursorOutline.style.display = "none";
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.1;
    outlineY += (mouseY - outlineY) * 0.1;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  }

  animateOutline();

  const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .filter-btn, .btn, .social-link, .stat-card, .feature-card, .contact-card, .cert-item",
  );

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursorDot.classList.add("hover");
      cursorOutline.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
      cursorDot.classList.remove("hover");
      cursorOutline.classList.remove("hover");
    });
  });

  document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0";
    cursorOutline.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = "1";
    cursorOutline.style.opacity = "1";
  });
}

// Scroll to Top
function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Floating Code
function createFloatingCode() {
  const container = document.getElementById("floatingCode");
  if (!container) return;

  const codeLines = [
    "📊 Data Analysis",
    "🗃️ Database",
    "🤖 ML Model",
    "🌐 Full Stack",
    "⚡ FastAPI",
    "📈 Visualization",
    "👥 Segmentation",
    "🔗 API",
    "🐳 Docker",
    "🚀 Deploy",
  ];

  container.innerHTML = "";

  codeLines.forEach((line) => {
    const codeLine = document.createElement("div");
    codeLine.classList.add("code-line");
    codeLine.textContent = line;
    codeLine.style.left = `${Math.random() * 100}%`;
    codeLine.style.animationDuration = `${Math.random() * 15 + 10}s`;
    codeLine.style.animationDelay = `${Math.random() * 5}s`;
    codeLine.style.fontSize = `${Math.random() * 6 + 12}px`;

    const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];
    codeLine.style.color = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(codeLine);
  });
}

// Particles
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  container.innerHTML = "";
  const particleCount = window.innerWidth < 768 ? 25 : 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 5 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

    const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(particle);
  }
}

// Smooth Scroll
function smoothScroll(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.offsetHeight;
    const targetPosition = target.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }
}

// Navbar Scroll
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Project Filtering
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      projects.forEach((project) => {
        if (filter === "all" || project.dataset.category === filter) {
          project.style.display = "block";
          setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "translateY(0)";
          }, 50);
        } else {
          project.style.opacity = "0";
          project.style.transform = "translateY(20px)";
          setTimeout(() => {
            project.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          if (entry.target.classList.contains("skill-progress")) {
            const width = entry.target.dataset.width;
            entry.target.style.width = `${width}%`;
          }
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  document.querySelectorAll(".fade-in, .skill-progress").forEach((el) => {
    observer.observe(el);
  });
}

// Typing Effect
function initTypingEffect() {
  const dynamicText = document.getElementById("dynamicText");
  if (!dynamicText) return;

  const roles = [
    "Data Analyst",
    "ML Enthusiast",
    "Problem Solver",
    "Full Stack Developer",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      dynamicText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      dynamicText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();
}

// Animated Counters
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.target);
          let count = 0;
          const increment = target / 50;

          const updateCounter = () => {
            if (count < target) {
              count += increment;
              counter.textContent = Math.ceil(count);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent =
                target + (counter.textContent.includes("+") ? "+" : "");
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

// Form Submission
function initForm() {
  const form = document.getElementById("contactForm");

  emailjs.init("klC97NJVuog0q4UAD");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill all required fields", true);
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="loader"></div> Sending...';
    submitBtn.disabled = true;

    try {
      await emailjs.send(
        "service_08mf0wl",
        "template_qygw1bg",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "sachinbodke.dev@gmail.com",
        },
        "klC97NJVuog0q4UAD",
      );

      showToast("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Email error:", error);
      showToast("Failed to send message. Please try again.", true);
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Toast Notification
function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast";

  if (isError) {
    toast.classList.add("error");
  }

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Parallax Effect
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const floatingCode = document.getElementById("floatingCode");
    const particles = document.getElementById("particles");

    if (floatingCode && particles) {
      floatingCode.style.transform = `translateY(${scrolled * 0.5}px)`;
      particles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
}

// 3D Tilt Effect
function initTiltEffect() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    });
  });
}

// Load More Projects
function initLoadMore() {
  const loadMoreBtn = document.querySelector(".load-more-btn");

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("More projects coming soon!");
    });
  }
}

// Handle Window Resize
function handleResize() {
  let resizeTimer;

  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
      createParticles(); // Recreate particles for new screen size
    }, 400);
  });
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initScrollToTop();
  createFloatingCode();
  createParticles();
  initMobileMenu();
  initProjectFiltering();
  initScrollAnimations();
  initTypingEffect();
  initCounters();
  initForm();
  initParallax();
  initTiltEffect();
  initLoadMore();
  handleResize();

  window.addEventListener("scroll", handleNavbarScroll);

  // Handle anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });
});
