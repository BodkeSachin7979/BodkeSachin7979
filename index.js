// Enhanced Floating code animation
function createFloatingCode() {
  const container = document.getElementById("floatingCode");
  const codeLines = [
    "import pandas as pd",
    "df = pd.read_csv('data.csv')",
    "model.fit(X_train, y_train)",
    "def predict(model, data):",
    "from django.urls import path",
    "app = FastAPI()",
    "sns.heatmap(corr_matrix)",
    "plt.plot(x, y)",
    "class CustomerSegmentation:",
    "return jsonify(results)",
    "docker-compose up -d",
    "git push origin main",
    "📊 Data Analysis",
    "🗃️ Database Design",
    "🤖 Machine Learning",
    "🎯 Predictive Models",
    "🌐 Web Development",
    "⚡ FastAPI",
    "📈 Data Visualization",
    "📉 Trend Analysis",
    "👥 Customer Segmentation",
    "🔗 API Integration",
    "🐳 Docker",
    "🚀 Deployment",
    "💬 Natural Language Processing",
    "🎉 Model Evaluation",
    "🚀 Performance Optimization",
    "🌟 Feature Engineering",
    "🤝 Collaborative Filtering",
    "💡 Innovative Solutions",
    "🎯 Goal-Oriented Approach",
    "✨ Clean Code",
    "🔥 High Performance",
    "😊 User Experience",
    "✅ Testing & Validation",
    "🏆 Best Practices",
    "👏 Code Reviews",
    "🎊 Successful Deployment",
    "❤️ Passion for Data",
    "🦄 Unique Solutions",
    "🌈 Data Diversity",
    "⚡ Lightning Fast",
    "💫 Wow Factor",
    "🎨 Creative Visualizations",
  ];

  codeLines.forEach((line, index) => {
    const codeLine = document.createElement("div");
    codeLine.classList.add("code-line");
    codeLine.textContent = line;

    // Random position
    codeLine.style.left = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 15 + 10;
    codeLine.style.animationDuration = `${duration}s`;

    // Random animation delay
    const delay = Math.random() * 5;
    codeLine.style.animationDelay = `${delay}s`;

    // Random font size
    const fontSize = Math.random() * 6 + 12;
    codeLine.style.fontSize = `${fontSize}px`;

    // Random color variation
    const colors = ["#58a6ff", "#3fb950", "#bc8cff", "#ff7b72", "#f2cc60"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    codeLine.style.color = color;

    container.appendChild(codeLine);
  });
}

// Particle background
function createParticles() {
  const container = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size
    const size = Math.random() * 5 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `float-code ${duration}s infinite linear`;

    // Random color
    const colors = ["#58a6ff", "#3fb950", "#bc8cff", "#ff7b72", "#f2cc60"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;

    container.appendChild(particle);
  }
}

// Smooth scroll function
function smoothScrollTo(targetId) {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Button click handlers
function setupButtonHandlers() {
  const viewProjectsBtn = document.getElementById("viewProjectsBtn");
  const contactMeBtn = document.getElementById("contactMeBtn");

  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("View Projects button clicked");
      smoothScrollTo("#work");
    });
  }

  if (contactMeBtn) {
    contactMeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Contact Me button clicked");
      smoothScrollTo("#contact");
    });
  }

  // Also handle regular anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        smoothScrollTo(href);
      }
    });
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Project category filtering
function setupProjectFiltering() {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const projectCards = document.querySelectorAll(".project-card");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      // Show/hide projects based on category
      projectCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "block";
          setTimeout(() => {
            card.classList.add("visible");
          }, 100);
        } else {
          card.classList.remove("visible");
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("visible");

      // Animate skill bars
      if (element.classList.contains("skill-progress")) {
        const width = element.getAttribute("data-width");
        // Set a small timeout to ensure the animation triggers
        setTimeout(() => {
          element.style.width = `${width}%`;
        }, 100);
      }
    }
  });
}

// Toast notification
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

// Form submission with EmailJS integration
function setupForm() {
  const contactForm = document.getElementById("contactForm");

  // Initialize EmailJS with your Public Key
  emailjs.init("klC97NJVuog0q4UAD"); // Replace with your actual Public Key

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields.", true);
      return;
    }

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="loader"></div> Sending...';
    submitBtn.disabled = true;

    try {
      // Replace these with your actual EmailJS credentials
      const serviceID = "service_08mf0wl";
      const templateID = "template_qygw1bg"; // Replace with your Template ID
      const userID = "klC97NJVuog0q4UAD"; // Replace with your Public Key

      // Send email using EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "sachinbodke.dev@gmail.com",
        },
        userID
      );

      showToast("Message sent successfully! I'll get back to you soon.");
      contactForm.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast(
        "Failed to send message. Please try again or email me directly.",
        true
      );
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Typewriter effect for hero title
function typeWriterEffect() {
  const title = document.querySelector(".hero-title");
  const text = title.textContent;
  title.textContent = "";

  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 100);
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createFloatingCode();
  createParticles();
  setupButtonHandlers();
  setupMobileMenu();
  setupProjectFiltering();
  setupForm();

  // Initial check for animations
  handleScrollAnimations();

  // Event listeners
  window.addEventListener("scroll", () => {
    handleNavbarScroll();
    handleScrollAnimations();
  });

  // Trigger skill bar animations on page load
  setTimeout(() => {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = `${width}%`;
    });
  }, 500);

  // Start typewriter effect after a short delay
  setTimeout(typeWriterEffect, 1000);

  // Test button functionality
  console.log("Hero buttons initialized");
});

// Fallback for button functionality
window.addEventListener("load", function () {
  // Double-check button setup
  setTimeout(() => {
    const viewProjectsBtn = document.getElementById("viewProjectsBtn");
    const contactMeBtn = document.getElementById("contactMeBtn");

    if (viewProjectsBtn && contactMeBtn) {
      console.log("Buttons are properly set up");
    } else {
      console.error("Buttons not found, setting up fallback");
      setupButtonHandlers();
    }
  }, 100);
});
