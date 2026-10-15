(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const topbar = document.querySelector(".topbar");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  const onScroll = () => {
    if (!topbar) return;
    topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  const profilePhoto = document.getElementById("profile-photo");
  const fallback = document.querySelector(".portrait-fallback");

  const showFallback = () => {
    if (profilePhoto) profilePhoto.classList.add("is-hidden");
    if (fallback) fallback.classList.add("is-visible");
  };

  if (profilePhoto) {
    if (profilePhoto.complete) {
      if (!profilePhoto.naturalWidth) showFallback();
    } else {
      profilePhoto.addEventListener("error", showFallback, { once: true });
      profilePhoto.addEventListener(
        "load",
        () => {
          if (!profilePhoto.naturalWidth) showFallback();
        },
        { once: true }
      );
    }
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
})();
